
import { loginWithGoogle, handleRedirectResult, checkUserStatus, logoutUser, auth } from './firebase';

// Mevcut şifreli veri adresi
const REPO_USER = 'yal42d-debug';
const REPO_NAME = 'kurye-pro';
const BASE_URL = `https://raw.githubusercontent.com/${REPO_USER}/${REPO_NAME}/main/updates`;

// 1. Erişim Kontrolü
export async function checkAccess() {
    await handleRedirectResult();

    // Önce localStorage'dan kontrol et (Deep link ile giriş yapıldıysa)
    const storedUid = localStorage.getItem('firebase_uid');
    if (storedUid) {
        const status = await checkUserStatus(storedUid);
        if (status.allowed) {
            return { allowed: true, user: status.data, status: 'authorized' };
        } else if (status.status === 'banned') {
            await logoutUser();
            return { allowed: false, reason: status.reason, status: 'banned' };
        }
    }

    // Firebase Auth Durumunu da kontrol et
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
export async function startGoogleLogin(options = {}) {
    return await loginWithGoogle(options);
}

// 3. Veriyi Çek (FULL OPTIMIZED)
export async function fetchSecureData() {
    // Note: Erişim kontrolü fetchUserRegionData içinde zaten yapılmaktadır.
    
    // --- TRY FIREBASE REGIONS ---
    try {
        const firebaseLib = await import('./firebase');
        if (firebaseLib && firebaseLib.fetchUserRegionData) {
            const regionData = await firebaseLib.fetchUserRegionData(localStorage.getItem('firebase_uid'));
            if (regionData && Object.keys(regionData).length > 0) return regionData;
        }
    } catch (err) { console.warn("Firebase failed", err); }

    // --- FALLBACK: GitHub (Legacy) ---
    try {
        const res = await fetch(`${BASE_URL}/secure_db.txt?t=${Date.now()}`);
        if (res.ok) {
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
        }
    } catch(e) {}
    
    throw new Error("Veri yüklenemedi.");
}

export async function fetchLocalData() {
    try {
        const dataModule = await import('../data/addressDataEncrypted.js');
        const encryptedData = dataModule.encryptedData;
        if (encryptedData && encryptedData.startsWith('KRYSEC_')) {
             const base64 = encryptedData.replace('KRYSEC_', '').split('').reverse().join('');
             const jsonStr = decodeURIComponent(escape(window.atob(base64)));
             return JSON.parse(jsonStr);
        }
    } catch(e) { 
        console.warn("Local bundle fetch failed", e);
        return null; 
    }
}
