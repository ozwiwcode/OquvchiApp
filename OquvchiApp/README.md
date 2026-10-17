# OquvchiApp

APK is built automatically on GitHub (no local tools, no Expo account).

1. Create a free account at github.com and a new repository (any name).
2. Upload all files of this folder to the repository (drag and drop, keep folders).
   The file .github/workflows/build-apk.yml must be included.
3. Open the Actions tab, choose "Build APK", press Run workflow.
4. After 10-15 minutes open the finished run and download "OquvchiApp-apk" under Artifacts.
5. Unzip it and install the .apk on your phone.

Replace assets/logo-animation.mp4, icon.png and adaptive-icon.png with your own files before uploading.
