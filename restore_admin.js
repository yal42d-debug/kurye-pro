
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBfN1-OQUQgQTu358UO6aZ-BDIbjWZq1Mc",
    authDomain: "kuryeprov44.firebaseapp.com",
    databaseURL: "https://kuryeprov44-default-rtdb.firebaseio.com",
    projectId: "kuryeprov44"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const TARGET_UID = "ugq2X22jLLMEkoPmXSWgK8q4uRo1"; // Önceki UID'niz
const USER_DATA = {
    displayName: "Yalçın Değirmenci",
    email: "yal42d@gmail.com",
    role: "admin",
    createdAt: new Date().toISOString(),
    photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIsdGv...",
    isBanned: false,
    hourlyLimit: 9999
};

console.log("🛠 Kullanıcı geri yükleniyor...");

set(ref(db, 'users/' + TARGET_UID), USER_DATA)
    .then(() => {
        console.log("✅ Başarılı! Admin yetkisi geri verildi.");
        process.exit(0);
    })
    .catch((err) => {
        console.error("❌ Hata:", err);
        process.exit(1);
    });
