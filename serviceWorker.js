const staticDevPWA = "FEWS-v1.9.2023";
const assets = [
  "/",
  "/index.html",
  "/about.html",
  "/get_result.html",
  "/view_result.html",
  "/resources.html",
  "/serviceWorker.js",
  "/offline.html"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevPWA).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});