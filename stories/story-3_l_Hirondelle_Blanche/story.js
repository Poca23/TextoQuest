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
        { text: "Elles connaissaient déjà son nid d'origine.", correct: false },
      ],
    },
    {
      type: "free-text",
      title: "🕵️ Phase 3 – Interroge le texte",
      instructions: "",
      clues: [
        {
          number: "Indice 1 / 4",
          type: "🧍 Personnage",
          question:
            "Comment est Alba au début de l'histoire ? Cite deux choses qui montrent qu'elle est différente des autres.",
          keywords: [
            {
              group: "Description",
              words: ["blanche", "blanc", "albinos", "différente"],
            },
            {
              group: "Traitement",
              words: ["dernier", "seule", "attendre", "regards"],
            },
          ],
          hints: [
            "entièrement blanche",
            "on lui tendait les vers en dernier",
            "elle battait des ailes seule",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Cherche deux informations : <strong>Comment elle est</strong> (sa couleur) et <strong>comment les autres la traitent</strong> (ce qu'ils font ou ne font pas).",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis les deux premiers paragraphes. Cherche les mots qui décrivent la couleur d'Alba, puis une phrase qui montre qu'elle est laissée de côté.",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces passages te donnent la réponse : l'un décrit sa couleur, l'autre montre comment les autres la traitent. Recopie un élément de chaque passage.",
            },
          ],
        },
        {
          number: "Indice 2 / 4",
          type: "🗺️ Le voyage",
          question:
            "Cite les trois familles qu'Alba rencontre. Pour chacune, dis en une phrase pourquoi elle repart.",
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
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Cherche dans le texte les trois animaux différents qu'Alba rencontre. Pour chacun, lis ce qu'ils lui disent ou font, et demande-toi : pourquoi Alba repart-elle ?",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Repère les trois moments où Alba arrive chez une nouvelle famille. Pour chacun, lis la phrase que lui dit cette famille.",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces phrases sont dites par les familles rencontrées. Recopie le nom de chaque famille et la raison pour laquelle Alba repart.",
            },
          ],
        },
        {
          number: "Indice 3 / 4",
          type: "❤️ Les émotions d'Alba",
          question:
            "Comment Alba se sent-elle quand elle quitte les moineaux ? Et comment se sent-elle à la fin, chez les colombes ? Cite le texte pour chaque réponse.",
          keywords: [
            {
              group: "Tristesse",
              words: ["serré", "cœur serré", "silence", "seule"],
            },
            {
              group: "Bonheur",
              words: ["resta", "apprirent", "déploya", "découvrit", "marque"],
            },
          ],
          hints: [
            "Alba repartit le cœur serré",
            "Alba resta",
            "sa différence n'était pas une erreur",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Cherche une phrase qui montre que c'est triste chez les moineaux, et une phrase qui montre que c'est bien chez les colombes.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis le paragraphe après les moineaux, puis le grand paragraphe sur les colombes. Quels mots montrent les émotions d'Alba ?",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces phrases montrent comment Alba se sent à deux moments différents. Recopie-les et dis ce qu'elles nous apprennent sur ses émotions.",
            },
          ],
        },
        {
          number: "Indice 4 / 4",
          type: "🌱 Ce qu'Alba apprend",
          question:
            "Qu'est-ce qu'Alba comprend à la fin sur sa différence ? Recopie la phrase du texte qui le dit, puis explique-la avec tes propres mots.",
          keywords: [
            {
              group: "Citation",
              words: ["erreur", "marque", "différence"],
            },
            {
              group: "Explication",
              words: [
                "force",
                "unique",
                "spéciale",
                "fierté",
                "accepte",
                "aime",
                "bien",
              ],
            },
          ],
          hints: ["sa différence n'était pas une erreur", "c'était sa marque"],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Cherche dans le texte une phrase qui dit ce qu'Alba pense de sa couleur blanche à la fin. Est-ce qu'elle en a honte ou est-ce qu'elle l'accepte ?",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis l'avant-dernier paragraphe. Cherche la phrase qui parle de la « différence » d'Alba. Recopie-la, puis dis ce qu'elle veut dire.",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Cette phrase dit ce qu'Alba a compris sur elle-même. Recopie-la, puis explique avec tes propres mots ce que ça signifie.",
            },
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
