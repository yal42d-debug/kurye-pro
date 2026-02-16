import { useEffect, useState } from 'react';
import appHtml from './templates/app.html?raw';
import { bindAppGlobals, initApp, setBodyClass } from './logic/appLogic';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';

function App() {
  const [updateAvailable, setUpdateAvailable] = useState(null);

  useEffect(() => {
    // 1. Initialize App Logic
    try {
      bindAppGlobals();
      setBodyClass();
      initApp();
    } catch (e) {
      console.error("Critical: Init App Failed", e);
    }

    // 2. Simple Version Check (No Plugin Required)
    const checkVersion = async () => {
      try {
        // GitHub Raw URL for Version Check
        const repoUser = 'yal42d-debug';
        const repoName = 'kurye_pro';
        const branch = 'main';
        const versionUrl = `https://raw.githubusercontent.com/${repoUser}/${repoName}/${branch}/updates/version.json?t=${Date.now()}`;

        const res = await fetch(versionUrl, { cache: 'no-store' });
        if (!res.ok) return;

        const data = await res.json();
        const serverVersion = parseInt(data.version || "0");
        const localVersion = parseInt(localStorage.getItem('app_version_code') || "0");

        // Save local version if not set
        if (localVersion === 0 && serverVersion > 0) {
          localStorage.setItem('app_version_code', String(serverVersion));
          return;
        }

        // --- NEW: FORCED UPDATE CHECK ---
        // Fetch App Config for Min Version
        const configReq = await fetch(`https://raw.githubusercontent.com/${repoUser}/${repoName}/${branch}/updates/app_config.json?t=${Date.now()}`);
        if (configReq.ok) {
          const configData = await configReq.json();
          const minAllowed = parseInt(configData.force_update_min_version || "0");

          if (localVersion < minAllowed && localVersion > 0) {
            console.error(`FORCED UPDATE: Local ${localVersion} < Min ${minAllowed}`);
            // Set special state to BLOCK app
            setUpdateAvailable({
              forced: true,
              version: serverVersion,
              url: data.url,
              msg: "Bu sürüm artık desteklenmiyor. Lütfen güncelleyin."
            });
            return; // Stop processing
          }
        }

        if (serverVersion > localVersion) {
          console.log("New version detected:", serverVersion);
          setUpdateAvailable({
            forced: false,
            version: serverVersion,
            url: data.url
          });
        }
      } catch (err) {
        console.warn('Version check failed', err);
      }
    };

    // Check after 3 seconds
    if (Capacitor.isNativePlatform()) {
      setTimeout(checkVersion, 3000);
    }
  }, []);

  const handleUpdateClick = async () => {
    if (!updateAvailable) return;
    // Open Browser to download APK
    await Browser.open({ url: updateAvailable.url });
  };

  return (
    <>
      <div id="app-root" dangerouslySetInnerHTML={{ __html: appHtml }} />

      {/* Update Notification Modal (Normal & Forced) */}
      {updateAvailable && (
        <div style={{
          position: 'fixed', bottom: updateAvailable.forced ? '0' : '20px',
          right: updateAvailable.forced ? '0' : '20px',
          left: updateAvailable.forced ? '0' : '20px',
          top: updateAvailable.forced ? '0' : 'auto',
          backgroundColor: updateAvailable.forced ? 'rgba(0,0,0,0.95)' : '#10b981',
          color: 'white', padding: '20px',
          borderRadius: updateAvailable.forced ? '0' : '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          zIndex: 99999, display: 'flex', flexDirection: updateAvailable.forced ? 'column' : 'row',
          alignItems: 'center', justifyContent: updateAvailable.forced ? 'center' : 'space-between',
          animation: 'slideUp 0.5s ease-out'
        }}>
          {updateAvailable.forced && (
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>⚠️</div>
          )}

          <div style={{ textAlign: updateAvailable.forced ? 'center' : 'left', marginBottom: updateAvailable.forced ? '20px' : '0' }}>
            <div style={{ fontWeight: 'bold', fontSize: updateAvailable.forced ? '22px' : '14px' }}>
              {updateAvailable.forced ? 'ZORUNLU GÜNCELLEME' : 'Yeni Güncelleme Mevcut!'}
            </div>
            <div style={{ fontSize: updateAvailable.forced ? '16px' : '12px', opacity: 0.9, marginTop: '5px' }}>
              {updateAvailable.forced ? (updateAvailable.msg || 'Devam etmek için güncellemeniz gerekiyor.') : 'Devam etmek için indirin.'}
            </div>
            {updateAvailable.forced && <div style={{ marginTop: '10px', fontSize: '14px', color: '#ef4444' }}>v{updateAvailable.version} sürümüne geçmelisiniz.</div>}
          </div>

          <button
            onClick={handleUpdateClick}
            style={{
              backgroundColor: updateAvailable.forced ? '#ef4444' : 'white',
              color: updateAvailable.forced ? 'white' : '#059669',
              border: 'none',
              padding: updateAvailable.forced ? '15px 40px' : '8px 16px',
              borderRadius: '8px', fontWeight: 'bold', fontSize: updateAvailable.forced ? '18px' : '12px',
              marginTop: updateAvailable.forced ? '20px' : '0'
            }}>
            {updateAvailable.forced ? 'HEMEN GÜNCELLE' : 'İNDİR'}
          </button>
        </div>
      )}
    </>
  );
}

export default App;
