
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase, ref, set, get, update } from "firebase/database";

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
const provider = new GoogleAuthProvider();

// 2. Google ile Giriş Yap (POPUP - Hızlı Versiyon)
export async function loginWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Non-blocking: Kaydı arka planda yap, kullanıcıyı bekletme
        saveUserToDB(user).catch(console.error);

        return { success: true, user: user };
    } catch (error) {
        console.error("Login Error:", error);
        return { success: false, error: error.message };
    }
}

// Redirect Handler (Boş - Hata vermemesi için)
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
        await update(userRef, {
            lastLogin: now,
            displayName: user.displayName,
            photoURL: user.photoURL,
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
        return { allowed: false, reason: "Sunucu hatası." };
    }
}

export { auth, db };
