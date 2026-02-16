/**
 * Harita Verilerini Firebase'e Güvenli Şekilde Yükleme Script'i
 * 
 * Kullanım: node upload_secure_data.js
 */

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import fs from 'fs';
import crypto from 'crypto';

const firebaseConfig = {
    apiKey: "AIzaSyBfN1-OQUQgQTu358UO6aZ-BDIbjWZq1Mc",
    authDomain: "kuryeprov44.firebaseapp.com",
    databaseURL: "https://kuryeprov44-default-rtdb.firebaseio.com",
    projectId: "kuryeprov44"
};

const ENCRYPTION_KEY = 'KuryePro2024SecureKey!@#$%^&*()';

// AES-256-GCM ile şifreleme (Node.js versiyonu)
function encryptDataNode(data) {
    const iv = crypto.randomBytes(12);
    const key = crypto.pbkdf2Sync(ENCRYPTION_KEY, 'KuryeProSalt2024', 100000, 32, 'sha256');
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

    let encrypted = cipher.update(JSON.stringify(data), 'utf8');
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    const authTag = cipher.getAuthTag();

    // IV (12) + AuthTag (16) + EncryptedData
    const combined = Buffer.concat([iv, authTag, encrypted]);
    return combined.toString('base64');
}

async function uploadSecureData() {
    console.log('🔐 Harita verileri Firebase\'e yükleniyor...\n');

    // 1. Mevcut şifreli veriyi oku
    const secureDbPath = './updates/secure_db.txt';
    if (!fs.existsSync(secureDbPath)) {
        console.error('❌ secure_db.txt bulunamadı!');
        process.exit(1);
    }

    const content = fs.readFileSync(secureDbPath, 'utf8');
    const match = content.match(/encryptedData\s*=\s*"([^"]+)"/);

    if (!match || !match[1]) {
        console.error('❌ Şifreli veri formatı hatalı!');
        process.exit(1);
    }

    // 2. Eski şifrelemeyi çöz
    console.log('📦 Mevcut veri çözülüyor...');
    const encryptedOld = match[1];
    let rawData;

    if (encryptedOld.startsWith('KRYSEC_')) {
        const base64 = encryptedOld.replace('KRYSEC_', '').split('').reverse().join('');
        const jsonStr = decodeURIComponent(escape(Buffer.from(base64, 'base64').toString('binary')));
        rawData = JSON.parse(jsonStr);
        console.log('✅ Eski format çözüldü');
    } else {
        console.error('❌ Tanınmayan format!');
        process.exit(1);
    }

    // 3. Yeni AES şifreleme uygula
    console.log('🔒 AES-256-GCM ile yeniden şifreleniyor...');
    const newEncrypted = encryptDataNode(rawData);
    console.log(`✅ Şifreleme tamamlandı (${newEncrypted.length} karakter)`);

    // 4. Firebase'e yükle
    console.log('☁️ Firebase\'e yükleniyor...');
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    await set(ref(db, 'secureMapData'), {
        data: newEncrypted,
        version: 2,
        encryption: 'AES-256-GCM',
        updatedAt: new Date().toISOString()
    });

    console.log('\n✅ Yükleme tamamlandı!');
    console.log('📊 Veri istatistikleri:');
    console.log(`   - Orijinal boyut: ${JSON.stringify(rawData).length} karakter`);
    console.log(`   - Şifreli boyut: ${newEncrypted.length} karakter`);
    console.log(`   - Şifreleme: AES-256-GCM`);
    console.log('\n🛡️ Artık veriler Firebase\'de güvenli!');

    process.exit(0);
}

// Polyfill for escape function in Node.js
function escape(str) {
    return str.replace(/[^\x20-\x7E]/g, (char) => {
        return '%' + char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0');
    });
}

uploadSecureData().catch(err => {
    console.error('❌ Hata:', err.message);
    process.exit(1);
});
