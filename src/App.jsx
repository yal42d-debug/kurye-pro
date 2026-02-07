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

        if (serverVersion > localVersion) {
          console.log("New version detected:", serverVersion);
          setUpdateAvailable({
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

      {/* Simple Update Notification Modal */}
      {updateAvailable && (
        <div style={{
          position: 'fixed', bottom: '20px', right: '20px', left: '20px',
          backgroundColor: '#10b981', color: 'white', padding: '15px',
          borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          animation: 'slideUp 0.5s ease-out'
        }}>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Yeni Güncelleme Mevcut!</div>
            <div style={{ fontSize: '12px', opacity: 0.9 }}>Devam etmek için indirin.</div>
          </div>
          <button
            onClick={handleUpdateClick}
            style={{
              backgroundColor: 'white', color: '#059669', border: 'none',
              padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', fontSize: '12px'
            }}>
            İNDİR
          </button>
        </div>
      )}
    </>
  );
}

export default App;
