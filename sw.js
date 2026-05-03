const CACHE = "textoquest-v2";
const FILES = [
  "./index.html",
  "./game.html",
  "./style.css",
  "./core.js",
  "./manifest.json",
  // Assets globaux
  "./assets/TextoQuest.png",
  "./assets/logo/logo_TextoQuest.png",
  // Favicon
  "./assets/favicon/android-chrome-192x192.png",
  "./assets/favicon/android-chrome-512x512.png",
  "./assets/favicon/favicon.ico",
  "./assets/favicon/favicon_TextoQuest.png",
  // Story 1
  "./stories/story-1/story.js",
  "./stories/story-1/style.css",
  "./stories/story-1/bg.png",
  "./stories/story-1/cover.png",
  // Story 3
  "./stories/story-3/story.js",
  "./stories/story-3/style.css",
  "./stories/story-3/bg.png",
  "./stories/story-3/cover.png",
];

self.addEventListener("install", (e) =>
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES))),
);

self.addEventListener("activate", (e) =>
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
        ),
      ),
  ),
);

self.addEventListener("fetch", (e) =>
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request))),
);
