# Project Brief: Kurye Pro

## Overview
Kurye Pro is a specialized mobile-first web application designed for couriers in Istanbul. It provides a detailed map interface with custom markers for specific locations (like "Eğitim", "BskCami", etc.) to assist in navigation and delivery efficiency. The app is wrapped using Capacitor for potential native deployment but runs primarily as a robust web application.

## Core Features
- **Interactive Map:** Built with Leaflet.js, featuring clustering for high-density marker areas.
- **Custom Markers:** Specific icons and categories for courier-relevant locations.
- **Offline Capability:** A robust Service Worker (`sw.js`) ensures the app loads fast and works offline.
- **OTA Updates:** A custom "Force Update" mechanism checks `version.txt` to ensure all users are on the latest version (currently v44) without needing a full app store update.

## Project Goals
- Provide a reliable, fast map reference for field operations.
- Ensure easy updates for the development team to push data changes instantly.
- Maintain a simple, high-performance UI ("clean slate" philosophy).
