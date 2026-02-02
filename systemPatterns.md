# System Patterns

## Architecture
- **Single Page Application (SPA):** The core logic resides in `index.html` inline scripts and external JS files.
- **Client-Side Rendering:** Leaflet.js renders the map on the client side. Data is loaded from local JS files (`egitim_marker_cluster_group.js`, `bskcami_marker_cluster_group.js`).
- **Service Worker Strategy:** `sw.js` implements a Cache-First strategy for static assets to ensure offline functionality. It uses a versioned cache name (e.g., `kurye-pro-v44-clean-slate`) to manage updates.

## Key Technical Decisions
- **No Build Step (mostly):** The web part uses raw HTML/JS/CSS. There is no Webpack/Vite build process for the web assets, allowing for simple debugging and deployment.
- **Global Leaflet Objects:** `map`, `L`, and marker groups are available in the global scope for simplicity in this specific project context.
- **Version Control in App:** `version.txt` acts as the source of truth for the deployed version. The app polls this file. If the fetched version > `CURRENT_APP_VERSION`, it triggers a cache wipe and reload.

## Code Organization
- `index.html`: Entry point, UI structure, and main logic.
- `sw.js`: Service Worker for caching and offline support.
- `*.js`: Helper files for marker data and map logic.
- `android/`: Native Android project files (managed by Capacitor).
