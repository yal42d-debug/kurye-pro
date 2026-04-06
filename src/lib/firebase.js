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
import { getDatabase, ref, set, get, update, onValue } from "firebase/database";
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

    // Realtime Ban Check Listener
    const userRef = ref(db, 'users/' + user.uid);
    onValue(userRef, async (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            if (data.isBanned) {
                console.warn("HESAP YASAKLANDI - OTOMATIK CIKIS YAPILIYOR");
                await logoutUser();
                window.location.reload();
            }
        }
    });
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
    const userRef = ref(db, 'users_v45/' + user.uid);
    const snapshot = await get(userRef);
    const now = new Date().toISOString();
    if (snapshot.exists()) {
        await update(userRef, { lastLogin: now, displayName: user.displayName, photoURL: user.photoURL, email: user.email });
    } else {
        await set(userRef, { uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL, role: 'user', isBanned: false, dailyLimit: 100, createdAt: now, lastLogin: now });
    }
    localStorage.setItem('firebase_uid', user.uid);
}

export async function checkUserStatus(uid) {
    const storedUid = uid || localStorage.getItem('firebase_uid');
    if (!storedUid) return { allowed: false, reason: "Giriş yapılmamış.", status: 'login_required' };

    try {
        const snapshot = await get(ref(db, 'users_v45/' + storedUid));
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
        const snapshot = await get(ref(db, 'users_v45/' + targetUid));
        if (!snapshot.exists()) return { allowed: false };
        const data = snapshot.val();

        // Admin override
        if (data.role === 'admin') return { allowed: true, limit: 9999, usage: 0 };

        const now = new Date();
        const today = now.toISOString().split('T')[0];
        const currentHourStr = today + "-" + now.getHours();

        // 1. Günlük Limit Kontrolü
        const dailyLimit = data.dailyLimit === undefined ? 100 : data.dailyLimit;
        let dailyUsage = (data.lastQueryDate === today) ? (data.queryCount || 0) : 0;
        if (dailyUsage >= dailyLimit) return { allowed: false, reason: "Günlük limit doldu.", limit: dailyLimit, usage: dailyUsage };

        // 2. Saatlik Limit Kontrolü
        const hourlyLimit = data.hourlyLimit === undefined ? 60 : data.hourlyLimit;
        let hourlyUsage = (data.lastQueryHour === currentHourStr) ? (data.hourlyQueryCount || 0) : 0;
        if (hourlyUsage >= hourlyLimit) return { allowed: false, reason: "Saatlik limit doldu.", limit: hourlyLimit, usage: hourlyUsage };

        return { allowed: true, dailyLimit, dailyUsage, hourlyLimit, hourlyUsage };
    } catch (e) {
        console.error("Limit check error", e);
        return { allowed: false };
    }
}

export async function incrementLimitUsage(uid = null) {
    const targetUid = uid || localStorage.getItem('firebase_uid');
    if (!targetUid) return false;

    try {
        const userRef = ref(db, 'users_v45/' + targetUid);
        const snapshot = await get(userRef);
        if (!snapshot.exists()) return false;

        const data = snapshot.val();
        if (data.role === 'admin') return true;

        const now = new Date();
        const today = now.toISOString().split('T')[0];
        const currentHourStr = today + "-" + now.getHours();

        const dailyLimit = data.dailyLimit === undefined ? 100 : data.dailyLimit;
        const hourlyLimit = data.hourlyLimit === undefined ? 60 : data.hourlyLimit;

        let dailyUsage = (data.lastQueryDate === today) ? (data.queryCount || 0) : 0;
        let hourlyUsage = (data.lastQueryHour === currentHourStr) ? (data.hourlyQueryCount || 0) : 0;

        // Check again before update
        if (dailyUsage >= dailyLimit || hourlyUsage >= hourlyLimit) return false;

        await update(userRef, {
            lastQueryDate: today,
            queryCount: dailyUsage + 1,
            lastQueryHour: currentHourStr,
            hourlyQueryCount: hourlyUsage + 1
        });
        return true;
    } catch (e) {
        return false;
    }
}

export async function fetchUserRegionData(uid = null) {
    const targetUid = uid || localStorage.getItem('firebase_uid');
    if (!targetUid) throw new Error("GİRİŞ GEREKLİ");

    try {
        const userRef = ref(db, 'users_v45/' + targetUid);
        const userSnap = await get(userRef);
        if (!userSnap.exists()) throw new Error("KULLANICI BULUNAMADI");

        const userData = userSnap.val();
        if (userData.role !== 'admin' && (!userData.allowedRegions || Object.keys(userData.allowedRegions).length === 0)) {
            throw new Error("BÖLGE YETKİNİZ YOK");
        }

        let mergedData = {};

        // Admin checks regions or global config
        const regionKeys = (userData.role === 'admin') 
            ? (await get(ref(db, 'regions_v45'))).val() || {} 
            : userData.allowedRegions;

        // Optimized: Fetch all regions in parallel
        const regionPromises = Object.keys(regionKeys).map(async (key) => {
            if (regionKeys[key] !== true && userData.role !== 'admin') return null;
            
            const regionRef = ref(db, 'regions_v45/' + key);
            const regionSnap = await get(regionRef);
            if (!regionSnap.exists()) return null;

            const region = regionSnap.val();
            let dataStr = "";

            if (region.data_chunks) {
                dataStr = region.data_chunks.join('');
            } else if (region.data) {
                dataStr = region.data;
            }

            if (dataStr) {
                try {
                    let processedStr = dataStr;
                    if (dataStr.startsWith('KRYSEC_')) {
                        const base64Rev = dataStr.replace('KRYSEC_', '');
                        let base64 = "";
                        for (let i = base64Rev.length - 1; i >= 0; i--) { base64 += base64Rev[i]; }
                        const binary = atob(base64);
                        const bytes = new Uint8Array(binary.length);
                        for (let i = 0; i < binary.length; i++) { bytes[i] = binary.charCodeAt(i); }
                        processedStr = new TextDecoder().decode(bytes);
                    }
                    return JSON.parse(processedStr);
                } catch (e) { console.error("Decrypt error:", key, e); return null; }
            }
            return null;
        });

        const results = await Promise.all(regionPromises);
        results.forEach(res => { if (res) Object.assign(mergedData, res); });


        if (Object.keys(mergedData).length === 0) {
           return null;
        }

        return mergedData;
    } catch (e) {
        console.error("Fetch Region Error", e);
        throw e;
    }
}

export function startBanListener(onBan) {
    const uid = localStorage.getItem('firebase_uid');
    if (!uid) return null;

    const userRef = ref(db, 'users_v45/' + uid);
    return onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            if (data.isBanned === true) {
                console.warn("🚫 KULLANICI YASAKLANDI! OTURUM KAPATILIYOR...");
                localStorage.clear();
                if (onBan) onBan();
            }
        }
    });
}

export { auth, db };

