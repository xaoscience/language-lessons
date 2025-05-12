const commonTranslations = {
  NL: {
    lesson: 'Les',
    chapter: 'Hoofdstuk',
    exercises: 'Oefeningen',
    home: 'Start',
    back: 'Terug',
    next: 'Volgende',
    dutch: 'Nederlands',
    sections: 'Onderdelen',
    wip: 'Werk in Uitvoering',
    start: 'Begin',
    language: 'Taal',
    lessons: 'Lessen',
    welcome: 'Welkom',
    language_lessons: 'Taallessen',
    dutch_lessons: 'Nederlandse Lessen'
  },
  EN: {
    lesson: 'Lesson',
    chapter: 'Chapter',
    exercises: 'Exercises',
    home: 'Home',
    back: 'Back',
    next: 'Next',
    dutch: 'Dutch',
    sections: 'Sections',
    wip: 'Work in Progress',
    start: 'Start',
    language: 'Language',
    lessons: 'Lessons',
    welcome: 'Welcome',
    language_lessons: 'Language Lessons',
    dutch_lessons: 'Dutch Lessons'
  },
  FR: {
    lesson: 'Leçon',
    chapter: 'Chapitre',
    exercises: 'Exercices',
    home: 'Accueil',
    back: 'Retour',
    next: 'Suivant',
    dutch: 'Néerlandais',
    sections: 'Sections',
    wip: 'Travail en cours',
    start: 'Commencer',
    language: 'Langue',
    lessons: 'Leçons',
    welcome: 'Bienvenue',
    language_lessons: 'Leçons de Langue',
    dutch_lessons: 'Leçons de Néerlandais'
  },
  DE: {
    lesson: 'Lektion',
    chapter: 'Kapitel',
    exercises: 'Übungen',
    home: 'Start',
    back: 'Zurück',
    next: 'Weiter',
    dutch: 'Niederländisch',
    sections: 'Abschnitte',
    wip: 'In Bearbeitung',
    start: 'Anfang',
    language: 'Sprache',
    lessons: 'Lektionen',
    welcome: 'Willkommen',
    language_lessons: 'Sprachlektionen',
    dutch_lessons: 'Niederländischlektionen'
  },
  IT: {
    lesson: 'Lezione',
    chapter: 'Capitolo',
    exercises: 'Esercizi',
    home: 'Home',
    back: 'Indietro',
    next: 'Avanti',
    dutch: 'Olandese',
    sections: 'Sezioni',
    wip: 'Lavoro in corso',
    start: 'Inizia',
    language: 'Lingua',
    lessons: 'Lezioni',
    welcome: 'Benvenuti',
    language_lessons: 'Lezioni di Lingua',
    dutch_lessons: 'Lezioni di Olandese'
  },
  PT: {
    lesson: 'Lição',
    chapter: 'Capítulo',
    exercises: 'Exercícios',
    home: 'Início',
    back: 'Voltar',
    next: 'Próximo',
    dutch: 'Holandês',
    sections: 'Seções',
    wip: 'Trabalho em Andamento',
    start: 'Começar',
    language: 'Idioma',
    lessons: 'Lições',
    welcome: 'Bem-vindo',
    language_lessons: 'Lições de Idiomas',
    dutch_lessons: 'Lições de Holandês'
  },
  SV: {
    lesson: 'Lektion',
    chapter: 'Kapitel',
    exercises: 'Övningar',
    home: 'Hem',
    back: 'Tillbaka',
    next: 'Nästa',
    dutch: 'Holländska',
    sections: 'Avsnitt',
    wip: 'Pågående Arbete',
    start: 'Börja',
    language: 'Språk',
    lessons: 'Lektioner',
    welcome: 'Välkommen',
    language_lessons: 'Språklektioner',
    dutch_lessons: 'Holländskalektioner'
  }
};

const dutchTranslations = {
  EN: {
    title: 'Dutch Lessons',
    description: 'Interactive Dutch beginner to intermediate class with exercises.'
  },
  NL: {
    title: 'Nederlandse Lessen',
    description: 'Interactieve, beginner tot intermediaire Nederlands klas met oefeningen.'
  },
  FR: {
    title: 'Cours de Néerlandais',
    description: 'Cours interactif de néerlandais pour débutants à intermédiaires avec exercices.'
  },
  DE: {
    title: 'Niederländisch Unterricht',
    description: 'Interaktiver Niederländischkurs für Anfänger bis Fortgeschrittene mit Übungen.'
  },
  IT: {
    title: 'Lezioni di Olandese',
    description: 'Corso interattivo di olandese per principianti e intermedi con esercizi.'
  },
  PT: {
    title: 'Aulas de Holandês',
    description: 'Curso interativo de holandês do nível iniciante ao intermediário com exercícios.'
  },
  SV: {
    title: 'Holländskalektioner',
    description: 'Interaktiv holländskakurs från nybörjare till medelnivå med övningar.'
  }
};

const homeContent = {
  navigation: ['home'],
  body: {
    EN: `<h2>Welcome!</h2><p>Thank you for stopping by! I am a volunteer language teacher, currently teaching Dutch for the first time!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">This website is currently hosted by Github Pages or locally, by downloading and extracting <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">this folder (download link)</a>.<br>No cookies or scripts are used except for language preferences, official JS, CSS and Three.js.</p><div class="content-links"><h3>\${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Dutch Lessons</a></li></ul></div>`,
    NL: `<h2>Welkom!</h2><p>Bedankt voor uw bezoek! Ik ben een vrijwillige taalleraar die momenteel voor het eerst Nederlands geeft!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Deze website wordt momenteel gehost op Github Pages of lokaal, door het downloaden en uitpakken van <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">deze map (download link)</a>.<br>Er worden geen cookies of scripts gebruikt behalve taalvoorkeur, de officiële JS, CSS en Three.js.</p><div class="content-links"><h3>\${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Nederlandse Lessen</a></li></ul></div>`,
    FR: `<h2>Bienvenue!</h2><p>Merci de votre visite ! Je suis un professeur de langues bénévole, et j'enseigne actuellement le néerlandais pour la première fois !</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Ce site web est actuellement hébergé sur Github Pages ou en local, en téléchargeant et en extrayant <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">ce dossier (lien de téléchargement)</a>.<br>Aucun cookie ou script n'est utilisé à l'exception des préférences linguistiques, JS, CSS et Three.js officiels.</p><div class="content-links"><h3>\${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Cours de Néerlandais</a></li></ul></div>`,
    DE: `<h2>Willkommen!</h2><p>Danke für Ihren Besuch! Ich bin ein ehrenamtlicher Sprachlehrer und unterrichte derzeit zum ersten Mal Niederländisch!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Diese Website wird derzeit auf Github Pages oder lokal gehostet, durch Herunterladen und Entpacken von <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">diesem Ordner (Download-Link)</a>.<br>Es werden keine Cookies oder Skripte außer Spracheinstellungen, offiziellen JS, CSS und Three.js verwendet.</p><div class="content-links"><h3>\${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Niederländisch Unterricht</a></li></ul></div>`,
    IT: `<h2>Benvenuti!</h2><p>Grazie per la visita! Sono un insegnante di lingue volontario e attualmente insegno olandese per la prima volta!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Questo sito web è attualmente ospitato su Github Pages o in locale, scaricando ed estraendo <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">questa cartella (link per il download)</a>.<br>Non vengono utilizzati cookie o script ad eccezione delle preferenze linguistiche, JS, CSS e Three.js ufficiali.</p><div class="content-links"><h3>\${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Lezioni di Olandese</a></li></ul></div>`,
    PT: `<h2>Bem-vindo!</h2><p>Obrigado pela visita! Sou um professor voluntário de idiomas, atualmente ensinando holandês pela primeira vez!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Este site está atualmente hospedado no Github Pages ou localmente, baixando e extraindo <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">esta pasta (link para download)</a>.<br>Nenhum cookie ou script é usado, exceto preferences de idioma, JS, CSS e Three.js oficial.</p><div class="content-links"><h3>\${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Aulas de Holandês</a></li></ul></div>`,
    SV: `<h2>Välkommen!</h2><p>Tack för att du tittar in! Jag är en volontär språklärare som för första gången undervisar i holländska!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Denna webbplats är för närvarande värd på Github Pages eller lokalt, genom att ladda ner och extrahera <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">denna mapp (nedladdningslänk)</a>.<br>Inga cookies eller skript används förutom språkpreferenser, officiell JS, CSS och Three.js.</p><div class="content-links"><h3>\${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Holländskalektioner</a></li></ul></div>`
  }
};

const dutchPageContent = {
  navigation: ['home', 'dutch', 'exercises'],
  body: {
    EN: `<h2>Dutch Lessons</h2><p>Interactive Dutch beginner to intermediate class with exercises.</p><div class="content-links"><ul><li><a href="#" onclick="loadContent('dutch1')">Lesson 1: Introduction and exercises</a></li><li><a href="#" onclick="loadContent('dutch2')">Lesson 2: Work in Progress</a></li></ul></div>`,
    NL: `<h2>Nederlandse Lessen</h2><p>Interactieve, beginner tot intermediaire Nederlands klas met oefeningen.</p><div class="content-links"><ul><li><a href="#" onclick="loadContent('dutch1')">Les 1: Introductie en oefeningen</a></li><li><a href="#" onclick="loadContent('dutch2')">Les 2: Werk in Uitvoering</a></li></ul></div>`,
    FR: `<h2>Cours de Néerlandais</h2><p>Cours interactif de néerlandais pour débutants à intermédiaires avec exercices.</p><div class="content-links"><ul><li><a href="#" onclick="loadContent('dutch1')">Leçon 1: Introduction et exercices</a></li><li><a href="#" onclick="loadContent('dutch2')">Leçon 2: Travail en cours</a></li></ul></div>`,
    DE: `<h2>Niederländisch Unterricht</h2><p>Interaktiver Niederländischkurs für Anfänger bis Fortgeschrittene mit Übungen.</p><div class="content-links"><ul><li><a href="#" onclick="loadContent('dutch1')">Lektion 1: Einführung und Übungen</a></li><li><a href="#" onclick="loadContent('dutch2')">Lektion 2: In Bearbeitung</a></li></ul></div>`,
    IT: `<h2>Lezioni di Olandese</h2><p>Corso interattivo di olandese per principianti e intermedi con esercizi.</p><div class="content-links"><ul><li><a href="#" onclick="loadContent('dutch1')">Lezione 1: Introduzione ed esercizi</a></li><li><a href="#" onclick="loadContent('dutch2')">Lezione 2: Lavoro in corso</a></li></ul></div>`,
    PT: `<h2>Aulas de Holandês</h2><p>Curso interativo de holandês do nível iniciante ao intermediário com exercícios.</p><div class="content-links"><ul><li><a href="#" onclick="loadContent('dutch1')">Lição 1: Introdução e exercícios</a></li><li><a href="#" onclick="loadContent('dutch2')">Lição 2: Trabalho em Andamento</a></li></ul></div>`,
    SV: `<h2>Holländskalektioner</h2><p>Interaktiv holländskakurs från nybörjare till medelnivå med övningar.</p><div class="content-links"><ul><li><a href="#" onclick="loadContent('dutch1')">Lektion 1: Introduktion och övningar</a></li><li><a href="#" onclick="loadContent('dutch2')">Lektion 2: Pågående Arbete</a></li></ul></div>`
  }
};

