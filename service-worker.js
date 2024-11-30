// Einfacher Service Worker
self.addEventListener('install', event => {
    console.log('Service Worker installiert.');
});

self.addEventListener('activate', event => {
    console.log('Service Worker aktiviert.');
});