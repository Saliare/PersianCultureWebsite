
const CACHE_NAME = 'persian-culture-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles/global.css',
    '/images/hero-bg.jpg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('push', (event) => {
    const data = event.data ? event.data.text() : 'New update available!';
    event.waitUntil(
        self.registration.showNotification('Persian Culture Platform', {
            body: data,
            icon: '/images/icon-192x192.png',
            badge: '/images/icon-192x192.png'
        })
    );
});
