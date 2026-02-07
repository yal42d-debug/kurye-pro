//noinspection SpellCheckingInspection
// cspell:disable

import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    GoogleAuthProvider,
    signInWithCredential,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult
} from "firebase/auth";
import { getDatabase, ref, set, get, update } from "firebase/database";
import { Capacitor } from "@capacitor/core";
import { Browser } from "@capacitor/browser";
import { App as CapApp } from "@capacitor/app";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";

const firebaseConfig = {
    apiKey: "AIzaSyBfN1-OQUQgQTu358UO6aZ-BDIbjWZq1Mc",
    authDomain: "kuryeprov44.firebaseapp.com",
    databaseURL: "https://kuryeprov44-default-rtdb.firebaseio.com",
    projectId: "kuryeprov44",
    storageBucket: "kuryeprov44.firebasestorage.app",
    messagingSenderId: "177653241936",
    appId: "1:177653241936:web:4130a534c4bf7cb05fd955",
    measurementId: "G-313RD4XLZW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const LOGIN_REDIRECT_FLAG = 'google_login_redirect_started';

function cacheUserLocally(user) {
    if (!user) return;
    localStorage.setItem('firebase_uid', user.uid);
    localStorage.setItem('user_name', user.displayName || 'Kullanıcı');
    localStorage.setItem('user_email', user.email || '');
}

// Deep Link'i Dinle
if (Capacitor.isNativePlatform()) {
    CapApp.addListener('appUrlOpen', async (event) => {
        const url = event.url;
        if (url.startsWith('kuryepro://auth')) {
            const params = new URL(url).searchParams;
            const uid = params.get('uid');
            const name = params.get('name');
            const email = params.get('email');

            if (uid) {
                // Oturumu kaydet
                localStorage.setItem('firebase_uid', uid);
                localStorage.setItem('user_name', name || 'Kullanıcı');
                localStorage.setItem('user_email', email || '');

                try { await Browser.close(); } catch (_) { /* no-op */ }

                // Sayfayı yenile veya overlay'i kapat
                window.location.reload();
            }
        }
    });
}

// Native Sign-In Implementation
async function signInWithGoogleNative() {
    const result = await FirebaseAuthentication.signInWithGoogle();
    if (!result || !result.user) throw new Error("Native Google sign-in başarısız.");

    let user = result.user;
    const idToken = result.credential?.idToken;
    const accessToken = result.credential?.accessToken;

    if (idToken || accessToken) {
        try {
            const credential = GoogleAuthProvider.credential(idToken || undefined, accessToken || undefined);
            const authResult = await signInWithCredential(auth, credential);
            if (authResult?.user) user = authResult.user;
        } catch (err) {
            console.warn("JS SDK oturumu açılamadı, native kullanıcı ile devam ediliyor.", err);
        }
    }

    await saveUserToDB(user);
    cacheUserLocally(user);
    return { success: true, user };
}

export async function loginWithGoogle(options = {}) {
    try {
        if (Capacitor.isNativePlatform()) {
            return await signInWithGoogleNative();
        } else {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('mode') === 'login') {
                const { GoogleAuthProvider, signInWithRedirect } = await import("firebase/auth");
                const provider = new GoogleAuthProvider();
                await signInWithRedirect(auth, provider);
                return { type: 'redirect' };
            } else {
                const { GoogleAuthProvider, signInWithPopup } = await import("firebase/auth");
                const provider = new GoogleAuthProvider();
                try {
                    const result = await signInWithPopup(auth, provider);
                    await saveUserToDB(result.user);
                    cacheUserLocally(result.user);
                    return { success: true, user: result.user };
                } catch (popupErr) {
                    const { signInWithRedirect } = await import("firebase/auth");
                    await signInWithRedirect(auth, provider);
                    return { type: 'redirect' };
                }
            }
        }
    } catch (error) {
        console.error("Login Error:", error);
        if (Capacitor.isNativePlatform()) {
            await Browser.open({ url: 'https://kuryeprov44.web.app/?mode=login', presentationStyle: 'popover' });
            return { type: 'external_browser', error: String(error) };
        }
        return { success: false, error: error?.message || String(error) };
    }
}

