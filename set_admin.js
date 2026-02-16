
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, update } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBfN1-OQUQgQTu358UO6aZ-BDIbjWZq1Mc",
    authDomain: "kuryeprov44.firebaseapp.com",
    databaseURL: "https://kuryeprov44-default-rtdb.firebaseio.com",
    projectId: "kuryeprov44"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function setAdminRole(email) {
    console.log(`🔍 Tüm kullanıcılar taranıyor...`);

    try {
        const snapshot = await get(ref(db, 'users'));

        if (snapshot.exists()) {
            const data = snapshot.val();
            let found = false;

            for (const [uid, user] of Object.entries(data)) {
                if (user.email === email) {
                    console.log(`✅ KULLANICI BULUNDU: ${user.displayName || 'İsimsiz'} (UID: ${uid})`);

                    await update(ref(db, `users/${uid}`), {
                        role: 'admin'
                    });

                    console.log(`👑 BAŞARILI! ${email} artik ADMIN.`);
                    found = true;
                    break;
                }
            }

            if (!found) {
                console.error(`❌ ${email} adresiyle kayıtlı kullanıcı bulunamadı.`);
            }
        } else {
            console.error("❌ Veritabanında hiç kullanıcı yok!");
        }
    } catch (error) {
        console.error("❌ Hata:", error);
    }
    process.exit();
}

setAdminRole("yal42d@gmail.com");
