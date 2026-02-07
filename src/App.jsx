import { useEffect } from 'react';
import appHtml from './templates/app.html?raw';
import { bindAppGlobals, initApp, setBodyClass } from './logic/appLogic';
import { Capacitor } from '@capacitor/core';
import { CapacitorUpdater } from '@capgo/capacitor-updater';

function App() {
  useEffect(() => {
    bindAppGlobals();
    setBodyClass();

    // 1. Initialize App Logic
    try {
      initApp();
    } catch (e) {
      console.error("Critical: Init App Failed", e);
    }

    const startUpdater = async () => {
      if (!Capacitor.isNativePlatform()) return;

      // Notify the native plugin that the app is ready (Prevents rollback)
      try {
        await CapacitorUpdater.notifyAppReady();
      } catch (err) {
        console.warn('CapacitorUpdater.notifyAppReady failed (Offline or Plugin missing?)', err);
      }

      const checkUpdates = async () => {
        try {
          // GitHub Raw URL for Version Check
          const repoUser = 'yal42d-debug';
          const repoName = 'kurye_pro';
          const branch = 'main';
          const versionUrl = `https://raw.githubusercontent.com/${repoUser}/${repoName}/${branch}/updates/version.json?t=${Date.now()}`;

          console.log(`Checking updates from: ${versionUrl}`);

          // Network Fetch with Timeout
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
          const res = await fetch(versionUrl, { cache: 'no-store', signal: controller.signal });
          clearTimeout(timeoutId);

          if (!res.ok) {
            console.warn(`Update check failed: Server responded with ${res.status}`);
            return;
          }

          const data = await res.json();
          if (!data?.version) {
            console.warn('Invalid update JSON: missing version');
            return;
          }

          const lastVersion = localStorage.getItem('app_version_code');
          console.log(`Current: ${lastVersion}, Cloud: ${data.version}`);

          if (data.version === lastVersion) return;

          // Download Update
          const downloadUrl = data.url || `https://raw.githubusercontent.com/${repoUser}/${repoName}/${branch}/updates/dist.zip`;
          console.log(`Downloading update: ${downloadUrl}`);

          const bundle = await CapacitorUpdater.download({
            url: downloadUrl,
            version: data.version,
          });

          // Apply Update
          console.log('Update downloaded. Applying...');
          localStorage.setItem('app_version_code', data.version);
          await CapacitorUpdater.set(bundle);

        } catch (err) {
          console.error('Auto-Update Error:', err);
        }
      };

      // 5 saniye sonra güncelleme kontrolü yap
      setTimeout(checkUpdates, 5000);
    };

    startUpdater();
  }, []);

  return <div id="app-root" dangerouslySetInnerHTML={{ __html: appHtml }} />;
}

export default App;
