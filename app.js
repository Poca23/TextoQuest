// ═══════════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════════

const STORY_HTML = `
<p>Kenji avait douze ans et c'était la première fois qu'on lui confiait une vraie mission. Seul. Sans maître, sans équipe. Juste lui, la nuit, et les toits mouillés du vieux quartier de Kazan.</p>
<p>L'objectif était simple : récupérer le sceau volé dans la tour nord avant l'aube. Simple, avait dit Maître Ryo. Kenji, lui, ne trouvait pas ça simple du tout. Il avait passé trois ans à s'entraîner dans l'académie des Ombres Grises, à grimper des murs à mains nues, à courir pieds nus sur des poutres étroites, à apprendre à disparaître dans l'obscurité comme une fumée. Mais tout cela, c'était des exercices. Ce soir, c'était réel.</p>
<p>Il sauta sans bruit d'un toit à l'autre, les bras légèrement écartés pour garder l'équilibre. En dessous, la ville dormait. Les ruelles étaient désertes, à peine éclairées par quelques lanternes orangées qui se balançaient dans le vent. Il faisait froid. Un froid humide qui s'infiltrait sous les vêtements et engourdissait les doigts. <em>Concentre-toi</em>, se dit-il. <em>Tu n'as pas droit à l'erreur.</em></p>
<p>La tour nord se dressait à l'autre bout du quartier, massive et sombre, ses créneaux découpés contre un ciel sans lune. Kenji estima la distance. Encore une dizaine de toits à franchir, puis une descente le long de la façade est. Il avait mémorisé le plan. Il connaissait les rondes des gardes. Il était prêt.</p>
<p>Il progressait en retenant son souffle quand il l'entendit. Un bruit. Derrière lui. Régulier. Quelqu'un le suivait.</p>
<p>Il s'arrêta net, plaqué contre une cheminée froide. Son cœur battait si fort qu'il craignait qu'on l'entende. <em>Calme-toi</em>, s'ordonna-t-il. <em>Un ninja ne panique pas. Un ninja observe.</em> Il ferma les yeux une seconde, tendit l'oreille. Des pas légers. Très légers. Presque imperceptibles. Quelqu'un d'entraîné, donc. Ce n'était pas un garde ordinaire.</p>
<p>Il risqua un œil depuis l'angle de la cheminée. Une silhouette. Petite. Agile. Elle se déplaçait en rasant les ombres avec une aisance déconcertante. Une fille, à peu près de son âge, vêtue de noir elle aussi, un foulard sombre couvrant la moitié de son visage. Kenji plissa les yeux. Sur son épaule gauche, il distingua un petit emblème brodé de fil gris : une ombre stylisée en forme de main ouverte. Le même que le sien. Le clan des Ombres Grises.</p>
<p>Il sortit de sa cachette, les poings serrés, prêt à tout. La fille s'immobilisa. Ni surprise, ni effrayée. Elle retira son foulard.</p>
<p>« Tu es Kenji ? » chuchota-t-elle en atterrissant sans bruit à côté de lui. « Je m'appelle Sora. Maître Ryo m'a envoyée. Il dit que tu as besoin d'aide. »</p>
<p>Kenji serra les dents. Il n'avait besoin de personne. Il avait été désigné pour cette mission, lui et personne d'autre. Envoyer quelqu'un derrière lui, c'était comme dire qu'on ne lui faisait pas vraiment confiance. La colère monta dans sa gorge, mais il la ravala. Ce n'était pas le moment.</p>
<p>« Je n'ai besoin de rien », souffla-t-il sèchement.</p>
<p>Sora haussa les épaules comme si sa réponse ne l'étonnait pas. « C'est ce que tu crois. »</p>
<p>Mais au même instant, un raclement de bottes sur les tuiles résonna derrière eux. Puis des voix. Graves. Pressées. Trois gardes surgirent au bout du toit, portant des torches dont la lumière dorée balayait les alentours. L'un d'eux pointa le doigt dans leur direction.</p>
<p>« Là ! Sur le toit ! »</p>
<p>Ils étaient repérés.</p>
<p>Kenji sentit le sol se dérober sous ses pieds. Son plan était compromis. S'ils tentaient de fuir maintenant, les gardes donneraient l'alarme. S'ils restaient, ils seraient capturés. Il n'y avait pas de bonne option. Sa tête tournait à toute vitesse mais aucune idée ne venait.</p>
<p>« On discutera de ça plus tard », souffla Sora en souriant. Malgré la situation, elle souriait. Elle glissa la main dans sa ceinture, en sortit deux petits écrans de fumée noire, et les tint devant elle. « Tu cours vite ? »</p>
<p>Kenji la regarda. Regarda les gardes qui approchaient. Regarda à nouveau Sora.</p>
<p>Elle lui tendit la main. « Tu fais confiance ou pas ? »</p>
<p>Il n'avait pas le choix. Ou plutôt, il avait le choix, et c'était justement ça qui était difficile. Accepter l'aide de quelqu'un qu'il ne connaissait pas, renoncer à l'idée qu'il pouvait tout faire seul… c'était peut-être ça, la vraie épreuve. Pas les toits. Pas les gardes. Pas le sceau.</p>
<p>Kenji prit sa main.</p>
<p>Sora lança les écrans de fumée. L'obscurité les avala tous les deux.</p>
`;