export async function handleRedirectResult() {
    try {
        const result = await getRedirectResult(auth);
        if (!result || !result.user) return { handled: false };
        await saveUserToDB(result.user);
        cacheUserLocally(result.user);
        return { handled: true, user: result.user };
    } catch (error) {
        console.error("Redirect Error:", error);
        return { handled: false, error: error?.message || String(error) };
    }
}

export async function logoutUser() {
    if (Capacitor.isNativePlatform()) {
        try { await FirebaseAuthentication.signOut(); } catch (e) { console.warn(e); }
    }
    await signOut(auth);
    localStorage.removeItem('firebase_uid');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
}

async function saveUserToDB(user) {
    const userRef = ref(db, 'users/' + user.uid);
    const snapshot = await get(userRef);
    const now = new Date().toISOString();
    if (snapshot.exists()) {
        await update(userRef, { lastLogin: now, displayName: user.displayName, photoURL: user.photoURL, email: user.email });
    } else {
        await set(userRef, { uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL, role: 'user', isBanned: false, dailyLimit: 1000, createdAt: now, lastLogin: now });
    }
    localStorage.setItem('firebase_uid', user.uid);
}

export async function checkUserStatus(uid) {
    const storedUid = uid || localStorage.getItem('firebase_uid');
    if (!storedUid) return { allowed: false, reason: "Giriş yapılmamış.", status: 'login_required' };

    try {
        const snapshot = await get(ref(db, 'users/' + storedUid));
        if (snapshot.exists()) {
            const data = snapshot.val();
            if (data.isBanned) return { allowed: false, reason: "HESABINIZ YASAKLANMIŞTIR.", status: 'banned' };
            return { allowed: true, data: data };
        }
        return { allowed: false, reason: "Kullanıcı kaydı bulunamadı.", status: 'login_required' };
    } catch (err) {
        return { allowed: false, reason: "Sunucu hatası." };
    }
}

// --- NEW LIMIT ENFORCEMENT FUNCTIONS ---

export async function hasRemainingLimit(uid = null) {
    const targetUid = uid || localStorage.getItem('firebase_uid');
    if (!targetUid) return { allowed: false };

    try {
        const snapshot = await get(ref(db, 'users/' + targetUid));
        if (!snapshot.exists()) return { allowed: false };
        const data = snapshot.val();

        // Admin override
        if (data.role === 'admin') return { allowed: true, limit: 9999, usage: 0 };

        const limit = data.dailyLimit === undefined ? 1000 : data.dailyLimit;
        const today = new Date().toISOString().split('T')[0];

        let usage = 0;
        if (data.lastQueryDate === today) {
            usage = data.queryCount || 0;
        }

        if (usage >= limit) return { allowed: false, limit, usage };
        return { allowed: true, limit, usage };
    } catch (e) {
        console.error("Limit check error", e);
        return { allowed: false };
    }
}

export async function incrementLimitUsage(uid = null) {
    const targetUid = uid || localStorage.getItem('firebase_uid');
    if (!targetUid) return false;

    try {
        const userRef = ref(db, 'users/' + targetUid);
        const snapshot = await get(userRef);
        if (!snapshot.exists()) return false;

        const data = snapshot.val();
        if (data.role === 'admin') return true;

        const today = new Date().toISOString().split('T')[0];
        let usage = 0;
        if (data.lastQueryDate === today) {
            usage = data.queryCount || 0;
        }

        const limit = data.dailyLimit === undefined ? 1000 : data.dailyLimit;

        if (usage < limit) {
            await update(userRef, {
                lastQueryDate: today,
                queryCount: usage + 1
            });
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
}

export { auth, db };
