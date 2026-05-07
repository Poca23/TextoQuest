const STORY = {
  id: "story-6_Les_Trois_Freres",
  title: "Les Trois Frères",
  description:
    "Un âne qui refuse tout, un mouton qui accepte tout, un chat qui ne répond jamais… Laquelle de ces trois façons d'être est la bonne ?",
  background: "stories/story-6_Les_Trois_Freres/bg.png",

  text: `
    <p>Il était une fois trois frères qui vivaient dans la même ferme, au bord d'un grand champ de blé. Ils étaient très différents l'un de l'autre — ce qui, au fond, n'était pas vraiment un problème. Le problème, c'est qu'aucun des trois ne savait vraiment <em>décider</em>.</p>

    <p>Le premier frère s'appelait Baudouin. C'était un âne. Un âne solide, aux longues oreilles grises et au regard buté. Baudouin avait une règle simple dans la vie : dire non. Toujours non. Non au froid, non au chaud, non au travail, non au repos. Non à la soupe du soir, non à la chanson du matin. Non à tout, et à tout le monde.</p>
    <p>— Tu veux venir ramasser les pommes avec nous ? lui demandait-on.</p>
    <p>— Non.</p>
    <p>— Tu veux rester là à ne rien faire ?</p>
    <p>— Non plus.</p>
    <p>Baudouin passait ses journées à refuser, sans jamais vraiment savoir ce qu'il voulait. Il croyait que dire non, c'était être fort. Mais au fond, il avait juste peur de se tromper.</p>

    <p>Le deuxième frère s'appelait Flochet. C'était un mouton. Un mouton doux, à la toison blanche et bien peignée, toujours souriant. Flochet avait lui aussi une règle simple dans la vie : dire oui. Toujours oui. Oui au froid, oui au chaud, oui au travail, oui au repos. Oui à la soupe du soir, oui à la chanson du matin. Oui à tout, et à tout le monde.</p>
    <p>— Tu veux venir ramasser les pommes ?</p>
    <p>— Oh oui, avec plaisir !</p>
    <p>— Tu veux plutôt rester là ?</p>
    <p>— Oh oui, bonne idée aussi !</p>
    <p>Flochet ne contrariait jamais personne. Il croyait que dire oui, c'était être gentil. Mais au fond, il avait juste peur de déplaire.</p>

    <p>Le troisième frère s'appelait Milou. C'était un chat. Un chat roux et rond, aux pattes moelleuses, toujours allongé sur quelque chose de confortable. Milou avait, lui, une règle encore plus simple : ne rien dire du tout. Ni oui, ni non. Il fermait les yeux, remuait légèrement la queue, et tout le monde comprenait que la question ne méritait pas de réponse.</p>
    <p>— Tu veux venir ramasser les pommes ?</p>
    <p><em>Queue lente à droite.</em></p>
    <p>— Ça veut dire oui ou non ?</p>
    <p><em>Queue lente à gauche.</em></p>
    <p>Milou ne se fatiguait jamais. Il croyait que ne rien décider, c'était avoir la paix. Mais au fond, il avait juste peur de devoir faire un effort.</p>

    <p>Un matin d'automne, une vieille chouette se posa sur la barrière de la ferme. Elle les regarda tous les trois — l'un planté dans son refus, l'autre dans son accord, le troisième dans sa sieste — et dit d'une voix tranquille :</p>
    <p>— Je vais vous poser une seule question. Réfléchissez bien avant de répondre.</p>
    <p>Elle marqua une pause.</p>
    <p>— <strong>Qu'est-ce que vous voulez, vous ?</strong></p>

    <p>Baudouin ouvrit la bouche pour dire non, puis la referma. C'était une drôle de question. Qu'est-ce qu'il voulait, <em>lui</em> ? Il n'avait jamais vraiment pensé à ça. Il était trop occupé à refuser les propositions des autres pour se demander ce qu'il aurait envie de proposer, lui.</p>

    <p>Flochet ouvrit la bouche pour dire oui, puis la referma aussi. Oui à quoi ? La chouette n'avait rien proposé. Elle avait juste demandé ce qu'il <em>voulait</em>. Et là, Flochet se rendit compte qu'il ne savait pas. Il connaissait les goûts de tout le monde autour de lui, mais jamais il ne s'était demandé quels étaient les siens.</p>

    <p>Milou entrouvrit un œil. Remua la queue. Puis l'autre œil. C'était la première fois qu'une question le dérangeait vraiment dans sa sieste. Il aurait voulu l'ignorer comme les autres. Mais elle restait là, à flotter dans l'air frais du matin : <em>Qu'est-ce que vous voulez, vous ?</em></p>

    <p>Il y eut un long silence.</p>

    <p>Puis Baudouin dit, très doucement — si doucement qu'il dut se répéter :</p>
    <p>— Je… je crois que j'aimerais apprendre à construire quelque chose. Avec mes mains. Enfin, mes sabots.</p>

    <p>Flochet réfléchit encore un moment, puis dit avec une voix un peu tremblante, comme quelqu'un qui n'a pas l'habitude de parler pour lui-même :</p>
    <p>— Moi… j'aimerais apprendre à chanter. Vraiment chanter. Pas juste accompagner les autres.</p>

    <p>Milou, lui, ne dit rien tout de suite. Mais il se leva. Il s'étira. Et pour la première fois depuis longtemps, il marcha jusqu'à la fenêtre pour regarder dehors. Puis il dit :</p>
    <p>— Je voudrais voir ce qu'il y a de l'autre côté de la colline.</p>

    <p>La chouette sourit — autant qu'une chouette peut sourire.</p>
    <p>— Voilà, dit-elle. C'est ça, décider. Pas dire oui à tout. Pas dire non à tout. Pas ne rien dire du tout. Décider, c'est <strong>savoir ce que l'on veut</strong>, y réfléchir honnêtement, et avoir le courage de le dire. C'est comme ça qu'on apprend à se connaître soi-même.</p>
    <p>Elle ouvrit ses grandes ailes et s'envola.</p>
  `,

  phases: [
    {
      type: "drag-drop",
      title: "🔍 Phase 1 – Reconstitue le récit",
      instructions: "Glisse les blocs dans le bon ordre chronologique.",
      blocks: [
        {
          id: 0,
          label: "Présentation de Baudouin",
          text: "L'âne qui dit toujours non est présenté.",
        },
        {
          id: 1,
          label: "Présentation de Flochet",
          text: "Le mouton qui dit toujours oui est présenté.",
        },
        {
          id: 2,
          label: "Présentation de Milou",
          text: "Le chat qui ne répond jamais est présenté.",
        },
        {
          id: 3,
          label: "La chouette arrive",
          text: "Une vieille chouette se pose sur la barrière et pose une question.",
        },
        {
          id: 4,
          label: "Les trois frères sont déstabilisés",
          text: "Chacun réalise qu'il ne sait pas ce qu'il veut vraiment.",
        },
        {
          id: 5,
          label: "Chacun répond honnêtement",
          text: "Pour la première fois, chaque frère exprime un vrai désir.",
        },
        {
          id: 6,
          label: "La leçon de la chouette",
          text: "La chouette explique ce que signifie vraiment décider.",
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
          type: "🧍 Personnages",
          question:
            "Qui sont les trois frères ? Pour chacun, dis son prénom, son espèce et sa façon de répondre aux autres.",
          keywords: [
            { group: "Baudouin", words: ["baudouin", "âne", "non"] },
            { group: "Flochet", words: ["flochet", "mouton", "oui"] },
            { group: "Milou", words: ["milou", "chat", "rien", "queue"] },
          ],
          hints: ["baudouin", "flochet", "milou", "âne", "mouton", "chat"],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Il y a <strong>trois personnages principaux</strong>. Pour chacun, cherche : son prénom, ce qu'il est (quelle sorte d'animal) et sa façon typique de répondre.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Chaque frère est présenté dans un paragraphe séparé. Relis le début de chaque présentation : « Le premier frère… », « Le deuxième frère… », « Le troisième frère… ».",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces passages introduisent chaque frère. Pour chacun, note son prénom, son espèce, et le mot qu'il dit toujours (ou jamais).",
            },
          ],
        },
        {
          number: "Indice 2 / 6",
          type: "🗺️ Lieu & contexte",
          question:
            "Où vivent les trois frères ? À quel moment de l'année se passe la scène avec la chouette ? Cite le texte.",
          keywords: [
            { group: "Lieu", words: ["ferme", "champ", "blé"] },
            { group: "Moment", words: ["automne", "matin"] },
          ],
          hints: ["ferme", "champ de blé", "un matin d'automne"],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Cherche <strong>où</strong> se passe l'histoire et <strong>quand</strong> arrive la chouette. Il faut deux informations : un lieu et un moment.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Le lieu est dans la toute première phrase. Le moment se trouve dans le paragraphe qui commence par « Un matin… ».",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces passages donnent le lieu et le moment. Recopie une courte phrase pour chacun.",
            },
          ],
        },
        {
          number: "Indice 3 / 6",
          type: "📖 Compréhension",
          question:
            "Quelle est la vraie raison pour laquelle Baudouin dit toujours non ? Et Flochet dit toujours oui ? Le texte l'explique : cherche et cite.",
          keywords: [
            { group: "Baudouin", words: ["peur", "tromper"] },
            { group: "Flochet", words: ["peur", "déplaire"] },
          ],
          hints: [
            "il avait juste peur de se tromper",
            "il avait juste peur de déplaire",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Le texte ne dit pas seulement ce que font les personnages — il dit aussi <strong>pourquoi</strong> ils le font. Cherche le mot « peur » dans les paragraphes de présentation.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "À la fin du paragraphe sur Baudouin, il y a une phrase qui commence par « Mais au fond… ». Pareil pour Flochet. Cherche ces deux phrases.",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces deux phrases révèlent les vraies raisons. Recopie-les et dis, dans tes propres mots, de quoi chaque frère a peur.",
            },
          ],
        },
        {
          number: "Indice 4 / 6",
          type: "❤️ Émotions",
          question:
            "Quand la chouette pose sa question, comment réagissent les trois frères ? Décris ce que chacun ressent ou fait, en t'appuyant sur le texte.",
          keywords: [
            {
              group: "Réaction",
              words: [
                "ouvrit",
                "referma",
                "entrouvrit",
                "dérangea",
                "tremblan",
              ],
            },
            {
              group: "Émotion",
              words: ["déstabilis", "surpris", "perdu", "troubl", "incertain"],
            },
          ],
          hints: [
            "ouvrit la bouche pour dire non, puis la referma",
            "voix un peu tremblante",
            "la première fois qu'une question le dérangeait",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Cherche comment <strong>chaque frère réagit</strong> après la question de la chouette. Leurs gestes et leurs mots montrent ce qu'ils ressentent.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis les trois paragraphes après la question de la chouette (un pour Baudouin, un pour Flochet, un pour Milou). Que fait chacun ?",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces passages montrent la réaction de chaque frère. Pour chacun, dis en un mot ce qu'il ressent : surprise ? gêne ? trouble ?",
            },
          ],
        },
        {
          number: "Indice 5 / 6",
          type: "🔬 Observe l'écriture",
          question:
            "L'auteure présente les trois frères de la même façon, avec la même structure à chaque fois. Qu'est-ce qui se répète d'un frère à l'autre ? Pourquoi, selon toi ?",
          keywords: [
            {
              group: "Structure",
              words: [
                "répète",
                "même",
                "pareil",
                "structure",
                "dialogue",
                "schéma",
              ],
            },
            {
              group: "Effet",
              words: [
                "comparaison",
                "comparer",
                "différence",
                "ressemblance",
                "rythme",
                "parallèle",
              ],
            },
          ],
          hints: [
            "Le premier frère s'appelait",
            "Le deuxième frère s'appelait",
            "Le troisième frère s'appelait",
            "il croyait que",
            "mais au fond",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Relis les trois paragraphes de présentation. Est-ce que certaines phrases ou formules <strong>se ressemblent</strong> d'un frère à l'autre ? C'est ce qu'on appelle une structure répétitive.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Cherche les formules qui reviennent : « Il croyait que… », « Mais au fond… », et les petits dialogues avec les mêmes questions. Que remarques-tu ?",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces formules se répètent trois fois. C'est fait exprès pour qu'on puisse comparer les trois frères facilement. Est-ce que ça aide à comprendre leurs différences ?",
            },
          ],
        },
        {
          number: "Indice 6 / 6",
          type: "🌱 Ce que l'histoire enseigne",
          question:
            "À la fin, la chouette explique ce que signifie vraiment décider. Recopie sa phrase clé, puis dis avec tes propres mots ce que les trois frères ont appris.",
          keywords: [
            {
              group: "Citation",
              words: ["savoir", "veut", "réfléchir", "courage", "connaître"],
            },
            {
              group: "Explication",
              words: [
                "décider",
                "choisir",
                "réfléchi",
                "soi",
                "envie",
                "personnel",
              ],
            },
          ],
          hints: [
            "savoir ce que l'on veut",
            "y réfléchir honnêtement",
            "avoir le courage de le dire",
            "c'est comme ça qu'on apprend à se connaître soi-même",
          ],
          help: [
            {
              level: 1,
              icon: "💡",
              title: "Astuce méthode",
              text: "Pose-toi la question : <strong>Pourquoi ?</strong> — Qu'est-ce que cette histoire veut nous apprendre ? La réponse est dans les dernières paroles de la chouette.",
            },
            {
              level: 2,
              icon: "🔍",
              title: "Cherche dans le texte",
              text: "Relis le tout dernier discours de la chouette. Il y a une phrase en gras : c'est le cœur du message. Cherche-la.",
            },
            {
              level: 3,
              icon: "🔦",
              title: "Regarde les passages surlignés",
              text: "Ces phrases disent ce que signifie décider. Recopie la phrase en gras, puis explique avec tes propres mots ce que chaque frère a compris ce jour-là.",
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