const PUZZLE_BLOCKS = [
  {
    id: 0,
    label: "La mission commence",
    text: "Kenji, 12 ans, reçoit sa première vraie mission en solo : récupérer un sceau volé dans la tour nord. Après trois ans d'entraînement à l'académie des Ombres Grises, ce soir c'est réel.",
  },
  {
    id: 1,
    label: "Dans le silence de la nuit",
    text: "Il avance seul sur les toits mouillés. La ville dort. Le froid engourdit ses doigts. Il aperçoit la tour nord au loin et estime qu'il est prêt.",
  },
  {
    id: 2,
    label: "Un danger approche",
    text: "Kenji entend des pas derrière lui. Il s'arrête, plaqué contre une cheminée. Son cœur s'emballe. Il observe : quelqu'un d'entraîné le suit.",
  },
  {
    id: 3,
    label: "Une rencontre inattendue",
    text: "C'est une fille de son âge, vêtue de noir, portant l'emblème des Ombres Grises. Elle s'appelle Sora et dit que Maître Ryo l'a envoyée l'aider.",
  },
  {
    id: 4,
    label: "Le piège se referme",
    text: "Trois gardes avec des torches surgissent sur le toit. Ils sont repérés. Kenji panique : fuir ou rester, les deux options semblent mauvaises.",
  },
  {
    id: 5,
    label: "Une décision courageuse",
    text: "Sora sort des écrans de fumée et tend la main à Kenji. Il comprend que la vraie épreuve, c'est d'accepter l'aide. Il prend sa main. Ils s'échappent.",
  },
];

