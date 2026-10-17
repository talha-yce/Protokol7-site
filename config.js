/* PROTOKOL-7 site ayarları. Sadece bu dosyayı düzenle, index.html'e dokunma. */
window.P7 = {

  /* Çıkış tarihi. Boş bırakırsan "BELİRSİZ" yazar.
     Tarih yazarsan geri sayım açılır. Örnek: '2027-03-01T18:00:00+03:00' */
  release: '',

  /* Müzik. Dosyayı assets/ klasörüne koy ve yolunu yaz. Örnek: 'assets/music.mp3'
     Boş bırakırsan sayfa kendi ürettiği ambient sesi çalar. */
  music: '',

  /* E-posta formunun gönderileceği adres (Formspree vb.). Boşsa form "kayıtlar henüz açılmadı" der. */
  endpoint: '',

  /* Sosyal linkler. Boş bırakılan "yakında" kutusu olarak görünür.
     Satırı silersen o buton hiç görünmez. Örnek: 'X': 'https://x.com/kullaniciadin' */
  links: {
    'X': '',
    'TikTok': '',
    'Reddit': '',
    'itch.io': ''
  },

  /* Ana sayfada sırayla yazılan gizemli cümleler. Dilediğin kadar ekle. */
  messages: [
    'Henüz değil.',
    'Bir şey uyanıyor.',
    'Sana göründüğü kadar sessiz değil.',
    'Yakında.'
  ]

  /* İstersen üstteki kayan şerit yazılarını da değiştirebilirsin (4 mod: Ham, Düşman, Yapı, Dokunuş):
  , ticker: [
      ['ÇOK YAKINDA', 'BİR ŞEY UYANIYOR'],
      ['SENİ GÖRÜYORLAR', 'HAREKET ETME'],
      ['DUVARLAR YALAN SÖYLER', 'ARKASINA BAK'],
      ['DOKUN', 'BİR ŞEY KARŞILIK VERİR']
    ]
  */
};
