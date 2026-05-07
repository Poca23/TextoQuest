const STORY = {
  id: "story-5_Miss_Piplette",
  title: "Miss Piplette",
  description:
    "Miss Piplette parle, parle, parle… mais écoute-t-elle vraiment les autres ?",
  background: "stories/story-5_Miss_Piplette/bg.png",

  text: `
    <p>Tout le monde connaissait Miss Piplette. Dès qu'elle arrivait quelque part, sa voix remplissait la pièce comme une radio qu'on ne peut pas éteindre.</p>
    <p>Ce matin-là, sa voisine Léa frappa à sa porte, tout excitée.</p>
    <p>— Miss Piplette ! J'ai quelque chose à te dire, j'ai—</p>
    <p>— Oh, Léa ! Tu tombes bien ! Tu sais, hier soir j'ai regardé une émission sur les girafes, et figure-toi que leur langue est bleue ! Enfin, mauve plutôt. Ou violette ? En tout cas, ce n'est pas rose. Et leur cou, tu imagines ? Ça fait deux mètres de long…</p>
    <p>Léa attendit. Puis elle repartit, les deux billets de cirque dans la poche.</p>
    <p>L'après-midi, son ami Tom la croisa dans la rue.</p>
    <p>— Miss Piplette ! Je voulais te demander si—</p>
    <p>— Tom ! Justement ! Tu sais que le magasin du coin a changé ses horaires ? L'autre jour j'ai attendu dix minutes devant une porte fermée, et en plus il pleuvait, et j'avais oublié mon parapluie, celui avec les petits canards jaunes, tu te souviens ?…</p>
    <p>Tom hocha la tête et s'en alla rejoindre le club d'échecs tout seul.</p>
    <p>Le soir, sa petite sœur Zoé entra en courant dans le salon.</p>
    <p>— Miss Piplette, ATTENTION ! Le chat est sur la—</p>
    <p>— Zoé, ma chérie ! Tu as vu mes lunettes ? Je les cherche partout depuis ce matin…</p>
    <p>SPLASH.</p>
    <p>Le chat avait renversé le grand vase de fleurs. L'eau avait trempé les lunettes de Miss Piplette, celles qu'elle cherchait depuis une heure.</p>
    <p>Miss Piplette regarda le vase par terre, l'eau partout, ses lunettes trempées. Et pour la première fois depuis longtemps, elle ne dit rien.</p>
    <p>Elle réfléchit. Léa était venue ce matin. Tom voulait lui demander quelque chose. Et Zoé courait pour la prévenir. Ils voulaient tous lui parler. Et elle ne les avait pas écoutés.</p>
    <p>Elle se tourna doucement vers Zoé.</p>
    <p>— Merci d'avoir essayé de me prévenir. Tout va bien, ne t'inquiète pas.</p>
    <p>Zoé sourit et quitta la pièce.</p>
    <p>Alors Miss Piplette commença à nettoyer l'eau, ramasser les fleurs, ranger le vase. Et tout en travaillant, elle réfléchissait. Une fois tout rangé, elle s'assit dans son grand fauteuil et réfléchit encore.</p>
    <p>La nuit passa. Le soleil se leva. Les oiseaux chantèrent. Le coq fit entendre sa voix. Une fois le petit déjeuner pris, Miss Piplette prit son téléphone et appela Léa.</p>
    <p>— Allô ? Léa, c'est Miss Piplette… tu voulais me dire quelque chose hier ?</p>
    <p>Il y eut un silence. Puis Léa parla. Et cette fois, Miss Piplette écouta. Elle écouta vraiment.</p>
    <p><em>C'est ainsi que Miss Piplette apprit à regarder, à écouter, et à partager avec les autres.</em></p>
  `,

  phases: [
    {
      type: "drag-drop",
      title: "🔍 Remets l'histoire dans l'ordre",
      instructions:
        "Glisse les blocs pour reconstituer l'histoire de Miss Piplette.",
      blocks: [
        {
          id: 0,
          label: "Toujours bavarde",
          text: "Miss Piplette parle sans s'arrêter dès qu'elle voit quelqu'un.",
        },
        {
          id: 1,
          label: "Léa et les billets",
          text: "Léa veut annoncer une bonne nouvelle mais ne peut pas placer un mot.",
        },
        {
          id: 2,
          label: "Tom et les échecs",
          text: "Tom veut poser une question mais repart sans avoir pu parler.",
        },
        {
          id: 3,
          label: "Zoé et le chat",
          text: "Zoé essaie d'alerter Miss Piplette, mais trop tard : le vase tombe.",
        },
        {
          id: 4,
          label: "Le déclic",
          text: "Miss Piplette réfléchit toute la nuit et appelle Léa le lendemain.",
        },
      ],
    },
    {
      type: "qcm",
      title: "❓ Question sur le texte",
      instructions: "",
      question: "Pourquoi Léa repart-elle avec ses deux billets de cirque ?",
      multiple: false,
      options: [
        {
          text: "Elle a changé d'avis et ne veut plus y aller.",
          correct: false,
        },
        { text: "Miss Piplette ne la laisse pas parler.", correct: true },
        { text: "Miss Piplette refuse l'invitation.", correct: false },
        { text: "Léa est en retard et doit partir vite.", correct: false },
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
            "Comment est Miss Piplette ? Trouve un mot ou une phrase du texte qui le montre.",
          keywords: [
            { group: "Trait", words: ["parle", "bavarde", "voix", "radio"] },
          ],
          hints: [
            "sa voix remplissait la pièce",
            "une radio qu'on ne peut pas éteindre",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Quel est le gros défaut de Miss Piplette ? Cherche dans le tout premier paragraphe.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis le premier paragraphe. Il y a une comparaison amusante qui explique très bien comment est Miss Piplette.",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Recopie la comparaison et dis ce qu'elle signifie.",
            },
          ],
        },
        {
          number: "Indice 2 / 3",
          type: "🚫 Ce qu'elle rate",
          question:
            "Cite deux choses que Miss Piplette rate parce qu'elle ne laisse pas les autres parler.",
          keywords: [
            {
              group: "Chose 1",
              words: ["cirque", "billet", "billets", "invitation", "léa"],
            },
            {
              group: "Chose 2",
              words: [
                "échecs",
                "club",
                "tom",
                "vase",
                "chat",
                "zoé",
                "prévenir",
              ],
            },
          ],
          hints: [
            "deux billets de cirque",
            "le club d'échecs",
            "le chat est sur la",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Que voulaient dire Léa, Tom et Zoé ? Cherche ce que chacun voulait annoncer avant d'être coupé.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis les passages avec Léa et Tom. Qu'est-ce que chacun voulait lui dire ou lui demander ?",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces passages montrent ce que les autres voulaient dire. Pour chacun, explique ce que Miss Piplette a raté.",
            },
          ],
        },
        {
          number: "Indice 3 / 3",
          type: "🌱 La leçon",
          question:
            "Qu'est-ce que Miss Piplette comprend à la fin ? Explique avec tes propres mots.",
          keywords: [
            {
              group: "Leçon",
              words: ["écouter", "écoute", "taire", "silence", "parler"],
            },
            {
              group: "Changement",
              words: ["appelle", "comprend", "réfléchit", "nuit", "lendemain"],
            },
          ],
          hints: [
            "elle réfléchit",
            "cette fois, Miss Piplette écouta vraiment",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Qu'est-ce qui change chez Miss Piplette à la fin ? Qu'est-ce qu'elle fait différemment ?",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis les derniers paragraphes. Que fait Miss Piplette toute la nuit ? Et le lendemain matin ?",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces phrases montrent que Miss Piplette a changé. Qu'a-t-elle compris ? Dis-le avec tes propres mots.",
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
      icon: "🗣️",
      title: "Encore trop bavard·e",
      subtitle: "Relis le texte et écoute mieux !",
    },
    {
      min: 2,
      max: 2,
      icon: "🙉",
      title: "Tu commences à écouter",
      subtitle: "Continue comme ça !",
    },
    {
      min: 3,
      max: 3,
      icon: "👂",
      title: "Détective à l'écoute",
      subtitle: "Parler c'est bien, écouter c'est encore mieux !",
    },
  ],
};
