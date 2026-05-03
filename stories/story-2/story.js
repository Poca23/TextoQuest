const STORY = {
  id: "story-2",
  title: "L'Hirondelle Blanche",
  description:
    "Ta mission : lire le texte, reconstituer le voyage, puis collecter les indices comme un vrai détective.",
  background: "stories/story-2/bg.png",

  text: `
    <p>Alba était différente des autres hirondelles. Là où ses frères et sœurs arboraient un plumage bleu-noir brillant, elle était entièrement blanche, d'un blanc laiteux presque lumineux. Une albinos, disaient les anciens du nid en baissant la voix.</p>
    <p>Depuis sa naissance, Alba sentait les regards. Des regards qui glissaient sur elle comme sur quelque chose d'étrange, d'un peu dérangeant. Au moment des repas, on lui tendait les vers en dernier. Quand venait l'heure des vols d'entraînement, les autres s'élançaient sans l'attendre. Elle battait des ailes seule, regardant le groupe s'éloigner dans le ciel comme une tache sombre qui rétrécissait.</p>
    <p>Un matin de printemps, elle prit sa décision. Elle quitta le nid sous le vieux pont avant l'aube, sans un regard en arrière.</p>
    <p>Son premier voyage la mena jusqu'à un grand chêne à la lisière d'un village. Là vivait une famille de moineaux, bruyants et joyeux, qui picoraient des miettes sous une terrasse. Alba s'approcha timidement. Un vieux moineau l'examina de la tête aux pieds.</p>
    <p>« Tu es bien pâle, dit-il. Les renards voient mieux les oiseaux blancs. Ce n'est pas prudent de rester ici. »</p>
    <p>Il n'était pas méchant, juste honnête. Mais Alba repartit le cœur serré.</p>
    <p>Elle vola longtemps au-dessus des champs dorés, puis des toits de tuiles roses d'un petit bourg. Elle se posa sur le rebord d'un clocher où nichait une famille de martinets. Ils étaient rapides, nerveux, toujours pressés.</p>
    <p>« Nous ne prenons pas de nouvelles recrues, lança l'un d'eux sans même se retourner. Nous sommes un clan, pas un refuge. »</p>
    <p>Alba reprit son envol en silence.</p>
    <p>Le soleil commençait à descendre quand elle aperçut, au bord d'un grand lac calme, un pigeonnier en bois clair entouré de lavande. Une famille de colombes blanches y vivait. Pas entièrement blanches comme elle — leur blanc à elles était doux, mêlé de gris et de beige — mais proches, d'une certaine façon.</p>
    <p>Une vieille colombe la vit approcher et vint à sa rencontre.</p>
    <p>« Tu as l'air fatiguée, petite. Tu veux te reposer ? »</p>
    <p>Ce fut tout. Pas de question sur sa couleur. Pas de mise en garde. Juste une invitation simple, offerte comme on tend la main.</p>
    <p>Alba resta. Les colombes lui apprirent à construire un nid solide, à lire les vents, à reconnaître les nuages qui annoncent la pluie. Elles lui racontèrent leurs voyages, leurs peurs, leurs joies. Et peu à peu, Alba se déploya. Elle découvrit que ses ailes blanches brillaient dans la lumière du soir comme des voiles de soie. Qu'elle pouvait voler plus haut que les autres parce qu'elle était plus légère. Que sa différence n'était pas une erreur — c'était sa marque.</p>
    <p>Le printemps suivant, Alba bâtit son propre nid, non loin du pigeonnier des colombes. Elle y accueillit quatre œufs, puis quatre oisillons. Certains étaient blancs. D'autres avaient des plumes bleues. Elle les aimait tous pareil, chacun dans leur singularité.</p>
    <p>Et chaque soir, elle leur racontait le voyage qui l'avait menée jusqu'à eux.</p>
  `,

  phases: [
    // ── PHASE 1 : drag-drop ──────────────────────────
    {
      type: "drag-drop",
      title: "🔍 Phase 1 – Reconstitue le voyage d'Alba",
      instructions: "Glisse les blocs dans le bon ordre.",
      blocks: [
        {
          id: 0,
          label: "Le rejet",
          text: "Alba est différente et se sent seule dans son nid.",
        },
        { id: 1, label: "Le départ", text: "Elle quitte le nid avant l'aube." },
        {
          id: 2,
          label: "Les moineaux",
          text: "Un vieux moineau lui dit qu'elle est trop visible.",
        },
        {
          id: 3,
          label: "Les martinets",
          text: "Un clan de martinets la repousse sans l'écouter.",
        },
        {
          id: 4,
          label: "Les colombes",
          text: "Une vieille colombe l'accueille sans poser de question.",
        },
        {
          id: 5,
          label: "La renaissance",
          text: "Alba fonde son propre nid et élève ses oisillons.",
        },
      ],
    },

    // ── PHASE 2 : QCM ────────────────────────────────
    {
      type: "qcm",
      title: "❓ Phase 2 – Qui dit quoi ?",
      instructions: "",
      question:
        "Quelle famille accueille Alba sans lui poser de question sur sa couleur ?",
      multiple: false,
      options: [
        { text: "Les moineaux", correct: false },
        { text: "Les martinets", correct: false },
        { text: "Les colombes", correct: true },
        { text: "Les renards", correct: false },
      ],
    },

    {
      type: "qcm",
      title: "❓ Phase 2 – Plusieurs bonnes réponses",
      instructions: "",
      question:
        "Quels mots décrivent Alba au début de l'histoire ? (plusieurs réponses possibles)",
      multiple: true,
      options: [
        { text: "Blanche", correct: true },
        { text: "Rejetée", correct: true },
        { text: "Violente", correct: false },
        { text: "Solitaire", correct: true },
      ],
    },

    // ── PHASE 3 : texte libre ────────────────────────
    {
      type: "free-text",
      title: "🕵️ Phase 3 – Interroge le texte",
      instructions: "",
      clues: [
        {
          number: "Indice 1 / 4",
          type: "🧍 Personnages",
          question:
            "Décris Alba en trois mots et explique pourquoi elle quitte son nid.",
          keywords: [
            {
              group: "Description",
              words: ["blanc", "blanche", "différent", "albinos"],
            },
            {
              group: "Raison",
              words: ["rejet", "rejetée", "seule", "regard", "quitte"],
            },
          ],
          hints: ["entièrement blanche", "regards", "elle prit sa décision"],
        },
        {
          number: "Indice 2 / 4",
          type: "🗺️ Étapes du voyage",
          question:
            "Cite les trois familles qu'Alba rencontre et explique pourquoi elle repart à chaque fois.",
          keywords: [
            { group: "Familles", words: ["moineau", "martinet", "colombe"] },
            {
              group: "Raison",
              words: ["prudent", "clan", "refuge", "repart", "repartit"],
            },
          ],
          hints: [
            "moineaux",
            "martinets",
            "colombes",
            "pas prudent",
            "nous sommes un clan",
          ],
        },
        {
          number: "Indice 3 / 4",
          type: "❤️ Émotions",
          question:
            "Comment Alba se sent-elle chez les colombes ? Cite une phrase du texte.",
          keywords: [
            {
              group: "Émotion",
              words: ["repos", "repose", "accueil", "fatiguée", "invitation"],
            },
            {
              group: "Citation",
              words: ["invitation", "tendit", "resta", "apprirent", "déploya"],
            },
          ],
          hints: ["tu as l'air fatiguée", "alba resta", "elle se déploya"],
        },
        {
          number: "Indice 4 / 4",
          type: "🌱 Message du texte",
          question:
            "Quelle leçon cette histoire transmet-elle ? Utilise tes propres mots.",
          keywords: [
            {
              group: "Différence",
              words: [
                "différence",
                "différent",
                "singularité",
                "marque",
                "unique",
              ],
            },
            {
              group: "Message",
              words: ["accepter", "famille", "confiance", "amour", "force"],
            },
          ],
          hints: [
            "sa différence n'était pas une erreur",
            "c'était sa marque",
            "elle les aimait tous pareil",
          ],
        },
      ],
    },
  ],
};
