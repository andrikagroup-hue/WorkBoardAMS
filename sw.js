// sw.js — WorkBoard AMS Service Worker
// Versi: 2.0 (Work-Break Alarm Push Notification support)
//
// Sengaja TIDAK cache index.html — app berbasis Supabase realtime,
// harus selalu ambil versi terbaru. Cache hanya bikin nyangkut di kode lama.
//
// Yang ditambahkan di v2: kemampuan tampilkan notifikasi sistem
// dari Work-Break Alarm, bahkan saat tab WorkBoard tidak aktif.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

// ── Work-Break Alarm: terima pesan dari tab, tampilkan notifikasi sistem ──
self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || data.type !== 'WBA_NOTIFY') return;

  const title = data.title || '⏰ WorkBoard Alarm';
  const body  = data.body  || '';
  const tag   = data.tag   || 'wba-alarm'; // tag sama = replace notif lama, tidak numpuk

  // Tampilkan notifikasi sistem
  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon:  'icon-192.png',
      badge: 'icon-192.png',
      tag,
      renotify: true,          // bunyikan lagi meski tag sama
      requireInteraction: false,
    })
  );
});

// Saat notifikasi diklik → buka/fokus tab WorkBoard
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Kalau tab WB sudah buka, fokus ke sana
      for (const client of clientList) {
        if (client.url.includes('WorkBoardAMS') && 'focus' in client) {
          return client.focus();
        }
      }
      // Kalau belum buka, buka tab baru
      if (self.clients.openWindow) {
        return self.clients.openWindow('/WorkBoardAMS/');
      }
    })
  );
});
