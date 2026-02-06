
import { v4 as uuidv4 } from 'uuid';

// --- GITHUB TABANLI GÜVENLİK ---
const REPO_USER = 'yal42d-debug';
const REPO_NAME = 'kurye_pro';
const BASE_URL = `https://raw.githubusercontent.com/${REPO_USER}/${REPO_NAME}/main/updates`;

// 1. Cihaz Kimliğini Yönet
export function getDeviceId() {
    let id = localStorage.getItem('device_guid');
    if (!id) {
        id = uuidv4();
        localStorage.setItem('device_guid', id);
    }
    return id;
}

// 2. Erişim Kontrolü (Şifre + Ban Listesi)
export async function checkAccess(userEnteredCode = null) {
    const myId = getDeviceId();

    // Daha önce giriş yapmış mı?
    const isLocalAuthenticated = localStorage.getItem('auth_success') === 'true';

    try {
        // Config ve Ban Listesini Çek
        const [configRes, listRes] = await Promise.all([
            fetch(`${BASE_URL}/app_config.json?t=${Date.now()}`),
            fetch(`${BASE_URL}/allowed_devices.json?t=${Date.now()}`)
        ]);

        if (!configRes.ok || !listRes.ok) throw new Error("Sunucuya ulaşılamadı.");

        const config = await configRes.json();
        const list = await listRes.json();

        // 1. Önce Ban Kontrolü (En Önemli)
        if (list.banned_devices.includes(myId)) {
            return { allowed: false, reason: "Cihazınız ENGELLENMİŞTİR.", status: 'banned' };
        }

        // 2. WhiteList Kontrolü (Yönetici elle eklediyse şifre sorma)
        if (list.active_devices.includes(myId)) {
            localStorage.setItem('auth_success', 'true');
            return { allowed: true, status: 'authorized' };
        }

        // 3. Şifre Kontrolü
        if (userEnteredCode) {
            if (userEnteredCode === config.access_code) {
                localStorage.setItem('auth_success', 'true');
                return { allowed: true, status: 'success' };
            } else {
                return { allowed: false, reason: "Hatalı Giriş Kodu", status: 'wrong_code' };
            }
        }

        // 4. Daha önce girmiş mi?
        if (isLocalAuthenticated) {
            return { allowed: true, status: 'authenticated' };
        }

        // Hiçbiri değilse LOGIN gerekiyor
        return { allowed: false, reason: "Giriş Gerekli", status: 'login_required' };

    } catch (err) {
        console.error("Auth Error:", err);
        // İnternet yoksa ve daha önce girmişse izin ver (Offline Mode)
        if (isLocalAuthenticated) return { allowed: true, status: 'offline_cached' };
        return { allowed: false, reason: "Bağlantı Hatası", status: 'error' };
    }
}

// 3. Güvenli Veri Çekme
export async function fetchSecureData() {
    // Erişim kontrolü zaten UI açılışında yapılıyor ama garanti olsun
    const access = await checkAccess();
    if (!access.allowed && access.status !== 'offline_cached') { // Offline modda izin ver
        throw new Error(access.reason);
    }

    const res = await fetch(`${BASE_URL}/secure_db.txt?t=${Date.now()}`);
    if (!res.ok) throw new Error("Veri indirilemedi.");

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
