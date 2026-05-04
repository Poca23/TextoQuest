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
          text: "Kenji, 12 ans, reçoit sa première vraie mission en solo…",
        },
        {
          id: 1,
          label: "Dans le silence de la nuit",
          text: "Il avance seul sur les toits mouillés…",
        },
        {
          id: 2,
          label: "Un danger approche",
          text: "Kenji entend des pas derrière lui…",
        },
        {
          id: 3,
          label: "Une rencontre inattendue",
          text: "C'est une fille de son âge…",
        },
        {
          id: 4,
          label: "Le piège se referme",
          text: "Trois gardes avec des torches surgissent…",
        },
        {
          id: 5,
          label: "Une décision courageuse",
          text: "Sora sort des écrans de fumée…",
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
          type: "🧍 Factuel",
          question: "Qui sont les personnages ? Décris chacun brièvement.",
          keywords: [
            { group: "Kenji", words: ["kenji", "ninja", "mission"] },
            { group: "Sora", words: ["sora", "fille", "clan"] },
          ],
          hints: ["kenji", "douze ans", "sora", "ombres grises", "maître ryo"],
        },
        {
          type: "🗺️ Lieu & contexte",
          question:
            "Où et quand se déroule la scène ? Pourquoi ce cadre est-il dangereux ?",
          keywords: [
            { group: "Lieu", words: ["toit", "toits", "kazan", "nuit"] },
            { group: "Danger", words: ["garde", "gardes", "repér"] },
          ],
          hints: ["toits mouillés", "vieux quartier de kazan", "trois gardes"],
        },
        {
          type: "📖 Compréhension",
          question: "Quels événements viennent perturber la mission de Kenji ?",
          keywords: [
            { group: "Intrusion", words: ["sora", "suit", "suivait", "bruit"] },
            { group: "Gardes", words: ["garde", "gardes", "repér", "torche"] },
          ],
          hints: ["quelqu'un le suivait", "trois gardes surgirent"],
        },
        {
          type: "❤️ Émotions",
          question:
            "Comment Kenji se sent-il ? Relève deux citations dans le texte.",
          keywords: [
            { group: "Peur", words: ["peur", "cœur", "paniq", "trembl"] },
            {
              group: "Citation",
              words: ["concentre", "droit", "erreur", "seul"],
            },
          ],
          hints: [
            "concentre-toi",
            "tu n'as pas droit à l'erreur",
            "son cœur s'emballa",
          ],
        },
        {
          type: "🔬 Analyse",
          question:
            "Relève un passage rythmé dans le texte. Quel effet produit-il ?",
          keywords: [
            {
              group: "Passage",
              words: ["concentre", "droit", "erreur", "fuir"],
            },
            {
              group: "Effet",
              words: ["pensée", "intérieur", "direct", "voix"],
            },
          ],
          hints: [
            "concentre-toi",
            "tu n'as pas droit à l'erreur",
            "fuir ou rester",
          ],
        },
        {
          type: "🌱 Récit initiatique",
          question:
            "En quoi ce texte est-il un récit initiatique ? Quelle leçon Kenji apprend-il ?",
          keywords: [
            {
              group: "Épreuve",
              words: ["épreuve", "première", "seul", "mission"],
            },
            {
              group: "Leçon",
              words: ["aide", "accepter", "confiance", "grandir", "ensemble"],
            },
          ],
          hints: ["la vraie épreuve", "accepter l'aide", "il prit sa main"],
        },
      ],
    },
  ],
};
