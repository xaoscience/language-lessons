export const exercise2PageContent = {
  title: {
    EN: "Exercise 2: Articles and Adjective Endings",
    NL: "Oefening 2: Lidwoorden en Uitgangen van Bijvoeglijke Naamwoorden",
    DE: "Übung 2: Artikel und Adjektivendungen",
    FR: "Exercice 2 : Articles et Terminaisons d'Adjectifs",
    IT: "Esercizio 2: Articoli e Desinenze degli Aggettivi",
    PT: "Exercício 2: Artigos e Terminações de Adjetivos",
    SV: "Övning 2: Artiklar och Adjektivändelser"
  },
  settings: {
    totalQuestions: 12,
    passingScore: 75,
    allowRetry: true,
    shuffleQuestions: true
  },
  questions: [
    {
      id: "ex2q1",
      type: "multiple_choice",
      questionText: { EN: "Which article is used for 'huis' (house)?", NL: "Welk lidwoord wordt gebruikt voor 'huis'?" },
      options: [
        { text: "de", correct: false },
        { text: "het", correct: true },
        { text: "een (as definite)", correct: false }
      ],
      feedback: {
        correct: { EN: "Correct! 'Huis' is a het-word: 'het huis'.", NL: "Correct! 'Huis' is een het-woord: 'het huis'." },
        incorrect: { EN: "'Huis' is a het-word, so the definite article is 'het'.", NL: "'Huis' is een het-woord, dus het bepaald lidwoord is 'het'." }
      }
    },
    {
      id: "ex2q2",
      type: "multiple_choice",
      questionText: { EN: "Which article is used for 'man' (man)?", NL: "Welk lidwoord wordt gebruikt voor 'man'?" },
      options: [
        { text: "de", correct: true },
        { text: "het", correct: false },
        { text: "een (as definite)", correct: false }
      ],
      feedback: {
        correct: { EN: "Correct! 'Man' is a de-word: 'de man'.", NL: "Correct! 'Man' is een de-woord: 'de man'." },
        incorrect: { EN: "'Man' is a de-word, so the definite article is 'de'.", NL: "'Man' is een de-woord, dus het bepaald lidwoord is 'de'." }
      }
    },
    {
      id: "ex2q3",
      type: "fill_in_the_blank",
      questionText: { EN: "____ boek (a book)", NL: "____ boek" },
      answer: "een",
      feedback: {
        correct: { EN: "Perfect! The indefinite article is always 'een'.", NL: "Perfect! Het onbepaald lidwoord is altijd 'een'." },
        incorrect: { EN: "The indefinite article for all singular nouns is 'een'.", NL: "Het onbepaald lidwoord voor alle enkelvoudige zelfstandige naamwoorden is 'een'." }
      }
    },
    {
      id: "ex2q4",
      type: "fill_in_the_blank_adjective", // Custom type for this specific scenario if needed, or use fill_in_the_blank
      questionText: { EN: "de ____ auto (big)", NL: "de ____ auto (groot)" },
      answer: "grote",
      feedback: {
        correct: { EN: "Correct! With de-words, the adjective gets an -e.", NL: "Correct! Bij de-woorden krijgt het bijvoeglijk naamwoord een -e." },
        incorrect: { EN: "For de-words, the adjective (groot) takes an -e ending: 'grote'.", NL: "Bij de-woorden krijgt het bijvoeglijk naamwoord (groot) een -e uitgang: 'grote'." }
      }
    },
    {
      id: "ex2q5",
      type: "fill_in_the_blank_adjective",
      questionText: { EN: "het ____ huis (small)", NL: "het ____ huis (klein)" },
      answer: "kleine",
      feedback: {
        correct: { EN: "Excellent! With 'het' + het-word, the adjective gets an -e.", NL: "Uitstekend! Met 'het' + het-woord krijgt het bijvoeglijk naamwoord een -e." },
        incorrect: { EN: "When a het-word is preceded by the definite article 'het', the adjective (klein) takes an -e: 'kleine'.", NL: "Wanneer een het-woord wordt voorafgegaan door het bepaald lidwoord 'het', krijgt het bijvoeglijk naamwoord (klein) een -e: 'kleine'." }
      }
    },
    {
      id: "ex2q6",
      type: "fill_in_the_blank_adjective",
      questionText: { EN: "een ____ kind (young)", NL: "een ____ kind (jong)" },
      answer: "jong",
      feedback: {
        correct: { EN: "You got it! With 'een' + het-word, the adjective does not get an -e.", NL: "Dat heb je goed! Met 'een' + het-woord krijgt het bijvoeglijk naamwoord geen -e." },
        incorrect: { EN: "'Kind' is a het-word. When preceded by 'een', the adjective (jong) does not take an -e.", NL: "'Kind' is een het-woord. Wanneer voorafgegaan door 'een', krijgt het bijvoeglijk naamwoord (jong) geen -e." }
      }
    },
    {
      id: "ex2q7",
      type: "multiple_choice_adjective",
      questionText: { EN: "Choose the correct form: 'een ____ fiets' (new bicycle - 'fiets' is a de-word)", NL: "Kies de juiste vorm: 'een ____ fiets' (nieuwe fiets - 'fiets' is een de-woord)" },
      options: [
        { text: "nieuw", correct: false },
        { text: "nieuwe", correct: true }
      ],
      feedback: {
        correct: { EN: "Correct! 'Een nieuwe fiets' is right because 'fiets' is a de-word.", NL: "Correct! 'Een nieuwe fiets' is juist omdat 'fiets' een de-woord is." },
        incorrect: { EN: "Even with 'een', de-words take an inflected adjective (-e). So, 'een nieuwe fiets'.", NL: "Zelfs met 'een' krijgen de-woorden een verbogen bijvoeglijk naamwoord (-e). Dus, 'een nieuwe fiets'." }
      }
    },
    {
      id: "ex2q8",
      type: "sentence_completion_adjective",
      questionText: { EN: "De appels zijn ____. (red)", NL: "De appels zijn ____. (rood)" },
      answer: "rood",
      feedback: {
        correct: { EN: "Perfect! Predicative adjectives (after 'zijn') do not get an -e.", NL: "Perfect! Predicatieve bijvoeglijke naamwoorden (na 'zijn') krijgen geen -e." },
        incorrect: { EN: "When an adjective is used predicatively (e.g., after 'zijn'), it does not take an -e. So, 'rood'.", NL: "Wanneer een bijvoeglijk naamwoord predicatief wordt gebruikt (bijv. na 'zijn'), krijgt het geen -e. Dus, 'rood'." }
      }
    },
    {
      id: "ex2q9",
      type: "form_plural",
      questionText: { EN: "What is the plural of 'tafel' (table)?", NL: "Wat is het meervoud van 'tafel'?" },
      answer: "tafels",
      feedback: {
        correct: { EN: "Correct! 'Tafels' is the plural.", NL: "Correct! 'Tafels' is het meervoud." },
        incorrect: { EN: "Nouns ending in -el, -em, -en, -er often take -s for plural. So, 'tafels'.", NL: "Zelfstandige naamwoorden eindigend op -el, -em, -en, -er krijgen vaak -s in het meervoud. Dus, 'tafels'." }
      }
    },
    {
      id: "ex2q10",
      type: "form_plural_apostrophe",
      questionText: { EN: "What is the plural of 'oma' (grandma)?", NL: "Wat is het meervoud van 'oma'?" },
      answer: "oma's",
      feedback: {
        correct: { EN: "Yes, 'oma\'s' with an apostrophe to keep the 'a' sound long.", NL: "Ja, 'oma\'s' met een apostrof om de 'a'-klank lang te houden." },
        incorrect: { EN: "Nouns ending in a single vowel like 'a' get 's for plural: 'oma\'s'.", NL: "Zelfstandige naamwoorden die eindigen op een enkele klinker zoals 'a' krijgen 's in het meervoud: 'oma\'s'." }
      }
    },
    {
      id: "ex2q11",
      type: "fill_in_the_blank_plural",
      questionText: { EN: "Ik zie drie ____. (vogel - bird)", NL: "Ik zie drie ____. (vogel)" },
      answer: "vogels",
      feedback: {
        correct: { EN: "Correct!", NL: "Correct!" },
        incorrect: { EN: "The plural of 'vogel' is 'vogels'.", NL: "Het meervoud van 'vogel' is 'vogels'." }
      }
    },
    {
      id: "ex2q12",
      type: "fill_in_the_blank_adjective_plural",
      questionText: { EN: "de ____ (oud) ____ (huizen)", NL: "de ____ (oud) ____ (huizen)" }, // User fills two blanks
      answer: ["oude", "huizen"], // Expecting an array of answers
      feedback: {
        correct: { EN: "Perfect! 'de oude huizen' is correct.", NL: "Perfect! 'de oude huizen' is correct." },
        incorrect: { EN: "The plural of 'huis' is 'huizen'. With plural nouns (always 'de'), adjectives get an -e. So: 'de oude huizen'.", NL: "Het meervoud van 'huis' is 'huizen'. Bij meervoudige zelfstandige naamwoorden (altijd 'de') krijgen bijvoeglijke naamwoorden een -e. Dus: 'de oude huizen'." }
      }
    }
  ]
};
