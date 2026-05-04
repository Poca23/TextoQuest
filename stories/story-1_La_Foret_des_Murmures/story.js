const STORY = {
  id: "story-1",
  title: "La Forêt des Murmures",
  description: "Une aventure courte pour s'initier au jeu.",
  background: "stories/story-1_La_Foret_des_Murmures/bg.png",

  text: `
    <p>Léa avait sept ans quand elle s'aventura seule dans la forêt derrière la maison.</p>
    <p>Les arbres étaient si grands qu'ils cachaient le ciel. Elle entendit un bruit étrange
       entre les fougères. Un petit renard roux la regardait, immobile.</p>
    <p>— N'aie pas peur, chuchota Léa.</p>
    <p>Le renard s'approcha doucement. Léa tendit la main. Il la renifla, puis s'enfuit
       en bondissant. Elle sourit : la forêt n'était plus effrayante.</p>
  `,

  phases: [
    {
      type: "drag-drop",
      title: "🔍 Remets l'histoire dans l'ordre",
      instructions: "Glisse les blocs pour reconstituer l'histoire.",
      blocks: [
        { id: 0, label: "Le début", text: "Léa entre seule dans la forêt." },
        {
          id: 1,
          label: "La découverte",
          text: "Elle entend un bruit et voit un renard roux.",
        },
        {
          id: 2,
          label: "La rencontre",
          text: "Léa tend la main. Le renard la renifle.",
        },
        {
          id: 3,
          label: "La fin",
          text: "Le renard s'enfuit. Léa n'a plus peur.",
        },
      ],
    },
    {
      type: "qcm",
      title: "❓ Question sur le texte",
      instructions: "",
      question: "Quel animal Léa rencontre-t-elle dans la forêt ?",
      multiple: false,
      options: [
        { text: "Un loup", correct: false },
        { text: "Un renard", correct: true },
        { text: "Un lapin", correct: false },
        { text: "Un écureuil", correct: false },
      ],
    },
    {
      type: "qcm",
      title: "❓ Plusieurs bonnes réponses",
      instructions: "",
      question:
        "Quels mots décrivent l'atmosphère de la forêt au début ? (plusieurs réponses)",
      multiple: true,
      options: [
        { text: "Mystérieuse", correct: true },
        { text: "Ensoleillée", correct: false },
        { text: "Effrayante", correct: true },
        { text: "Bruyante", correct: false },
      ],
    },
  ],

  badges: [
    {
      min: 0,
      max: 1,
      icon: "🌱",
      title: "Explorateur débutant",
      subtitle: "Continue !",
    },
    {
      min: 2,
      max: 2,
      icon: "🌟",
      title: "Maître de la forêt",
      subtitle: "Parfait !",
    },
  ],
};
