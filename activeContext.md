# Active Context

## Current State
- **Version:** v34 (Reset Base)
- **Status:** Android APK (Debug) + OTA Update System active.
- **Service Worker:** DISABLED (to fix reload loops).
- **Core:** React + Capacitor 6.

## Recent History
- **Optimization:** Fixed Android scroll lag by removing `backdrop-filter` and adding passive listeners.
- **Fix:** Downgraded Capacitor & Android SDK to fix build errors.
- **Feature:** Implemented GitHub-based Auto Update (`CapacitorUpdater`).

## Active Tasks
- **Memory Bank:** Created `UPDATE_WORKFLOW.md` for agents.
- **Deployment:** User has the base APK, now future updates will be pushed via `publish_update.sh`.

## Open Issues / TODOs
- Monitor GitHub Raw caching (latency in updates).
- Maintain `UPDATE_WORKFLOW.md` for future agents.
