
import { v4 as uuidv4 } from 'uuid';

// --- GITHUB TABANLI GÜVENLİK ---
const REPO_USER = 'yal42d-debug';
const REPO_NAME = 'kurye_pro';
const BASE_URL = `https://raw.githubusercontent.com/${REPO_USER}/${REPO_NAME}/main/updates`;

// 1. Cihaz Kimliğini Yönet
export function getDeviceId() {
    let id = localStorage.getItem('device_guid');
    if (!id) {
        id = uuidv4(); // Örn: 6c84fb90-12c4-11e1-840d-7b25c5ee775a
        localStorage.setItem('device_guid', id);
    }
    return id;
}

// 2. İzin Kontrolü Yap
export async function checkAccess() {
    const myId = getDeviceId();
    console.log("🔍 Cihaz Kimliği:", myId);

    try {
        // GitHub'dan güncel izin listesini çek (Cache'i önlemek için ?t=...)
        const res = await fetch(`${BASE_URL}/allowed_devices.json?t=${Date.now()}`);
        if (!res.ok) throw new Error("Sunucu listesine ulaşılamadı.");

        const accessList = await res.json();

        // Banlı mı?
        if (accessList.banned_devices.includes(myId)) {
            return { allowed: false, reason: "Cihazınız ENGELLENMİŞTİR." };
        }

        // İzinli mi?
        if (accessList.active_devices.includes(myId) || accessList.active_devices.includes("admin_device_001")) {
            // "admin_device_001" sadece test amaçlıdır, prodüksiyonda kendi ID'nizi ekleyin.
            return { allowed: true };
        }

        return {
            allowed: false,
            reason: "Yetkisiz Cihaz.",
            userId: myId
        };

    } catch (err) {
        console.error("Güvenlik kontrol hatası:", err);
        return { allowed: false, reason: "İnternet bağlantısı yok veya sunucu hatası." };
    }
}

// 3. Veriyi Güvenli Çek (Sadece izinliyse çalışır)
export async function fetchSecureData() {
    // Önce izin kontrolü
    const access = await checkAccess();
    if (!access.allowed) {
        throw new Error(access.reason + (access.userId ? `\nID: ${access.userId}` : ""));
    }

    // İzinliyse şifreli veriyi indir
    const res = await fetch(`${BASE_URL}/secure_db.txt?t=${Date.now()}`);
    if (!res.ok) throw new Error("Veri indirilemedi.");

    // Şifreyi Çöz
    const text = await res.text();
    const match = text.match(/encryptedData\s*=\s*"([^"]+)"/);

    if (match && match[1]) {
        const raw = match[1];
        if (raw.startsWith('KRYSEC_')) {
            const base64 = raw.replace('KRYSEC_', '').split('').reverse().join('');
            const jsonStr = decodeURIComponent(escape(window.atob(base64)));
            return JSON.parse(jsonStr);
        }
    }
    throw new Error("Veri formatı hatalı.");
}
