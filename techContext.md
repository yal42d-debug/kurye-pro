# Tech Context

## Technology Stack
- **Language:** JavaScript (ES6+), HTML5, CSS3.
- **Libraries:**
    - [Leaflet.js](https://leafletjs.com/) (v1.7.1) - Map rendering.
    - [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) - Clustering markers.
    - [FontAwesome](https://fontawesome.com/) - Icons.
- **Mobile Wrapper:** [Capacitor](https://capacitorjs.com/) (v3.x estimated) - Bridges web app to native Android.
- **Backend:** Static file hosting (GitHub Pages or similar static server).

## Development Environment
- **OS:** macOS.
- **Tools:** VS Code, Git.
- **Package Manager:** npm (primarily for Capacitor dependencies).

## Build & Deployment
- **Web:** No compilation needed. `git push` deploys to source.
- **Android:** `npx cap sync android` -> Open in Android Studio -> Build APK.
- **Update Cycle:**
    1. Modify code.
    2. Increment `CURRENT_APP_VERSION` in `index.html`.
    3. Update `version.txt`.
    4. Update `CACHE_NAME` in `sw.js`.
    5. Commit & Push.