const dutch1Content = {
  navigation: ['home', 'dutch', 'exercises'],
  body: {
    EN: `<h2>Lesson 1: Introduction to Dutch</h2>
            <p class="description">Welcome to your first Dutch lesson! In this comprehensive introduction, we\'ll explore Dutch from its historical roots to its modern usage. This lesson is designed to take about 40 minutes, divided into three main sections.</p>
            
            <div class="lesson-overview">
                <h3>What You\'ll Learn:</h3>
                <ul>
                    <li>The historical development of Dutch and its relationship to other Germanic languages</li>
                    <li>Basic sound system and pronunciation patterns</li>
                    <li>Fundamental grammar structures and sentence patterns</li>
                </ul>
                
                <h3>Lesson Structure:</h3>
                <ol>
                    <li>Origin and Etymology (15 minutes)</li>
                    <li>The Form of the Language (15 minutes)</li>
                    <li>Basic Grammar and Practice (10 minutes)</li>
                </ol>
            </div>

            <div class="quick-facts">
                <h3>Quick Facts:</h3>
                <ul>
                    <li>Dutch is spoken by approximately 24 million people worldwide</li>
                    <li>It\'s the official language in Netherlands, Belgium (Flanders), Suriname, and several Caribbean islands</li>
                    <li>Dutch is considered one of the easiest languages for English speakers to learn</li>
                </ul>
            </div>

            <div class="content-links">
                <h3>Lesson Contents:</h3>
                <ul>
                    <li><a href="#" onclick="loadContent('dutch1_1')">Part 1: Origin and Etymology - Trace the roots of Dutch</a></li>
                    <li><a href="#" onclick="loadContent('dutch1_2')">Part 2: The Form of the Language - Master Dutch sounds</a></li>
                    <li><a href="#" onclick="loadContent('dutch1_3')">Part 3: Basic Grammar - Start forming sentences</a></li>
                </ul>
            </div>

            <div class="learning-tips">
                <h3>Learning Tips:</h3>
                <ul>
                    <li>Use the pronunciation audio buttons throughout the lesson</li>
                    <li>Practice each example out loud</li>
                    <li>Take notes on patterns you notice</li>
                    <li>Complete all interactive exercises</li>
                </ul>
            </div>`,
    NL: `<h2>Les 1: Introductie tot Nederlands</h2>
            <p class="description">Welkom bij je eerste Nederlandse les! In deze uitgebreide introductie verkennen we het Nederlands van historische wortels tot modern gebruik. Deze les duurt ongeveer 40 minuten, verdeeld over drie hoofdonderdelen.</p>
            
            <div class="lesson-overview">
                <h3>Wat Je Gaat Leren:</h3>
                <ul>
                    <li>De historische ontwikkeling van het Nederlands en zijn relatie tot andere Germaanse talen</li>
                    <li>Basis klanksysteem en uitspraakpatronen</li>
                    <li>Fundamentele grammaticale structuren en zinspatronen</li>
                </ul>
                
                <h3>Lesstructuur:</h3>
                <ol>
                    <li>Oorsprong en Etymologie (15 minuten)</li>
                    <li>De Vorm van de Taal (15 minuten)</li>
                    <li>Basis Grammatica en Oefening (10 minuten)</li>
                </ol>
            </div>

            <div class="quick-facts">
                <h3>Snelle Feiten:</h3>
                <ul>
                    <li>Nederlands wordt gesproken door ongeveer 24 miljoen mensen wereldwijd</li>
                    <li>Het is de officiële taal in Nederland, België (Vlaanderen), Suriname en verschillende Caribische eilanden</li>
                    <li>Nederlands wordt beschouwd als een van de makkelijkste talen voor Engelstaligen om te leren</li>
                </ul>
            </div>

            <div class="content-links">
                <h3>Lesinhoud:</h3>
                <ul>
                    <li><a href="#" onclick="loadContent('dutch1_1')">Deel 1: Oorsprong en Etymologie</a></li>
                    <li><a href="#" onclick="loadContent('dutch1_2')">Deel 2: De Vorm van de Taal</a></li>
                    <li><a href="#" onclick="loadContent('dutch1_3')">Deel 3: Basis Grammatica</a></li>
                </ul>
            </div>`,
    DE: `<h2>Lektion 1: Einführung in die niederländische Sprache</h2>
            <p class="description">Willkommen zu Ihrer ersten Niederländisch-Lektion! In dieser umfassenden Einführung erkunden wir die niederländische Sprache von ihren historischen Wurzeln bis zur modernen Verwendung. Diese Lektion dauert etwa 40 Minuten und ist in drei Hauptabschnitte unterteilt.</p>
            
            <div class="lesson-overview">
                <h3>Was Sie lernen werden:</h3>
                <ul>
                    <li>Die historische Entwicklung des Niederländischen und seine Beziehung zu anderen germanischen Sprachen</li>
                    <li>Grundlegendes Lautsystem und Aussprachemuster</li>
                    <li>Fundamentale grammatikalische Strukturen und Satzmuster</li>
                </ul>
                
                <h3>Lektionsstruktur:</h3>
                <ol>
                    <li>Ursprung und Etymologie (15 Minuten)</li>
                    <li>Die Form der Sprache (15 Minuten)</li>
                    <li>Grundgrammatik und Übung (10 Minuten)</li>
                </ol>
            </div>

            <div class="quick-facts">
                <h3>Schnelle Fakten:</h3>
                <ul>
                    <li>Niederländisch wird von etwa 24 Millionen Menschen weltweit gesprochen</li>
                    <li>Es ist Amtssprache in den Niederlanden, Belgien (Flandern), Surinam und verschiedenen karibischen Inseln</li>
                    <li>Niederländisch gilt als eine der einfachsten Sprachen für englische Muttersprachler</li>
                </ul>
            </div>

            <div class="content-links">
                <h3>Lektionsinhalt:</h3>
                <ul>
                    <li><a href="#" onclick="loadContent('dutch1_1')">Teil 1: Ursprung und Etymologie</a></li>
                    <li><a href="#" onclick="loadContent('dutch1_2')">Teil 2: Die Form der Sprache</a></li>
                    <li><a href="#" onclick="loadContent('dutch1_3')">Teil 3: Grundgrammatik</a></li>
                </ul>
            </div>`,
    IT: `<h2>Lezione 1: Introduzione all\'Olandese</h2>
            <p class="description">Benvenuto alla tua prima lezione di olandese! In questa introduzione completa, esploreremo l\'olandese dalle sue radici storiche all\'uso moderno. Questa lezione è progettata per durare circa 40 minuti, divisa in tre sezioni principali.</p>
            
            <div class="lesson-overview">
                <h3>Cosa Imparerai:</h3>
                <ul>
                    <li>Lo sviluppo storico dell\'olandese e la sua relazione con altre lingue germaniche</li>
                    <li>Sistema fonetico di base e modelli di pronuncia</li>
                    <li>Strutture grammaticali fondamentali e modelli di frasi</li>
                </ul>
                
                <h3>Struttura della Lezione:</h3>
                <ol>
                    <li>Origine ed Etimologia (15 minuti)</li>
                    <li>La Forma della Lingua (15 minuti)</li>
                    <li>Grammatica Base e Pratica (10 minuti)</li>
                </ol>
            </div>

            <div class="quick-facts">
                <h3>Fatti Rapidi:</h3>
                <ul>
                    <li>L\'olandese è parlato da circa 24 milioni di persone in tutto il mondo</li>
                    <li>È la lingua ufficiale nei Paesi Bassi, in Belgio (Fiandre), Suriname e diverse isole caraibiche</li>
                    <li>L\'olandese è considerata una delle lingue più facili da imparare per chi parla inglese</li>
                </ul>
            </div>`,
    PT: `<h2>Lição 1: Introdução ao Holandês</h2>
            <p class="description">Bem-vindo à sua primeira aula de holandês! Nesta introdução abrangente, exploraremos o holandês desde suas raízes históricas até o uso moderno. Esta lição foi projetada para durar cerca de 40 minutos, dividida em três seções principais.</p>
            
            <div class="lesson-overview">
                <h3>O Que Você Vai Aprender:</h3>
                <ul>
                    <li>O desenvolvimento histórico do holandês e sua relação com outras línguas germânicas</li>
                    <li>Sistema básico de sons e padrões de pronúncia</li>
                    <li>Estruturas gramaticais fundamentais e padrões de frases</li>
                </ul>
                
                <h3>Estrutura da Lição:</h3>
                <ol>
                    <li>Origem e Etimologia (15 minutos)</li>
                    <li>A Forma da Língua (15 minutos)</li>
                    <li>Gramática Básica e Prática (10 minutos)</li>
                </ol>
            </div>

            <div class="quick-facts">
                <h3>Fatos Rápidos:</h3>
                <ul>
                    <li>O holandês é falado por aproximadamente 24 milhões de pessoas em todo o mundo</li>
                    <li>É o idioma oficial na Holanda, Bélgica (Flandres), Suriname e várias ilhas caribenhas</li>
                    <li>O holandês é considerado uma das línguas mais fáceis de aprender para falantes de inglês</li>
                </ul>
            </div>`,
    SV: `<h2>Lektion 1: Introduktion till Nederländska</h2>
            <p class="description">Välkommen till din första lektion i nederländska! I denna omfattande introduktion kommer vi att utforska nederländska från dess historiska rötter till modern användning. Denna lektion är utformad att ta cirka 40 minuter, uppdelad i tre huvuddelar.</p>
            
            <div class="lesson-overview">
                <h3>Vad Du Kommer Att Lära Dig:</h3>
                <ul>
                    <li>Den historiska utvecklingen av nederländska och dess relation till andra germanska språk</li>
                    <li>Grundläggande ljudsystem och uttalsmönster</li>
                    <li>Grundläggande grammatiska strukturer och meningsbyggnad</li>
                </ul>
                
                <h3>Lektionsstruktur:</h3>
                <ol>
                    <li>Ursprung och Etymologi (15 minuter)</li>
                    <li>Språkets Form (15 minuter)</li>
                    <li>Grundläggande Grammatik och Övning (10 minuter)</li>
                </ol>
            </div>

            <div class="quick-facts">
                <h3>Snabba Fakta:</h3>
                <ul>
                    <li>Nederländska talas av cirka 24 miljoner människor världen över</li>
                    <li>Det är det officiella språket i Nederländerna, Belgien (Flandern), Surinam och flera karibiska öar</li>
                    <li>Nederländska anses vara ett av de lättaste språken för engelsktalande att lära sig</li>
                </ul>
            </div>`
  }
};

