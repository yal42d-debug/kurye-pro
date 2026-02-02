# Product Context

## User Experience
The primary user is a courier operating in the field. Speed and clarity are paramount.
- **Launch:** The app must open instantly. A Service Worker caches assets aggressively.
- **Navigation:** Users pan and zoom a map of Istanbul. Markers are clustered to prevent visual clutter.
- **Updates:** When a new version is deployed, the app automatically detects it (checking `version.txt`) and refreshes to ensure the courier has the latest data.

## key Workflows
1. **Map Viewing:** User opens app -> Map loads centered on Istanbul -> User zooms in to see specific "BskCami" or "Eğitim" markers.
2. **Update Flow:** App opens -> Checks `version.txt` in background -> If version > current, wipes cache and reloads.

## Design Philosophy
- **Functional Minimalism:** UI elements are kept to a minimum (e.g., hidden attribution, simple controls) to maximize map screen real estate.
- **High Contrast/Visibility:** Markers are designed to be distinct (though "kırmızı araba" was a temporary test feature, now removed).
