# PROTOKOL-7 teaser sitesi

Düz HTML. Derleme yok, kurulum yok.

## Değiştirmek için
Sadece `config.js` dosyasını aç: çıkış tarihi, müzik, e-posta adresi, sosyal linkler ve yazılar orada.
Değiştir, kaydet, GitHub'a push et. Site kendiliğinden güncellenir.

## Müzik
1. Gemini'den indirdiğin mp3'ü `assets/music.mp3` olarak kaydet.
2. `config.js` içinde `music: 'assets/music.mp3'` yaz.
3. Push et. Sağ üstteki SES butonuna basınca çalar (tarayıcılar otomatik çalmaya izin vermez).

## Yayınlamak (Cloudflare Pages, ücretsiz)
1. Bu klasörü GitHub'a bir repo olarak yükle.
2. Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git.
3. Repoyu seç. Build command boş, output directory `/` (boş) kalsın. Deploy.
4. Her push yeni sürümü otomatik yayınlar.

Alternatifler: Netlify (aynı adımlar) veya GitHub Pages (Settings > Pages > Deploy from branch > main / root).

## Test
Bilgisayarda çift tıklayıp `index.html`'i açman yeterli.
