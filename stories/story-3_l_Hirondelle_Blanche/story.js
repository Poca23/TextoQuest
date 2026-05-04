const STORY = {
  id: "story-3_l_Hirondelle_Blanche",
  title: "L'Hirondelle Blanche",
  description:
    "Ta mission : lire le texte, reconstituer le voyage d'Alba, " +
    "puis collecter les indices comme un vrai détective.",
  background: "stories/story-3_l_Hirondelle_Blanche/bg.png",

  text: `
    <p>Alba était différente des autres hirondelles. Là où ses frères et sœurs 
    arboraient un plumage bleu-noir brillant, elle était entièrement blanche, 
    d'un blanc laiteux presque lumineux. Une albinos, disaient les anciens 
    du nid en baissant la voix.</p>
    <p>Depuis sa naissance, Alba sentait les regards. Des regards qui glissaient 
    sur elle comme sur quelque chose d'étrange, d'un peu dérangeant. Au moment 
    des repas, on lui tendait les vers en dernier. Quand venait l'heure des vols 
    d'entraînement, les autres s'élançaient sans l'attendre. Elle battait des ailes 
    seule, regardant le groupe s'éloigner dans le ciel comme une tache sombre 
    qui rétrécissait.</p>
    <p>Un matin de printemps, elle prit sa décision. Elle quitta le nid sous 
    le vieux pont avant l'aube, sans un regard en arrière.</p>
    <p>Son premier voyage la mena jusqu'à un grand chêne à la lisière d'un village. 
    Là vivait une famille de moineaux, bruyants et joyeux, qui picoraient des miettes 
    sous une terrasse. Alba s'approcha timidement. Un vieux moineau l'examina 
    de la tête aux pieds.</p>
    <p>« Tu es bien pâle, dit-il. Les renards voient mieux les oiseaux blancs. 
    Ce n'est pas prudent de rester ici. »</p>
    <p>Il n'était pas méchant, juste honnête. Mais Alba repartit le cœur serré.</p>
    <p>Elle vola longtemps au-dessus des champs dorés, puis des toits de tuiles roses 
    d'un petit bourg. Elle se posa sur le rebord d'un clocher où nichait une famille 
    de martinets. Ils étaient rapides, nerveux, toujours pressés.</p>
    <p>« Nous ne prenons pas de nouvelles recrues, lança l'un d'eux sans même 
    se retourner. Nous sommes un clan, pas un refuge. »</p>
    <p>Alba reprit son envol en silence.</p>
    <p>Le soleil commençait à descendre quand elle aperçut, au bord d'un grand lac 
    calme, un pigeonnier en bois clair entouré de lavande. Une famille de colombes 
    blanches y vivait. Pas entièrement blanches comme elle — leur blanc à elles 
    était doux, mêlé de gris et de beige — mais proches, d'une certaine façon.</p>
    <p>Une vieille colombe la vit approcher et vint à sa rencontre.</p>
    <p>« Tu as l'air fatiguée, petite. Tu veux te reposer ? »</p>
    <p>Ce fut tout. Pas de question sur sa couleur. Pas de mise en garde. 
    Juste une invitation simple, offerte comme on tend la main.</p>
    <p>Alba resta. Les colombes lui apprirent à construire un nid solide, à lire 
    les vents, à reconnaître les nuages qui annoncent la pluie. Elles lui 
    racontèrent leurs voyages, leurs peurs, leurs joies. Et peu à peu, 
    Alba se déploya. Elle découvrit que ses ailes blanches brillaient dans 
    la lumière du soir comme des voiles de soie. Qu'elle pouvait voler plus 
    haut que les autres parce qu'elle était plus légère. Que sa différence 
    n'était pas une erreur — c'était sa marque.</p>
    <p>Le printemps suivant, Alba bâtit son propre nid, non loin du pigeonnier 
    des colombes. Elle y accueillit quatre œufs, puis quatre oisillons. Certains 
    étaient blancs. D'autres avaient des plumes bleues. Elle les aimait tous pareil, 
    chacun dans leur singularité.</p>
    <p>Et chaque soir, elle leur racontait le voyage qui l'avait menée jusqu'à eux.</p>
  `,

  phases: [
    // ── PHASE 1 : puzzle drag-and-drop ──────────────
    {
      type: "drag-drop",
      title: "🔍 Phase 1 – Reconstitue le voyage d'Alba",
      instructions:
        "Glisse les blocs pour remettre les étapes du voyage dans le bon ordre.",
      blocks: [
        {
          id: 0,
          label: "Le rejet",
          text: "Alba est différente des autres hirondelles et se sent mise à l'écart.",
        },
        {
          id: 1,
          label: "Le départ",
          text: "Elle quitte son nid avant l'aube, sans regarder en arrière.",
        },
        {
          id: 2,
          label: "Les moineaux",
          text: "Un vieux moineau lui dit qu'elle est trop visible pour les prédateurs.",
        },
        {
          id: 3,
          label: "Les martinets",
          text: "Un clan de martinets pressés la repousse sans l'écouter.",
        },
        {
          id: 4,
          label: "Les colombes",
          text: "Une vieille colombe l'accueille sans lui poser de question.",
        },
        {
          id: 5,
          label: "La renaissance",
          text: "Alba fonde son propre nid et transmet son histoire à ses oisillons.",
        },
      ],
    },

    // ── PHASE 2 : QCM unique, ciblé ─────────────────
    {
      type: "qcm",
      title: "❓ Phase 2 – Une question sur le texte",
      instructions: "",
      question:
        "Pourquoi les colombes sont-elles la première famille à vraiment accueillir Alba ?",
      multiple: false,
      options: [
        {
          text: "Elles aussi sont entièrement blanches comme elle.",
          correct: false,
        },
        {
          text: "Elles ne lui posent aucune question sur sa couleur.",
          correct: true,
        },
        {
          text: "Elles cherchent à recruter de nouveaux membres.",
          correct: false,
        },
        {
          text: "Elles connaissaient déjà son nid d'origine.",
          correct: false,
        },
      ],
    },

    // ── PHASE 3 : réponses libres ────────────────────
    {
      type: "free-text",
      title: "🕵️ Phase 3 – Interroge le texte",
      instructions: "",
      clues: [
        // Indice 1 — factuel : personnage + motivation
        {
          number: "Indice 1 / 4",
          type: "🧍 Personnage & motivation",
          question:
            "Comment Alba est-elle décrite au début ? Pourquoi décide-t-elle de partir ?",
          keywords: [
            {
              group: "Description",
              words: ["blanche", "blanc", "albinos", "différente"],
            },
            {
              group: "Motivation",
              words: ["regards", "rejet", "seule", "dernier", "attendre"],
            },
          ],
          hints: [
            "entièrement blanche",
            "regards qui glissaient",
            "elle battait des ailes seule",
          ],
        },

        // Indice 2 — compréhension : les trois étapes
        {
          number: "Indice 2 / 4",
          type: "🗺️ Les étapes du voyage",
          question:
            "Cite les trois familles rencontrées. Pour chacune, explique " +
            "en une phrase pourquoi Alba repart.",
          keywords: [
            {
              group: "Familles",
              words: [
                "moineau",
                "moineaux",
                "martinet",
                "martinets",
                "colombe",
                "colombes",
              ],
            },
            {
              group: "Raison du départ",
              words: ["prudent", "clan", "refuge", "renard", "recrues"],
            },
          ],
          hints: [
            "ce n'est pas prudent",
            "nous sommes un clan, pas un refuge",
            "Alba repartit le cœur serré",
          ],
        },

        // Indice 3 — analyse : procédé littéraire
        {
          number: "Indice 3 / 4",
          type: "🔬 Analyse du style",
          question:
            "Relève une comparaison du texte qui commence par 'comme'. " +
            "Recopie-la puis explique ce qu'elle révèle sur Alba.",
          keywords: [
            {
              // L'élève doit citer l'une des trois comparaisons du texte
              group: "Citation (mot 'comme' + élément comparé)",
              words: ["tache", "soie", "main"],
            },
            {
              // L'élève doit produire une interprétation minimale
              group: "Interprétation",
              words: [
                "seule",
                "isolée",
                "légère",
                "belle",
                "accueil",
                "douceur",
                "force",
              ],
            },
          ],
          hints: [
            "comme une tache sombre qui rétrécissait",
            "comme des voiles de soie",
            "offerte comme on tend la main",
          ],
        },

        // Indice 4 — interprétation : message initiatique
        {
          number: "Indice 4 / 4",
          type: "🌱 Message de l'histoire",
          question:
            "En quoi cette histoire est-elle un récit initiatique ? " +
            "Quelle leçon Alba apprend-elle sur elle-même ?",
          keywords: [
            {
              // L'élève doit évoquer le parcours / la transformation
              group: "Parcours (épreuve ou transformation)",
              words: [
                "voyage",
                "épreuve",
                "rejet",
                "rencontre",
                "grandir",
                "chemin",
              ],
            },
            {
              // L'élève doit nommer la leçon avec un mot du texte ou proche
              group: "Leçon (différence valorisée)",
              words: [
                "différence",
                "marque",
                "erreur",
                "singularité",
                "force",
                "unique",
              ],
            },
          ],
          hints: [
            "sa différence n'était pas une erreur",
            "c'était sa marque",
            "elle les aimait tous pareil, chacun dans leur singularité",
          ],
        },
      ],
    },
  ],

  badges: [
    {
      min: 0,
      max: 1,
      icon: "🐣",
      title: "Oisillon perdu",
      subtitle: "Relis le texte, le voyage n'est pas terminé !",
    },
    {
      min: 2,
      max: 2,
      icon: "🐦",
      title: "Oiseau en vol",
      subtitle: "Tu suis bien la piste d'Alba !",
    },
    {
      min: 3,
      max: 3,
      icon: "🕊️",
      title: "Hirondelle aguerrie",
      subtitle: "Tu as presque tout saisi.",
    },
    {
      min: 4,
      max: 4,
      icon: "✨",
      title: "Alba toi-même",
      subtitle: "Tu as compris le cœur du récit.",
    },
  ],
};
