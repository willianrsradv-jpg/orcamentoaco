var CACHE = 'orcamento-aco-v1';
var ARQUIVOS = [
  '/orcamento-aco/',
  '/orcamento-aco/index.html',
  '/orcamento-aco/manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(ARQUIVOS);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