const dutch1_1PageContent = {
  title: { EN: "Dutch 1.1: Articles & Gender", NL: "Nederlands 1.1: Lidwoorden & Geslacht", DE: "Niederländisch 1.1: Artikel & Geschlecht", FR: "Néerlandais 1.1 : Articles & Genre", IT: "Olandese 1.1: Articoli e Genere", PT: "Holandês 1.1: Artigos e Gênero", SV: "Nederländska 1.1: Artiklar och Genus" },
  sections: [
    {
      type: "introduction",
      title: { EN: "Introduction to Articles", NL: "Introductie tot Lidwoorden", DE: "Einführung zu Artikeln", FR: "Introduction aux Articles", IT: "Introduzione agli Articoli", PT: "Introdução aos Artigos", SV: "Introduktion till Artiklar" },
      content: {
        EN: "In Dutch, nouns have a gender, which determines the definite article ('the') used. There are two main articles for 'the': 'de' and 'het'. Unlike English, the indefinite article ('a' or 'an') is always 'een'.",
        NL: "In het Nederlands hebben zelfstandige naamwoorden een geslacht, wat het bepaald lidwoord ('de' of 'het') bepaalt. Er zijn twee hoofdlidwoorden voor 'de': 'de' en 'het'. In tegenstelling tot het Engels is het onbepaald lidwoord ('een') altijd 'een'.",
        DE: "Im Niederländischen haben Substantive ein Geschlecht, das den bestimmten Artikel ('der', 'die', 'das') bestimmt. Es gibt zwei Hauptartikel für 'der/die/das': 'de' und 'het'. Im Gegensatz zum Deutschen ist der unbestimmte Artikel ('ein', 'eine') immer 'een'.",
        FR: "En néerlandais, les noms ont un genre qui détermine l'article défini ('le', 'la') utilisé. Il existe deux articles principaux pour 'le/la': 'de' et 'het'. Contrairement au français, l'article indéfini ('un', 'une') est toujours 'een'.",
        IT: "In olandese, i sostantivi hanno un genere, che determina l'articolo determinativo ('il', 'lo', 'la') usato. Ci sono due articoli principali per 'il/lo/la': 'de' e 'het'. A differenza dell'italiano, l'articolo indeterminativo ('un', 'uno', 'una') è sempre 'een'.",
        PT: "Em holandês, os substantivos têm um gênero, que determina o artigo definido ('o', 'a') usado. Existem dois artigos principais para 'o/a': 'de' e 'het'. Ao contrário do português, o artigo indefinido ('um', 'uma') é sempre 'een'.",
        SV: "På nederländska har substantiv ett genus, vilket bestämmer den bestämda artikeln ('den', 'det') som används. Det finns två huvudsakliga artiklar för 'den/det': 'de' och 'het'. Till skillnad från svenskan är den obestämda artikeln ('en', 'ett') alltid 'een'."
      }
    },
    {
      type: "grammar",
      title: { EN: "Definite Articles: De vs. Het", NL: "Bepaalde Lidwoorden: De vs. Het", DE: "Bestimmte Artikel: De vs. Het", FR: "Articles Définis : De vs. Het", IT: "Articoli Determinativi: De vs. Het", PT: "Artigos Definidos: De vs. Het", SV: "Bestämda Artiklar: De vs. Het" },
      content: {
        EN: "'De' is used for masculine and feminine nouns (singular and plural). 'Het' is used for neuter nouns (singular only). In plural, all nouns use 'de'. Memorizing gender is key, but there are some patterns.",
        NL: "'De' wordt gebruikt voor mannelijke en vrouwelijke zelfstandige naamwoorden (enkelvoud en meervoud). 'Het' wordt gebruikt voor onzijdige zelfstandige naamwoorden (alleen enkelvoud). In het meervoud gebruiken alle zelfstandige naamwoorden 'de'. Het onthouden van het geslacht is essentieel, maar er zijn enkele patronen.",
        DE: "'De' wird für maskuline und feminine Substantive (Singular und Plural) verwendet. 'Het' wird für neutrale Substantive (nur Singular) verwendet. Im Plural verwenden alle Substantive 'de'. Das Auswendiglernen des Geschlechts ist entscheidend, aber es gibt einige Muster.",
        FR: "'De' est utilisé pour les noms masculins et féminins (singulier et pluriel). 'Het' est utilisé pour les noms neutres (singulier uniquement). Au pluriel, tous les noms utilisent 'de'. Mémoriser le genre est essentiel, mais il existe certaines tendances.",
        IT: "'De' si usa per i sostantivi maschili e femminili (singolare e plurale). 'Het' si usa per i sostantivi neutri (solo singolare). Al plurale, tutti i sostantivi usano 'de'. Memorizzare il genere è fondamentale, ma ci sono alcune tendenze.",
        PT: "'De' é usado para substantivos masculinos e femininos (singular e plural). 'Het' é usado para substantivos neutros (apenas singular). No plural, todos os substantivos usam 'de'. Memorizar o gênero é fundamental, mas existem alguns padrões.",
        SV: "'De' används för maskulina och feminina substantiv (singular och plural). 'Het' används för neutrala substantiv (endast singular). I plural använder alla substantiv 'de'. Att memorera genus är nyckeln, men det finns vissa mönster."
      },
      points: [
        { point: { EN: "De-words (Masculine/Feminine)", NL: "De-woorden (Mannelijk/Vrouwelijk)" }, example: { EN: "de man (the man), de vrouw (the woman), de tafel (the table)", NL: "de man, de vrouw, de tafel" } },
        { point: { EN: "Het-words (Neuter)", NL: "Het-woorden (Onzijdig)" }, example: { EN: "het huis (the house), het boek (the book), het kind (the child)", NL: "het huis, het boek, het kind" } },
        { point: { EN: "Plural (always 'de')", NL: "Meervoud (altijd 'de')" }, example: { EN: "de mannen (the men), de huizen (the houses), de boeken (the books)", NL: "de mannen, de huizen, de boeken" } }
      ],
      note: {
        EN: "Diminutives (words ending in -je, -tje, -pje, etc.) are always 'het'-words: het meisje (the girl), het boekje (the booklet).",
        NL: "Verkleinwoorden (woorden die eindigen op -je, -tje, -pje, etc.) zijn altijd 'het'-woorden: het meisje, het boekje.",
        DE: "Diminutive (Wörter, die auf -je, -tje, -pje usw. enden) sind immer 'het'-Wörter: het meisje (das Mädchen), het boekje (das Büchlein).",
        FR: "Les diminutifs (mots se terminant par -je, -tje, -pje, etc.) sont toujours des mots en 'het': het meisje (la fille), het boekje (le livret).",
        IT: "I diminutivi (parole che terminano in -je, -tje, -pje, ecc.) sono sempre parole 'het': het meisje (la ragazza), het boekje (il libretto).",
        PT: "Diminutivos (palavras terminadas em -je, -tje, -pje, etc.) são sempre palavras 'het': het meisje (a menina), het boekje (o livrinho).",
        SV: "Diminutiver (ord som slutar på -je, -tje, -pje, etc.) är alltid 'het'-ord: het meisje (flickan), het boekje (häftet)."
      }
    },
    {
      type: "vocabulary",
      title: { EN: "Common Nouns & Articles", NL: "Veelvoorkomende Zelfstandige Naamwoorden & Lidwoorden", DE: "Häufige Substantive & Artikel", FR: "Noms Communs & Articles", IT: "Sostantivi Comuni e Articoli", PT: "Substantivos Comuns e Artigos", SV: "Vanliga Substantiv och Artiklar" },
      terms: [
        { term: { EN: "the man", NL: "de man" } },
        { term: { EN: "the woman", NL: "de vrouw" } },
        { term: { EN: "the house", NL: "het huis" } },
        { term: { EN: "the book", NL: "het boek" } },
        { term: { EN: "the child", NL: "het kind" } },
        { term: { EN: "the table", NL: "de tafel" } },
        { term: { EN: "the car", NL: "de auto" } },
        { term: { EN: "the water", NL: "het water" } },
        { term: { EN: "a man", NL: "een man" } },
        { term: { EN: "a house", NL: "een huis" } }
      ]
    },
    {
      type: "grammar",
      title: { EN: "Indefinite Article: Een", NL: "Onbepaald Lidwoord: Een", DE: "Unbestimmter Artikel: Een", FR: "Article Indéfini : Een", IT: "Articolo Indeterminativo: Een", PT: "Artigo Indefinido: Een", SV: "Obestämd Artikel: Een" },
      content: {
        EN: "The indefinite article 'een' (a/an) is used for all singular nouns, regardless of gender. There is no plural indefinite article in Dutch (similar to not saying 'an apples' in English).",
        NL: "Het onbepaald lidwoord 'een' (a/an) wordt gebruikt voor alle enkelvoudige zelfstandige naamwoorden, ongeacht het geslacht. Er is geen meervoudig onbepaald lidwoord in het Nederlands (vergelijkbaar met het niet zeggen van 'an apples' in het Engels).",
        DE: "Der unbestimmte Artikel 'een' (ein/eine) wird für alle singulären Substantive verwendet, unabhängig vom Geschlecht. Es gibt keinen unbestimmten Artikel im Plural im Niederländischen (ähnlich wie man im Englischen nicht 'an apples' sagt).",
        FR: "L'article indéfini 'een' (un/une) est utilisé pour tous les noms au singulier, quel que soit leur genre. Il n'y a pas d'article indéfini pluriel en néerlandais (similaire à ne pas dire 'des pommes' pour 'an apples' en anglais).",
        IT: "L'articolo indeterminativo 'een' (un/uno/una) è usato per tutti i sostantivi singolari, indipendentemente dal genere. Non esiste un articolo indeterminativo plurale in olandese (simile a non dire 'an apples' in inglese).",
        PT: "O artigo indefinido 'een' (um/uma) é usado para todos os substantivos singulares, independentemente do gênero. Não há artigo indefinido plural em holandês (semelhante a não dizer 'umas maçãs' em inglês).",
        SV: "Den obestämda artikeln 'een' (en/ett) används för alla substantiv i singular, oavsett genus. Det finns ingen obestämd artikel i plural på nederländska (liknande att man inte säger 'ett äpplen' på engelska)."
      },
      examples: [
        { EN: "een man (a man)", NL: "een man" },
        { EN: "een vrouw (a woman)", NL: "een vrouw" },
        { EN: "een huis (a house)", NL: "een huis" },
        { EN: "een boek (a book)", NL: "een boek" }
      ]
    },
    {
      type: "practice",
      title: { EN: "Practice Time!", NL: "Oefentijd!", DE: "Übungszeit!", FR: "À vous de pratiquer !", IT: "Tempo di Pratica!", PT: "Hora de Praticar!", SV: "Övningsdags!" },
      exercises: [
        {
          type: "fill_in_the_blank",
          question: { EN: "____ boek (the book)", NL: "____ boek" },
          answer: "het"
        },
        {
          type: "fill_in_the_blank",
          question: { EN: "____ auto (the car)", NL: "____ auto" },
          answer: "de"
        },
        {
          type: "fill_in_the_blank",
          question: { EN: "____ kind (a child)", NL: "____ kind" },
          answer: "een"
        },
        {
          type: "multiple_choice",
          question: { EN: "Which article for 'meisje' (girl)?", NL: "Welk lidwoord voor 'meisje'?" },
          options: ["de", "het", "een (definite)"],
          answer: "het",
          explanation: { EN: "Diminutives are always 'het'.", NL: "Verkleinwoorden zijn altijd 'het'." }
        },
        {
          type: "translate",
          question: { EN: "Translate: the houses", NL: "Vertaal: de huizen" },
          answer: { EN: "de huizen", NL: "the houses" },
          explanation: { EN: "Plural always uses 'de'.", NL: "Meervoud gebruikt altijd 'de'." }
        }
      ]
    },
    {
      type: "conclusion",
      title: { EN: "Moving Forward", NL: "Verder Gaan", DE: "Fortfahren", FR: "Aller de l'Avant", IT: "Andare Avanti", PT: "Seguindo em Frente", SV: "Gå Vidare" },
      content: {
        EN: "Understanding 'de' and 'het' is a common challenge for learners. Pay attention to articles when learning new vocabulary. Next, we'll look at adjectives and how they agree with nouns.",
        NL: "Het begrijpen van 'de' en 'het' is een veelvoorkomende uitdaging voor cursisten. Let op lidwoorden bij het leren van nieuwe woordenschat. Vervolgens kijken we naar bijvoeglijke naamwoorden en hoe ze overeenkomen met zelfstandige naamwoorden.",
        DE: "Das Verständnis von 'de' und 'het' ist eine häufige Herausforderung für Lernende. Achten Sie beim Erlernen neuer Vokabeln auf Artikel. Als Nächstes werden wir uns Adjektive ansehen und wie sie mit Substantiven übereinstimmen.",
        FR: "Comprendre 'de' et 'het' est un défi courant pour les apprenants. Faites attention aux articles lorsque vous apprenez du nouveau vocabulaire. Ensuite, nous examinerons les adjectifs et comment ils s'accordent avec les noms.",
        IT: "Comprendere 'de' e 'het' è una sfida comune per gli studenti. Presta attenzione agli articoli quando impari nuovo vocabolario. Successivamente, esamineremo gli aggettivi e come concordano con i sostantivi.",
        PT: "Entender 'de' e 'het' é um desafio comum para os alunos. Preste atenção aos artigos ao aprender novo vocabulário. Em seguida, veremos os adjetivos e como eles concordam com os substantivos.",
        SV: "Att förstå 'de' och 'het' är en vanlig utmaning för inlärare. Var uppmärksam på artiklar när du lär dig nytt ordförråd. Därefter tittar vi på adjektiv och hur de kongruerar med substantiv."
      }
    }
  ]
};

