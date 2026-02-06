
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
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

// 2. Google ile Giriş Yap
export async function loginWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Giriş başarılı, kullanıcıyı veritabanına kaydet/güncelle
        await saveUserToDB(user);

        return { success: true, user: user };
    } catch (error) {
        console.error("Login Error:", error);
        return { success: false, error: error.message };
    }
}

// 3. Çıkış Yap
export async function logoutUser() {
    await signOut(auth);
    localStorage.removeItem('firebase_uid');
}

// 4. Kullanıcıyı DB'ye Kaydet (İlk kez giriyorsa varsayılanları ata)
async function saveUserToDB(user) {
    const userRef = ref(db, 'users/' + user.uid);
    const snapshot = await get(userRef);

    const now = new Date().toISOString();

    if (snapshot.exists()) {
        // Zaten var, sadece son görülmeyi güncelle
        await update(userRef, {
            lastLogin: now,
            photoURL: user.photoURL, // Foto değişmiş olabilir
            displayName: user.displayName
        });
    } else {
        // Yeni Kullanıcı!
        await set(userRef, {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            role: 'user',        // 'admin' veya 'user'
            isBanned: false,     // Ban durumu
            dailyLimit: 1000,    // Günlük sorgu hakkı (Varsayılan)
            createdAt: now,
            lastLogin: now
        });
    }

    localStorage.setItem('firebase_uid', user.uid);
}

// 5. Kullanıcı Yetki Kontrolü (DB'den Güncel Durumu Çek)
export async function checkUserStatus(uid) {
    if (!uid) return { allowed: false, reason: "Giriş yapılmamış." };

    try {
        const snapshot = await get(ref(db, 'users/' + uid));
        if (snapshot.exists()) {
            const data = snapshot.val();

            if (data.isBanned) {
                return { allowed: false, reason: "HESABINIZ YASAKLANMIŞTIR.", status: 'banned' };
            }

            return { allowed: true, data: data };
        } else {
            return { allowed: false, reason: "Kullanıcı kaydı bulunamadı." };
        }
    } catch (err) {
        console.error(err);
        return { allowed: false, reason: "Sunucu hatası." };
    }
}

// Export Auth & DB
export { auth, db };
