// install event
self.addEventListener('install', (e) => {
  console.log('[Service Worker] installed', e);
});

// activate event
self.addEventListener('activate', (e) => {
  console.log('[Service Worker] actived', e);
});

// fetch event
self.addEventListener('fetch', (e) => {
  console.log('[Service Worker] fetched resource ' + e.request.url);
  // 캐싱
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      } else {
        return fetch(e.request).then((response) => {
          return caches.open().then((cache) => {
            cache.put(e.request, response.clone());
            return response;
          });
        });
      }
    })
  );
});
// 백그라운드 실행에서 푸쉬 알림 받기
self.addEventListener('push', (e) => {
  const title = 'Push Notification';
  const options = {
    body: e.data.text(),
    icon: '/path/to/icon.png',
  };
  e.waitUntil(self.registration.showNotification(title, options));
});
// 서비스 워커가 인터넷 연결이 가능한 상태에서 동기화를 수행
self.addEventListener('sync', (e) => {
  if (e.tag === 'sync-queue') {
    e.waitUntil();
  }
});
// 메세지에 따른 동작
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
