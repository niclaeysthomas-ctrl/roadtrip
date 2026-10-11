// Service worker : met l'appli en cache pour qu'elle marche hors-ligne.
const CACHE = "roadtrip-v3";
const FILES = ["./", "index.html", "css/style.css", "data/vocab1.js", "data/vocab2.js", "data/vocab3.js", "data/vocab4.js", "data/vocab5.js", "data/vocab6.js", "data/phrases.js", "data/phrases2.js", "data/readings1.js", "data/readings2.js", "data/readings3.js", "data/readings4.js", "data/situations.js", "data/situations2.js", "data/extra.js", "data/grammar1.js", "data/grammar2.js", "data/grammar3.js", "data/placement.js", "js/app.js", "js/grammar.js", "js/level.js", "manifest.webmanifest", "icon.svg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// Réseau d'abord (pour recevoir les mises à jour), cache si hors-ligne.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {}); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});
