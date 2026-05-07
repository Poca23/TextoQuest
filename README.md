# README – L'Enquêteur du Récit — TextoQuest

---

## Table des matières

1. [Présentation](#1-présentation)
2. [Démo rapide](#2-démo-rapide)
3. [Structure du projet](#3-structure-du-projet)
4. [Architecture technique](#4-architecture-technique)
5. [Fonctionnement pédagogique](#5-fonctionnement-pédagogique)
6. [Personnalisation & extensibilité](#6-personnalisation--extensibilité)
7. [Lancer le projet](#7-lancer-le-projet)
8. [Auteure & contact](#8-auteure--contact)

---

## 1. Présentation

**TextoQuest** est une application web pédagogique interactive destinée aux élèves de collège (cycle 3–4).  
Elle propose un parcours de lecture en plusieurs phases autour d'extraits littéraires de niveaux progressifs.

|                     |                                                      |
| ------------------- | ---------------------------------------------------- |
| 📚 **Histoires**    | 4 récits de niveaux 1 à 4                            |
| 🎯 **Objectif**     | Comprendre, analyser et interroger un texte narratif |
| 👤 **Public cible** | Élèves de 10 à 14 ans                                |
| 🛠️ **Technologies** | HTML · CSS · JavaScript vanilla                      |
| 📦 **Dépendances**  | Aucune                                               |
| 📅 **Version**      | Mai 2026                                             |

### Histoires disponibles

| Niveau | Titre                     | Description                                                                 |
| ------ | ------------------------- | --------------------------------------------------------------------------- |
| 1      | **La Forêt des Murmures** | Une aventure courte pour s'initier au jeu.                                  |
| 2      | **Le Nain Grognon**       | Un jeune nain découvre qu'à force de ronchonner, il passe à côté de la vie. |
| 3      | **L'Hirondelle Blanche**  | Un voyage initiatique à la recherche d'une vraie famille.                   |
| 4      | **L'Épreuve Cachée**      | Une mission nocturne sur les toits de Kazan.                                |

### Parcours de l'élève

```
Accueil → Lecture → Phase 1 : Puzzle → Phase 2 : Indices → Résultat
```

---

## 2. Démo rapide

### Phase 1 – Puzzle narratif

L'élève reçoit des blocs résumant l'histoire dans un ordre mélangé.  
Il doit les **glisser-déposer** pour reconstituer la chronologie du récit.  
Compatible souris (PC) et tactile (mobile/tablette).

### Phase 2 – Collecte d'indices

L'élève répond à des **questions progressives** (factuel → analyse → initiatique).  
Un système de mots-clés valide chaque réponse.  
Après 3 échecs, un système d'**aide progressive à 3 niveaux** guide l'élève :

- 💡 **Niveau 1** — Astuce méthode (conseil de stratégie)
- 🔍 **Niveau 2** — Piste de recherche dans le texte
- 🔦 **Niveau 3** — Surlignage automatique des passages-clés

### Résultat

Un badge est attribué selon le nombre d'indices collectés :

| Indices | Badge                   |
| ------- | ----------------------- |
| 0 – 2   | 🔎 Détective débutant   |
| 3 – 4   | 🕵️ Inspecteur en herbe  |
| 5       | 🏅 Grand Inspecteur     |
| 6       | 🌟 Détective Légendaire |

---

## 3. Structure du projet

```
textoquest/
├── index.html               # Accueil – choix de l'histoire + section méthode 6W
├── game.html                # Moteur de jeu (toutes les phases)
├── core.js                  # Logique applicative complète
├── style.css                # Thème global (couleurs, cartes, puzzle, QCM, texte libre)
├── manifest.json            # Configuration PWA
├── sw.js                    # Service Worker (cache offline, version v5)
├── assets/
│   ├── logo/                # Logo TextoQuest
│   ├── favicon/             # Favicons multi-formats
│   ├── library.png          # Image de fond de la bibliothèque
│   ├── index-library.css    # Styles spécifiques à la page d'accueil
│   └── responsive.css       # Règles responsive (mobile / tablette)
└── stories/
    ├── story-1_La_Foret_des_Murmures/
    │   ├── story.js         # Contenu (texte, phases, indices, badges)
    │   ├── style.css        # Thème visuel propre à l'histoire
    │   ├── bg.png           # Image de fond
    │   └── cover.png        # Couverture (grille d'accueil)
    ├── story-2_le_Nain_Grognon/
    │   └── …
    ├── story-3_l_Hirondelle_Blanche/
    │   └── …
    └── story-4_l_Epreuve_cachee/
        └── …
```

> Le projet est intentionnellement **mono-répertoire**, sans bundler ni framework,  
> pour faciliter le déploiement et la maintenance par un non-développeur.

---

## 4. Architecture technique

### `core.js` — trois zones distinctes

```
┌─────────────────────────────────────┐
│  DATA                               │  ← Tout le contenu modifiable
│  STORY_HTML · PUZZLE_BLOCKS         │
│  CLUES · BADGES                     │
├─────────────────────────────────────┤
│  STATE                              │  ← État global de la session
│  phaseIndex · score · attempts      │
│  dragSrc · _touchSrc · _touchOrigin │
│  _touchOffX · _touchOffY            │
├─────────────────────────────────────┤
│  HELPERS + APP CONTROLLER           │  ← Logique et rendu
│  _renderPhase · validatePhase       │
│  _checkDragDrop · _checkQCM         │
│  _checkFreeText · _showResult…      │
└─────────────────────────────────────┘
```

### Gestion des écrans

Chaque vue est un `<div class="screen">`.  
La fonction `show(id)` active uniquement l'écran ciblé via la classe `.active`.

```
index.html → game.html → screen-intro → screen-reading → screen-phase → screen-result
```

### Types de phases disponibles

| Type        | Description                                 |
| ----------- | ------------------------------------------- |
| `drag-drop` | Blocs à remettre dans l'ordre chronologique |
| `qcm`       | Question à choix unique ou multiple         |
| `free-text` | Réponse libre validée par mots-clés         |

### Validation des réponses (type `free-text`)

La validation repose sur un système de **groupes de mots-clés** :

```js
// Exemple : indice 1
keywords: [
  { group: "Kenji", words: ["kenji", "ninja", "mission"] },
  { group: "Sora", words: ["sora", "fille", "clan"] },
];
```

Une réponse est acceptée si **chaque groupe** contient au moins un mot  
trouvé dans la réponse de l'élève (insensible à la casse).

### Système d'aide progressive (3 niveaux)

```
Tentative 1 → Astuce méthode (conseil général)
Tentative 2 → Piste de recherche ciblée dans le texte
Tentative 3 → Surlignage automatique des passages-clés
```

Chaque indice de type `free-text` définit son propre tableau `help` avec trois entrées :

```js
help: [
  { level: 1, icon: "💡", title: "Astuce méthode", text: "…" },
  { level: 2, icon: "🔍", title: "Cherche dans le texte", text: "…" },
  { level: 3, icon: "🔦", title: "Regarde les passages surlignés", text: "…" },
];
```

### Drag & Drop (puzzle)

Implémenté en JavaScript natif avec **double support** :

| Interaction    | Événements utilisés                                     |
| -------------- | ------------------------------------------------------- |
| 🖱️ Souris / PC | `dragstart` · `dragover` · `drop` · `dragend`           |
| 👆 Tactile     | `touchstart` · `touchmove` · `touchend` · `touchcancel` |

L'état de l'ordre est conservé en mémoire.  
Un **clone visuel** suit le doigt pendant le glisser tactile pour un retour immédiat.

### Chargement dynamique des histoires

La page `game.html` charge le fichier `story.js` correspondant  
via le paramètre d'URL `?story=` :

```html
<!-- Exemple -->
game.html?story=story-4_l_Epreuve_cachee
```

Le script est injecté dynamiquement dans le `<head>`.  
La variable globale `STORY` est ensuite passée à `Core.init(STORY)`.

### PWA (Progressive Web App)

Le projet est installable sur mobile et fonctionne **hors ligne** grâce à :

- **`manifest.json`** — métadonnées d'installation (nom, icônes, couleurs)
- **`sw.js`** — Service Worker (version `textoquest-v5`) gérant le cache de toutes les ressources statiques (pages, styles, scripts, images, stories)

---

## 5. Fonctionnement pédagogique

### Méthode des 6W (page d'accueil)

La page d'accueil présente la **méthode du détective** basée sur les 6 questions fondamentales :

| Question             | Sens                  |
| -------------------- | --------------------- |
| **Qui ?** (Who)      | De qui parle-t-on ?   |
| **Quoi ?** (What)    | Que se passe-t-il ?   |
| **Où ?** (Where)     | C'est où ?            |
| **Quand ?** (When)   | C'est quand ?         |
| **Pourquoi ?** (Why) | Pourquoi ça arrive ?  |
| **Comment ?** (How)  | Comment ça se passe ? |

### Progression des questions (Phase 2)

Les indices suivent une montée en complexité cognitive :

| #   | Type                 | Compétence visée                 |
| --- | -------------------- | -------------------------------- |
| 1   | 🧍 Factuel           | Identifier les personnages       |
| 2   | 🗺️ Lieu & contexte   | Situer l'action, citer le texte  |
| 3   | 📖 Compréhension     | Reformuler un événement          |
| 4   | ❤️ Émotions          | Relever des indices implicites   |
| 5   | 🔬 Analyse           | Identifier un procédé littéraire |
| 6   | 🌱 Récit initiatique | Interpréter le sens profond      |

### Texte toujours visible

Le texte reste accessible dans un **panneau latéral scrollable** pendant toute la durée de l'exercice,  
favorisant l'aller-retour entre lecture et réponse.

### Suivi de la progression

Un système de **tampons (stamps)** visualise en temps réel le nombre d'indices collectés,  
renforçant la motivation de l'élève au fil du parcours.

---

## 6. Personnalisation & extensibilité

Toute la matière pédagogique est isolée dans le fichier **`story.js`** de chaque histoire.  
Aucune modification du HTML ou du CSS global n'est nécessaire pour adapter le contenu.

### Changer le texte de l'histoire

```js
text: `<p>Ton nouveau texte ici…</p>`,
```

### Ajouter / modifier un bloc puzzle

```js
{ id: 3, label: "Titre du bloc", text: "Résumé affiché à l'élève." }
```

> ⚠️ Les `id` doivent être des entiers consécutifs depuis `0`  
> pour que la validation de l'ordre fonctionne correctement.

### Ajouter / modifier un indice (type `free-text`)

```js
{
  number:   "Indice 7 / 7",
  type:     "🔬 Analyse",
  question: "Ta question ici.",
  keywords: [
    { group: "NomDuGroupe", words: ["mot1", "mot2", "mot3"] }
  ],
  help: [
    { level: 1, icon: "💡", title: "Astuce méthode",        text: "…" },
    { level: 2, icon: "🔍", title: "Cherche dans le texte", text: "…" },
    { level: 3, icon: "🔦", title: "Passages surlignés",    text: "…" },
  ]
}
```

### Ajouter une question QCM

```js
{
  type:     "qcm",
  title:    "❓ Ma question",
  question: "Quel est le bon choix ?",
  multiple: false,   // true pour plusieurs bonnes réponses
  options: [
    { text: "Option A", correct: true  },
    { text: "Option B", correct: false },
  ]
}
```

### Modifier les badges

```js
{ min: 0, max: 2, icon: "🔎", title: "Détective débutant",  subtitle: "…" }
{ min: 3, max: 4, icon: "🕵️", title: "Inspecteur en herbe", subtitle: "…" }
{ min: 5, max: 5, icon: "🏅", title: "Grand Inspecteur",    subtitle: "…" }
{ min: 6, max: 6, icon: "🌟", title: "Détective Légendaire", subtitle: "…" }
```

### Ajouter une nouvelle histoire

1. Créer un dossier `stories/story-N_Nom_Histoire/`
2. Y placer `story.js`, `style.css`, `bg.png`, `cover.png`
3. Ajouter l'entrée dans le tableau `STORIES` de `index.html` :

```js
{
  id:    "story-N_Nom_Histoire",
  level: N,
  title: "Titre affiché",
  desc:  "Description courte.",
  cover: "stories/story-N_Nom_Histoire/cover.png"
}
```

4. Ajouter les ressources dans la liste `FILES` de `sw.js` pour le cache offline.

---

## 7. Lancer le projet

### En local (sans serveur)

```bash
# Cloner ou télécharger le dossier
# Ouvrir index.html dans un navigateur
```

Aucun serveur, aucune installation requise.

### Avec un serveur local _(recommandé pour activer le Service Worker)_

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Puis ouvrir `http://localhost:8000` dans le navigateur.

> ⚠️ Le Service Worker (`sw.js`) et les fonctionnalités PWA nécessitent  
> un contexte **HTTPS** ou **localhost** pour s'activer.

### Déploiement

Compatible avec tout hébergement de fichiers statiques :

| Plateforme       | Méthode                                                             |
| ---------------- | ------------------------------------------------------------------- |
| **GitHub Pages** | Dépôt public → Settings → Pages                                     |
| **Netlify**      | Glisser le dossier sur [netlify.com/drop](https://netlify.com/drop) |
| **ENT / Moodle** | Zipper et déposer comme ressource H5P ou iframe                     |

---

## 8. Auteure & contact

|                         |                    |
| ----------------------- | ------------------ |
| 👩‍💻 **Auteure**          | Claire Naudin      |
| 🏢 **Entreprise**       | CND - Web is Yours |
| 📅 **Date de création** | Mai 2026           |

Projet conçu et développé par **CND - Web is Yours**.  
Pour toute question, demande d'adaptation ou de nouveau module pédagogique, contactez Claire Naudin.

---

_© Mai 2026 – Claire Naudin / CND - Web is Yours. Contenu librement adaptable dans un cadre éducatif._
