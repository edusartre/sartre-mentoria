// Service worker — offline real para o site publicado (Netlify/GitHub Pages)
// Estratégia: stale-while-revalidate no documento (serve do cache na hora e
// atualiza em 2º plano) — economiza banda; cache-first para o resto.
const CACHE = 'sartre-v5';

self.addEventListener('install', (e) => { self.skipWaiting(); });

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // não intercepta CDNs externas

  const isDoc = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  if (isDoc) {
    // network-first: sempre tenta a versão nova; usa cache só se estiver offline.
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const fresh = await fetch(req);
        if (fresh && fresh.status === 200) { cache.put(req, fresh.clone()); cache.put('/', fresh.clone()); }
        return fresh;
      } catch (err) {
        return (await cache.match(req)) || (await cache.match('/')) || Response.error();
      }
    })());
    return;
  }

  // network-first para assets mesma-origem (garante versão nova; cache só offline)
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const fresh = await fetch(req);
      if (fresh && fresh.status === 200) cache.put(req, fresh.clone());
      return fresh;
    } catch (err) {
      return (await cache.match(req)) || Response.error();
    }
  })());
});
