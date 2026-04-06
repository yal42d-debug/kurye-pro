#!/bin/bash
set -e

echo "🚀 KuryePro Güncelleme Yayınlayıcı"

# 1. Build al
echo "📦 Build alınıyor..."
npm run build

# 2. Versiyon oluştur (version.txt'den al)
VERSION=$(cat version.txt)
echo "🏷  Yeni versiyon ID: $VERSION"

# 3. JSON dosyasını güncelle
echo "{\"version\": \"$VERSION\", \"url\": \"https://github.com/yal42d-debug/kurye_pro/raw/main/updates/KuryePro_v45.apk\"}" > updates/version.json

# 4. Zip oluştur (MacOS zip komutu)
echo "🤐 Zip dosyası oluşturuluyor..."
cd www
zip -r ../updates/dist.zip .
cd ..

# 5. Git'e gönder
echo "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
echo "✅ Güncelleme paketi hazır!"
echo "Şimdi güncellemek için şu komutları çalıştır:"
echo ""
echo "git add updates/"
echo "git commit -m \"Update app version $VERSION\""
echo "git push"
echo "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