const dutch1_2PageContent = {
  title: { EN: "Dutch 1.2: Adjectives", NL: "Nederlands 1.2: Bijvoeglijke Naamwoorden", DE: "Niederländisch 1.2: Adjektive", FR: "Néerlandais 1.2 : Adjectifs", IT: "Olandese 1.2: Aggettivi", PT: "Holandês 1.2: Adjetivos", SV: "Nederländska 1.2: Adjektiv" },
  sections: [
    {
      type: "introduction",
      title: { EN: "Introduction to Adjectives", NL: "Introductie tot Bijvoeglijke Naamwoorden", DE: "Einführung zu Adjektiven", FR: "Introduction aux Adjectifs", IT: "Introduzione agli Aggettivi", PT: "Introdução aos Adjetivos", SV: "Introduktion till Adjektiv" },
      content: {
        EN: "Adjectives describe nouns. In Dutch, adjectives often take an -e ending, but there are important exceptions, especially with 'het'-words and indefinite articles.",
        NL: "Bijvoeglijke naamwoorden beschrijven zelfstandige naamwoorden. In het Nederlands krijgen bijvoeglijke naamwoorden vaak een -e uitgang, maar er zijn belangrijke uitzonderingen, vooral bij 'het'-woorden en onbepaalde lidwoorden.",
        DE: "Adjektive beschreiben Substantive. Im Niederländischen erhalten Adjektive oft die Endung -e, aber es gibt wichtige Ausnahmen, insbesondere bei 'het'-Wörtern und unbestimmten Artikeln.",
        FR: "Les adjectifs décrivent les noms. En néerlandais, les adjectifs prennent souvent une terminaison en -e, mais il existe des exceptions importantes, notamment avec les mots en 'het' et les articles indéfinis.",
        IT: "Gli aggettivi descrivono i sostantivi. In olandese, gli aggettivi spesso prendono una desinenza in -e, ma ci sono importanti eccezioni, specialmente con le parole 'het' e gli articoli indeterminativi.",
        PT: "Adjetivos descrevem substantivos. Em holandês, os adjetivos geralmente recebem uma terminação -e, mas há exceções importantes, especialmente com palavras 'het' e artigos indefinidos.",
        SV: "Adjektiv beskriver substantiv. På nederländska får adjektiv ofta ändelsen -e, men det finns viktiga undantag, särskilt med 'het'-ord och obestämda artiklar."
      }
    },
    {
      type: "grammar",
      title: { EN: "Adjective Endings: The Basics", NL: "Uitgangen van Bijvoeglijke Naamwoorden: De Basis", DE: "Adjektivendungen: Die Grundlagen", FR: "Terminaisons des Adjectifs : Les Bases", IT: "Desinenze degli Aggettivi: Le Basi", PT: "Terminações de Adjetivos: O Básico", SV: "Adjektivändelser: Grunderna" },
      content: {
        EN: "The general rule is that an adjective gets an -e ending when it precedes the noun it modifies.",
        NL: "De algemene regel is dat een bijvoeglijk naamwoord een -e uitgang krijgt wanneer het voorafgaat aan het zelfstandig naamwoord dat het beschrijft.",
        DE: "Die allgemeine Regel lautet, dass ein Adjektiv die Endung -e erhält, wenn es dem Substantiv vorausgeht, das es modifiziert.",
        FR: "La règle générale est qu'un adjectif prend une terminaison en -e lorsqu'il précède le nom qu'il modifie.",
        IT: "La regola generale è che un aggettivo prende una desinenza in -e quando precede il sostantivo che modifica.",
        PT: "A regra geral é que um adjetivo recebe uma terminação -e quando precede o substantivo que modifica.",
        SV: "Grundregeln är att ett adjektiv får ändelsen -e när det står framför substantivet det beskriver."
      },
      points: [
        {
          point: { EN: "With 'de'-words (singular and plural)", NL: "Met 'de'-woorden (enkelvoud en meervoud)" },
          example: { EN: "de grote man (the big man), de grote vrouwen (the big women)", NL: "de grote man, de grote vrouwen" }
        },
        {
          point: { EN: "With 'het'-words + definite article 'het'", NL: "Met 'het'-woorden + bepaald lidwoord 'het'" },
          example: { EN: "het grote huis (the big house)", NL: "het grote huis" }
        }
      ]
    },
    {
      type: "grammar",
      title: { EN: "Exceptions: No -e Ending", NL: "Uitzonderingen: Geen -e Uitgang", DE: "Ausnahmen: Keine -e Endung", FR: "Exceptions : Pas de Terminaison en -e", IT: "Eccezioni: Nessuna Desinenza -e", PT: "Exceções: Sem Terminação -e", SV: "Undantag: Ingen -e Ändelse" },
      content: {
        EN: "An adjective does NOT get an -e ending in these cases:",
        NL: "Een bijvoeglijk naamwoord krijgt GEEN -e uitgang in deze gevallen:",
        DE: "Ein Adjektiv erhält in diesen Fällen KEINE -e Endung:",
        FR: "Un adjectif ne prend PAS de terminaison en -e dans ces cas :",
        IT: "Un aggettivo NON prende la desinenza -e in questi casi:",
        PT: "Um adjetivo NÃO recebe terminação -e nestes casos:",
        SV: "Ett adjektiv får INTE ändelsen -e i dessa fall:"
      },
      points: [
        {
          point: { EN: "With 'het'-words + indefinite article 'een' (or no article, or words like 'elk', 'ieder', 'welk')", NL: "Met 'het'-woorden + onbepaald lidwoord 'een' (of geen lidwoord, of woorden zoals 'elk', 'ieder', 'welk')" },
          example: { EN: "een groot huis (a big house), groot huis (big house), elk groot huis (each big house)", NL: "een groot huis, groot huis, elk groot huis" }
        },
        {
          point: { EN: "When the adjective is a predicative adjective (follows a linking verb like 'zijn' - to be)", NL: "Wanneer het bijvoeglijk naamwoord predicatief wordt gebruikt (volgt op een koppelwerkwoord zoals 'zijn')" },
          example: { EN: "Het huis is groot. (The house is big.) De man is groot. (The man is big.)", NL: "Het huis is groot. De man is groot." }
        },
        {
          point: { EN: "For adjectives made from materials ending in -en (e.g., houten, gouden) - these never get an extra -e.", NL: "Voor bijvoeglijke naamwoorden gemaakt van materialen die eindigen op -en (bijv. houten, gouden) - deze krijgen nooit een extra -e." },
          example: { EN: "de houten tafel (the wooden table), een gouden ring (a golden ring)", NL: "de houten tafel, een gouden ring" }
        }
      ]
    },
    {
      type: "summary_table",
      title: { EN: "Adjective Endings Summary", NL: "Samenvatting Uitgangen Bijvoeglijke Naamwoorden", DE: "Zusammenfassung Adjektivendungen", FR: "Résumé des Terminaisons d'Adjectifs", IT: "Riepilogo Desinenze Aggettivi", PT: "Resumo das Terminações de Adjetivos", SV: "Sammanfattning Adjektivändelser" },
      headers: [{ EN: "Situation", NL: "Situatie" }, { EN: "Adjective Form", NL: "Vorm Bijvoeglijk Naamwoord" }, { EN: "Example", NL: "Voorbeeld" }],
      rows: [
        [
          { EN: "De-word (singular/plural), definite", NL: "De-woord (enkelvoud/meervoud), bepaald" },
          { EN: "Adjective + e", NL: "Bijvoeglijk naamwoord + e" },
          { EN: "de rode auto, de rode auto's", NL: "de rode auto, de rode auto's" }
        ],
        [
          { EN: "Het-word, definite ('het')", NL: "Het-woord, bepaald ('het')" },
          { EN: "Adjective + e", NL: "Bijvoeglijk naamwoord + e" },
          { EN: "het kleine huis", NL: "het kleine huis" }
        ],
        [
          { EN: "Het-word, indefinite ('een') or no article", NL: "Het-woord, onbepaald ('een') of geen lidwoord" },
          { EN: "Adjective (no -e)", NL: "Bijvoeglijk naamwoord (geen -e)" },
          { EN: "een klein huis, klein huis", NL: "een klein huis, klein huis" }
        ],
        [
          { EN: "Predicative adjective", NL: "Predicatief bijvoeglijk naamwoord" },
          { EN: "Adjective (no -e)", NL: "Bijvoeglijk naamwoord (geen -e)" },
          { EN: "De auto is rood. Het huis is klein.", NL: "De auto is rood. Het huis is klein." }
        ]
      ]
    },
    {
      type: "vocabulary",
      title: { EN: "Common Adjectives", NL: "Veelvoorkomende Bijvoeglijke Naamwoorden", DE: "Häufige Adjektive", FR: "Adjectifs Courants", IT: "Aggettivi Comuni", PT: "Adjetivos Comuns", SV: "Vanliga Adjektiv" },
      terms: [
        { term: { EN: "big / large", NL: "groot" } },
        { term: { EN: "small / little", NL: "klein" } },
        { term: { EN: "good", NL: "goed" } },
        { term: { EN: "bad", NL: "slecht" } },
        { term: { EN: "beautiful / nice", NL: "mooi" } },
        { term: { EN: "new", NL: "nieuw" } },
        { term: { EN: "old", NL: "oud" } },
        { term: { EN: "young", NL: "jong" } },
        { term: { EN: "long", NL: "lang" } },
        { term: { EN: "short (length)", NL: "kort" } }
      ]
    },
    {
      type: "practice",
      title: { EN: "Practice Time!", NL: "Oefentijd!", DE: "Übungszeit!", FR: "À vous de pratiquer !", IT: "Tempo di Pratica!", PT: "Hora de Praticar!", SV: "Övningsdags!" },
      exercises: [
        {
          type: "fill_in_the_blank",
          question: { EN: "de ____ auto (new)", NL: "de ____ auto (nieuw)" },
          answer: "nieuwe"
        },
        {
          type: "fill_in_the_blank",
          question: { EN: "een ____ boek (interesting)", NL: "een ____ boek (interessant)" },
          answer: "interessant",
          explanation: { EN: "'Het boek' is a het-word, so with 'een' the adjective is uninflected.", NL: "'Het boek' is een het-woord, dus met 'een' blijft het bijvoeglijk naamwoord onverbogen." }
        },
        {
          type: "fill_in_the_blank",
          question: { EN: "het ____ meisje (small)", NL: "het ____ meisje (klein)" },
          answer: "kleine",
          explanation: { EN: "'Het meisje' is a het-word, and with the definite article 'het', the adjective gets an -e.", NL: "'Het meisje' is een het-woord, en met het bepaald lidwoord 'het' krijgt het bijvoeglijk naamwoord een -e." }
        },
        {
          type: "sentence_completion",
          question: { EN: "De bloemen zijn ____. (beautiful)", NL: "De bloemen zijn ____. (mooi)" },
          answer: "mooi",
          explanation: { EN: "Predicative adjective, no -e.", NL: "Predicatief bijvoeglijk naamwoord, geen -e." }
        }
      ]
    },
    {
      type: "conclusion",
      title: { EN: "Next Steps", NL: "Volgende Stappen", DE: "Nächste Schritte", FR: "Prochaines Étapes", IT: "Prossimi Passi", PT: "Próximos Passos", SV: "Nästa Steg" },
      content: {
        EN: "Adjective agreement is a tricky part of Dutch grammar. Practice with different nouns and articles. Next, we will explore basic sentence structure and word order in more detail.",
        NL: "Overeenkomst van bijvoeglijke naamwoorden is een lastig onderdeel van de Nederlandse grammatica. Oefen met verschillende zelfstandige naamwoorden en lidwoorden. Vervolgens zullen we de basiszinsbouw en woordvolgorde nader bekijken.",
        DE: "Die Adjektivkongruenz ist ein kniffliger Teil der niederländischen Grammatik. Üben Sie mit verschiedenen Substantiven und Artikeln. Als Nächstes werden wir den grundlegenden Satzbau und die Wortstellung genauer untersuchen.",
        FR: "L'accord des adjectifs est une partie délicate de la grammaire néerlandaise. Entraînez-vous avec différents noms et articles. Ensuite, nous explorerons plus en détail la structure de base des phrases et l'ordre des mots.",
        IT: "La concordanza degli aggettivi è una parte difficile della grammatica olandese. Esercitati con diversi sostantivi e articoli. Successivamente, esploreremo la struttura base della frase e l'ordine delle parole in modo più dettagliato.",
        PT: "A concordância de adjetivos é uma parte complicada da gramática holandesa. Pratique com diferentes substantivos e artigos. Em seguida, exploraremos a estrutura básica das frases e a ordem das palavras com mais detalhes.",
        SV: "Adjektivkongruens är en knepig del av nederländsk grammatik. Öva med olika substantiv och artiklar. Därefter kommer vi att utforska grundläggande meningsbyggnad och ordföljd mer i detalj."
      }
    }
  ]
};

