import { useEffect, useState } from 'react';
import appHtml from './templates/app.html?raw';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { FileOpener } from '@capawesome-team/capacitor-file-opener';
import { bindAppGlobals, initApp, setBodyClass } from './logic/appLogic.js';

function App() {
  const [updateAvailable, setUpdateAvailable] = useState(null);

  // Artık sürüm version.txt'den otomatik okunuyor.
  const APP_VERSION_CODE = parseInt(typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : "47"); 
  
  useEffect(() => {
    // --- APP VERSION SETTINGS ---
    
    // 1. App Logic Init
    try {
      bindAppGlobals();
      setBodyClass();
      initApp();

      // Dinamik Sürüm Bilgisini Yaz (Giriş ve Header)
      const vText = `v${APP_VERSION_CODE}`;
      const hVer = document.getElementById('appHeaderVersion');
      const lVer = document.getElementById('loginVersionDisp');
      if (hVer) hVer.textContent = vText;
      if (lVer) lVer.textContent = vText;
    } catch (e) {
      console.error("Init Error", e);
    }

    // 2. Version Check
    const checkVersion = async () => {
      try {
        const repoUser = 'yal42d-debug';
        const repoName = 'kurye-pro';
        const branch = 'main';

        const parseVer = (v) => {
          if (!v) return 0;
          const s = String(v);
          if (!s.includes('.')) return parseInt(s);
          const p = s.split('.');
          // SemVer'i karşılaştırılabilir bir sayıya çevir (Örn: 1.0.92 -> 10092)
          // Eğer major 1 ise ve eski sürüm 88 ise, çakışmayı önlemek için major'a büyük bir offset ekleyebiliriz
          // veya kullanıcıya sürümü 89.0.0'dan başlatmasını önerebiliriz.
          // Şimdilik standart dönüşüm yapıyoruz:
          return (parseInt(p[0]) * 1000000) + (parseInt(p[1]) * 1000) + parseInt(p[2]);
        };
        
        // Fetch Version Info
        const versionUrl = `https://raw.githubusercontent.com/${repoUser}/${repoName}/${branch}/updates/version.json?t=${Date.now()}`;
        const res = await fetch(versionUrl, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        
        const serverVersion = data.version || "0";
        const serverCode = parseVer(serverVersion);
        const localCode = parseVer(APP_VERSION_CODE);

        // Fetch App Config (Forced Update Check)
        const configUrl = `https://raw.githubusercontent.com/${repoUser}/${repoName}/${branch}/updates/app_config.json?t=${Date.now()}`;
        const configReq = await fetch(configUrl, { cache: 'no-store' });
        if (configReq.ok) {
          const configData = await configReq.json();
          const minAllowedVer = configData.force_update_min_version || configData.min_version || "0";
          const minAllowedCode = parseVer(minAllowedVer);

          if (localCode < minAllowedCode) {
            console.warn("BLOCKED: Your version is too old.");
            setUpdateAvailable({
              forced: true,
              version: serverVersion,
              url: data.url,
              msg: configData.welcome_message || "Zorunlu güncelleme gerekli."
            });
            return;
          }
          // --- SISTEM DUYURUSU (WELCOME MSG) ---
          if (configData.welcome_message && localStorage.getItem('last_msg') !== configData.welcome_message) {
            alert("Sistem Duyurusu:\n" + configData.welcome_message);
            localStorage.setItem('last_msg', configData.welcome_message);
          }
        }

        // Normal Update Check
        if (serverCode > localCode) {
          setUpdateAvailable({
            forced: false,
            version: serverVersion,
            url: data.url
          });
        }
      } catch (err) {
        console.warn('Update check failed', err);
      }
    };


    // Hemen kontrol et, bekleme yapma
    checkVersion(); 
    
    // Ayrıca Capacitor platformunda periyodik kontrol (opsiyonel)
    const interval = setInterval(checkVersion, 60000); 
    return () => clearInterval(interval);
  }, []);

  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleUpdateClick = async () => {
    if (!updateAvailable) return;
    setDownloadStarted(true);
    
    try {
      // 1. Android ise direkt indirme ve kurma dene
      if (Capacitor.getPlatform() === 'android') {
        const filename = `KuryePro_v${updateAvailable.version}.apk`;
        
        // Önce varsa eski dosyayı temizle
        try { await Filesystem.deleteFile({ path: filename, directory: Directory.Cache }); } catch(e){}

        // İndirme işlemini başlat
        const downloadResult = await Filesystem.downloadFile({
          url: updateAvailable.url,
          path: filename,
          directory: Directory.Cache,
        });

        // İndirme bitince dosyayı aç (Android yükleyiciyi tetikle)
        await FileOpener.openFile({
          path: downloadResult.path,
          contentType: 'application/vnd.android.package-archive'
        });
      } else {
        // Android değilse eski usul tarayıcı aç
        await Browser.open({ 
            url: updateAvailable.url,
            windowName: '_system'
        });
      }
    } catch (err) {
      console.error('Sistem güncelleme hatası:', err);
      // Hata olursa tarayıcıya yönlendir
      await Browser.open({ 
          url: updateAvailable.url,
          windowName: '_system'
      });
    }
  };

  return (
    <>
      <div id="app-root" style={{ 
        display: (updateAvailable && updateAvailable.forced) ? 'none' : 'block' 
      }} dangerouslySetInnerHTML={{ __html: appHtml }} />

      {updateAvailable && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: '#0f172a',
          color: 'white', padding: '30px',
          zIndex: 1000000, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center',
          background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)'
        }}>
          <div style={{ 
            width: '80px', height: '80px', 
            backgroundColor: updateAvailable.forced ? 'rgba(239, 68, 68, 0.1)' : 'rgba(99, 102, 241, 0.1)',
            borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '40px', marginBottom: '24px',
            border: `1px solid ${updateAvailable.forced ? 'rgba(239, 68, 68, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`
          }}>
            {updateAvailable.forced ? '🚀' : '✨'}
          </div>
          
          <h2 style={{ fontSize: '10px', color: '#6366f1', fontWeight: '900', letterSpacing: '4px', marginBottom: '8px', textTransform: 'uppercase' }}>
            KURYE PRO SİSTEM
          </h2>
          
          <h1 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '12px', tracking: '-1px' }}>
            {updateAvailable.forced ? 'Kritik Güncelleme' : 'Yeni Sürüm Hazır'}
          </h1>
          
          <p style={{ opacity: 0.6, fontSize: '14px', lineHeight: '1.6', marginBottom: '32px', maxWidth: '280px' }}>
            {updateAvailable.forced ? updateAvailable.msg : `Performans iyileştirmeleri içeren v${updateAvailable.version} sürümü yayınlandı.`}
          </p>

          <div style={{ width: '100%', maxWidth: '280px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
                onClick={handleUpdateClick}
                style={{
                  width: '100%',
                  backgroundColor: downloadStarted ? '#1e293b' : '#6366f1', 
                  color: 'white', border: 'none',
                  padding: '18px', borderRadius: '18px',
                  fontWeight: '900', fontSize: '15px', cursor: 'pointer',
                  boxShadow: downloadStarted ? 'none' : '0 10px 25px rgba(99,102,241,0.4)',
                  transition: 'all 0.3s ease'
                }}>
                {downloadStarted ? 'İNDİRME BAŞLATILDI' : 'ŞİMDİ GÜNCELLE'}
            </button>
            
            {downloadStarted && (
               <div style={{ 
                 marginTop: '8px', padding: '16px', 
                 backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                 borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' 
               }}>
                  <p style={{ fontSize: '11px', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    <strong style={{ color: '#fbbf24', display: 'block', marginBottom: '4px' }}>⚡ İNDİRME TAMAMLANIYOR...</strong>
                    İndirme bittiğinde paket yükleyici otomatik açılacaktır. Eğer bir uyarı çıkarsa "Yükle" diyerek devam edebilirsiniz.
                  </p>
               </div>
            )}

            {!updateAvailable.forced && !downloadStarted && (
               <button onClick={() => setUpdateAvailable(null)} style={{
                 background: 'none', border: 'none', color: '#475569', 
                 marginTop: '8px', fontSize: '13px', fontWeight: 'bold'
               }}>Daha Sonra Hatırlat</button>
            )}
          </div>
        </div>
      )}
      <div style={{
          position: 'fixed', 
          bottom: '5px', 
          right: '5px', 
          fontSize: '10px', 
          color: '#94a3b8', 
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: 0.7
      }}>
        v{APP_VERSION_CODE}
      </div>
    </>
  );
}

export default App;
