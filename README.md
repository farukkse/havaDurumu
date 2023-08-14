
# OpenWeatherMap Hava Durumu Uygulaması

Bu JavaScript uygulaması, OpenWeatherMap API'sini kullanarak verilen şehir adına göre hava durumu bilgilerini çekip ekranda gösteren basit bir web sayfasıdır.


## Kurulum
- Bu projeyi kendi bilgisayarınıza klonlayın veya indirin.
- index.html dosyasını bir web tarayıcısında açın


## Kullanım
- Ana sayfa yüklendiğinde, varsayılan olarak İstanbul'un hava durumu bilgileri gösterilir.
- Sayfanın üst kısmındaki arama çubuğuna istediğiniz şehir adını yazın.
- Şehir adını girdikten sonra "Enter" tuşuna basın veya arama simgesine tıklayın.
- İstenilen şehre ait hava durumu bilgileri ekranda görüntülenir.
## Fonksiyonlar ve Değişkenler
- `url`: OpenWeatherMap API'nin temel URL'i.
- `myApiKey`: Kendi API anahtarınızı buraya ekleyin.
- `content`: Hava durumu bilgilerinin gösterileceği HTML elementi.
- `humadity`: Nem bilgisinin gösterileceği HTML elementi.
- `setQuery(event)`: Arama çubuğunda "Enter" tuşuna basıldığında çalışan fonksiyon.
- `searchBox`: Arama çubuğu HTML elementi.
- `getResult(cityName)`: Verilen şehir adıyla API'ye istek yaparak hava durumu bilgilerini getiren fonksiyon.
- `displayResult(result)`: API'den gelen hava durumu bilgilerini ekranda gösteren fonksiyon.
- `window.addEventListener('load', ...)`: Sayfa yüklendiğinde varsayılan olarak İstanbul'un hava durumu bilgilerini gösteren fonksiyon.
## Geri Bildirim

Herhangi bir geri bildiriminiz varsa, lütfen mr.forqu@gmail.com adresinden bana ulaşabilirsiniz.

  
## Katkı

Her türlü katkı ve öneriye açığız. Eğer projeye katkıda bulunmak isterseniz, "Issues" ve "Pull Requests" bölümlerini kullanabilirsiniz.
  
## Demo

https://havadurumuapi.netlify.app/

  
## Not
Bu proje OpenWeatherMap API'sini kullanmaktadır ve herhangi bir sorunla karşılaşmamanız için API anahtarınızı korumanız gerekmektedir. Ayrıca, tarayıcı konsolunda veya hata mesajlarında olası hataları kontrol etmeyi unutmayın.