const dutch1_3PageContent = {
  title: { EN: "Dutch 1.3: Basic Word Order", NL: "Nederlands 1.3: Basis Woordvolgorde", DE: "Niederländisch 1.3: Grundlegende Wortstellung", FR: "Néerlandais 1.3 : Ordre des Mots de Base", IT: "Olandese 1.3: Ordine Basilare delle Parole", PT: "Holandês 1.3: Ordem Básica das Palavras", SV: "Nederländska 1.3: Grundläggande Ordföljd" },
  sections: [
    {
      type: "introduction",
      title: { EN: "Understanding Dutch Word Order", NL: "Nederlandse Woordvolgorde Begrijpen", DE: "Niederländische Wortstellung Verstehen", FR: "Comprendre l'Ordre des Mots en Néerlandais", IT: "Comprendere l'Ordine delle Parole Olandese", PT: "Entendendo a Ordem das Palavras em Holandês", SV: "Förstå Nederländsk Ordföljd" },
      content: {
        EN: "Dutch word order can be quite different from English, especially in subclauses and questions. The main rule for main clauses is Subject-Verb-Object (SVO), but the verb often moves.",
        NL: "De Nederlandse woordvolgorde kan behoorlijk verschillen van het Engels, vooral in bijzinnen en vragen. De hoofdregel voor hoofdzinnen is Onderwerp-Werkwoord-Voorwerp (OWV), maar het werkwoord verplaatst zich vaak.",
        DE: "Die niederländische Wortstellung kann sich stark von der englischen unterscheiden, insbesondere in Nebensätzen und Fragen. Die Hauptregel für Hauptsätze ist Subjekt-Verb-Objekt (SVO), aber das Verb bewegt sich oft.",
        FR: "L'ordre des mots en néerlandais peut être très différent de l'anglais, en particulier dans les subordonnées et les questions. La règle principale pour les propositions principales est Sujet-Verbe-Objet (SVO), mais le verbe se déplace souvent.",
        IT: "L'ordine delle parole olandese può essere molto diverso dall'inglese, specialmente nelle subordinate e nelle domande. La regola principale per le proposizioni principali è Soggetto-Verbo-Oggetto (SVO), ma il verbo si sposta spesso.",
        PT: "A ordem das palavras em holandês pode ser bem diferente do inglês, especialmente em orações subordinadas e perguntas. A regra principal para orações principais é Sujeito-Verbo-Objeto (SVO), mas o verbo frequentemente se move.",
        SV: "Nederländsk ordföljd kan skilja sig ganska mycket från engelska, särskilt i bisatser och frågor. Huvudregeln för huvudsatser är Subjekt-Verb-Objekt (SVO), men verbet flyttar sig ofta."
      }
    },
    {
      type: "grammar",
      title: { EN: "Main Clauses: SVO and V2", NL: "Hoofdzinnen: OWV en V2", DE: "Hauptsätze: SVO und V2", FR: "Propositions Principales : SVO et V2", IT: "Proposizioni Principali: SVO e V2", PT: "Orações Principais: SVO e V2", SV: "Huvudsatser: SVO och V2" },
      content: {
        EN: "In a simple declarative main clause, the word order is Subject - Finite Verb - Rest. This is often abbreviated as SVO. However, Dutch is also a V2 (Verb Second) language. This means if another element (like a time or place adverbial) starts the sentence, the subject and finite verb invert, so the finite verb remains in the second position.",
        NL: "In een eenvoudige declaratieve hoofdzin is de woordvolgorde Onderwerp - Persoonsvorm - Rest. Dit wordt vaak afgekort als OVR. Nederlands is echter ook een V2 (Werkwoord Tweede) taal. Dit betekent dat als een ander element (zoals een bijwoord van tijd of plaats) de zin begint, het onderwerp en de persoonsvorm omkeren, zodat de persoonsvorm op de tweede positie blijft.",
        DE: "In einem einfachen deklarativen Hauptsatz lautet die Wortstellung Subjekt - Finites Verb - Rest. Dies wird oft als SVR abgekürzt. Niederländisch ist jedoch auch eine V2 (Verb Zweit) Sprache. Das bedeutet, wenn ein anderes Element (wie ein Zeit- oder Ortsadverbial) den Satz beginnt, invertieren Subjekt und finites Verb, sodass das finite Verb an zweiter Stelle bleibt.",
        FR: "Dans une proposition principale déclarative simple, l'ordre des mots est Sujet - Verbe Fini - Reste. Ceci est souvent abrégé en SVR. Cependant, le néerlandais est aussi une langue V2 (Verbe en Deuxième position). Cela signifie que si un autre élément (comme un adverbe de temps ou de lieu) commence la phrase, le sujet et le verbe fini s'inversent, de sorte que le verbe fini reste en deuxième position.",
        IT: "In una semplice proposizione principale dichiarativa, l'ordine delle parole è Soggetto - Verbo Finito - Resto. Questo è spesso abbreviato come SVR. Tuttavia, l'olandese è anche una lingua V2 (Verbo Secondo). Ciò significa che se un altro elemento (come un avverbiale di tempo o luogo) inizia la frase, il soggetto e il verbo finito si invertono, in modo che il verbo finito rimanga nella seconda posizione.",
        PT: "Em uma oração principal declarativa simples, a ordem das palavras é Sujeito - Verbo Finito - Restante. Isso é frequentemente abreviado como SVR. No entanto, o holandês também é uma língua V2 (Verbo em Segundo lugar). Isso significa que se outro elemento (como um advérbio de tempo ou lugar) iniciar a frase, o sujeito e o verbo finito se invertem, de modo que o verbo finito permaneça na segunda posição.",
        SV: "I en enkel deklarativ huvudsats är ordföljden Subjekt - Finit Verb - Rest. Detta förkortas ofta SVR. Nederländska är dock också ett V2 (Verb Tvåa) språk. Detta innebär att om ett annat element (som ett tids- eller platsadverbial) inleder meningen, inverteras subjektet och det finita verbet, så att det finita verbet förblir på andra plats."
      },
      points: [
        {
          point: { EN: "Standard SVO", NL: "Standaard OVR" },
          example: { EN: "Ik lees een boek. (I read a book.)", NL: "Ik lees een boek." }
        },
        {
          point: { EN: "V2: Adverbial first", NL: "V2: Bijwoord eerst" },
          example: { EN: "Vandaag lees ik een boek. (Today I read a book.)", NL: "Vandaag lees ik een boek." },
          explanation: { EN: "Notice 'lees' (verb) is still the second element.", NL: "Merk op dat 'lees' (werkwoord) nog steeds het tweede element is." }
        }
      ]
    },
    {
      type: "grammar",
      title: { EN: "Questions (Hoofdzin)", NL: "Vragen (Hoofdzin)", DE: "Fragen (Hauptsatz)", FR: "Questions (Proposition Principale)", IT: "Domande (Proposizione Principale)", PT: "Perguntas (Oração Principal)", SV: "Frågor (Huvudsats)" },
      content: {
        EN: "For yes/no questions, the finite verb moves to the first position, followed by the subject.",
        NL: "Bij ja/nee-vragen verplaatst de persoonsvorm zich naar de eerste positie, gevolgd door het onderwerp.",
        DE: "Bei Ja/Nein-Fragen rückt das finite Verb an die erste Position, gefolgt vom Subjekt.",
        FR: "Pour les questions oui/non, le verbe fini se déplace en première position, suivi du sujet.",
        IT: "Per le domande sì/no, il verbo finito si sposta nella prima posizione, seguito dal soggetto.",
        PT: "Para perguntas de sim/não, o verbo finito move-se para a primeira posição, seguido pelo sujeito.",
        SV: "För ja/nej-frågor flyttas det finita verbet till första positionen, följt av subjektet."
      },
      examples: [
        { EN: "Lees jij een boek? (Do you read a book?)", NL: "Lees jij een boek?" },
        { EN: "Statement: Hij spreekt Nederlands. (He speaks Dutch.)", NL: "Stelling: Hij spreekt Nederlands." },
        { EN: "Question: Spreekt hij Nederlands? (Does he speak Dutch?)", NL: "Vraag: Spreekt hij Nederlands?" }
      ],
      note: {
        EN: "For questions with a question word (wie, wat, waar, waarom, hoe, etc.), the question word comes first, then the finite verb, then the subject.",
        NL: "Bij vragen met een vraagwoord (wie, wat, waar, waarom, hoe, etc.) komt het vraagwoord eerst, dan de persoonsvorm, dan het onderwerp.",
        DE: "Bei Fragen mit einem Fragewort (wie, wat, waar, waarom, hoe usw.) steht das Fragewort an erster Stelle, dann das finite Verb, dann das Subjekt.",
        FR: "Pour les questions avec un mot interrogatif (wie, wat, waar, waarom, hoe, etc.), le mot interrogatif vient en premier, puis le verbe fini, puis le sujet.",
        IT: "Per le domande con una parola interrogativa (wie, wat, waar, waarom, hoe, ecc.), la parola interrogativa viene prima, poi il verbo finito, poi il soggetto.",
        PT: "Para perguntas com uma palavra interrogativa (wie, wat, waar, waarom, hoe, etc.), a palavra interrogativa vem primeiro, depois o verbo finito, depois o sujeito.",
        SV: "För frågor med ett frågeord (wie, wat, waar, waarom, hoe, etc.) kommer frågeordet först, sedan det finita verbet, sedan subjektet."
      },
      examples2: [
        { EN: "Wat lees jij? (What do you read?)", NL: "Wat lees jij?" },
        { EN: "Waarom leert hij Nederlands? (Why does he learn Dutch?)", NL: "Waarom leert hij Nederlands?" }
      ]
    },
    {
      type: "grammar",
      title: { EN: "Subclauses (Bijzinnen)", NL: "Bijzinnen", DE: "Nebensätze (Bijzinnen)", FR: "Subordonnées (Bijzinnen)", IT: "Subordinate (Bijzinnen)", PT: "Orações Subordinadas (Bijzinnen)", SV: "Bisatser (Bijzinnen)" },
      content: {
        EN: "In subclauses (dependent clauses, often starting with conjunctions like 'dat' - that, 'omdat' - because, 'als' - if, 'terwijl' - while), all verbs (finite and non-finite) typically move to the end of the subclause. The finite verb is usually last.",
        NL: "In bijzinnen (afhankelijke zinnen, vaak beginnend met voegwoorden zoals 'dat', 'omdat', 'als', 'terwijl') verplaatsen alle werkwoorden (persoonsvorm en niet-persoonsvorm) zich doorgaans naar het einde van de bijzin. De persoonsvorm staat meestal als laatste.",
        DE: "In Nebensätzen (abhängige Sätze, oft beginnend mit Konjunktionen wie 'dat' - dass, 'omdat' - weil, 'als' - wenn, 'terwijl' - während) rücken alle Verben (finite und infinite) typischerweise ans Ende des Nebensatzes. Das finite Verb steht normalerweise zuletzt.",
        FR: "Dans les subordonnées (propositions dépendantes, commençant souvent par des conjonctions comme 'dat' - que, 'omdat' - parce que, 'als' - si, 'terwijl' - pendant que), tous les verbes (finis et non finis) se déplacent généralement à la fin de la subordonnée. Le verbe fini est généralement le dernier.",
        IT: "Nelle subordinate (proposizioni dipendenti, che spesso iniziano con congiunzioni come 'dat' - che, 'omdat' - perché, 'als' - se, 'terwijl' - mentre), tutti i verbi (finiti e non finiti) si spostano tipicamente alla fine della subordinata. Il verbo finito è di solito l'ultimo.",
        PT: "Em orações subordinadas (orações dependentes, frequentemente começando com conjunções como 'dat' - que, 'omdat' - porque, 'als' - se, 'terwijl' - enquanto), todos os verbos (finitos e não finitos) normalmente se movem para o final da oração subordinada. O verbo finito geralmente é o último.",
        SV: "I bisatser (beroende satser, ofta inledda med konjunktioner som 'dat' - att, 'omdat' - eftersom, 'als' - om, 'terwijl' - medan) flyttas alla verb (finita och infinita) vanligtvis till slutet av bisatsen. Det finita verbet är oftast sist."
      },
      examples: [
        {
          EN: "Main clause: Ik lees een boek. (I read a book.)",
          NL: "Hoofdzin: Ik lees een boek."
        },
        {
          EN: "Subclause: ...omdat ik een boek lees. (...because I read a book.)",
          NL: "Bijzin: ...omdat ik een boek lees.",
          explanation: { EN: "Verb 'lees' is at the end.", NL: "Werkwoord 'lees' staat aan het einde." }
        },
        {
          EN: "Main clause with modal: Hij wil Nederlands leren. (He wants to learn Dutch.)",
          NL: "Hoofdzin met modaal werkwoord: Hij wil Nederlands leren."
        },
        {
          EN: "Subclause with modal: ...omdat hij Nederlands wil leren. (...because he wants to learn Dutch.)",
          NL: "Bijzin met modaal werkwoord: ...omdat hij Nederlands wil leren.",
          explanation: { EN: "Both verbs 'wil' and 'leren' are at the end, finite verb 'wil' last of the two.", NL: "Beide werkwoorden 'wil' en 'leren' staan aan het einde, persoonsvorm 'wil' als laatste van de twee." }
        }
      ]
    },
    {
      type: "practice",
      title: { EN: "Practice Word Order", NL: "Woordvolgorde Oefenen", DE: "Wortstellung Üben", FR: "Pratiquer l'Ordre des Mots", IT: "Praticare l'Ordine delle Parole", PT: "Praticar a Ordem das Palavras", SV: "Öva Ordföljd" },
      exercises: [
        {
          type: "reorder_words",
          question: { EN: "(gisteren, ik, heb, gewerkt) - Yesterday I worked.", NL: "(gisteren, ik, heb, gewerkt)" },
          answer: "Gisteren heb ik gewerkt."
        },
        {
          type: "reorder_words",
          question: { EN: "(jij, waarom, Nederlands, leert) - Why do you learn Dutch?", NL: "(jij, waarom, Nederlands, leert)" },
          answer: "Waarom leert jij Nederlands?"
        },
        {
          type: "form_sentence_subclause",
          main_clause: { EN: "Ik weet dat... (I know that...)", NL: "Ik weet dat..." },
          words_for_subclause: { EN: "(hij, morgen, komt) - he is coming tomorrow.", NL: "(hij, morgen, komt)" },
          answer: "Ik weet dat hij morgen komt."
        }
      ]
    },
    {
      type: "conclusion",
      title: { EN: "Key Takeaways", NL: "Belangrijkste Punten", DE: "Wichtige Erkenntnisse", FR: "Points Clés à Retenir", IT: "Punti Chiave", PT: "Principais Conclusões", SV: "Viktiga Punkter" },
      content: {
        EN: "Dutch word order, especially V2 and verb-final in subclauses, requires practice. Listen to native speakers and pay attention to sentence structure. We'll continue to build on this foundation.",
        NL: "Nederlandse woordvolgorde, met name V2 en werkwoord-achteraan in bijzinnen, vereist oefening. Luister naar moedertaalsprekers en let op zinsbouw. We zullen hierop blijven voortbouwen.",
        DE: "Die niederländische Wortstellung, insbesondere V2 und Verb-Endstellung in Nebensätzen, erfordert Übung. Hören Sie Muttersprachlern zu und achten Sie auf den Satzbau. Wir werden auf dieser Grundlage weiter aufbauen.",
        FR: "L'ordre des mots en néerlandais, en particulier V2 et le verbe en fin de subordonnée, nécessite de la pratique. Écoutez des locuteurs natifs et faites attention à la structure des phrases. Nous continuerons à bâtir sur cette fondation.",
        IT: "L'ordine delle parole olandese, specialmente V2 e il verbo alla fine nelle subordinate, richiede pratica. Ascolta i madrelingua e presta attenzione alla struttura della frase. Continueremo a costruire su questa base.",
        PT: "A ordem das palavras em holandês, especialmente V2 e verbo no final em orações subordinadas, requer prática. Ouça falantes nativos e preste atenção à estrutura das frases. Continuaremos a construir sobre esta base.",
        SV: "Nederländsk ordföljd, särskilt V2 och verb-final i bisatser, kräver övning. Lyssna på modersmålstalare och var uppmärksam på meningsbyggnad. Vi kommer att fortsätta bygga på denna grund."
      }
    }
  ]
};