const CLUES = [
  {
    number: "Indice 1 / 6",
    type: "🧍 Factuel",
    question:
      "Qui sont les personnages de ce texte ? Décris chacun d'eux brièvement.",
    // Groupe A = mots sur Kenji, Groupe B = mots sur Sora
    keywords: [
      { group: "Kenji", words: ["kenji", "ninja", "mission"] },
      { group: "Sora", words: ["sora", "fille", "clan"] },
    ],
    hints: ["kenji", "douze ans", "sora", "ombres grises", "maître ryo"],
  },
  {
    number: "Indice 2 / 6",
    type: "🗺️ Lieu & contexte",
    question:
      "Où et quand se déroule la scène ? Pourquoi ce cadre est-il dangereux pour Kenji ? Cite une phrase du texte.",
    keywords: [
      { group: "Lieu", words: ["toit", "toits", "kazan", "nuit"] },
      { group: "Danger", words: ["garde", "gardes", "repér"] },
    ],
    hints: [
      "toits mouillés",
      "vieux quartier de kazan",
      "la nuit",
      "trois gardes",
      "ciel sans lune",
    ],
  },
  {
    number: "Indice 3 / 6",
    type: "📖 Compréhension",
    question:
      "Quel événement vient perturber la mission de Kenji ? Explique avec tes propres mots.",
    keywords: [
      { group: "Intrusion", words: ["sora", "suit", "suivait", "bruit"] },
      { group: "Gardes", words: ["garde", "gardes", "repér", "torche"] },
    ],
    hints: [
      "quelqu'un le suivait",
      "trois gardes surgirent",
      "ils étaient repérés",
    ],
  },
  {
    number: "Indice 4 / 6",
    type: "❤️ Émotions",
    question:
      "Comment Kenji se sent-il au cours de cette scène ? Relève deux citations qui montrent ses émotions.",
    keywords: [
      {
        group: "Peur/stress",
        words: ["cœur", "panique", "peur", "dérober", "battait"],
      },
      {
        group: "Colère/fierté",
        words: ["colère", "dents", "besoin de personne", "besoin de rien"],
      },
    ],
    hints: [
      "son cœur battait si fort",
      "la colère monta dans sa gorge",
      "kenji sentit le sol se dérober",
      "kenji serra les dents",
    ],
  },
  {
    number: "Indice 5 / 6",
    type: "🔬 Analyse",
    question:
      "Relève un procédé d'écriture qui crée du suspense dans ce texte et explique son effet sur le lecteur.",
    keywords: [
      {
        group: "Procédé",
        words: [
          "phrase",
          "courte",
          "phrases courtes",
          "rythme",
          "répétition",
          "gradation",
          "point",
        ],
      },
      {
        group: "Effet",
        words: ["suspense", "tension", "angoisse", "lecteur", "attente"],
      },
    ],
    hints: [
      "un bruit. derrière lui. régulier.",
      "phrases courtes",
      "là ! sur le toit !",
      "kenji la regarda. regarda les gardes",
    ],
  },
  {
    number: "Indice 6 / 6",
    type: "🌱 Récit initiatique",
    question:
      "D'après toi, qu'est-ce que Kenji apprend sur lui-même à la fin de l'extrait ? Explique avec tes mots.",
    keywords: [
      {
        group: "Leçon",
        words: ["aide", "confiance", "seul", "accepter", "épreuve"],
      },
    ],
    hints: [
      "la vraie épreuve",
      "accepter l'aide",
      "renoncer à l'idée qu'il pouvait tout faire seul",
      "il prit sa main",
    ],
  },
];

const BADGES = [
  {
    min: 0,
    max: 2,
    icon: "🔎",
    title: "Détective débutant",
    subtitle: "Continue à t'entraîner, tu vas y arriver !",
  },
  {
    min: 3,
    max: 4,
    icon: "🕵️",
    title: "Inspecteur en herbe",
    subtitle: "Bon travail ! Tu as l'œil d'un détective !",
  },
  {
    min: 5,
    max: 5,
    icon: "🏅",
    title: "Grand Inspecteur",
    subtitle: "Excellent ! Tu analyses le texte comme un pro !",
  },
  {
    min: 6,
    max: 6,
    icon: "🌟",
    title: "Détective Légendaire",
    subtitle: "Parfait ! Aucun texte ne te résiste !",
  },
];

// ═══════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════

const state = {
  puzzleOrder: [],
  currentClue: 0,
  earnedStamps: 0,
  attempts: 0, // essais pour l'indice courant
  dragSrcIndex: null,
};

// ═══════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════

function $(id) {
  return document.getElementById(id);
}

function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.toggle("active", s.id === id));
}

