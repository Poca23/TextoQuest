const CACHE = "textoquest-v5";
const FILES = [
  // Pages
  "./index.html",
  "./game.html",

  // Styles & scripts globaux
  "./style.css",
  "./core.js",
  "./manifest.json",

  // Assets globaux
  "./assets/index-library.css",
  "./assets/responsive.css",
  "./assets/library.png",
  "./assets/logo/logo_TextoQuest.png",

  // Favicons
  "./assets/favicon/android-chrome-192x192.png",
  "./assets/favicon/android-chrome-512x512.png",
  "./assets/favicon/apple-touch-icon.png",
  "./assets/favicon/favicon-16x16.png",
  "./assets/favicon/favicon-32x32.png",
  "./assets/favicon/favicon.ico",
  "./assets/favicon/favicon_TextoQuest.png",

  // Story 1 – La Forêt des Murmures
  "./stories/story-1_La_Foret_des_Murmures/story.js",
  "./stories/story-1_La_Foret_des_Murmures/style.css",
  "./stories/story-1_La_Foret_des_Murmures/bg.png",
  "./stories/story-1_La_Foret_des_Murmures/cover.png",

  // Story 2 – Le Nain Grognon
  "./stories/story-2_le_Nain_Grognon/story.js",
  "./stories/story-2_le_Nain_Grognon/style.css",
  "./stories/story-2_le_Nain_Grognon/bg.png",
  "./stories/story-2_le_Nain_Grognon/cover.png",

  // Story 3 – L'Hirondelle Blanche
  "./stories/story-3_l_Hirondelle_Blanche/story.js",
  "./stories/story-3_l_Hirondelle_Blanche/style.css",
  "./stories/story-3_l_Hirondelle_Blanche/bg.png",
  "./stories/story-3_l_Hirondelle_Blanche/cover.png",

  // Story 4 – L'Épreuve Cachée
  "./stories/story-4_l_Epreuve_cachee/story.js",
  "./stories/story-4_l_Epreuve_cachee/style.css",
  "./stories/story-4_l_Epreuve_cachee/bg.png",
  "./stories/story-4_l_Epreuve_cachee/cover.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) =>
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  ),
);

self.addEventListener("fetch", (e) =>
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request))),
);