const dutch2PageContent = {
    title: { 
        EN: "Dutch Lesson 2: Nouns, Plurals, and Cases (Briefly)", 
        NL: "Nederlandse Les 2: Zelfstandige Naamwoorden, Meervouden en Naamvallen (Beknopt)",
        DE: "Niederländisch Lektion 2: Substantive, Pluralformen und Fälle (Kurz)",
        FR: "Leçon de Néerlandais 2 : Noms, Pluriels et Cas (Brièvement)",
        IT: "Lezione di Olandese 2: Sostantivi, Plurali e Casi (Brevemente)",
        PT: "Lição de Holandês 2: Substantivos, Plurais e Casos (Resumidamente)",
        SV: "Nederländska Lektion 2: Substantiv, Plural och Kasus (Kortfattat)"
    },
    sections: [
        {
            type: "introduction",
            title: { EN: "Building on the Basics", NL: "Voortbouwen op de Basis", DE: "Auf den Grundlagen Aufbauen", FR: "S'appuyer sur les Bases", IT: "Costruire sulle Basi", PT: "Construindo sobre o Básico", SV: "Bygga Vidare på Grunderna" },
            content: {
                EN: "In this lesson, we'll delve deeper into nouns, focusing on how to form plurals and briefly touch upon the concept of grammatical cases, which are less prominent in modern Dutch but still have some influence.",
                NL: "In deze les gaan we dieper in op zelfstandige naamwoorden, met de focus op het vormen van meervouden en een korte bespreking van het concept naamvallen, die minder prominent zijn in modern Nederlands maar nog steeds enige invloed hebben.",
                DE: "In dieser Lektion werden wir uns eingehender mit Substantiven befassen, uns auf die Pluralbildung konzentrieren und kurz das Konzept der grammatikalischen Fälle ansprechen, die im modernen Niederländisch weniger ausgeprägt sind, aber immer noch einen gewissen Einfluss haben.",
                FR: "Dans cette leçon, nous approfondirons les noms, en nous concentrant sur la formation des pluriels et en abordant brièvement le concept des cas grammaticaux, moins importants en néerlandais moderne mais ayant toujours une certaine influence.",
                IT: "In questa lezione, approfondiremo i sostantivi, concentrandoci su come formare i plurali e toccando brevemente il concetto di casi grammaticali, meno importanti nell'olandese moderno ma che hanno ancora una certa influenza.",
                PT: "Nesta lição, aprofundaremos os substantivos, focando em como formar plurais e abordando brevemente o conceito de casos gramaticais, que são menos proeminentes no holandês moderno, mas ainda têm alguma influência.",
                SV: "I den här lektionen kommer vi att fördjupa oss i substantiv, med fokus på hur man bildar plural och kort beröra begreppet kasus, som är mindre framträdande i modern nederländska men fortfarande har visst inflytande."
            }
        },
        {
            type: "grammar",
            title: { EN: "Noun Plurals: Common Endings", NL: "Meervoud van Zelfstandige Naamwoorden: Veelvoorkomende Uitgangen", DE: "Substantivplurale: Häufige Endungen", FR: "Pluriels des Noms : Terminaisons Courantes", IT: "Plurali dei Sostantivi: Desinenze Comuni", PT: "Plurais de Substantivos: Terminações Comuns", SV: "Substantivplural: Vanliga Ändelser" },
            content: {
                EN: "The two most common ways to form plurals in Dutch are by adding -en or -s.",
                NL: "De twee meest voorkomende manieren om meervouden te vormen in het Nederlands zijn door -en of -s toe te voegen.",
                DE: "Die beiden häufigsten Methoden zur Pluralbildung im Niederländischen sind das Hinzufügen von -en oder -s.",
                FR: "Les deux façons les plus courantes de former les pluriels en néerlandais sont d'ajouter -en ou -s.",
                IT: "I due modi più comuni per formare i plurali in olandese sono aggiungendo -en o -s.",
                PT: "As duas formas mais comuns de formar plurais em holandês são adicionando -en ou -s.",
                SV: "De två vanligaste sätten att bilda plural på nederländska är genom att lägga till -en eller -s."
            },
            points: [
                {
                    point: { EN: "Plural with -en", NL: "Meervoud op -en" },
                    explanation: {
                        EN: "This is the most common plural ending. Often, some spelling changes are needed (e.g., doubling a consonant to keep a short vowel short, or removing a vowel to keep a long vowel long).",
                        NL: "Dit is de meest voorkomende meervoudsuitgang. Vaak zijn enkele spellingsveranderingen nodig (bijv. het verdubbelen van een medeklinker om een korte klinker kort te houden, of het verwijderen van een klinker om een lange klinker lang te houden)."
                    },
                    examples: [
                        { EN: "boek (book) -> boeken (books)", NL: "boek -> boeken" },
                        { EN: "man (man) -> mannen (men) - consonant doubled", NL: "man -> mannen - medeklinker verdubbeld" },
                        { EN: "raam (window) -> ramen (windows) - vowel removed", NL: "raam -> ramen - klinker verwijderd" },
                        { EN: "brief (letter) -> brieven (letters) - f changes to v", NL: "brief -> brieven - f verandert in v" },
                        { EN: "huis (house) -> huizen (houses) - s changes to z", NL: "huis -> huizen - s verandert in z" }
                    ]
                },
                {
                    point: { EN: "Plural with -s", NL: "Meervoud op -s" },
                    explanation: {
                        EN: "Used for nouns ending in an unstressed -el, -em, -en, -er, -ie, or a vowel (except unstressed -e). Also common for loanwords.",
                        NL: "Gebruikt voor zelfstandige naamwoorden die eindigen op een onbeklemtoonde -el, -em, -en, -er, -ie, of een klinker (behalve onbeklemtoonde -e). Ook gebruikelijk voor leenwoorden."
                    },
                    examples: [
                        { EN: "tafel (table) -> tafels (tables)", NL: "tafel -> tafels" },
                        { EN: "meisje (girl) -> meisjes (girls)", NL: "meisje -> meisjes" },
                        { EN: "auto (car) -> auto's (cars) - apostrophe for pronunciation with long vowel", NL: "auto -> auto's - apostrof voor uitspraak met lange klinker" },
                        { EN: "radio (radio) -> radio's (radios)", NL: "radio -> radio's" },
                        { EN: "menu (menu) -> menu's (menus)", NL: "menu -> menu's" }
                    ]
                }
            ],
            note: {
                EN: "There are irregular plurals too, e.g., kind (child) -> kinderen (children), stad (city) -> steden (cities). These need to be memorized.",
                NL: "Er zijn ook onregelmatige meervouden, bijv. kind -> kinderen, stad -> steden. Deze moeten worden gememoriseerd."
            }
        },
        {
            type: "grammar",
            title: { EN: "Apostrophe -s ('s)", NL: "Apostrof -s ('s)", DE: "Apostroph -s ('s)", FR: "Apostrophe -s ('s)", IT: "Apostrofo -s ('s)", PT: "Apóstrofo -s ('s)", SV: "Apostrof -s ('s)" },
            content: {
                EN: "Nouns ending in a single vowel (a, i, o, u, y) get an apostrophe before the -s in the plural to preserve the long vowel sound.",
                NL: "Zelfstandige naamwoorden die eindigen op een enkele klinker (a, i, o, u, y) krijgen een apostrof voor de -s in het meervoud om de lange klinkerklank te behouden.",
                DE: "Substantive, die auf einen einzelnen Vokal (a, i, o, u, y) enden, erhalten im Plural einen Apostroph vor dem -s, um den langen Vokalklang zu erhalten.",
                FR: "Les noms se terminant par une seule voyelle (a, i, o, u, y) prennent une apostrophe avant le -s au pluriel pour préserver le son de la voyelle longue.",
                IT: "I sostantivi che terminano con una singola vocale (a, i, o, u, y) prendono un apostrofo prima della -s al plurale per preservare il suono della vocale lunga.",
                PT: "Substantivos terminados em uma única vogal (a, i, o, u, y) recebem um apóstrofo antes do -s no plural para preservar o som da vogal longa.",
                SV: "Substantiv som slutar på en enkel vokal (a, i, o, u, y) får en apostrof före -s i plural för att bevara det långa vokalljudet."
            },
            examples: [
                { EN: "oma (grandma) -> oma's (grandmas)", NL: "oma -> oma's" },
                { EN: "ski (ski) -> ski's (skis)", NL: "ski -> ski's" },
                { EN: "menu (menu) -> menu's (menus)", NL: "menu -> menu's" }
            ]
        },
        {
            type: "grammar",
            title: { EN: "Grammatical Cases (Brief Overview)", NL: "Naamvallen (Beknopt Overzicht)", DE: "Grammatikalische Fälle (Kurzübersicht)", FR: "Cas Grammaticaux (Bref Aperçu)", IT: "Casi Grammaticali (Breve Panoramica)", PT: "Casos Gramaticais (Visão Geral Breve)", SV: "Kasus (Kort Översikt)" },
            content: {
                EN: "Historically, Dutch had four cases (nominative, genitive, dative, accusative) like German. Modern Dutch has largely lost its case system for nouns. However, remnants exist in:",
                NL: "Historisch gezien had het Nederlands vier naamvallen (nominatief, genitief, datief, accusatief) zoals het Duits. Modern Nederlands heeft zijn naamvalsysteem voor zelfstandige naamwoorden grotendeels verloren. Restanten bestaan echter in:",
                DE: "Historisch hatte Niederländisch vier Fälle (Nominativ, Genitiv, Dativ, Akkusativ) wie Deutsch. Das moderne Niederländisch hat sein Kasussystem für Substantive weitgehend verloren. Überreste gibt es jedoch in:",
                FR: "Historiquement, le néerlandais avait quatre cas (nominatif, génitif, datif, accusatif) comme l'allemand. Le néerlandais moderne a largement perdu son système de cas pour les noms. Cependant, des vestiges existent dans :",
                IT: "Storicamente, l'olandese aveva quattro casi (nominativo, genitivo, dativo, accusativo) come il tedesco. L'olandese moderno ha in gran parte perso il suo sistema di casi per i sostantivi. Tuttavia, ne rimangono tracce in:",
                PT: "Historicamente, o holandês tinha quatro casos (nominativo, genitivo, dativo, acusativo) como o alemão. O holandês moderno perdeu em grande parte seu sistema de casos para substantivos. No entanto, resquícios existem em:",
                SV: "Historiskt sett hade nederländskan fyra kasus (nominativ, genitiv, dativ, ackusativ) som tyskan. Modern nederländska har till stor del förlorat sitt kasussystem för substantiv. Rester finns dock i:"
            },
            points: [
                { point: { EN: "Pronouns (e.g., ik/mij, hij/hem)", NL: "Voornaamwoorden (bijv. ik/mij, hij/hem)" } },
                { point: { EN: "Fixed expressions (e.g., 's morgens - in the morning, des huizes - of the house)", NL: "Vaste uitdrukkingen (bijv. 's morgens, des huizes)" } },
                { point: { EN: "The genitive -s for possession (e.g., Jans boek - Jan's book)", NL: "De genitief -s voor bezit (bijv. Jans boek)" } }
            ],
            note: {
                EN: "For everyday use, you don't need to actively learn noun declensions, but recognizing these remnants can be helpful.",
                NL: "Voor alledaags gebruik hoef je geen naamvalverbuigingen actief te leren, maar het herkennen van deze restanten kan nuttig zijn."
            }
        },
        {
            type: "vocabulary",
            title: { EN: "More Nouns & Their Plurals", NL: "Meer Zelfstandige Naamwoorden & Hun Meervouden", DE: "Weitere Substantive & Ihre Pluralformen", FR: "Plus de Noms & Leurs Pluriels", IT: "Altri Sostantivi e i Loro Plurali", PT: "Mais Substantivos e Seus Plurais", SV: "Fler Substantiv och Deras Pluralformer" },
            terms: [
                { term: { EN: "day / days", NL: "dag / dagen" } },
                { term: { EN: "week / weeks", NL: "week / weken" } },
                { term: { EN: "month / months", NL: "maand / maanden" } },
                { term: { EN: "year / years", NL: "jaar / jaren" } },
                { term: { EN: "friend / friends (male or mixed)", NL: "vriend / vrienden" } },
                { term: { EN: "friend / friends (female)", NL: "vriendin / vriendinnen" } },
                { term: { EN: "city / cities", NL: "stad / steden (irregular)" } },
                { term: { EN: "country / countries", NL: "land / landen" } },
                { term: { EN: "teacher / teachers", NL: "leraar / leraren | lerares / leraressen (f)" } },
                { term: { EN: "student / students", NL: "student / studenten" } }
            ]
        },
        {
            type: "practice",
            title: { EN: "Plural Practice", NL: "Meervoud Oefenen", DE: "Plural Üben", FR: "Pratique des Pluriels", IT: "Pratica dei Plurali", PT: "Prática de Plurais", SV: "Pluralövning" },
            exercises: [
                {
                    type: "form_plural",
                    question: { EN: "What is the plural of 'appel' (apple)?", NL: "Wat is het meervoud van 'appel'?" },
                    answer: "appels (or appelen, though appels is more common for the fruit)"
                },
                {
                    type: "form_plural",
                    question: { EN: "What is the plural of 'museum'?", NL: "Wat is het meervoud van 'museum'?" },
                    answer: "musea (or museums, musea is more formal/traditional)"
                },
                {
                    type: "form_plural",
                    question: { EN: "What is the plural of 'kind' (child)?", NL: "Wat is het meervoud van 'kind'?" },
                    answer: "kinderen"
                },
                {
                    type: "fill_in_the_blank_plural",
                    sentence: { EN: "Ik heb twee ____ (broer - brother).", NL: "Ik heb twee ____ (broer)." },
                    answer: "broers"
                }
            ]
        },
        {
            type: "conclusion",
            title: { EN: "Looking Ahead", NL: "Vooruitblik", DE: "Ausblick", FR: "Regard vers l'Avenir", IT: "Guardando Avanti", PT: "Olhando para Frente", SV: "Framåtblick" },
            content: {
                EN: "Mastering plurals takes time and exposure to the language. Don't be discouraged by irregularities! Next, we'll explore verbs in more detail, including conjugations and tenses.",
                NL: "Het beheersen van meervouden kost tijd en blootstelling aan de taal. Laat je niet ontmoedigen door onregelmatigheden! Vervolgens zullen we werkwoorden in meer detail bekijken, inclusief vervoegingen en tijden.",
                DE: "Das Beherrschen der Pluralformen braucht Zeit und Kontakt mit der Sprache. Lassen Sie sich nicht von Unregelmäßigkeiten entmutigen! Als Nächstes werden wir Verben genauer untersuchen, einschließlich Konjugationen und Zeitformen.",
                FR: "Maîtriser les pluriels demande du temps et une exposition à la langue. Ne vous découragez pas par les irrégularités ! Ensuite, nous explorerons les verbes plus en détail, y compris les conjugaisons et les temps.",
                IT: "Padroneggiare i plurali richiede tempo ed esposizione alla lingua. Non scoraggiarti dalle irregolarità! Successivamente, esploreremo i verbi in modo più dettagliato, comprese le coniugazioni ei tempi.",
                PT: "Dominar os plurais leva tempo e exposição ao idioma. Não se desanime com as irregularidades! Em seguida, exploraremos os verbos com mais detalhes, incluindo conjugações e tempos verbais.",
                SV: "Att bemästra pluralformer tar tid och exponering för språket. Bli inte avskräckt av oegentligheter! Därefter kommer vi att utforska verb mer i detalj, inklusive böjningar och tempus."
            }
        }
    ]
};

