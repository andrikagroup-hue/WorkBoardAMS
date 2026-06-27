// Service worker minimal buat WorkBoard AMS.
// Sengaja TIDAK menyimpan cache index.html/data — app ini berbasis Supabase realtime,
// jadi harus selalu ambil versi terbaru dari internet. Kalau di-cache, nanti malah
// nyangkut di kode lama tiap kali ada update dari Claude.
// File ini cuma buat memenuhi syarat teknis "installable PWA" di Android/Chrome.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
