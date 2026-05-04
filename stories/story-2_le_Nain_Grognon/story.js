const STORY = {
  id: "story-2_le_Nain_Grognon",
  title: "Le Nain Grognon",
  description:
    "Grogno ronchonne sur tout — mais à force de râler, que rate-t-il vraiment ?",
  background: "stories/story-2_le_Nain_Grognon/bg.png",

  text: `
    <p>Tout le monde l'appelait Grogno. Pas parce que c'était son vrai prénom — sa mère l'avait prénommé Borin —, mais parce qu'il ronchonnait pour tout, pour rien, depuis tout petit.</p>
    <p>Grogno vivait dans une maison creusée à flanc de colline avec ses parents et sa petite sœur Pippa, qui riait tout le temps. Ça l'agaçait.</p>
    <p>Un soir, ses compagnons de mine Durk et Tomas l'invitèrent à une partie de quilles dans la grande galerie. Grogno grimaça. « Ça va sentir la poussière, et je suis nul aux quilles. » Il n'y alla pas. De loin, il entendit leurs éclats de rire résonner dans la roche. Il s'endormit en ronchonnant.</p>
    <p>Le lendemain, un gros bloc de roche obstruait le passage vers le nouveau filon. Grogno croisa les bras. « C'est impossible. C'est trop lourd. Rien ne marche jamais. » Il se plaignit ainsi pendant une bonne heure. Durk passa, examina le bloc, et montra du doigt une fissure sur le côté. « Si tu glisses le pic là, il pivote tout seul. » La solution était là depuis le début. Grogno rougit sous sa barbe naissante.</p>
    <p>Ce soir-là, Pippa posa un bol de soupe devant lui. « Elle va être trop salée », dit-il automatiquement. Pippa le regarda, les yeux ronds. « Tu ne l'as même pas goûtée. » Grogno prit la cuillère. La soupe était excellente. Quelque chose de chaud remua dans sa poitrine.</p>
    <p>Le surlendemain, nouvelle invitation pour les quilles. Grogno prit une grande inspiration. <em>Ce sera bruyant. Et alors ?</em> Il enfila sa veste et y alla. Il fut nul. Mais il rit — un vrai rire, un peu rouillé, comme une porte qu'on n'a pas ouverte depuis longtemps.</p>
    <p>En rentrant, Pippa lui sourit. « Tu as l'air différent. » Grogno haussa les épaules. Puis, après un silence : « La soupe, c'est quoi ce soir ? » Pippa éclata de rire. Et cette fois, il ne dit rien contre ça.</p>
  `,

  phases: [
    {
      type: "drag-drop",
      title: "🔍 Remets l'histoire dans l'ordre",
      instructions: "Glisse les blocs pour reconstituer l'histoire de Grogno.",
      blocks: [
        {
          id: 0,
          label: "Le ronchon",
          text: "Grogno ronchonne sur tout depuis tout petit.",
        },
        {
          id: 1,
          label: "La partie ratée",
          text: "Il refuse l'invitation aux quilles et entend les rires de loin.",
        },
        {
          id: 2,
          label: "Le bloc de roche",
          text: "Il se plaint une heure devant un problème qui avait une solution simple.",
        },
        {
          id: 3,
          label: "La soupe",
          text: "Il critique la soupe sans l'avoir goûtée — elle est délicieuse.",
        },
        {
          id: 4,
          label: "Le déclic",
          text: "Il accepte enfin l'invitation et rit pour la première fois.",
        },
      ],
    },
    {
      type: "qcm",
      title: "❓ Question sur le texte",
      instructions: "",
      question:
        "Pourquoi Grogno ne trouve-t-il pas la solution pour déplacer le bloc de roche ?",
      multiple: false,
      options: [
        { text: "Il n'a pas les bons outils", correct: false },
        {
          text: "Il passe son temps à se plaindre au lieu de regarder",
          correct: true,
        },
        { text: "Il attend l'aide de ses parents", correct: false },
        { text: "Il a peur du filon", correct: false },
      ],
    },
    {
      type: "free-text",
      title: "🕵️ Interroge le texte",
      instructions: "",
      clues: [
        {
          number: "Indice 1 / 3",
          type: "🧍 Personnage",
          question:
            "Comment s'appelle vraiment Grogno, et pourquoi tout le monde l'appelle autrement ?",
          keywords: [
            { group: "Prénom", words: ["borin"] },
            {
              group: "Surnom",
              words: [
                "ronchonnait",
                "ronchon",
                "grognait",
                "grognon",
                "râlait",
              ],
            },
          ],
          hints: ["prénommé Borin", "ronchonnait"],
        },
        {
          number: "Indice 2 / 3",
          type: "🚫 Ce qu'il rate",
          question: "Cite deux choses que Grogno rate à cause de son attitude.",
          keywords: [
            { group: "Chose 1", words: ["quille", "quilles", "jeu", "rire"] },
            {
              group: "Chose 2",
              words: ["soupe", "solution", "bloc", "fissure"],
            },
          ],
          hints: [
            "partie de quilles",
            "soupe",
            "la solution était là depuis le début",
          ],
        },
        {
          number: "Indice 3 / 3",
          type: "🌱 La leçon",
          question:
            "Quelle leçon Grogno apprend-il à la fin ? Utilise tes propres mots.",
          keywords: [
            {
              group: "Leçon",
              words: [
                "essayer",
                "profiter",
                "positif",
                "chance",
                "rire",
                "accepter",
                "ouvrir",
              ],
            },
            {
              group: "Changement",
              words: ["différent", "change", "décide", "rit", "essaie", "va"],
            },
          ],
          hints: [
            "il rit",
            "il enfila sa veste et y alla",
            "tu as l'air différent",
          ],
        },
      ],
    },
  ],

  badges: [
    {
      min: 0,
      max: 1,
      icon: "😤",
      title: "Encore grognon",
      subtitle: "Relis le texte !",
    },
    {
      min: 2,
      max: 2,
      icon: "🙂",
      title: "En progrès",
      subtitle: "Grogno serait fier !",
    },
    {
      min: 3,
      max: 3,
      icon: "😄",
      title: "Nain joyeux",
      subtitle: "Tu as tout compris !",
    },
  ],
};