const exercisesPageContent = {
  title: {
    EN: "Exercises",
    NL: "Oefeningen",
    DE: "Übungen",
    FR: "Exercices",
    IT: "Esercizi",
    PT: "Exercícios",
    SV: "Övningar"
  },
  sections: [
    {
      type: "exercise_list",
      title: {
        EN: "Dutch Language Exercises",
        NL: "Nederlandse Taaloefeningen",
        DE: "Niederländische Sprachübungen",
        FR: "Exercices de Langue Néerlandaise",
        IT: "Esercizi di Lingua Olandese",
        PT: "Exercícios de Língua Holandesa",
        SV: "Nederländska Språkövningar"
      },
      content: {
        EN: "Test your knowledge with various exercises. Select an exercise from the list below to begin.",
        NL: "Test je kennis met verschillende oefeningen. Selecteer een oefening uit de onderstaande lijst om te beginnen.",
        DE: "Testen Sie Ihr Wissen mit verschiedenen Übungen. Wählen Sie eine Übung aus der folgenden Liste aus, um zu beginnen.",
        FR: "Testez vos connaissances avec divers exercices. Sélectionnez un exercice dans la liste ci-dessous pour commencer.",
        IT: "Metti alla prova le tue conoscenze con vari esercizi. Seleziona un esercizio dall'elenco sottostante per iniziare.",
        PT: "Teste seus conhecimentos com vários exercícios. Selecione um exercício na lista abaixo para começar.",
        SV: "Testa dina kunskaper med olika övningar. Välj en övning från listan nedan för att börja."
      },
      available_exercises: [
        {
          id: "exercise1",
          name: {
            EN: "Exercise 1: Basic Vocabulary & Greetings",
            NL: "Oefening 1: Basiswoordenschat & Begroetingen",
            DE: "Übung 1: Grundwortschatz & Begrüßungen",
            FR: "Exercice 1 : Vocabulaire de Base & Salutations",
            IT: "Esercizio 1: Vocabolario di Base e Saluti",
            PT: "Exercício 1: Vocabulário Básico e Saudações",
            SV: "Övning 1: Grundläggande Ordförråd och Hälsningar"
          },
          description: {
            EN: "Practice common Dutch words and phrases for everyday interactions.",
            NL: "Oefen veelvoorkomende Nederlandse woorden en zinnen voor dagelijkse interacties.",
            DE: "Üben Sie gebräuchliche niederländische Wörter und Sätze für alltägliche Interaktionen.",
            FR: "Pratiquez les mots et expressions néerlandais courants pour les interactions quotidiennes.",
            IT: "Esercitati con parole e frasi olandesi comuni per le interazioni quotidiane.",
            PT: "Pratique palavras e frases comuns em holandês para interações cotidianas.",
            SV: "Öva vanliga nederländska ord och fraser för vardagliga interaktioner."
          }
        },
        {
          id: "exercise2",
          name: {
            EN: "Exercise 2: Articles and Adjective Endings",
            NL: "Oefening 2: Lidwoorden en Uitgangen van Bijvoeglijke Naamwoorden",
            DE: "Übung 2: Artikel und Adjektivendungen",
            FR: "Exercice 2 : Articles et Terminaisons d'Adjectifs",
            IT: "Esercizio 2: Articoli e Desinenze degli Aggettivi",
            PT: "Exercício 2: Artigos e Terminações de Adjetivos",
            SV: "Övning 2: Artiklar och Adjektivändelser"
          },
          description: {
            EN: "Test your understanding of 'de', 'het', 'een' and how adjectives change.",
            NL: "Test je begrip van 'de', 'het', 'een' en hoe bijvoeglijke naamwoorden veranderen.",
            DE: "Testen Sie Ihr Verständnis von 'de', 'het', 'een' und wie sich Adjektive ändern.",
            FR: "Testez votre compréhension de 'de', 'het', 'een' et comment les adjectifs changent.",
            IT: "Metti alla prova la tua comprensione di 'de', 'het', 'een' e come cambiano gli aggettivi.",
            PT: "Teste sua compreensão de 'de', 'het', 'een' e como os adjetivos mudam.",
            SV: "Testa din förståelse av 'de', 'het', 'een' och hur adjektiv förändras."
          }
        }
        // Add more exercises here as they are created
      ]
    }
  ]
};

