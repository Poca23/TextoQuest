const STORY = {
  id: "story-4_l_Epreuve_cachee",
  title: "L'Épreuve Cachée",
  description:
    "Ta mission : lire le texte, reconstituer le récit, puis collecter tous les indices comme un vrai détective.",
  background: "stories/story-4_l_Epreuve_cachee/bg.png",

  text: `
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
  `,

  phases: [
    {
      type: "drag-drop",
      title: "🔍 Phase 1 – Reconstitue le récit",
      instructions: "Glisse les blocs dans le bon ordre.",
      blocks: [
        {
          id: 0,
          label: "La mission commence",
          text: "Kenji, 12 ans, reçoit sa première vraie mission en solo.",
        },
        {
          id: 1,
          label: "Dans le silence de la nuit",
          text: "Il avance seul sur les toits mouillés.",
        },
        {
          id: 2,
          label: "Un danger approche",
          text: "Kenji entend des pas derrière lui.",
        },
        {
          id: 3,
          label: "Une rencontre inattendue",
          text: "C'est une fille de son âge, du même clan.",
        },
        {
          id: 4,
          label: "Le piège se referme",
          text: "Trois gardes avec des torches surgissent.",
        },
        {
          id: 5,
          label: "Une décision courageuse",
          text: "Kenji prend la main de Sora et lui fait confiance.",
        },
      ],
    },
    {
      type: "free-text",
      title: "🕵️ Phase 2 – Interroge le texte",
      instructions: "",
      clues: [
        {
          number: "Indice 1 / 6",
          type: "🧍 Personnage",
          question: "Qui sont les personnages ? Décris chacun brièvement.",
          keywords: [
            { group: "Kenji", words: ["kenji", "ninja", "mission"] },
            { group: "Sora", words: ["sora", "fille", "clan"] },
          ],
          hints: ["kenji", "douze ans", "sora", "ombres grises", "maître ryo"],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Pose-toi la question : <strong>Qui ?</strong> — Combien y a-t-il de personnages importants ? Cherche leurs prénoms dans le texte.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis la première phrase et le paragraphe où la fille apparaît. Quel est l'âge de Kenji ? Quel est le prénom de la fille ?",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces passages présentent les deux personnages. Recopie leur prénom et dis en une phrase ce que tu sais de chacun.",
            },
          ],
        },
        {
          number: "Indice 2 / 6",
          type: "🗺️ Lieu & contexte",
          question:
            "Où et quand se déroule la scène ? Pourquoi ce cadre est-il dangereux ?",
          keywords: [
            { group: "Lieu", words: ["toit", "toits", "kazan", "nuit"] },
            { group: "Danger", words: ["garde", "gardes", "repér"] },
          ],
          hints: ["toits mouillés", "vieux quartier de kazan", "trois gardes"],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Pose-toi deux questions : <strong>Où ?</strong> — C'est quel endroit ? Et <strong>Quand ?</strong> — C'est quel moment de la journée ?",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis la première phrase et le troisième paragraphe. Cherche le nom de la ville, le lieu précis et le moment de la scène.",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces passages décrivent l'endroit et le moment. Utilise-les pour expliquer pourquoi c'est un cadre dangereux.",
            },
          ],
        },
        {
          number: "Indice 3 / 6",
          type: "📖 Compréhension",
          question: "Quels événements viennent perturber la mission de Kenji ?",
          keywords: [
            { group: "Intrusion", words: ["sora", "suit", "suivait", "bruit"] },
            { group: "Gardes", words: ["garde", "gardes", "repér", "torche"] },
          ],
          hints: ["quelqu'un le suivait", "trois gardes surgirent"],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Pose-toi la question : <strong>Quoi ?</strong> — Que se passe-t-il d'inattendu pendant la mission ? Il y a deux événements importants.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis le paragraphe qui commence par « Il progressait… » et celui qui commence par « Mais au même instant… ».",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces deux passages montrent les deux imprévus. Pour chacun, dis en une phrase ce qui arrive.",
            },
          ],
        },
        {
          number: "Indice 4 / 6",
          type: "❤️ Émotions",
          question:
            "Comment Kenji se sent-il pendant la mission ? Relève deux phrases du texte qui le montrent.",
          keywords: [
            {
              group: "Émotion",
              words: ["peur", "cœur", "paniq", "trembl", "colère"],
            },
            {
              group: "Citation",
              words: ["concentre", "droit", "erreur", "seul", "confiance"],
            },
          ],
          hints: [
            "concentre-toi",
            "tu n'as pas droit à l'erreur",
            "son cœur battait si fort",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Pose-toi la question : <strong>Comment ?</strong> — Comment Kenji se sent-il intérieurement ? Cherche les mots qui décrivent ce qu'il ressent ou ce qu'il se dit.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis les passages en italique : ce sont les pensées de Kenji. Que se dit-il ? Cherche aussi une phrase qui parle de son cœur ou de sa peur.",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces phrases montrent ce que Kenji ressent. Recopies-en deux et dis en un mot quelle émotion elles expriment : peur, stress, colère ?",
            },
          ],
        },
        {
          number: "Indice 5 / 6",
          type: "🔬 Observe l'écriture",
          question:
            "Trouve un endroit dans le texte où les phrases sont très courtes, une après l'autre. Recopie ce passage et dis ce que ça donne comme impression : est-ce que ça va vite ou lentement ?",
          keywords: [
            {
              group: "Passage",
              words: ["bruit", "régulier", "graves", "pressées", "seul"],
            },
            {
              group: "Effet",
              words: [
                "vite",
                "rapide",
                "tension",
                "suspense",
                "stress",
                "haletant",
              ],
            },
          ],
          hints: [
            "Un bruit. Derrière lui. Régulier.",
            "Puis des voix. Graves. Pressées.",
            "Seul. Sans maître, sans équipe.",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Cherche dans le texte un endroit où il y a plusieurs phrases très courtes à la suite. Par exemple : trois ou quatre mots, puis un point, puis trois ou quatre mots, puis un point…",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis la toute première phrase du texte, puis le paragraphe « Il progressait… ». Tu trouveras des groupes de mots très courts séparés par des points.",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces passages sont faits de phrases très courtes. Recopies-en un, puis réponds : est-ce que ça donne l'impression que ça va vite ou lentement ? Pourquoi ?",
            },
          ],
        },
        {
          number: "Indice 6 / 6",
          type: "🌱 Ce que Kenji apprend",
          question:
            "À la fin, Kenji prend la main de Sora. Qu'est-ce qu'il comprend à ce moment-là ? Recopie la phrase du texte qui l'explique, puis dis-le avec tes propres mots.",
          keywords: [
            {
              group: "Citation",
              words: ["épreuve", "seul", "aide", "confiance", "difficile"],
            },
            {
              group: "Explication",
              words: ["accepter", "ensemble", "grandir", "aider", "besoin"],
            },
          ],
          hints: [
            "c'était peut-être ça, la vraie épreuve",
            "Accepter l'aide de quelqu'un",
            "renoncer à l'idée qu'il pouvait tout faire seul",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Pose-toi la question : <strong>Pourquoi ?</strong> — Pourquoi est-ce difficile pour Kenji de prendre la main de Sora ? Qu'est-ce qu'il doit accepter ?",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis l'avant-dernier paragraphe. Il y a une phrase qui commence par « c'était peut-être ça… ». Cherche-la et lis-la bien.",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces phrases expliquent ce que Kenji comprend à la fin. Recopie la phrase clé, puis dis avec tes propres mots ce qu'il a appris.",
            },
          ],
        },
      ],
    },
  ],

  badges: [
    {
      min: 0,
      max: 2,
      icon: "🔎",
      title: "Détective débutant",
      subtitle: "Continue à t'entraîner !",
    },
    {
      min: 3,
      max: 4,
      icon: "🕵️",
      title: "Inspecteur en herbe",
      subtitle: "Bon travail !",
    },
    {
      min: 5,
      max: 5,
      icon: "🏅",
      title: "Grand Inspecteur",
      subtitle: "Excellent !",
    },
    {
      min: 6,
      max: 6,
      icon: "🌟",
      title: "Détective Légendaire",
      subtitle: "Parfait !",
    },
  ],
};