function injectStory(...ids) {
  ids.forEach((id) => {
    const el = $(id);
    if (el) el.innerHTML = STORY_HTML;
  });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Vérifie que chaque groupe a au moins 1 mot présent dans la réponse
function checkKeywords(answer, keywords) {
  const low = answer.toLowerCase();
  const missing = keywords.filter((g) => !g.words.some((w) => low.includes(w)));
  return { ok: missing.length === 0, missing };
}

// Surligne les indices dans tous les panneaux texte visibles
function highlightHints(hints) {
  ["story-text", "story-text-puzzle", "story-text-clues"].forEach((id) => {
    const el = $(id);
    if (!el) return;
    let html = el.innerHTML;
    hints.forEach((hint) => {
      // échappe les caractères spéciaux pour la regex
      const escaped = hint.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`(${escaped})`, "gi");
      html = html.replace(re, "<mark>$1</mark>");
    });
    el.innerHTML = html;
  });
}

function clearHighlights() {
  ["story-text", "story-text-puzzle", "story-text-clues"].forEach((id) => {
    const el = $(id);
    if (!el) return;
    el.innerHTML = el.innerHTML.replace(/<mark>(.*?)<\/mark>/gi, "$1");
  });
}

// ═══════════════════════════════════════════════════
//  PUZZLE
// ═══════════════════════════════════════════════════

function buildPuzzle() {
  const zone = $("puzzle-zone");
  zone.innerHTML = "";
  const shuffled = shuffle(PUZZLE_BLOCKS);
  state.puzzleOrder = shuffled.map((b) => b.id);

  shuffled.forEach((block, i) => {
    const div = document.createElement("div");
    div.className = "puzzle-block";
    div.draggable = true;
    div.dataset.index = i;
    div.innerHTML = `<div class="block-label">${block.label}</div>${block.text}`;
    div.addEventListener("dragstart", onDragStart);
    div.addEventListener("dragover", onDragOver);
    div.addEventListener("drop", onDrop);
    div.addEventListener("dragend", onDragEnd);
    zone.appendChild(div);
  });
}

function onDragStart(e) {
  state.dragSrcIndex = +e.currentTarget.dataset.index;
  e.currentTarget.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
}

function onDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  document
    .querySelectorAll(".puzzle-block")
    .forEach((b) => b.classList.remove("drag-over"));
  e.currentTarget.classList.add("drag-over");
}

function onDrop(e) {
  e.preventDefault();
  const targetIndex = +e.currentTarget.dataset.index;
  if (state.dragSrcIndex === targetIndex) return;

  const zone = $("puzzle-zone");
  const blocks = [...zone.querySelectorAll(".puzzle-block")];
  const src = blocks[state.dragSrcIndex];
  const tgt = blocks[targetIndex];

  const placeholder = document.createElement("div");
  zone.insertBefore(placeholder, src);
  zone.insertBefore(src, tgt);
  zone.insertBefore(tgt, placeholder);
  placeholder.remove();

  [...zone.querySelectorAll(".puzzle-block")].forEach(
    (b, i) => (b.dataset.index = i),
  );
  [state.puzzleOrder[state.dragSrcIndex], state.puzzleOrder[targetIndex]] = [
    state.puzzleOrder[targetIndex],
    state.puzzleOrder[state.dragSrcIndex],
  ];
}

function onDragEnd() {
  document
    .querySelectorAll(".puzzle-block")
    .forEach((b) => b.classList.remove("dragging", "drag-over"));
}

// ═══════════════════════════════════════════════════
//  STAMPS
// ═══════════════════════════════════════════════════

function buildStamps(containerId) {
  const row = $(containerId);
  row.innerHTML = "";
  CLUES.forEach((_, i) => {
    const s = document.createElement("div");
    s.className = "stamp" + (i < state.earnedStamps ? " earned" : "");
    s.textContent = i < state.earnedStamps ? "🔎" : "○";
    row.appendChild(s);
  });
}

