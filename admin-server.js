
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
const APP_CONFIG_FILE = path.join(process.cwd(), 'updates', 'app_config.json');
const VERSION_FILE = path.join(process.cwd(), 'updates', 'version.json');
const VERSION_TEXT_FILE = path.join(process.cwd(), 'version.txt');

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

// 3. Uygulama Ayarlarını Getir
app.get('/api/config', (req, res) => {
    try {
        const data = fs.readFileSync(APP_CONFIG_FILE, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: "Config dosyası okunamadı" });
    }
});

// 4. Uygulama Ayarlarını Güncelle (Min Sürüm vb.)
app.post('/api/config', async (req, res) => {
    try {
        const { min_version, welcome_message, latest_version, apk_url } = req.body;

        // 1. app_config.json Güncelle
        const configData = JSON.parse(fs.readFileSync(APP_CONFIG_FILE, 'utf8'));
        if (min_version !== undefined) configData.force_update_min_version = String(min_version);
        if (welcome_message !== undefined) configData.welcome_message = welcome_message;
        fs.writeFileSync(APP_CONFIG_FILE, JSON.stringify(configData, null, 4));

        // 2. version.json ve version.txt Güncelle (Sadece veri gelirse)
        if (latest_version !== undefined) {
            const versionData = { 
                version: String(latest_version), 
                url: apk_url || "https://raw.githubusercontent.com/yal42d-debug/kurye-pro/main/updates/KuryePro_v" + latest_version + ".apk"
            };
            fs.writeFileSync(VERSION_FILE, JSON.stringify(versionData, null, 4));
            fs.writeFileSync(VERSION_TEXT_FILE, String(latest_version));
            console.log("🏷 Sürüm bilgileri güncellendi:", latest_version);
        }

        console.log("⚙️ Ayarlar kaydedildi.");

        // GitHub Paylaş
        await gitPushConfig();

        res.json({ success: true, config: configData });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// 5. Mevcut Sürüm Bilgilerini Getir
app.get('/api/version', (req, res) => {
    try {
        const data = fs.readFileSync(VERSION_FILE, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: "Version dosyası okunamadı" });
    }
});

function gitPushConfig() {
    return new Promise((resolve, reject) => {
        console.log("☁️ Tüm dosyalar (Kod + Config) için GitHub güncelleniyor...");
        // Tüm değişiklikleri ekle (.) ve hata verse bile (değişiklik yoksa) resolve et
        exec(`git add . && git commit -m "Update Code & Config (Admin Panel)" && git push`, (error, stdout, stderr) => {
            console.log(`GitHub Çıktısı: ${stdout}`);
            resolve();
        });
    });
}

// 6. TAM OTOMATİK DERLE VE YAYINLA (Full Automation)
app.post('/api/build-publish', async (req, res) => {
    try {
        const { version } = req.body;
        if (!version) throw new Error("Sürüm kodu gerekli.");

        console.log(`\n🚀 [v${version}] İÇİN SÜREÇ BAŞLATILIYOR...`);

        // 0. TÜM VERSİYON DOSYALARINI GÜNCELLE (Sync)
        fs.writeFileSync(VERSION_TEXT_FILE, String(version));
        const rawUrl = `https://raw.githubusercontent.com/yal42d-debug/kurye-pro/main/updates/KuryePro_v${version}.apk`;
        const vData = { version: String(version), url: rawUrl };
        fs.writeFileSync(VERSION_FILE, JSON.stringify(vData, null, 4));
        
        const configData = JSON.parse(fs.readFileSync(APP_CONFIG_FILE, 'utf8'));
        configData.force_update_min_version = String(version);
        fs.writeFileSync(APP_CONFIG_FILE, JSON.stringify(configData, null, 4));

        // 1. Yetki ve İzin Ver ve Eski APK'ları temizle
        const permissionCmd = `chmod +x ./publish_update.sh && chmod +x ./android/gradlew && rm updates/*.apk || true`;
        
        // 2. Web Build
        const webBuildCmd = `./publish_update.sh`;
        
        // 3. Android Build
        const apkBuildCmd = `npx cap sync && cd android && ./gradlew clean && ./gradlew assembleDebug && cp app/build/outputs/apk/debug/app-debug.apk ../updates/KuryePro_v${version}.apk && cd ..`;

        // 4. GitHub Push
        const gitPushCmd = `git add . && (git commit -m "🚀 Auto-Build: v${version}" || true) && git push origin main`;

        const fullCommand = `${permissionCmd} && ${webBuildCmd} && ${apkBuildCmd} && ${gitPushCmd}`;

        console.log("🛠️ Komutlar çalıştırılıyor, lütfen bekleyin (gradle derlemesi sürebilir)...");

        // maxBuffer'ı artırıyoruz (10MB) çünkü build logları çok uzun olabilir
        exec(fullCommand, { maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
            if (error) {
                console.error("❌ Hata Oluştu:", error);
                return res.status(500).json({ 
                    success: false, 
                    error: "Derleme veya Push hatası!", 
                    details: error.message 
                });
            }
            console.log("✅ BAŞARIYLA TAMAMLANDI");
            console.log("📦 APK Oluşturuldu: updates/KuryePro_v" + version + ".apk");
            console.log("🌐 GitHub'a Gönderildi.");
            res.json({ 
                success: true, 
                message: "v" + version + " başarıyla derlendi ve GitHub'a yüklendi!" 
            });
        });

    } catch (err) {
        console.error("Fatal Error:", err);
        res.status(500).json({ success: false, error: err.message });
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
