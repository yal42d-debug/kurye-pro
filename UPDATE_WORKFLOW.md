# KuryePro Update & Deployment Workflow

This document serves as the **Memory Bank** for the update system. All agents working on this project must follow these procedures when the user requests an "update" or "deploy".

## 🚀 The OTA Update System
We use **Over-the-Air (OTA)** updates to sync the React/Web app changes to the user's phone without reinstalling the APK.
- **Tools:** `@capgo/capacitor-updater` + GitHub Raw Files.
- **Trigger:** The app automatically checks for updates 5 seconds after launch.

## 🛠 How to Publish a New Update

When the user asks to "update", "publish", or "send changes to phone", follow this Strict Workflow:

### 1. Make Code Changes
Perform your edits to `src/` files as requested.

### 2. Run the Publisher Script
We have a dedicated script that handles building, versioning, and zipping.
```bash
./publish_update.sh
```
*What this script does:*
- Runs `npm run build` (Vite build)
- Generates a timestamp-based version ID
- Update `updates/version.json`
- Zips the `www/` folder into `updates/dist.zip`

### 3. Push to GitHub
The app on the phone looks at the GitHub repository. You **MUST** push the changes.
```bash
git add .
git commit -m "New update: [Short Description]"
git push
```

## 🚨 Critical Rules for Agents
1.  **Do NOT touch `sw.js`**: Service Workers are disabled to prevent update loops. Do not re-enable them.
2.  **Backdrop Filters**: Do NOT use `backdrop-filter: blur()`. It causes severe lag on the user's Android device. Use solid or semi-transparent colors instead.
3.  **Native Changes**: If you modify `android/` folder (Gradle, Manifest, Plugins), OTA update is **NOT** enough. You must tell the user: *"This change requires a new APK install."*
4.  **Passive Listeners**: Always use `{ passive: true }` for scroll/touch listeners.

## 📱 Debugging Updates
If the user says "I didn't get the update":
1.  Check if `publish_update.sh` ran successfully.
2.  Check if `git push` was successful.
3.  Tell the user to **close and reopen** the app exactly twice (Once to download, once to apply).
