# Çanakkale Onsekiz Mart Üniversitesi Bilgisayar Mühendisliği 4. Sınıf Bilgi Erişim Sistemleri Örnek Projesi


## Geliştirme Yönlendirmeleri

##### Ortam Gereksinimleri
* Docker Desktop
* Node.Js
* MongoDBCompass ile mongodb'ye bağlanılır(adres: user: password:)
* Compass üstünden search_db isminde bir db oluşturulur ve news isimli collection yaratılır.
* news isimli collection'a girilir ve jsn file import ile haberler.json dosyası yüklenir(https://bit.ly/comu_samples).


#### Client uygulaması'nın development süreci için (Client Application - Vue);

```bash
cd .\src\client\

#Peketlerin yüklenmesi
npm install

#Uygulamanın development modda çalıştırılması
npm run dev
```

#### Backend uygulaması'nın development süreci için(Backend Application - Python);
```bash
cd .\src\
#python virtual environment oluşturulacak
python -m venv comu
.\comu\Scripts\activate

#proje içine girilerek gerekli python paketleri install edilmeli
cd .\backend\
pip install -r requirements.txt
```

```bash
#uygulamanın local ortamda ayağa kaldırılması
uvicorn main:app --host 0.0.0.0 --port 8080
```

```bash
#api test
curl http://localhost:8080/samples/testtt
```



## Uygulamanın ayağa kaldırılması(Docker Desktop)
Bu aşamada tüm uygulamalar uçtan uca birileri ile çalışır halede hazır olacaklardır.
```bash
cd .\src\
#Derleme
docker compose -f dockercompose.yaml build

#Çalıştırılması
docker compose -f dockercompose.yaml up
```

Uygulama ayağa kalktığında docker desktop üstünden ayağa kalkan pod'lar running statüye geçecektir.


## Notlar
#### 25.12.2023
* Derste yapılan client uygulamasının yeri client klasörünün altına taşındı
* Client uygulaması stil hataları düzeltildi


## Ödev
* MongoDB üstünde full text search için gerekli index oluşturulmalı. Oluşturulacak index Apache Lucene analyzer'larından olmalı. Token ve Weight düzenlemeleri yüklenen örneğe göre redesign edilmeli.
