// Güvenli Şifreleme Modülü - AES-256
// Bu modül harita verilerini şifrelemek ve çözmek için kullanılır

const ENCRYPTION_KEY = 'KuryePro2024SecureKey!@#$%^&*()'; // 32 karakter

// Web Crypto API ile AES-GCM şifreleme
async function generateKey(password) {
    const encoder = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(password),
        { name: 'PBKDF2' },
        false,
        ['deriveBits', 'deriveKey']
    );

    return crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt: encoder.encode('KuryeProSalt2024'),
            iterations: 100000,
            hash: 'SHA-256'
        },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
    );
}

// Veriyi şifrele
export async function encryptData(data) {
    try {
        const key = await generateKey(ENCRYPTION_KEY);
        const encoder = new TextEncoder();
        const iv = crypto.getRandomValues(new Uint8Array(12));

        const encrypted = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv },
            key,
            encoder.encode(JSON.stringify(data))
        );

        // IV + şifreli veri birleştir ve Base64'e çevir
        const combined = new Uint8Array(iv.length + encrypted.byteLength);
        combined.set(iv);
        combined.set(new Uint8Array(encrypted), iv.length);

        return btoa(String.fromCharCode(...combined));
    } catch (err) {
        console.error('Encryption error:', err);
        throw new Error('Şifreleme hatası');
    }
}

// Şifreyi çöz
export async function decryptData(encryptedBase64) {
    try {
        const key = await generateKey(ENCRYPTION_KEY);
        const decoder = new TextDecoder();

        // Base64'ten byte array'e çevir
        const combined = Uint8Array.from(atob(encryptedBase64), c => c.charCodeAt(0));

        // IV ve şifreli veriyi ayır
        const iv = combined.slice(0, 12);
        const encrypted = combined.slice(12);

        const decrypted = await crypto.subtle.decrypt(
            { name: 'AES-GCM', iv },
            key,
            encrypted
        );

        return JSON.parse(decoder.decode(decrypted));
    } catch (err) {
        console.error('Decryption error:', err);
        throw new Error('Şifre çözme hatası');
    }
}

// Eski format desteği (geriye uyumluluk)
export function decryptLegacyData(encryptedString) {
    if (encryptedString.startsWith('KRYSEC_')) {
        const base64 = encryptedString.replace('KRYSEC_', '').split('').reverse().join('');
        const jsonStr = decodeURIComponent(escape(atob(base64)));
        return JSON.parse(jsonStr);
    }
    throw new Error('Geçersiz format');
}
