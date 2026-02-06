
import fs from 'fs';
import path from 'path';

// Şifreli dosyayı oku
const securePath = path.join(process.cwd(), 'updates', 'secure_db.txt');
const outputPath = path.join(process.cwd(), 'temp_address_db.json');

try {
    const rawContent = fs.readFileSync(securePath, 'utf8');

    // JS formatından sadece tırnak içindeki stringi al
    const match = rawContent.match(/encryptedData\s*=\s*"([^"]+)"/);

    if (match && match[1]) {
        const raw = match[1];
        if (raw.startsWith('KRYSEC_')) {
            // Şifreyi çöz (Ters çevir -> Base64 Decode)
            const base64 = raw.replace('KRYSEC_', '').split('').reverse().join('');
            const jsonStr = Buffer.from(base64, 'base64').toString('utf8');

            // JSON olarak kaydet
            fs.writeFileSync(outputPath, jsonStr);
            console.log('✅ Veri kurtarıldı: temp_address_db.json');
        } else {
            console.error('❌ Geçersiz şifreleme formatı');
        }
    } else {
        console.error('❌ Dosya formatı/Regex eşleşmedi');
    }
} catch (err) {
    console.error('Hata:', err);
}
