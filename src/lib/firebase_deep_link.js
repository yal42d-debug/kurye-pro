// Deep Link'i Dinle (Token Destekli)
if (Capacitor.isNativePlatform()) {
    CapApp.addListener('appUrlOpen', async (event) => {
        const url = event.url;
        if (url.startsWith('kuryepro://auth')) {
            const params = new URL(url).searchParams;
            const uid = params.get('uid');
            const token = params.get('token'); // ID Token
            const name = params.get('name');
            const email = params.get('email');

            if (token) {
                try {
                    const { GoogleAuthProvider, signInWithCredential } = await import("firebase/auth");
                    const credential = GoogleAuthProvider.credential(token);
                    const result = await signInWithCredential(auth, credential);

                    // Başarılı giriş
                    await saveUserToDB(result.user);
                    cacheUserLocally(result.user);

                    try { await Browser.close(); } catch (_) { /* no-op */ }
                    window.location.reload();
                    return;

                } catch (e) {
                    console.error("Deep Link Auth Error:", e);
                    alert("Oturum açılamadı: " + e.message);
                }
            } else if (uid) {
                // Token yoksa sadece lokal (Eski yöntem - Veritabanına erişemez!)
                alert("Uyarı: Tam yetkili giriş yapılamadı. Bazı özellikler çalışmayabilir.");
                localStorage.setItem('firebase_uid', uid);
                localStorage.setItem('user_name', name || 'Kullanıcı');
                localStorage.setItem('user_email', email || '');
                try { await Browser.close(); } catch (_) { /* no-op */ }
                window.location.reload();
            }
        }
    });
}
