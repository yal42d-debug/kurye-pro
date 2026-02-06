
import express from 'express';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import open from 'open';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('admin_ui')); // UI dosyaları

const DEVICES_FILE = path.join(process.cwd(), 'updates', 'allowed_devices.json');

// 1. Cihazları Getir
app.get('/api/devices', (req, res) => {
    try {
        const data = fs.readFileSync(DEVICES_FILE, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: "Dosya okunamadı" });
    }
});

// 2. Cihaz İşlemleri (Ekle/Sil/Banla)
app.post('/api/update', async (req, res) => {
    try {
        const { action, deviceId } = req.body;
        console.log(`İşlem: ${action} -> ${deviceId}`);

        const data = JSON.parse(fs.readFileSync(DEVICES_FILE, 'utf8'));

        if (action === 'ban') {
            // Aktiften çıkar, banlıya ekle
            data.active_devices = data.active_devices.filter(id => id !== deviceId);
            if (!data.banned_devices.includes(deviceId)) data.banned_devices.push(deviceId);
        }
        else if (action === 'allow') {
            // Banlıdan çıkar, aktife ekle
            data.banned_devices = data.banned_devices.filter(id => id !== deviceId);
            if (!data.active_devices.includes(deviceId)) data.active_devices.push(deviceId);
        }
        else if (action === 'add') {
            if (!data.active_devices.includes(deviceId)) data.active_devices.push(deviceId);
        }
        else if (action === 'delete') {
            data.active_devices = data.active_devices.filter(id => id !== deviceId);
            data.banned_devices = data.banned_devices.filter(id => id !== deviceId);
        }

        // Kaydet
        fs.writeFileSync(DEVICES_FILE, JSON.stringify(data, null, 2));

        // GitHub'a Gönder (Asenkron)
        await gitPush();

        res.json({ success: true, data });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Git Push Fonksiyonu
function gitPush() {
    return new Promise((resolve, reject) => {
        console.log("☁️ GitHub güncelleniyor...");
        exec(`git add updates/allowed_devices.json && git commit -m "Admin Panel Update" && git push`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Git hatası: ${error}`);
                // Hata olsa bile localde değiştiği için başarılı sayabiliriz ama loglayalım
            }
            console.log(`GitHub Çıktısı: ${stdout}`);
            resolve();
        });
    });
}

// Sunucuyu Başlat
app.listen(PORT, async () => {
    console.log(`\n🚀 KuryePro Yönetim Paneli Hazır!`);
    console.log(`👉 http://localhost:${PORT}`);
    // Otomatik tarayıcı aç
    // await open(`http://localhost:${PORT}`);
});
