
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, set, get, child, update } from "firebase/database";

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

// 1. Başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

// 2. Google ile Giriş Yap (POP-UP veya REDIRECT)
export async function loginWithGoogle() {
    try {
        // Mobilde Redirect Tercih Edilir
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            await signInWithRedirect(auth, provider);
            return { type: 'redirect' };
        } else {
            const result = await signInWithPopup(auth, provider);
            await saveUserToDB(result.user);
            return { success: true, user: result.user };
        }
    } catch (error) {
        console.error("Login Error:", error);
        // Popup engellendiyse redirect dene
        if (error.code === 'auth/popup-blocked' || error.code === 'auth/popup-closed-by-user') {
            await signInWithRedirect(auth, provider);
            return { type: 'redirect' };
        }
        return { success: false, error: error.message };
    }
}

// 2.5 Redirect Dönüşünü Yakala (Sayfa Yüklendiğinde Çağrılmalı)
export async function handleRedirectResult() {
    try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
            await saveUserToDB(result.user);
            return { success: true, user: result.user };
        }
        return null;
    } catch (error) {
        console.error("Redirect Error:", error);
        return { success: false, error: error.message };
    }
}

// 3. Çıkış Yap
export async function logoutUser() {
    await signOut(auth);
    localStorage.removeItem('firebase_uid');
}

// 4. Kullanıcıyı DB'ye Kaydet
async function saveUserToDB(user) {
    const userRef = ref(db, 'users/' + user.uid);
    const snapshot = await get(userRef);

    const now = new Date().toISOString();

    if (snapshot.exists()) {
        await update(userRef, {
            lastLogin: now,
            photoURL: user.photoURL,
            displayName: user.displayName,
            email: user.email
        });
    } else {
        await set(userRef, {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            role: 'user',
            isBanned: false,
            dailyLimit: 1000,
            createdAt: now,
            lastLogin: now
        });
    }
    localStorage.setItem('firebase_uid', user.uid);
}

// 5. Yetki Kontrolü
export async function checkUserStatus(uid) {
    if (!uid) return { allowed: false, reason: "Giriş yapılmamış." };

    try {
        const snapshot = await get(ref(db, 'users/' + uid));
        if (snapshot.exists()) {
            const data = snapshot.val();
            if (data.isBanned) return { allowed: false, reason: "HESABINIZ YASAKLANMIŞTIR.", status: 'banned' };
            return { allowed: true, data: data };
        } else {
            return { allowed: false, reason: "Kullanıcı kaydı bulunamadı." };
        }
    } catch (err) {
        console.error(err);
        return { allowed: false, reason: "Sunucu hatası." };
    }
}

export { auth, db };
