# Firebase Başlangıç Çökmesi Çözüm Rehberi

Uygulamanızın açılışta hemen çökmesinin en büyük nedeni **SHA-1 Parmak İzi Eksikliğidir**. Android'de Firebase Authentication (Google Girişi) kullanırken, uygulamanızın dijital imzasını (SHA-1) Firebase Console'a kaydetmeniz **zorunludur**. Aksi takdirde uygulama açılışta çöker.

## Sorun Nasıl Çözülür?

### 1. SHA-1 Parmak İzini Öğrenin
Terminalde şu komutu çalıştırarak SHA-1 anahtarınızı alın:
*(Proje klasörünüzde)*
```bash
keytool -list -v -keystore android/app/debug.keystore -alias androiddebugkey -storepass android -keypass android
```
Bu komut size `SHA1: XX:XX:XX...` şeklinde bir çıktı verecektir. O kodu kopyalayın.

### 2. Firebase Console'a Ekleyin
1.  [Firebase Console](https://console.firebase.google.com/) adresine gidin.
2.  **KuryePro** projenizi seçin.
3.  Sol üstteki **Dişli Simgesi** (Ayarlar) -> **Proje Ayarları**'na tıklayın.
4.  Sayfayı aşağı kaydırıp **Android Uygulamalarınız** bölümünü bulun (`com.kurye.pro`).
5.  **SHA Sertifika Parmak İzi Ekle** butonuna tıklayın.
6.  Kopyaladığınız SHA-1 kodunu yapıştırın ve **Kaydet** deyin.

### 3. google-services.json Güncelleme (Gerekirse)
Eğer SHA-1 ekledikten sonra `google-services.json` dosyasını indirip projenize tekrar atarsanız (şart değil ama önerilir), kimlik doğrulama sorunsuz çalışacaktır.

---

### Diğer Olası Nedenler
*   **İnternet İzinleri:** Uygulamanıza `ACCESS_NETWORK_STATE` iznini ekledim.
*   **API Key Uyuşmazlığı:** `firebase.js` dosyasındaki API anahtarını `google-services.json` ile eşitledim.

Lütfen bu adımları uyguladıktan sonra APK'yı tekrar oluşturup test edin.
