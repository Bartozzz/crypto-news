/* eslint no-console:0 */
/* global self, caches, fetch */

const cacheName = "crypto-news-1.0";

const urlsToCache = [
  // Generated bundle:
  "app.js",
  "index.html",

  // Images:
  "favicon.ico",
  "images/bg.svg",
  "images/map.png"
];

// Install/cache page assets:
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("Cache opened");

      return cache.addAll(urlsToCache);
    })
  );
});

// Intercept page requests:
self.addEventListener("fetch", event => {
  console.log(event.request.url);

  event.respondWith(
    // Serve requests from cache (if found):
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Service worker activated, remove outdated cache:
self.addEventListener("activate", event => {
  console.log("Worker activated");

  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          // // Filter old versioned keys
          .filter(key => key !== cacheName)
          .map(key => caches.delete(key))
      )
    )
  );
});
