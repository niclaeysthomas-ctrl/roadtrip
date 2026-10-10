// Service worker : met l'appli en cache pour qu'elle marche hors-ligne.
const CACHE = "roadtrip-v1";
const FILES = ["./", "index.html", "css/style.css", "js/app.js", "data/vocab1.js", "data/vocab2.js", "data/vocab3.js",
  "data/phrases.js", "data/readings1.js", "data/readings2.js", "data/situations.js", "manifest.webmanifest", "icon.svg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// Réseau d'abord (pour recevoir les mises à jour), cache si hors-ligne.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {}); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});