// ═══════════════════════════════════════════════════
//  APP CONTROLLER
// ═══════════════════════════════════════════════════

const App = {
  startReading() {
    injectStory("story-text");
    showScreen("screen-reading");
  },

  startPuzzle() {
    injectStory("story-text-puzzle");
    buildPuzzle();
    $("puzzle-feedback").className = "feedback hidden";
    showScreen("screen-puzzle");
  },

  checkPuzzle() {
    const correct = state.puzzleOrder.every((id, i) => id === i);
    const fb = $("puzzle-feedback");
    if (correct) {
      fb.className = "feedback success";
      fb.textContent =
        "✅ Bravo ! Tu as reconstitué le récit dans le bon ordre. Direction la Phase 2 !";
      setTimeout(() => App.startClues(), 1800);
    } else {
      fb.className = "feedback error";
      fb.textContent =
        "🔍 Pas tout à fait… Relis bien le texte et essaie de replacer les blocs dans l'ordre de l'histoire.";
    }
  },

  startClues() {
    injectStory("story-text-clues");
    state.currentClue = 0;
    state.earnedStamps = 0;
    state.attempts = 0;
    buildStamps("stamps-row");
    App._renderClue();
    showScreen("screen-clues");
  },

  _renderClue() {
    clearHighlights();
    state.attempts = 0;
    const clue = CLUES[state.currentClue];
    $("clue-number").textContent = clue.number;
    $("clue-type").textContent = clue.type;
    $("clue-question").textContent = clue.question;
    $("clue-answer").value = "";
    $("clue-feedback").className = "feedback hidden";
  },

  submitClue() {
    const answer = $("clue-answer").value.trim();
    const fb = $("clue-feedback");
    const clue = CLUES[state.currentClue];

    // Réponse trop courte
    if (answer.length < 10) {
      fb.className = "feedback error";
      fb.textContent =
        "✏️ Ta réponse est un peu courte… Écris au moins une phrase complète !";
      return;
    }

    const { ok, missing } = checkKeywords(answer, clue.keywords);

    if (ok) {
      // ✅ Bonne réponse
      clearHighlights();
      state.earnedStamps++;
      buildStamps("stamps-row");
      fb.className = "feedback success";
      fb.textContent = "🔎 Indice collecté ! Bonne réponse, détective !";

      if (state.currentClue < CLUES.length - 1) {
        setTimeout(() => {
          state.currentClue++;
          App._renderClue();
        }, 1400);
      } else {
        setTimeout(() => App.showResult(), 1400);
      }
      return;
    }

    // ❌ Mauvaise réponse
    state.attempts++;
    const missingLabels = missing.map((g) => g.group).join(", ");

    if (state.attempts >= 3) {
      // Après 3 essais → surlignage + message
      highlightHints(clue.hints);
      fb.className = "feedback error";
      fb.textContent = `💡 Relis attentivement le texte : les passages surlignés en jaune vont t'aider ! Il manquait des informations sur : ${missingLabels}.`;
    } else {
      const restants = 3 - state.attempts;
      fb.className = "feedback error";
      fb.textContent = `🔍 Pas tout à fait… Il manque des informations sur : ${missingLabels}. (${restants} essai${restants > 1 ? "s" : ""} avant un indice)`;
    }
  },

  showResult() {
    const badge =
      BADGES.find(
        (b) => state.earnedStamps >= b.min && state.earnedStamps <= b.max,
      ) || BADGES[BADGES.length - 1];
    $("result-icon").textContent = badge.icon;
    $("result-title").textContent = badge.title;
    $("result-subtitle").textContent = badge.subtitle;
    $("result-score").textContent =
      `Tu as collecté ${state.earnedStamps} indice${state.earnedStamps > 1 ? "s" : ""} sur ${CLUES.length}.`;
    buildStamps("result-stamps");
    showScreen("screen-result");
  },

  restart() {
    clearHighlights();
    showScreen("screen-intro");
  },
};
