# README – L'Enquêteur du Récit

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

**L'Enquêteur du Récit** est une application web pédagogique interactive destinée aux élèves de collège (cycle 3–4). Elle propose un parcours de lecture en deux phases autour d'un extrait littéraire.

|                     |                                                         |
| ------------------- | ------------------------------------------------------- |
| 📚 **Texte**        | _L'Épreuve Cachée_ – extrait d'un roman jeunesse fictif |
| 🎯 **Objectif**     | Comprendre, analyser et interroger un texte narratif    |
| 👤 **Public cible** | Élèves de 10 à 14 ans                                   |
| 🛠️ **Technologies** | HTML · CSS · JavaScript vanilla                         |
| 📦 **Dépendances**  | Aucune                                                  |
| 📅 **Version**      | Mai 2026                                                |

### Parcours de l'élève

```
Accueil → Lecture → Phase 1 : Puzzle → Phase 2 : Indices → Résultat
```

---

## 2. Démo rapide

### Phase 1 – Puzzle narratif

L'élève reçoit 6 blocs résumant l'histoire dans un ordre mélangé. Il doit les **glisser-déposer** pour reconstituer la chronologie du récit.

### Phase 2 – Collecte d'indices

L'élève répond à **6 questions progressives** (factuel → analyse → initiatique). Un système de mots-clés valide chaque réponse. Après 3 échecs, des passages du texte sont **surlignés automatiquement** pour guider l'élève.

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
enqueteur-du-recit/
├── index.html      # Structure des écrans
├── style.css       # Mise en page, thème, responsive
└── app.js          # Données + logique applicative
```

> Le projet est intentionnellement mono-répertoire, sans bundler ni framework, pour faciliter le déploiement et la maintenance par un non-développeur.

---

## 4. Architecture technique

### `app.js` — trois zones distinctes

```
┌─────────────────────────────────────┐
│  DATA                               │  ← Tout le contenu modifiable
│  STORY_HTML · PUZZLE_BLOCKS         │
│  CLUES · BADGES                     │
├─────────────────────────────────────┤
│  STATE                              │  ← État global de la session
│  puzzleOrder · currentClue          │
│  earnedStamps · attempts            │
├─────────────────────────────────────┤
│  HELPERS + APP CONTROLLER           │  ← Logique et rendu
│  buildPuzzle · submitClue           │
│  highlightHints · showResult…       │
└─────────────────────────────────────┘
```

### Gestion des écrans

Chaque vue est un `<div class="screen">`. La fonction `showScreen(id)` active uniquement l'écran ciblé via la classe `.active`.

```
screen-intro → screen-reading → screen-puzzle → screen-clues → screen-result
```

### Validation des réponses

La validation repose sur un système de **groupes de mots-clés** :

```js
// Exemple : indice 1
keywords: [
  { group: "Kenji", words: ["kenji", "ninja", "mission"] },
  { group: "Sora", words: ["sora", "fille", "clan"] },
];
```

Une réponse est acceptée si **chaque groupe** contient au moins un mot trouvé dans la réponse de l'élève (insensible à la casse).

### Système d'aide progressive

```
Tentative 1 → Message d'erreur + groupes manquants
Tentative 2 → Message d'erreur + groupes manquants
Tentative 3 → Surlignage automatique des passages-clés dans le texte
```

### Drag & Drop (puzzle)

Implémenté en JavaScript natif (`dragstart`, `dragover`, `drop`, `dragend`). L'état de l'ordre est conservé dans `state.puzzleOrder` (tableau d'ids).

---

## 5. Fonctionnement pédagogique

### Progression des questions (Phase 2)

Les 6 indices suivent une montée en complexité cognitive :

| #   | Type                 | Compétence visée                 |
| --- | -------------------- | -------------------------------- |
| 1   | 🧍 Factuel           | Identifier les personnages       |
| 2   | 🗺️ Lieu & contexte   | Situer l'action, citer le texte  |
| 3   | 📖 Compréhension     | Reformuler un événement          |
| 4   | ❤️ Émotions          | Relever des indices implicites   |
| 5   | 🔬 Analyse           | Identifier un procédé littéraire |
| 6   | 🌱 Récit initiatique | Interpréter le sens profond      |

### Texte toujours visible

Le texte reste accessible dans un panneau latéral scrollable **pendant toute la durée de l'exercice**, favorisant l'aller-retour entre lecture et réponse.

---

## 6. Personnalisation & extensibilité

Toute la matière pédagogique est isolée dans la section `DATA` de `app.js`. Aucune modification du HTML ou du CSS n'est nécessaire pour adapter le contenu.

### Changer le texte

```js
const STORY_HTML = `<p>Ton nouveau texte ici…</p>`;
```

### Ajouter / modifier un bloc puzzle

```js
{
  id: 6,               // doit correspondre à sa position correcte
  label: "Titre du bloc",
  text:  "Résumé affiché à l'élève."
}
```

> ⚠️ Les `id` doivent être des entiers consécutifs depuis `0` pour que la validation de l'ordre fonctionne correctement.

### Ajouter / modifier un indice

```js
{
  number:   "Indice 7 / 7",
  type:     "🔬 Analyse",
  question: "Ta question ici.",
  keywords: [
    { group: "NomDuGroupe", words: ["mot1", "mot2", "mot3"] }
  ],
  hints: ["expression à surligner dans le texte"]
}
```

### Modifier les badges

```js
{ min: 0, max: 2, icon: "🔎", title: "…", subtitle: "…" }
```

---

## 7. Lancer le projet

### En local

```bash
# Cloner ou télécharger le dossier
# Ouvrir index.html dans un navigateur
```

Aucun serveur, aucune installation requise.

### Avec un serveur local (recommandé pour éviter les restrictions navigateur)

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Puis ouvrir `http://localhost:8000` dans le navigateur.

### Déploiement

Compatible avec tout hébergement de fichiers statiques :

| Plateforme       | Méthode                                         |
| ---------------- | ----------------------------------------------- |
| **GitHub Pages** | Dépôt public → Settings → Pages                 |
| **Netlify**      | Glisser le dossier sur netlify.com/drop         |
| **ENT / Moodle** | Zipper et déposer comme ressource H5P ou iframe |

---

## 8. Auteure & contact

|                         |                    |
| ----------------------- | ------------------ |
| 👩‍💻 **Auteure**          | Claire Naudin      |
| 🏢 **Entreprise**       | CND - Web is Yours |
| 📅 **Date de création** | Mai 2026           |

> Projet conçu et développé par **CND - Web is Yours**.
> Pour toute question, demande d'adaptation ou de nouveau module pédagogique, contactez Claire Naudin.

---

_© Mai 2026 – Claire Naudin / CND - Web is Yours. Contenu librement adaptable dans un cadre éducatif._
