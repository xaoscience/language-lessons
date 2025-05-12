export const exercise1PageContent = {
  title: {
    EN: "Exercise 1: Basic Vocabulary & Greetings",
    NL: "Oefening 1: Basiswoordenschat & Begroetingen",
    DE: "Übung 1: Grundwortschatz & Begrüßungen",
    FR: "Exercice 1 : Vocabulaire de Base & Salutations",
    IT: "Esercizio 1: Vocabolario di Base e Saluti",
    PT: "Exercício 1: Vocabulário Básico e Saudações",
    SV: "Övning 1: Grundläggande Ordförråd och Hälsningar"
  },
  settings: {
    totalQuestions: 10, // Total questions to be presented in this exercise set
    passingScore: 70, // Percentage needed to pass
    allowRetry: true, // Can the user retry the exercise?
    shuffleQuestions: true // Should the order of questions be randomized?
  },
  questions: [
    {
      id: "ex1q1",
      type: "multiple_choice", // Types: multiple_choice, fill_in_the_blank, translate_to_nl, translate_to_en, matching_pairs
      questionText: { EN: "What is the Dutch word for 'Hello'?", NL: "Wat is het Nederlandse woord voor 'Hello'?" },
      options: [
        { text: "Goedemorgen", correct: false },
        { text: "Hallo", correct: true },
        { text: "Tot ziens", correct: false },
        { text: "Dank u wel", correct: false }
      ],
      feedback: {
        correct: { EN: "Correct! 'Hallo' is a common way to say hello.", NL: "Correct! 'Hallo' is een gebruikelijke manier om hallo te zeggen." },
        incorrect: { EN: "Not quite. 'Hallo' is the most direct translation for 'Hello'.", NL: "Niet helemaal. 'Hallo' is de meest directe vertaling voor 'Hello'." }
      }
    },
    {
      id: "ex1q2",
      type: "translate_to_nl",
      questionText: { EN: "Translate to Dutch: 'Good morning'", NL: "Vertaal naar het Nederlands: 'Good morning'" },
      answer: "Goedemorgen",
      accepted_answers: ["goede morgen", "goedemorgen"],
      feedback: {
        correct: { EN: "Excellent!", NL: "Uitstekend!" },
        incorrect: { EN: "The correct answer is 'Goedemorgen'.", NL: "Het juiste antwoord is 'Goedemorgen'." }
      }
    },
    {
      id: "ex1q3",
      type: "fill_in_the_blank",
      questionText: { EN: "Hoe ____ het? (How are you?)", NL: "Hoe ____ het?" },
      answer: "gaat",
      feedback: {
        correct: { EN: "Perfect! 'Hoe gaat het?' is correct.", NL: "Perfect! 'Hoe gaat het?' is correct." },
        incorrect: { EN: "The missing word is 'gaat'.", NL: "Het ontbrekende woord is 'gaat'." }
      }
    },
    {
      id: "ex1q4",
      type: "translate_to_en",
      questionText: { EN: "Translate to English: 'Dank u wel'", NL: "Vertaal naar het Engels: 'Dank u wel'" },
      answer: "Thank you",
      accepted_answers: ["thank you", "thank you very much"],
      feedback: {
        correct: { EN: "You got it!", NL: "Dat heb je goed!" },
        incorrect: { EN: "'Dank u wel' means 'Thank you' or 'Thank you very much'.", NL: "'Dank u wel' betekent 'Thank you' of 'Thank you very much'." }
      }
    },
    {
      id: "ex1q5",
      type: "multiple_choice",
      questionText: { EN: "Which of these means 'Goodbye'?", NL: "Welke van deze betekent 'Goodbye'?" },
      options: [
        { text: "Alstublieft", correct: false },
        { text: "Ja", correct: false },
        { text: "Nee", correct: false },
        { text: "Tot ziens", correct: true }
      ],
      feedback: {
        correct: { EN: "That's right!", NL: "Dat klopt!" },
        incorrect: { EN: "'Tot ziens' is a common way to say goodbye.", NL: "'Tot ziens' is een gebruikelijke manier om gedag te zeggen." }
      }
    },
    {
      id: "ex1q6",
      type: "matching_pairs",
      questionText: { EN: "Match the Dutch pronoun to its English equivalent.", NL: "Koppel het Nederlandse voornaamwoord aan zijn Engelse equivalent." },
      pairs: [
        { term: "Ik", definition: "I" },
        { term: "Jij", definition: "You (singular, informal)" },
        { term: "Hij", definition: "He" },
        { term: "Wij", definition: "We" }
      ],
      distractors: ["She", "They"], // Optional: add some incorrect options for the definitions
      feedback: {
        correct: { EN: "Great matching!", NL: "Goed gekoppeld!" },
        incorrect: { EN: "Review the pronouns from Lesson 1.", NL: "Herbekijk de voornaamwoorden uit Les 1." }
      }
    },
    {
      id: "ex1q7",
      type: "fill_in_the_blank",
      questionText: { EN: "____ ben een student. (I am a student.)", NL: "____ ben een student." },
      answer: "Ik",
      feedback: {
        correct: { EN: "Correct!", NL: "Correct!" },
        incorrect: { EN: "The subject pronoun for 'I' is 'Ik'.", NL: "Het onderwerp voornaamwoord voor 'I' is 'Ik'." }
      }
    },
    {
      id: "ex1q8",
      type: "translate_to_nl",
      questionText: { EN: "Translate to Dutch: 'She is nice'", NL: "Vertaal naar het Nederlands: 'She is nice'" },
      answer: "Zij is aardig",
      accepted_answers: ["zij is aardig", "ze is aardig"],
      feedback: {
        correct: { EN: "Well done!", NL: "Goed gedaan!" },
        incorrect: { EN: "The correct translation is 'Zij is aardig' or 'Ze is aardig'.", NL: "De juiste vertaling is 'Zij is aardig' of 'Ze is aardig'." }
      }
    },
    {
      id: "ex1q9",
      type: "multiple_choice",
      questionText: { EN: "What does 'Alstublieft' mean?", NL: "Wat betekent 'Alstublieft'?" },
      options: [
        { text: "Sorry", correct: false },
        { text: "Please / Here you are", correct: true },
        { text: "Excuse me", correct: false },
        { text: "Yes", correct: false }
      ],
      feedback: {
        correct: { EN: "Correct! It can mean 'Please' or 'Here you are' when giving something.", NL: "Correct! Het kan 'Alsjeblieft' betekenen of 'Hier alsjeblieft' wanneer je iets geeft." },
        incorrect: { EN: "'Alstublieft' means 'Please' or 'Here you are'.", NL: "'Alstublieft' betekent 'Alsjeblieft' of 'Hier alsjeblieft'." }
      }
    },
    {
      id: "ex1q10",
      type: "translate_to_en",
      questionText: { EN: "Translate to English: 'Nee, dank u.'", NL: "Vertaal naar het Engels: 'Nee, dank u.'" },
      answer: "No, thank you.",
      accepted_answers: ["no thank you", "no, thank you"],
      feedback: {
        correct: { EN: "Perfect!", NL: "Perfect!" },
        incorrect: { EN: "This translates to 'No, thank you.'", NL: "Dit vertaalt naar 'No, thank you.'." }
      }
    }
    // Add more questions as needed
  ]
};
