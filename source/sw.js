var cacheName = 'hello-world-page';
var filesToCache = [
    '/',
    '/index.html',
    '/bundle.js',
];

self.addEventListener('install', event => {
    console.log('[ServiceWorker] Install');
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate',  (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches
            .match(event.request, {ignoreSearch:true})
            .then(response => {
                return response || fetch(event.request);
            })
    );
});