const exercise1PageContent = {
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

const exercise2PageContent = {
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


export const LANGUAGES = {
    NL: { name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', flagStyle: 'fi fi-nl' },
    EN: { name: 'English', nativeName: 'English', flag: '🇬🇧', flagStyle: 'fi fi-gb' },
    FR: { name: 'French', nativeName: 'Français', flag: '🇫🇷', flagStyle: 'fi fi-fr' },
    DE: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', flagStyle: 'fi fi-de' },
    IT: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', flagStyle: 'fi fi-it' },
    PT: { name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', flagStyle: 'fi fi-pt' },
    SV: { name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', flagStyle: 'fi fi-sv' }
};
export const DEFAULT_LANGUAGE = 'EN';
export const STORAGE_KEYS = {
    currentLanguage: 'preferred-language',
    previousLanguage: 'previous-language'
};

export let currentLanguage = (() => {
    const storedLang = localStorage.getItem(STORAGE_KEYS.currentLanguage);
    if (storedLang && LANGUAGES[storedLang]) {
        return storedLang;
    }
    // Basic browser language detection (can be expanded)
    const browserLang = navigator.language.split('-')[0].toUpperCase();
    if (LANGUAGES[browserLang]) {
        return browserLang;
    }
    return DEFAULT_LANGUAGE;
})();

class TranslationManager {
    static translations = new Map();
    static addTranslations(namespace, translations) {
        this.translations.set(namespace, translations);
    }
    static get(namespace, key, lang = currentLanguage) {
        const nsTranslations = this.translations.get(namespace);
        if (!nsTranslations) return key;
        return nsTranslations[lang]?.[key] || nsTranslations[DEFAULT_LANGUAGE][key] || key;
    }
    static setLanguage(lang) {
        if (LANGUAGES[lang]) {
            try {
                localStorage.setItem(STORAGE_KEYS.previousLanguage, currentLanguage);
                localStorage.setItem(STORAGE_KEYS.currentLanguage, lang);
                currentLanguage = lang;
            } catch (e) {
                console.warn('LocalStorage not available:', e);
                currentLanguage = lang;
            }
        }
    }
    static getPreviousLanguage() {
        try {
            return localStorage.getItem(STORAGE_KEYS.previousLanguage) || DEFAULT_LANGUAGE;
        } catch (e) {
            console.warn('LocalStorage not available:', e);
            return DEFAULT_LANGUAGE;
        }
    }
}

class ContentManager {
    static content = new Map();
    static addContent(pageId, content) {
        this.content.set(pageId, content);
    }
    static getContent(pageId) {
        return this.content.get(pageId);
    }
    static getStaticContent(pageId) {
        const content = this.getContent(pageId);
        if (!content) return null;
        return convertToStaticLinks(content.body[DEFAULT_LANGUAGE]);
    }
}

// Initialize and add content
// Common translations (available on all pages)
TranslationManager.addTranslations('common', commonTranslations);

// Home page content
ContentManager.addContent('home', homeContent);

// Dutch specific translations
TranslationManager.addTranslations('NL', dutchTranslations);

// Dutch main page content
ContentManager.addContent('dutch', dutchPageContent);

// Dutch lesson content
ContentManager.addContent('dutch1', dutch1PageContent);
ContentManager.addContent('dutch1_1', dutch1_1PageContent);
ContentManager.addContent('dutch1_2', dutch1_2PageContent);
ContentManager.addContent('dutch1_3', dutch1_3PageContent);
ContentManager.addContent('dutch2', dutch2PageContent);

// Exercises overview page
ContentManager.addContent('exercises', exercisesPageContent);

// Specific exercises
ContentManager.addContent('exercise1', exercise1PageContent);
ContentManager.addContent('exercise2', exercise2PageContent);

const STATIC_PAGE_GROUPS = {
    'lessons': {
        title: 'Dutch Course - Lesson 1',
        pages: ['dutch1', 'dutch1_1', 'dutch1_2', 'dutch1_3'],
        staticFile: 'dutch-lesson1.html'
    },
    'exercises': {
        title: 'Dutch Course - Exercises',
        pages: ['exercise1', 'exercise2'],
        staticFile: 'exercises.html'
    }
};

// Make available globally since we're not using modules
globalThis.STATIC_PAGE_GROUPS = STATIC_PAGE_GROUPS;

globalThis.LANGUAGES = LANGUAGES;
globalThis.DEFAULT_LANGUAGE = DEFAULT_LANGUAGE;
globalThis.currentLanguage = currentLanguage;
globalThis.TranslationManager = TranslationManager;
globalThis.ContentManager = ContentManager;

function convertToStaticLinks(content) {
    return content.replace(
        /onclick="loadContent\('([^']+)'\)"/g,
        'href="$1.html"'
    );
}

// Make available globally
globalThis.convertToStaticLinks = convertToStaticLinks;
