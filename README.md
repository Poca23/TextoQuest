# README – TextoQuest · L'Enquêteur du Récit

---

## Table des matières

1. [Présentation](#1-présentation)
2. [Parcours de l'élève](#2-parcours-de-lélève)
3. [Structure du projet](#3-structure-du-projet)
4. [Architecture technique](#4-architecture-technique)
5. [Format d'une histoire (`story.js`)](#5-format-dune-histoire-storyjs)
6. [Fonctionnement pédagogique](#6-fonctionnement-pédagogique)
7. [Personnalisation & extensibilité](#7-personnalisation--extensibilité)
8. [Lancer le projet](#8-lancer-le-projet)
9. [Auteure & contact](#9-auteure--contact)

---

## 1. Présentation

**TextoQuest** est une application web pédagogique interactive destinée aux élèves
de collège (cycle 3–4). Elle propose un parcours de lecture en plusieurs phases
autour d'un extrait littéraire : puzzle narratif, QCM et questions à réponse libre.

|                     |                                                      |
| ------------------- | ---------------------------------------------------- |
| 📚 **Histoires**    | 3 récits de niveaux 1 à 3 (extensible)               |
| 🎯 **Objectif**     | Comprendre, analyser et interroger un texte narratif |
| 👤 **Public cible** | Élèves de 10 à 14 ans                                |
| 🛠️ **Technologies** | HTML · CSS · JavaScript vanilla                      |
| 📦 **Dépendances**  | Aucune                                               |
| 📅 **Version**      | v1.0 – Mai 2026                                      |

---

## 2. Parcours de l'élève

```

Accueil (index.html)
└─► Choix d'une histoire
└─► Intro (titre + description)
└─► Lecture du texte
└─► Phase 1 : Puzzle drag-and-drop
└─► Phase 2 : QCM (simple ou multiple)
└─► Phase 3 : Questions à réponse libre
└─► Résultat & badge

```

Le nombre et le type des phases sont entièrement définis dans le fichier
`story.js` de chaque histoire — la structure est flexible.

### Badges de fin de parcours

| Score (réponses libres réussies) | Badge                   |
| -------------------------------- | ----------------------- |
| 0 – 1                            | 🔎 Détective débutant   |
| 2                                | 🕵️ Inspecteur en herbe  |
| 3                                | 🏅 Grand Inspecteur     |
| 4                                | 🌟 Détective Légendaire |

> Les seuils et les intitulés des badges sont configurables dans chaque `story.js`.

---

## 3. Structure du projet

```

textoquest/
├── index.html # Accueil – liste des histoires
├── game.html # Moteur de jeu (toutes les phases)
├── core.js # Logique applicative centrale
├── style.css # Thème global partagé
├── manifest.json # Configuration PWA
├── sw.js # Service Worker (cache offline)
├── README.md
│
├── assets/
│ ├── favicon/ # Icônes navigateur & PWA
│ │ ├── android-chrome-192x192.png
│ │ ├── android-chrome-512x512.png
│ │ ├── apple-touch-icon.png
│ │ ├── favicon-16x16.png
│ │ ├── favicon-32x32.png
│ │ ├── favicon.ico
│ │ └── favicon_TextoQuest.png
│ ├── logo/
│ │ └── logo_TextoQuest.png
│ ├── index-library.css # Styles propres à la page d'accueil
│ ├── responsive.css # Media queries globales
│ └── library.png # Illustration de fond de l'accueil
│
└── stories/
├── story-1/ # La Forêt des Murmures (niveau 1)
│ ├── story.js # Contenu complet de l'histoire
│ ├── style.css # Surcharge de thème (couleurs…)
│ ├── bg.png # Image de fond
│ └── cover.png # Vignette sur la page d'accueil
├── story-2/ # (niveau 2)
│ └── …
└── story-3/ # L'Épreuve Cachée (niveau 3)
└── …

```

> Le projet est volontairement sans bundler ni framework pour faciliter le
> déploiement et la prise en main par un non-développeur.

---

## 4. Architecture technique

### `core.js` — contrôleur central

```

┌──────────────────────────────────────────────┐
│ ÉTAT DE SESSION │
│ story · phaseIndex · score │
│ attempts · dragSrc │
│ \_touchSrc · \_touchOrigin │
│ \_touchOffX/Y · \_blockStartX/Y │
├──────────────────────────────────────────────┤
│ ROUTEUR D'ÉCRANS │
│ show(id) → active/inactive sur .screen │
├──────────────────────────────────────────────┤
│ MOTEUR DE PHASES (dispatch par type) │
│ "drag-drop" → \_renderDragDrop() │
│ "qcm" → \_renderQCM() │
│ "free-text" → \_renderFreeText() │
├──────────────────────────────────────────────┤
│ HELPERS TRANSVERSAUX │
│ highlightHints() · \_showResult() │
│ \_matchKeywords() · \_buildStamps() │
└──────────────────────────────────────────────┘

```

### Gestion des écrans

Chaque vue est un `<div class="screen">` dans `game.html`.
`show(id)` bascule la classe `.active` sur l'écran ciblé.

```

index.html
└─► game.html?story=story-3
├── #screen-intro
├── #screen-reading
├── #screen-phase ← réutilisé pour chaque phase
└── #screen-result

```

### Chargement dynamique des histoires

`game.html` lit le paramètre `?story=` dans l'URL, injecte le script
`stories/<id>/story.js` correspondant, puis appelle `Core.init(STORY)`.

```js
const sid = new URLSearchParams(location.search).get("story") || "story-1";
const s = document.createElement("script");
s.src = `stories/${sid}/story.js`;
s.onload = () => Core.init(STORY);
document.head.appendChild(s);
```

### Validation des réponses libres

La correction repose sur des **groupes de mots-clés** :

```js
keywords: [
  { group: "Description", words: ["blanc", "blanche", "différent"] },
  { group: "Raison", words: ["rejet", "seule", "regard"] },
];
```

Une réponse est acceptée si **chaque groupe** contient au moins un mot
présent dans la saisie de l'élève (insensible à la casse).

### Système d'aide progressive (réponses libres)

```
Tentative 1 → message d'erreur + liste des groupes manquants
Tentative 2 → idem
Tentative 3 → surlignage automatique des passages-clés dans le texte
             + indice passé en « résolu sans point »
```

### Drag & Drop — double support souris / tactile

| Interaction    | Événements utilisés                           |
| -------------- | --------------------------------------------- |
| 🖱️ Souris / PC | `dragstart` · `dragover` · `drop` · `dragend` |
| 👆 Tactile     | `touchstart` · `touchmove` · `touchend`       |

Le bloc glissé se déplace via `transform: translate()` calculé depuis sa
**position initiale** (`_blockStartX/Y`) — sans clone, sans dérive.
Les listeners `touchmove` et `touchend` sont attachés au `document` une
seule fois pour garantir le nettoyage même si le doigt sort du bloc.

### PWA — fonctionnement hors ligne

| Fichier         | Rôle                                      |
| --------------- | ----------------------------------------- |
| `manifest.json` | Métadonnées d'installation (nom, icônes…) |
| `sw.js`         | Cache toutes les ressources statiques     |

---

## 5. Format d'une histoire (`story.js`)

Chaque histoire expose une constante globale `STORY` :

```js
const STORY = {
  id: "story-3", // doit correspondre au nom du dossier
  title: "L'Épreuve Cachée",
  description: "Ta mission : …",
  background: "stories/story-3/bg.png",
  cover: "stories/story-3/cover.png",
  level: 3, // affiché sur la carte d'accueil
  text: `<p>Le texte HTML…</p>`,

  phases: [
    // ── Type 1 : puzzle drag-and-drop ──────────────
    {
      type: "drag-drop",
      title: "🔍 Remets l'histoire dans l'ordre",
      instructions: "Glisse les blocs…",
      blocks: [
        { id: 0, label: "Le début", text: "Résumé du bloc 0." },
        { id: 1, label: "La découverte", text: "Résumé du bloc 1." },
        // … id consécutifs depuis 0
      ],
    },

    // ── Type 2 : QCM ───────────────────────────────
    {
      type: "qcm",
      title: "❓ Question",
      instructions: "",
      question: "Quel animal Léa rencontre-t-elle ?",
      multiple: false, // true → cases à cocher
      options: [
        { text: "Un loup", correct: false },
        { text: "Un renard", correct: true },
      ],
    },

    // ── Type 3 : réponses libres ───────────────────
    {
      type: "free-text",
      title: "🕵️ Interroge le texte",
      instructions: "",
      clues: [
        {
          number: "Indice 1 / 4",
          type: "🧍 Personnages",
          question: "Décris Alba et explique pourquoi elle quitte son nid.",
          keywords: [
            { group: "Description", words: ["blanc", "différent"] },
            { group: "Raison", words: ["rejet", "regard"] },
          ],
          hints: ["entièrement blanche", "elle prit sa décision"],
        },
      ],
    },
  ],

  badges: [
    { min: 0, max: 1, icon: "🔎", title: "Détective débutant", subtitle: "…" },
    { min: 2, max: 2, icon: "🕵️", title: "Inspecteur en herbe", subtitle: "…" },
    { min: 3, max: 3, icon: "🏅", title: "Grand Inspecteur", subtitle: "…" },
    {
      min: 4,
      max: 4,
      icon: "🌟",
      title: "Détective Légendaire",
      subtitle: "…",
    },
  ],
};
```

---

## 6. Fonctionnement pédagogique

### Progression des questions (phase `free-text`)

| #   | Type                 | Compétence visée               |
| --- | -------------------- | ------------------------------ |
| 1   | 🧍 Personnages       | Identifier et décrire          |
| 2   | 🗺️ Étapes du voyage  | Situer, citer le texte         |
| 3   | ❤️ Émotions          | Relever des indices implicites |
| 4   | 🌱 Récit initiatique | Interpréter le sens profond    |

### Texte toujours visible

Le texte reste accessible dans un panneau scrollable **tout au long du
parcours**, encourageant le va-et-vient entre lecture et réponse.

### Suivi visuel de la progression

Des **tampons** (stamps) s'affichent en temps réel pour matérialiser chaque
indice collecté, renforçant la motivation de l'élève.

---

## 7. Personnalisation & extensibilité

### Ajouter une nouvelle histoire

1. Créer le dossier `stories/story-N/`
2. Y placer `story.js`, `style.css`, `bg.png`, `cover.png`
3. Référencer les fichiers dans `sw.js` (liste `FILES`)
4. L'histoire apparaît automatiquement sur la page d'accueil

### Modifier le texte

```js
text: `<p>Ton nouveau texte ici…</p>`,
```

### Ajouter un bloc puzzle

```js
{ id: 4, label: "L'épilogue", text: "Résumé du bloc." }
```

> ⚠️ Les `id` doivent être des entiers **consécutifs depuis `0`**.

### Ajouter un indice (phase `free-text`)

```js
{
  number:   "Indice 5 / 5",
  type:     "🔬 Analyse",
  question: "Ta question ici.",
  keywords: [{ group: "Groupe", words: ["mot1", "mot2"] }],
  hints:    ["expression à surligner dans le texte"]
}
```

### Modifier les badges

```js
{ min: 0, max: 1, icon: "🔎", title: "Titre", subtitle: "Sous-titre" }
```

### Personnaliser le thème d'une histoire

```css
/* stories/story-N/style.css */
:root {
  --border: #2a6a8a;
  --accent: #3a9abf;
  --accent2: #55c0f0;
}
```

---

## 8. Lancer le projet

### En local (sans serveur)

```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

### Avec un serveur local (recommandé — active le Service Worker)

```bash
python -m http.server 8000   # Python 3
npx serve .                  # Node.js
```

Ouvrir ensuite `http://localhost:8000`.

> ⚠️ Le Service Worker et les fonctionnalités PWA nécessitent **HTTPS ou `localhost`**.

### Déploiement statique

| Plateforme       | Méthode                                                                 |
| ---------------- | ----------------------------------------------------------------------- |
| **GitHub Pages** | Dépôt public → Settings → Pages → `/root`                               |
| **Netlify**      | Glisser le dossier sur [netlify.com/drop](https://app.netlify.com/drop) |
| **ENT / Moodle** | Zipper et déposer comme ressource ou iframe                             |

---

## 9. Auteure & contact

|                         |                    |
| ----------------------- | ------------------ |
| 👩‍💻 **Auteure**          | Claire Naudin      |
| 🏢 **Entreprise**       | CND - Web is Yours |
| 📅 **Date de création** | Mai 2026           |

> Projet conçu et développé par **CND - Web is Yours**.  
> Pour toute question, demande d'adaptation ou de nouveau module
> pédagogique, contactez Claire Naudin.

---

_© Mai 2026 – Claire Naudin / CND - Web is Yours.  
Contenu librement adaptable dans un cadre éducatif._
