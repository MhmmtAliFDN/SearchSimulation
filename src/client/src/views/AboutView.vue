<template>
  <div class="description">
    <h1>WeightedSearch</h1>
    <p>
      WeightedSearch, VueJS, Python, MongoDB ve Docker kullanılarak geliştirilmiş bir arama motoru simülasyonudur. 
      Proje, arama sonuçlarının özelleştirilebilir ağırlıklar (puanlar) temelinde nasıl sıralanıp alınabileceğini gösterir.
    </p>
    <h2>Temel Özellikler:</h2>
    <ul>
      <li>
        <strong>VueJS Frontend:</strong> Kullanıcıların arama sorgularını girebileceği, Google tarzında temiz bir arayüz.
      </li>
      <li>
        <strong>Python API:</strong> Arama sorgularını işleyen ve ağırlıklara dayalı puanları hesaplayan bir backend servisi.
      </li>
      <li>
        <strong>MongoDB:</strong> Esnek ağırlık tabanlı sıralama mantığıyla veri depolama ve sorgulama işlemleri için bir veritabanı.
      </li>
      <li>
        <strong>Dockerized Kurulum:</strong> Sorunsuz dağıtım ve izole geliştirme ortamları sağlar.
      </li>
    </ul>
    <p>
      Bu proje, arama motorlarının çalışma mantığını ve sıralama algoritmalarını anlamak için harika bir temel sağlar. 
      Arama motorlarının temel ilkelerini pratik bir şekilde keşfetmek isteyen geliştiriciler ve meraklılar için mükemmeldir!
    </p>
  </div>
</template>

<script>
export default {
  name: "Description"
};
</script>

<style scoped>
.description {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}

ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

strong {
  color: #333;
}
</style>
