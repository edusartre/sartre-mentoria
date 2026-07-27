// Service worker — offline real para o site publicado (Netlify/GitHub Pages)
// Estratégia: stale-while-revalidate no documento (serve do cache na hora e
// atualiza em 2º plano) — economiza banda; cache-first para o resto.
const CACHE = 'sartre-v6';

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

  // stale-while-revalidate para assets mesma-origem: serve do cache NA HORA
  // (os pacotes de conteúdo têm MBs — refetch a cada visita era o gargalo)
  // e atualiza em 2º plano para a próxima visita.
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req);
    const refetch = fetch(req).then(fresh => {
      if (fresh && fresh.status === 200) cache.put(req, fresh.clone());
      return fresh;
    }).catch(() => null);
    if (cached) return cached; // o refetch segue em 2º plano e renova o cache
    const fresh = await refetch;
    return fresh || Response.error();
  })());
});
