# System Patterns

## Architecture
- **Framework:** React 18 + Vite + TailwindCSS.
- **Mobile Runtime:** Capacitor 6 (Android).
- **State Management:** React Global Context / Direct DOM manipulation (Legacy hybrid).

## Deployment & Updates
- **Strategy:** Over-the-air (OTA) updates via `@capgo/capacitor-updater`.
- **Source of Truth:** GitHub Repository (`yal42d-debug/kurye_pro`).
- **Update Check:**
  - App checks `https://raw.githubusercontent.com/.../version.json` on launch.
  - If version mismatches, downloads `dist.zip` from GitHub Raw.
- **Native Updates:** Requires manual APK build only when changing native dependencies (Gradle, Plugins).

## Key Technical Decisions
- **Passive Scroll Listeners:** Used to improve scroll performance on Android.
- **No Glassmorphism:** Backdrop-filters are removed for Android GPU performance optimization.
- **Service Worker:** Disabled to prevent caching loops and conflicts with Capacitor Updater.
- **Auto-Publish Script:** `./publish_update.sh` handles building, version bumping, zipping, and preparing for Git push.

## Code Organization
- `src/`: React source code (`App.jsx`, `logic/`, `styles/`).
- `www/`: Compiled production assets (created by `npm run build`).
- `updates/`: Contains `version.json` and `dist.zip` for remote updates.
- `android/`: Native Android project files.
