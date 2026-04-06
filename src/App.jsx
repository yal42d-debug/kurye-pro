import { useEffect, useState } from 'react';
import appHtml from './templates/app.html?raw';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
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
    } catch (e) {
      console.error("Init Error", e);
    }

    // 2. Version Check
    const checkVersion = async () => {
      try {
        const repoUser = 'yal42d-debug';
        const repoName = 'kurye-pro';
        const branch = 'main';
        
        // Fetch Version Info
        const versionUrl = `https://raw.githubusercontent.com/${repoUser}/${repoName}/${branch}/updates/version.json?t=${Date.now()}`;
        const res = await fetch(versionUrl, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        const serverVersion = parseInt(data.version || "0");
        const localVersion = APP_VERSION_CODE;

        // Fetch App Config (Forced Update Check)
        const configUrl = `https://raw.githubusercontent.com/${repoUser}/${repoName}/${branch}/updates/app_config.json?t=${Date.now()}`;
        const configReq = await fetch(configUrl, { cache: 'no-store' });
        if (configReq.ok) {
          const configData = await configReq.json();
          // min_version or force_update_min_version
          const minAllowed = parseInt(configData.force_update_min_version || configData.min_version || "0");

          if (localVersion < minAllowed) {
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
        if (serverVersion > localVersion) {
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

  const handleUpdateClick = async () => {
    if (!updateAvailable) return;
    // Download fix: Use system browser for cleaner APK download completion
    await Browser.open({ 
        url: updateAvailable.url,
        windowName: '_system'
    });
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
          color: 'white', padding: '40px',
          zIndex: 1000000, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>{updateAvailable.forced ? '🚫' : '🎁'}</div>
          <h1 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '10px' }}>
            {updateAvailable.forced ? 'ZORUNLU GÜNCELLEME' : 'YENİ SÜRÜM MEVCUT'}
          </h1>
          <p style={{ opacity: 0.7, marginBottom: '30px', maxWidth: '300px' }}>
            {updateAvailable.forced ? updateAvailable.msg : `Size daha iyi hizmet verebilmek için v${updateAvailable.version} yayınlandı.`}
          </p>
          <button
            onClick={handleUpdateClick}
            style={{
              backgroundColor: '#6366f1', color: 'white', border: 'none',
              padding: '15px 40px', borderRadius: '15px',
              fontWeight: 'bold', fontSize: '18px', cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(99,102,241,0.3)'
            }}>
            HEMEN GÜNCELLE
          </button>
          
          {!updateAvailable.forced && (
             <button onClick={() => setUpdateAvailable(null)} style={{
               background: 'none', border: 'none', color: '#94a3b8', 
               marginTop: '20px', fontSize: '14px', textDecoration: 'underline'
             }}>Daha Sonra</button>
          )}
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
