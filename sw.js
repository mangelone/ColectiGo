// Service worker mínimo: solo necesario para que el navegador
// considere la página "instalable" como app. No cachea nada crítico.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
