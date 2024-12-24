# Geliştirme Yönlendirmeleri

### Ortam Gereksinimleri
* VSCode IDE
* Docker Desktop
* VSCode - Docker Extension
* VSCode - MongoDB for VS Code Extension
* VSCode - Python & Vue - Offical Extensions (Opsiyonel)

### Uygulamanın Ayağa Kaldırılması(Docker Desktop)
```bash
# SRC Dizinine Git
cd .\src\

# Derleme
docker compose -f docker-compose.yml build

# Çalıştırılması
docker compose -f docker-compose.yml up

# MongoDB Connection String
mongodb://myuser:mymongodbUser01!@localhost:27017/

# MongoDB Database Oluşturma
cd .\src\database

Execute playground-1.mongodb.js
```

### Kendi Verilerinizi Koymak İstiyorsanız
* Yukarıdaki 'MongoDB Database Oluşturma' aşamasına kadar aynı şekilde yap.
* playground-1.mongodb.js dosyasındaki `const database & const collection` isimlerini değiştir.
* `db.<senin_collection_adın.createIndex` yapmayı unutma.
* Index'i kendi verilerine göre yapılandır. Ağırlıkları ve isimleri değiştir.
* `db.<senin_collection_adın.insertMany` kısmına kendi json verilerini yaz.
* Çalıştır. Eğer MongoDB Extension yüklü ise sağ üstte içi dolu Play butonu kısayolunu kullanabilirsin.

#### Ek Not
* Tüm bunları VSCode dışında farklı IDE'ler ve MongoDB Compass, Docker Desktop gibi programların arayüzlerini kullanarak da yapabilirsin.
* Hatta Docker Desktop kullanmadan da Vue & Python'ın paketlerini kurup da çalıştırabilirsin.
