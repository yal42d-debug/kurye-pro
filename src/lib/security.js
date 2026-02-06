
import { loginWithGoogle, checkUserStatus, logoutUser, auth } from './firebase';

// Mevcut şifreli veri adresi
const REPO_USER = 'yal42d-debug';
const REPO_NAME = 'kurye_pro';
const BASE_URL = `https://raw.githubusercontent.com/${REPO_USER}/${REPO_NAME}/main/updates`;

// 1. Erişim Kontrolü
export async function checkAccess() {
    return new Promise((resolve) => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            unsubscribe();

            if (user) {
                const status = await checkUserStatus(user.uid);
                if (status.allowed) {
                    resolve({ allowed: true, user: status.data, status: 'authorized' });
                } else {
                    await logoutUser();
                    resolve({ allowed: false, reason: status.reason, status: status.status });
                }
            } else {
                resolve({ allowed: false, reason: "Giriş Yapılmalı", status: 'login_required' });
            }
        });
    });
}

// 2. Google Login Tetikleyici
export async function startGoogleLogin() {
    return await loginWithGoogle();
}

// 3. Veriyi Çek
export async function fetchSecureData() {
    const access = await checkAccess();
    if (!access.allowed) throw new Error(access.reason);

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
