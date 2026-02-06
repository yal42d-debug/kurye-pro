
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get, update } from "firebase/database";
import { Capacitor } from "@capacitor/core";
import { Browser } from "@capacitor/browser";

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

// Google ile Giriş - Harici Tarayıcıda Aç
export async function loginWithGoogle() {
    try {
        if (Capacitor.isNativePlatform()) {
            // Mobilde: Chrome Custom Tab'da aç
            await Browser.open({
                url: 'https://kuryeprov44.web.app?login=true',
                presentationStyle: 'popover'
            });
            return { type: 'external_browser' };
        } else {
            // Web'de: Normal popup
            const { GoogleAuthProvider, signInWithPopup } = await import("firebase/auth");
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            saveUserToDB(result.user).catch(console.error);
            return { success: true, user: result.user };
        }
    } catch (error) {
        console.error("Login Error:", error);
        return { success: false, error: error.message };
    }
}

export async function handleRedirectResult() { return null; }

export async function logoutUser() {
    await signOut(auth);
    localStorage.removeItem('firebase_uid');
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
    if (!uid) return { allowed: false, reason: "Giriş yapılmamış." };
    try {
        const snapshot = await get(ref(db, 'users/' + uid));
        if (snapshot.exists()) {
            const data = snapshot.val();
            if (data.isBanned) return { allowed: false, reason: "HESABINIZ YASAKLANMIŞTIR.", status: 'banned' };
            return { allowed: true, data: data };
        }
        return { allowed: false, reason: "Kullanıcı kaydı bulunamadı." };
    } catch (err) {
        return { allowed: false, reason: "Sunucu hatası." };
    }
}

export { auth, db };
