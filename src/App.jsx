import { useEffect } from 'react';
import appHtml from './templates/app.html?raw';
import { bindAppGlobals, initApp, setBodyClass } from './logic/appLogic';

import { CapacitorUpdater } from '@capgo/capacitor-updater';

function App() {
  useEffect(() => {
    bindAppGlobals();
    setBodyClass();
    initApp();

    // Notify native layer that the app has loaded successfully.
    // This is required for updates to be kept.
    CapacitorUpdater.notifyAppReady();

    // Auto Update Logic
    const checkUpdates = async () => {
      try {
        const repoUser = 'yal42d-debug';
        const repoName = 'kurye_pro';
        const versionUrl = `https://raw.githubusercontent.com/${repoUser}/${repoName}/main/updates/version.json`;

        const res = await fetch(versionUrl);
        if (!res.ok) return;
        const data = await res.json();

        // Mevcut sürümü localStorage'dan veya config'den alabiliriz. 
        // Şimdilik basitçe: sunucudaki version timestamp'i farklıysa indir diyelim.
        const lastVersion = localStorage.getItem('app_version_code');

        if (data.version !== lastVersion) {
          console.log('Yeni güncelleme bulundu:', data.version);
          // İndirme başlıyor toast mesajı gösterilebilir

          const downloadUrl = `https://github.com/${repoUser}/${repoName}/raw/main/updates/dist.zip`;

          const version = await CapacitorUpdater.download({
            url: downloadUrl,
            version: data.version,
          });

          // İndirme bitti, uygula
          await CapacitorUpdater.set(version);

          localStorage.setItem('app_version_code', data.version);
        }
      } catch (err) {
        console.error('Update check failed', err);
      }
    };

    // 5 saniye sonra güncelleme kontrolü yap (uygulama açılışını yavaşlatmasın)
    setTimeout(checkUpdates, 5000);
  }, []);

  return <div id="app-root" dangerouslySetInnerHTML={{ __html: appHtml }} />;
}

export default App;
