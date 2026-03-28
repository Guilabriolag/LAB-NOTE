self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("lab-ideas").then(cache =>
      cache.addAll(["index.html"])
    )
  );
});
