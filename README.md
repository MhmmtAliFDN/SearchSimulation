# Geliştirme Yönlendirmeleri

### Ortam Gereksinimleri
* VSCode IDE
* Docker Desktop
* VSCode - Docker Extension
* VSCode - MongoDB for VS Code Extension
* VSCode - Python & Vue - Offical Extensions (Opsiyonel)

### Uygulamanın Ayağa Kaldırılması(Docker Desktop)
```bash
# \src Dizinine Git
cd .\src\

# Projeyi Docker ile Derle
docker compose -f docker-compose.yml build

# Projeyi Ayağa Kaldır
docker compose -f docker-compose.yml up

# MongoDB Connection String ile Veri Tabanına Bağlan
mongodb://myuser:mymongodbUser01!@localhost:27017/

# MongoDB Database ve Collection Oluşturma
cd .\src\database

Execute playground-1.createCollection.mongodb.js
Execute playground-2.createIndex.mongodb.js

# Arama Motorunu Denemek İçin Örnekler
cd .\src\database

Execute playground-3.aggregate.mongodb.js
Execute playground-4.aggregate.mongodb.js
Execute playground-5.query.mongodb.js
```

### Kendi Verilerinizi Koymak İstiyorsanız
* Yukarıdaki 'MongoDB Database Oluşturma' aşamasına kadar aynı şekilde yap.
* playground-1.createCollection.mongodb.js dosyasına git.
* `const database & const collection` isimlerini değiştir.
* `db.<senin_collection_adın.insertMany` kısmına kendi json verilerini yaz.
* playground-2.createIndex.mongodb.js dosyasına git.
* Index'i kendi verilerine göre yapılandır. Ağırlıkları ve isimleri değiştir.
* `db.<senin_collection_adın>.createIndex` yapmayı unutma.
* Çalıştır. Eğer MongoDB Extension yüklü ise sağ üstte içi dolu Play butonu kısayolunu kullanabilirsin.
* Vue.js dosyasını kendi veri tabanına göre kodla. ChatGPT bu konuda yardımcı oluyor.
* İstersen hiç Vue.js ile tasarım yapmadan playground-3/4/5 dosyalarındaki gibi sorgu çalıştırabilirsin 

#### Ek Not
* Tüm bunları VSCode dışında farklı IDE'ler ve MongoDB Compass, Docker Desktop gibi programların arayüzlerini kullanarak da yapabilirsin.
* Hatta Docker Desktop kullanmadan da Vue & Python'ın paketlerini kurup da çalıştırabilirsin.
