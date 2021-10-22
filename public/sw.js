self.addEventListener('message', function (evt) {
  if(evt.update === 'cart'){
      self.skipWaiting();
      self.clients.claim();
      self.clients.matchAll().then((clients) => {
            clients.forEach((client) => client.postMessage('reload-window'));
      });
    }
})

self.addEventListener('install', function (event) {
    event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('activate', function(event) {
      event.waitUntil(clients.claim());
     self.skipWaiting();
});