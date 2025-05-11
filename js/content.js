const LANGUAGES = {
    NL: { name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', flagStyle: 'fi fi-nl' },
    EN: { name: 'English', nativeName: 'English', flag: '🇬🇧', flagStyle: 'fi fi-gb' },
    FR: { name: 'French', nativeName: 'Français', flag: '🇫🇷', flagStyle: 'fi fi-fr' },
    DE: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', flagStyle: 'fi fi-de' },
    IT: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', flagStyle: 'fi fi-it' },
    PT: { name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', flagStyle: 'fi fi-pt' },
    SV: { name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', flagStyle: 'fi fi-sv' }
};
const DEFAULT_LANGUAGE = 'EN';
const STORAGE_KEYS = {
    currentLanguage: 'preferred-language',
    previousLanguage: 'previous-language'
};
let currentLanguage = (() => {
    try {
        localStorage.setItem('preferred-language', DEFAULT_LANGUAGE);
        return DEFAULT_LANGUAGE;
    } catch (e) {
        console.warn('LocalStorage not available:', e);
        return DEFAULT_LANGUAGE;
    }
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
TranslationManager.addTranslations('common', {
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
});
TranslationManager.addTranslations('dutch', {
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
});
ContentManager.addContent('home', {
    navigation: ['home'],
    body: {
        EN: `<h2>Welcome!</h2><p>Thank you for stopping by! I am a volunteer language teacher, currently teaching Dutch for the first time!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">This website is currently hosted by Github Pages or locally, by downloading and extracting <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">this folder (download link)</a>.<br>No cookies or scripts are used except for language preferences, official JS, CSS and Three.js.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Dutch Lessons</a></li></ul></div>`,
        NL: `<h2>Welkom!</h2><p>Bedankt voor uw bezoek! Ik ben een vrijwillige taalleraar die momenteel voor het eerst Nederlands geeft!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Deze website wordt momenteel gehost op Github Pages of lokaal, door het downloaden en uitpakken van <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">deze map (download link)</a>.<br>Er worden geen cookies of scripts gebruikt behalve taalvoorkeur, de officiële JS, CSS en Three.js.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Nederlandse Lessen</a></li></ul></div>`,
        FR: `<h2>Bienvenue!</h2><p>Merci de votre visite ! Je suis un professeur de langues bénévole, et j'enseigne actuellement le néerlandais pour la première fois !</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Ce site web est actuellement hébergé sur Github Pages ou en local, en téléchargeant et en extrayant <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">ce dossier (lien de téléchargement)</a>.<br>Aucun cookie ou script n'est utilisé à l'exception des préférences linguistiques, JS, CSS et Three.js officiels.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Cours de Néerlandais</a></li></ul></div>`,
        DE: `<h2>Willkommen!</h2><p>Danke für Ihren Besuch! Ich bin ein ehrenamtlicher Sprachlehrer und unterrichte derzeit zum ersten Mal Niederländisch!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Diese Website wird derzeit auf Github Pages oder lokal gehostet, durch Herunterladen und Entpacken von <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">diesem Ordner (Download-Link)</a>.<br>Es werden keine Cookies oder Skripte außer Spracheinstellungen, offiziellen JS, CSS und Three.js verwendet.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Niederländisch Unterricht</a></li></ul></div>`,
        IT: `<h2>Benvenuti!</h2><p>Grazie per la visita! Sono un insegnante di lingue volontario e attualmente insegno olandese per la prima volta!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Questo sito web è attualmente ospitato su Github Pages o in locale, scaricando ed estraendo <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">questa cartella (link per il download)</a>.<br>Non vengono utilizzati cookie o script ad eccezione delle preferenze linguistiche, JS, CSS e Three.js ufficiali.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Lezioni di Olandese</a></li></ul></div>`,
        PT: `<h2>Bem-vindo!</h2><p>Obrigado pela visita! Sou um professor voluntário de idiomas, atualmente ensinando holandês pela primeira vez!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Este site está atualmente hospedado no Github Pages ou localmente, baixando e extraindo <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">esta pasta (link para download)</a>.<br>Nenhum cookie ou script é usado, exceto preferências de idioma, JS, CSS e Three.js oficial.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Aulas de Holandês</a></li></ul></div>`,
        SV: `<h2>Välkommen!</h2><p>Tack för att du tittar in! Jag är en volontär språklärare som för första gången undervisar i holländska!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Denna webbplats är för närvarande värd på Github Pages eller lokalt, genom att ladda ner och extrahera <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/language-lessons/archive/refs/heads/main.zip">denna mapp (nedladdningslänk)</a>.<br>Inga cookies eller skript används förutom språkpreferenser, officiell JS, CSS och Three.js.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Holländskalektioner</a></li></ul></div>`
    }
});
ContentManager.addContent('dutch', {
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
});
ContentManager.addContent('dutch1', {
    navigation: ['home', 'dutch', 'exercises'],
    body: {
        EN: `<h2>Lesson 1: Introduction to Dutch</h2>
            <p class="description">Welcome to your first Dutch lesson! In this comprehensive introduction, we'll explore Dutch from its historical roots to its modern usage. This lesson is designed to take about 40 minutes, divided into three main sections.</p>
            
            <div class="lesson-overview">
                <h3>What You'll Learn:</h3>
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
                    <li>It's the official language in Netherlands, Belgium (Flanders), Suriname, and several Caribbean islands</li>
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
        IT: `<h2>Lezione 1: Introduzione all'Olandese</h2>
            <p class="description">Benvenuto alla tua prima lezione di olandese! In questa introduzione completa, esploreremo l'olandese dalle sue radici storiche all'uso moderno. Questa lezione è progettata per durare circa 40 minuti, divisa in tre sezioni principali.</p>
            
            <div class="lesson-overview">
                <h3>Cosa Imparerai:</h3>
                <ul>
                    <li>Lo sviluppo storico dell'olandese e la sua relazione con altre lingue germaniche</li>
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
                    <li>L'olandese è parlato da circa 24 milioni di persone in tutto il mondo</li>
                    <li>È la lingua ufficiale nei Paesi Bassi, in Belgio (Fiandre), Suriname e diverse isole caraibiche</li>
                    <li>L'olandese è considerata una delle lingue più facili da imparare per chi parla inglese</li>
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
});
ContentManager.addContent('dutch1_1', {
    navigation: ['home', 'dutch1', 'exercises'],
    body: {
        EN: `<h2>Origin and etymology</h2>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="A hierarchical tree diagram of the entire germanic branch.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo European --> Proto-Germanic --> West Germanic --> West Low Franconian --> Dutch</p>
            <h2>Part 1: Origin and Etymology</h2>
            <div class="history-section">
                <h3>Historical Development</h3>
                <p>Dutch emerged from the West Germanic branch of the Indo-European language family. Let's trace its evolution:</p>
                
                <div class="timeline">
                    <div class="timeline-item">
                        <h4>500 BCE - Proto-Germanic</h4>
                        <p>Original Germanic language with words like:</p>
                        <ul>
                            <li>*watōr (water) → Dutch: water</li>
                            <li>*hūs (house) → Dutch: huis</li>
                            <div class="audio-example">
                                <button onclick="playAudio('huis')" class="audio-btn">▶️ Listen: huis</button>
                            </div>
                        </ul>
                    </div>
                    
                    <div class="timeline-item">
                        <h4>100-500 CE - Old Dutch</h4>
                        <p>Early written examples include:</p>
                        <ul>
                            <li>"Hebban olla vogala" (Have all birds) - Oldest known Dutch text</li>
                            <div class="audio-example">
                                <button onclick="playAudio('vogels')" class="audio-btn">▶️ Listen: vogels (modern)</button>
                            </div>
                        </ul>
                    </div>

                    <div class="timeline-item">
                        <h4>Modern Connections</h4>
                        <p>Compare these cognates:</p>
                        <table class="language-comparison">
                            <tr>
                                <th>English</th>
                                <th>Dutch</th>
                                <th>German</th>
                            </tr>
                            <tr>
                                <td>house</td>
                                <td>huis</td>
                                <td>Haus</td>
                            </tr>
                            <tr>
                                <td>water</td>
                                <td>water</td>
                                <td>Wasser</td>
                            </tr>
                            <tr>
                                <td>book</td>
                                <td>boek</td>
                                <td>Buch</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div class="practice-section">
                <h3>Sound Changes Over Time</h3>
                <p>Listen to these examples of sound evolution:</p>
                <div class="sound-evolution">
                    <div class="example">
                        <p>Proto-Germanic *hūs → Dutch 'huis'</p>
                        <button onclick="playAudio('huis-evolution')" class="audio-btn">▶️ Listen</button>
                    </div>
                    <div class="example">
                        <p>Old Dutch 'dag' → Modern Dutch 'dag'</p>
                        <button onclick="playAudio('dag')" class="audio-btn">▶️ Listen</button>
                    </div>
                </div>
            </div>`,
        NL: `<h2>Oorsprong en etymologie</h2>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Een hiërarchische boomdiagram van de gehele Germaanse tak.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo-Europees --> Proto-Germaans --> West-Germaans --> West-Nederfrankisch --> Nederlands</p>
            <h2>Deel 1: Oorsprong en Etymologie</h2>
            <div class="history-section">
                <h3>Historische Ontwikkeling</h3>
                <p>Het Nederlands is ontstaan uit de West-Germaanse tak van de Indo-Europese taalfamilie. Laten we de evolutie ervan volgen:</p>
                
                <div class="timeline">
                    <div class="timeline-item">
                        <h4>500 v.Chr. - Proto-Germaans</h4>
                        <p>Oorspronkelijke Germaanse taal met woorden zoals:</p>
                        <ul>
                            <li>*watōr (water) → Nederlands: water</li>
                            <li>*hūs (huis) → Nederlands: huis</li>
                            <div class="audio-example">
                                <button onclick="playAudio('huis')" class="audio-btn">▶️ Luister: huis</button>
                            </div>
                        </ul>
                    </div>
                    
                    <div class="timeline-item">
                        <h4>100-500 n.Chr. - Oudnederlands</h4>
                        <p>Vroege geschreven voorbeelden zijn onder andere:</p>
                        <ul>
                            <li>"Hebban olla vogala" (Hebben alle vogels) - Oudste bekende Nederlandse tekst</li>
                            <div class="audio-example">
                                <button onclick="playAudio('vogels')" class="audio-btn">▶️ Luister: vogels (modern)</button>
                            </div>
                        </ul>
                    </div>

                    <div class="timeline-item">
                        <h4>Moderne Verbindingen</h4>
                        <p>Vergelijk deze verwante woorden:</p>
                        <table class="language-comparison">
                            <tr>
                                <th>Engels</th>
                                <th>Nederlands</th>
                                <th>Duits</th>
                            </tr>
                            <tr>
                                <td>house</td>
                                <td>huis</td>
                                <td>Haus</td>
                            </tr>
                            <tr>
                                <td>water</td>
                                <td>water</td>
                                <td>Wasser</td>
                            </tr>
                            <tr>
                                <td>book</td>
                                <td>boek</td>
                                <td>Buch</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div class="practice-section">
                <h3>Klankveranderingen Door de Tijd</h3>
                <p>Luister naar deze voorbeelden van klankevolutie:</p>
                <div class="sound-evolution">
                    <div class="example">
                        <p>Proto-Germaans *hūs → Nederlands 'huis'</p>
                        <button onclick="playAudio('huis-evolution')" class="audio-btn">▶️ Luister</button>
                    </div>
                    <div class="example">
                        <p>Oudnederlands 'dag' → Modern Nederlands 'dag'</p>
                        <button onclick="playAudio('dag')" class="audio-btn">▶️ Luister</button>
                    </div>
                </div>
            </div>`,
        DE: `<h2>Teil 1: Ursprung und Etymologie</h2>
            <div class="history-section">
                <h3>Historische Entwicklung</h3>
                <p>Das Niederländische entstand aus dem westgermanischen Zweig der indogermanischen Sprachfamilie. Lassen Sie uns seine Entwicklung verfolgen:</p>
                
                <div class="timeline">
                    <div class="timeline-item">
                        <h4>500 v. Chr. - Urgermanisch</h4>
                        <p>Ursprüngliche germanische Sprache mit Wörtern wie:</p>
                        <ul>
                            <li>*watōr (Wasser) → Niederländisch: water</li>
                            <li>*hūs (Haus) → Niederländisch: huis</li>
                            <div class="audio-example">
                                <button onclick="playAudio('huis')" class="audio-btn">▶️ Hören: huis</button>
                            </div>
                        </ul>
                    </div>
                    
                    <div class="timeline-item">
                        <h4>100-500 n. Chr. - Altniederländisch</h4>
                        <p>Frühe schriftliche Beispiele umfassen:</p>
                        <ul>
                            <li>"Hebban olla vogala" (Haben alle Vögel) - Ältester bekannter niederländischer Text</li>
                            <div class="audio-example">
                                <button onclick="playAudio('vogels')" class="audio-btn">▶️ Hören: vogels (modern)</button>
                            </div>
                        </ul>
                    </div>

                    <div class="timeline-item">
                        <h4>Moderne Verbindungen</h4>
                        <p>Vergleichen Sie diese verwandten Wörter:</p>
                        <table class="language-comparison">
                            <tr>
                                <th>Englisch</th>
                                <th>Niederländisch</th>
                                <th>Deutsch</th>
                            </tr>
                            <tr>
                                <td>house</td>
                                <td>huis</td>
                                <td>Haus</td>
                            </tr>
                            <tr>
                                <td>water</td>
                                <td>water</td>
                                <td>Wasser</td>
                            </tr>
                            <tr>
                                <td>book</td>
                                <td>boek</td>
                                <td>Buch</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div class="practice-section">
                <h3>Lautveränderungen im Laufe der Zeit</h3>
                <p>Hören Sie sich diese Beispiele für Lautentwicklung an:</p>
                <div class="sound-evolution">
                    <div class="example">
                        <p>Urgermanisch *hūs → Niederländisch 'huis'</p>
                        <button onclick="playAudio('huis-evolution')" class="audio-btn">▶️ Hören</button>
                    </div>
                    <div class="example">
                        <p>Altniederländisch 'dag' → Modernes Niederländisch 'dag'</p>
                        <button onclick="playAudio('dag')" class="audio-btn">▶️ Hören</button>
                    </div>
                </div>
            </div>`,
        IT: `<h2>Origine ed Etimologia dell'Olandese</h2>
            <p>L'olandese appartiene al ramo germanico occidentale delle lingue indoeuropee. Si è evoluto dal proto-germanico attraverso l'antico olandese fino alla sua forma moderna. È strettamente imparentato con il tedesco e condivide molte caratteristiche con l'inglese.</p>
            
            <h3>Sviluppo Storico</h3>
            <ul>
                <li>Pre-500 CE: Proto-germanico</li>
                <li>500-1150: Antico olandese</li>
                <li>1150-1500: Medio olandese</li>
                <li>1500-presente: Olandese moderno</li>
            </ul>`,
        PT: `<h2>Origem e Etimologia do Holandês</h2>
            <p>O holandês pertence ao ramo germânico ocidental das línguas indo-europeias. Evoluiu do proto-germânico através do holandês antigo até sua forma moderna. É intimamente relacionado ao alemão e compartilha muitas características com o inglês.</p>
            
            <h3>Desenvolvimento Histórico</h3>
            <ul>
                <li>Pré-500 EC: Proto-germânico</li>
                <li>500-1150: Holandês antigo</li>
                <li>1150-1500: Holandês médio</li>
                <li>1500-presente: Holandês moderno</li>
            </ul>`,
        SV: `<h2>Nederländskans Ursprung och Etymologi</h2>
            <p>Nederländska tillhör den västgermanska grenen av de indoeuropeiska språken. Det utvecklades från protogermanska genom fornnederländska till sin moderna form. Det är nära besläktat med tyska och delar många egenskaper med engelska.</p>
            
            <h3>Historisk Utveckling</h3>
            <ul>
                <li>Före 500 e.Kr.: Protogermanska</li>
                <li>500-1150: Fornnederländska</li>
                <li>1150-1500: Medelnederländska</li>
                <li>1500-nutid: Modern nederländska</li>
            </ul>`
    }
});
ContentManager.addContent('dutch1_2', {
    navigation: ['home', 'dutch1', 'exercises'],
    body: {
        EN: `<h2>Part 2: The Form of the Language</h2>
            <div class="pronunciation-guide">
                <h3>Dutch Sound System</h3>
                <p>Dutch uses the Latin alphabet with several unique sounds. Let's practice them:</p>
                
                <div class="sound-section">
                    <h4>1. Special Vowel Sounds</h4>
                    <div class="sound-examples">
                        <div class="sound-card">
                            <p>ui - unique Dutch diphtong</p>
                            <p>Example: huis (house)</p>
                            <button onclick="playAudio('huis')" class="audio-btn" data-audio="nl-huis">▶️ Listen</button>
                            <p class="pronunciation-tip">Tip: Like "ow" in "how" but with rounded lips</p>
                        </div>
                        
                        <div class="sound-card">
                            <p>eu - front rounded vowel</p>
                            <p>Example: deur (door)</p>
                            <button onclick="playAudio('deur')" class="audio-btn" data-audio="nl-deur">▶️ Listen</button>
                            <p class="pronunciation-tip">Tip: Like "u" in French "deux"</p>
                        </div>
                    </div>
                </div>

                <div class="sound-section">
                    <h4>2. Consonant Combinations</h4>
                    <div class="sound-examples">
                        <div class="sound-card">
                            <p>sch - common combination</p>
                            <p>Example: school (school)</p>
                            <button onclick="playAudio('school')" class="audio-btn" data-audio="nl-school">▶️ Listen</button>
                            <p class="pronunciation-tip">Tip: Like "s+ch" where ch is guttural</p>
                        </div>
                        
                        <div class="sound-card">
                            <p>g/ch - guttural sounds</p>
                            <p>Example: goed (good)</p>
                            <button onclick="playAudio('goed')" class="audio-btn" data-audio="nl-goed">▶️ Listen</button>
                            <p class="pronunciation-tip">Tip: Like clearing your throat softly</p>
                        </div>
                    </div>
                </div>

                <div class="practice-section">
                    <h3>Practice Exercise</h3>
                    <p>Try these common words with multiple special sounds:</p>
                    <div class="practice-words">
                        <div class="word-card">
                            <p>gezellig (cozy)</p>
                            <button onclick="playAudio('gezellig')" class="audio-btn">▶️ Listen</button>
                            <button onclick="checkPronunciation('gezellig')" class="practice-btn">Practice</button>
                        </div>
                        <div class="word-card">
                            <p>scheur (tear/rip)</p>
                            <button onclick="playAudio('scheur')" class="audio-btn">▶️ Listen</button>
                            <button onclick="checkPronunciation('scheur')" class="practice-btn">Practice</button>
                        </div>
                    </div>
                </div>
            </div>`,
        NL: `<h2>Deel 2: De Vorm van de Taal</h2>
            <div class="language-form">
                <h3>Klanksysteem</h3>
                <div class="sound-section">
                    <h4>Basis Klanken</h4>
                    <div class="sound-examples">
                        <div class="example">
                            <p>De "G" klank:</p>
                            <span class="word">goed</span>
                            <button onclick="playAudio('goed')" class="audio-btn">▶️ Luister</button>
                        </div>
                        <div class="example">
                            <p>De "UI" klank:</p>
                            <span class="word">huis</span>
                            <button onclick="playAudio('huis')" class="audio-btn">▶️ Luister</button>
                        </div>
                        <div class="example">
                            <p>De "AA" klank:</p>
                            <span class="word">maar</span>
                            <button onclick="playAudio('maar')" class="audio-btn">▶️ Luister</button>
                        </div>
                    </div>
                </div>

                <div class="writing-system">
                    <h3>Schrijfsysteem</h3>
                    <p>Het Nederlands gebruikt het Latijnse alfabet met 26 letters. Enkele belangrijke combinaties:</p>
                    <ul>
                        <li>IJ - wordt vaak als één letter beschouwd</li>
                        <li>CH - voor de typische Nederlandse keelklank</li>
                        <li>SCH - zoals in 'school'</li>
                    </ul>
                </div>

                <div class="practice-section">
                    <h3>Oefening met Klanken</h3>
                    <div class="practice-examples">
                        <div class="example">
                            <p>Probeer deze woorden:</p>
                            <div class="word-practice">
                                <span>schip</span>
                                <button onclick="playAudio('schip')" class="audio-btn">▶️ Luister</button>
                            </div>
                            <div class="word-practice">
                                <span>blijf</span>
                                <button onclick="playAudio('blijf')" class="audio-btn">▶️ Luister</button>
                            </div>
                            <div class="word-practice">
                                <span>huis</span>
                                <button onclick="playAudio('huis')" class="audio-btn">▶️ Luister</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
        DE: `<h2>Teil 2: Die Form der Sprache</h2>
            <div class="pronunciation-guide">
                <h3>Niederländisches Lautsystem</h3>
                <p>Das Niederländische verwendet das lateinische Alphabet mit mehreren einzigartigen Lauten. Lassen Sie uns sie üben:</p>
                
                <div class="sound-section">
                    <h4>1. Besondere Vokallaute</h4>
                    <div class="sound-examples">
                        <div class="sound-card">
                            <p>ui - einzigartiger niederländischer Diphthong</p>
                            <p>Beispiel: huis (house)</p>
                            <button onclick="playAudio('huis')" class="audio-btn">▶️ Hören</button>
                            <p class="pronunciation-tip">Tipp: Wie "ow" in "how" aber mit gerundeten Lippen</p>
                        </div>
                        
                        <div class="sound-card">
                            <p>eu - vorderer gerundeter Vokal</p>
                            <p>Beispiel: deur (door)</p>
                            <button onclick="playAudio('deur')" class="audio-btn">▶️ Hören</button>
                            <p class="pronunciation-tip">Tipp: Wie "u" im Französischen "deux"</p>
                        </div>
                    </div>
                </div>

                <div class="sound-section">
                    <h4>2. Konsonantenkombinationen</h4>
                    <div class="sound-examples">
                        <div class="sound-card">
                            <p>sch - häufige Kombination</p>
                            <p>Beispiel: school (school)</p>
                            <button onclick="playAudio('school')" class="audio-btn">▶️ Hören</button>
                            <p class="pronunciation-tip">Tipp: Wie "s+ch" wobei ch guttural ist</p>
                        </div>
                        
                        <div class="sound-card">
                            <p>g/ch - gutturale Laute</p>
                            <p>Beispiel: goed (good)</p>
                            <button onclick="playAudio('goed')" class="audio-btn">▶️ Hören</button>
                            <p class="pronunciation-tip">Tipp: Wie sanftes Räuspern</p>
                        </div>
                    </div>
                </div>

                <div class="practice-section">
                    <h3>Übung</h3>
                    <p>Versuchen Sie diese häufigen Wörter mit mehreren besonderen Lauten:</p>
                    <div class="practice-words">
                        <div class="word-card">
                            <p>gezellig (cozy)</p>
                            <button onclick="playAudio('gezellig')" class="audio-btn">▶️ Hören</button>
                            <button onclick="checkPronunciation('gezellig')" class="practice-btn">Üben</button>
                        </div>
                        <div class="word-card">
                            <p>scheur (tear/rip)</p>
                            <button onclick="playAudio('scheur')" class="audio-btn">▶️ Hören</button>
                            <button onclick="checkPronunciation('scheur')" class="practice-btn">Üben</button>
                        </div>
                    </div>
                </div>
            </div>`,
        IT: `<h2>Distribuzione Geografica</h2>
            <p>L'olandese è parlato principalmente in:</p>
            <ul>
                <li>Paesi Bassi (lingua ufficiale)</li>
                <li>Belgio (una delle tre lingue ufficiali)</li>
                <li>Suriname (lingua ufficiale)</li>
                <li>Aruba, Curaçao e Sint Maarten (Caraibi Olandesi)</li>
            </ul>`,
        PT: `<h2>Distribuição Geográfica</h2>
            <p>O holandês é falado principalmente em:</p>
            <ul>
                <li>Países Baixos (língua oficial)</li>
                <li>Bélgica (uma das três línguas oficiais)</li>
                <li>Suriname (língua oficial)</li>
                <li>Aruba, Curaçao e Sint Maarten (Caribe Holandês)</li>
            </ul>`,
        SV: `<h2>Geografisk Distribution</h2>
            <p>Nederländska talas huvudsakligen i:</p>
            <ul>
                <li>Nederländerna (officiellt språk)</li>
                <li>Belgien (ett av tre officiella språk)</li>
                <li>Surinam (officiellt språk)</li>
                <li>Aruba, Curaçao och Sint Maarten (Nederländska Karibien)</li>
            </ul>`
    }
});
ContentManager.addContent('dutch1_3', {
    navigation: ['home', 'dutch1', 'exercises'],
    body: {
        EN: `<h2>Part 3: Basic Grammar</h2>
            <div class="grammar-section">
                <h3>Sentence Structure (SVO)</h3>
                <p>Dutch follows Subject-Verb-Object order in main clauses:</p>
                
                <div class="example-section">
                    <div class="example-card">
                        <h4>Basic SVO Pattern</h4>
                        <table class="grammar-table">
                            <tr>
                                <th>Subject</th>
                                <th>Verb</th>
                                <th>Object</th>
                            </tr>
                            <tr>
                                <td>Ik</td>
                                <td>drink</td>
                                <td>koffie</td>
                            </tr>
                            <tr>
                                <td>(I)</td>
                                <td>(drink)</td>
                                <td>(coffee)</td>
                            </tr>
                        </table>
                        <button onclick="playAudio('ik-drink-koffie')" class="audio-btn">▶️ Listen</button>
                    </div>

                    <div class="example-card">
                        <h4>With Time Expression</h4>
                        <p>Time expressions often come at the beginning or end:</p>
                        <table class="grammar-table">
                            <tr>
                                <th>Time</th>
                                <th>Subject</th>
                                <th>Verb</th>
                                <th>Object</th>
                            </tr>
                            <tr>
                                <td>Vandaag</td>
                                <td>ik</td>
                                <td>leer</td>
                                <td>Nederlands</td>
                            </tr>
                            <tr>
                                <td>(Today)</td>
                                <td>(I)</td>
                                <td>(learn)</td>
                                <td>(Dutch)</td>
                            </tr>
                        </table>
                        <button onclick="playAudio('vandaag-ik-leer')" class="audio-btn">▶️ Listen</button>
                    </div>
                </div>

                <div class="verb-section">
                    <h3>Essential Verb Forms</h3>
                    <div class="verb-conjugation">
                        <h4>zijn (to be)</h4>
                        <table class="conjugation-table">
                            <tr>
                                <td>ik ben</td>
                                <td>(I am)</td>
                                <button onclick="playAudio('ik-ben')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>jij bent</td>
                                <td>(you are)</td>
                                <button onclick="playAudio('jij-bent')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>hij/zij/het is</td>
                                <td>(he/she/it is)</td>
                                <button onclick="playAudio('hij-is')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>wij zijn</td>
                                <td>(we are)</td>
                                <button onclick="playAudio('wij-zijn')" class="audio-btn">▶️</button>
                            </tr>
                        </table>
                    </div>

                    <div class="verb-conjugation">
                        <h4>hebben (to have)</h4>
                        <table class="conjugation-table">
                            <tr>
                                <td>ik heb</td>
                                <td>(I have)</td>
                                <button onclick="playAudio('ik-heb')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>jij hebt</td>
                                <td>(you have)</td>
                                <button onclick="playAudio('jij-hebt')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>hij/zij/het heeft</td>
                                <td>(he/she/it has)</td>
                                <button onclick="playAudio('hij-heeft')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>wij hebben</td>
                                <td>(we have)</td>
                                <button onclick="playAudio('wij-hebben')" class="audio-btn">▶️</button>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="practice-section">
                    <h3>Practice Exercises</h3>
                    <div class="exercise-card">
                        <h4>Form Basic Sentences</h4>
                        <p>Create sentences using the elements provided:</p>
                        <div class="sentence-builder" id="sentence-builder-1">
                            <div class="word-bank">
                                <span class="drag-word">Ik</span>
                                <span class="drag-word">zij</span>
                                <span class="drag-word">bent</span>
                                <span class="drag-word">is</span>
                                <span class="drag-word">student</span>
                                <span class="drag-word">leraar</span>
                            </div>
                            <div class="sentence-space" data-correct="Ik bent student">
                                Drop words here to form: "I am a student"
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
        NL: `<h2>Deel 3: Basis Grammatica</h2>
            <div class="grammar-section">
                <h3>Zinsstructuur (SVO)</h3>
                <p>Het Nederlands volgt de volgorde Onderwerp-Verb-Object in hoofdzinnen:</p>
                
                <div class="example-section">
                    <div class="example-card">
                        <h4>Basis SVO Patroon</h4>
                        <table class="grammar-table">
                            <tr>
                                <th>Onderwerp</th>
                                <th>Werkwoord</th>
                                <th>Object</th>
                            </tr>
                            <tr>
                                <td>Ik</td>
                                <td>drink</td>
                                <td>koffie</td>
                            </tr>
                            <tr>
                                <td>(I)</td>
                                <td>(drink)</td>
                                <td>(coffee)</td>
                            </tr>
                        </table>
                        <button onclick="playAudio('ik-drink-koffie')" class="audio-btn">▶️ Luister</button>
                    </div>

                    <div class="example-card">
                        <h4>Met Tijdsaanduiding</h4>
                        <p>Tijdsaanduidingen komen vaak aan het begin of einde:</p>
                        <table class="grammar-table">
                            <tr>
                                <th>Tijd</th>
                                <th>Onderwerp</th>
                                <th>Werkwoord</th>
                                <th>Object</th>
                            </tr>
                            <tr>
                                <td>Vandaag</td>
                                <td>ik</td>
                                <td>leer</td>
                                <td>Nederlands</td>
                            </tr>
                            <tr>
                                <td>(Today)</td>
                                <td>(I)</td>
                                <td>(learn)</td>
                                <td>(Dutch)</td>
                            </tr>
                        </table>
                        <button onclick="playAudio('vandaag-ik-leer')" class="audio-btn">▶️ Luister</button>
                    </div>
                </div>

                <div class="verb-section">
                    <h3>Essentiële Werkwoordsvormen</h3>
                    <div class="verb-conjugation">
                        <h4>zijn (to be)</h4>
                        <table class="conjugation-table">
                            <tr>
                                <td>ik ben</td>
                                <td>(I am)</td>
                                <button onclick="playAudio('ik-ben')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>jij bent</td>
                                <td>(you are)</td>
                                <button onclick="playAudio('jij-bent')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>hij/zij/het is</td>
                                <td>(he/she/it is)</td>
                                <button onclick="playAudio('hij-is')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>wij zijn</td>
                                <td>(we are)</td>
                                <button onclick="playAudio('wij-zijn')" class="audio-btn">▶️</button>
                            </tr>
                        </table>
                    </div>

                    <div class="verb-conjugation">
                        <h4>hebben (to have)</h4>
                        <table class="conjugation-table">
                            <tr>
                                <td>ik heb</td>
                                <td>(I have)</td>
                                <button onclick="playAudio('ik-heb')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>jij hebt</td>
                                <td>(you have)</td>
                                <button onclick="playAudio('jij-hebt')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>hij/zij/het heeft</td>
                                <td>(he/she/it has)</td>
                                <button onclick="playAudio('hij-heeft')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>wij hebben</td>
                                <td>(we have)</td>
                                <button onclick="playAudio('wij-hebben')" class="audio-btn">▶️</button>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="practice-section">
                    <h3>Oefeningen</h3>
                    <div class="exercise-card">
                        <h4>Vorm Basiszinnen</h4>
                        <p>Maak zinnen met de gegeven elementen:</p>
                        <div class="sentence-builder" id="sentence-builder-1">
                            <div class="word-bank">
                                <span class="drag-word">Ik</span>
                                <span class="drag-word">zij</span>
                                <span class="drag-word">bent</span>
                                <span class="drag-word">is</span>
                                <span class="drag-word">student</span>
                                <span class="drag-word">leraar</span>
                            </div>
                            <div class="sentence-space" data-correct="Ik bent student">
                                Sleep woorden hier om te vormen: "Ik ben een student"
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
        DE: `<h2>Teil 3: Grundgrammatik</h2>
            <div class="grammar-section">
                <h3>Satzstruktur (SVO)</h3>
                <p>Das Niederländische folgt der Reihenfolge Subjekt-Verb-Objekt in Hauptsätzen:</p>
                
                <div class="example-section">
                    <div class="example-card">
                        <h4>Grundlegendes SVO-Muster</h4>
                        <table class="grammar-table">
                            <tr>
                                <th>Subjekt</th>
                                <th>Verb</th>
                                <th>Objekt</th>
                            </tr>
                            <tr>
                                <td>Ik</td>
                                <td>drink</td>
                                <td>koffie</td>
                            </tr>
                            <tr>
                                <td>(I)</td>
                                <td>(drink)</td>
                                <td>(coffee)</td>
                            </tr>
                        </table>
                        <button onclick="playAudio('ik-drink-koffie')" class="audio-btn">▶️ Hören</button>
                    </div>

                    <div class="example-card">
                        <h4>Mit Zeitausdruck</h4>
                        <p>Zeitausdrücke stehen oft am Anfang oder Ende:</p>
                        <table class="grammar-table">
                            <tr>
                                <th>Zeit</th>
                                <th>Subjekt</th>
                                <th>Verb</th>
                                <th>Objekt</th>
                            </tr>
                            <tr>
                                <td>Vandaag</td>
                                <td>ik</td>
                                <td>leer</td>
                                <td>Nederlands</td>
                            </tr>
                            <tr>
                                <td>(Today)</td>
                                <td>(I)</td>
                                <td>(learn)</td>
                                <td>(Dutch)</td>
                            </tr>
                        </table>
                        <button onclick="playAudio('vandaag-ik-leer')" class="audio-btn">▶️ Hören</button>
                    </div>
                </div>

                <div class="verb-section">
                    <h3>Wichtige Verbformen</h3>
                    <div class="verb-conjugation">
                        <h4>zijn (to be)</h4>
                        <table class="conjugation-table">
                            <tr>
                                <td>ik ben</td>
                                <td>(I am)</td>
                                <button onclick="playAudio('ik-ben')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>jij bent</td>
                                <td>(you are)</td>
                                <button onclick="playAudio('jij-bent')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>hij/zij/het is</td>
                                <td>(he/she/it is)</td>
                                <button onclick="playAudio('hij-is')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>wij zijn</td>
                                <td>(we are)</td>
                                <button onclick="playAudio('wij-zijn')" class="audio-btn">▶️</button>
                            </tr>
                        </table>
                    </div>

                    <div class="verb-conjugation">
                        <h4>hebben (to have)</h4>
                        <table class="conjugation-table">
                            <tr>
                                <td>ik heb</td>
                                <td>(I have)</td>
                                <button onclick="playAudio('ik-heb')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>jij hebt</td>
                                <td>(you have)</td>
                                <button onclick="playAudio('jij-hebt')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>hij/zij/het heeft</td>
                                <td>(he/she/it has)</td>
                                <button onclick="playAudio('hij-heeft')" class="audio-btn">▶️</button>
                            </tr>
                            <tr>
                                <td>wij haben</td>
                                <td>(we have)</td>
                                <button onclick="playAudio('wij-hebben')" class="audio-btn">▶️</button>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="practice-section">
                    <h3>Übungen</h3>
                    <div class="exercise-card">
                        <h4>Bildung einfacher Sätze</h4>
                        <p>Erstellen Sie Sätze mit den angegebenen Elementen:</p>
                        <div class="sentence-builder" id="sentence-builder-1">
                            <div class="word-bank">
                                <span class="drag-word">Ik</span>
                                <span class="drag-word">zij</span>
                                <span class="drag-word">bent</span>
                                <span class="drag-word">is</span>
                                <span class="drag-word">student</span>
                                <span class="drag-word">leraar</span>
                            </div>
                            <div class="sentence-space" data-correct="Ik bent student">
                                Ziehen Sie Wörter hierher, um zu bilden: "Ich bin ein Student"
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
        NL: `<h2>Deel 3: Grammatica</h2>
            <div class="grammar-section">
                <h3>Basis Grammaticaregels</h3>
                
                <div class="grammar-topic">
                    <h4>Lidwoorden</h4>
                    <p>In het Nederlands hebben we drie lidwoorden:</p>
                    <ul>
                        <li>'de' - voor mannelijke en vrouwelijke woorden</li>
                        <li>'het' - voor onzijdige woorden</li>
                        <li>'een' - onbepaald lidwoord</li>
                    </ul>
                    <div class="examples">
                        <p>Bijvoorbeeld:</p>
                        <ul>
                            <li>de man (the man)</li>
                            <li>het huis (the house)</li>
                            <li>een boek (a book)</li>
                        </ul>
                    </div>
                </div>

                <div class="grammar-topic">
                    <h4>Werkwoordvervoegingen</h4>
                    <p>Basis werkwoordvervoeging in de tegenwoordige tijd:</p>
                    <table>
                        <tr>
                            <th>Persoon</th>
                            <th>Vervoeging (werken)</th>
                        </tr>
                        <tr>
                            <td>ik</td>
                            <td>werk</td>
                        </tr>
                        <tr>
                            <td>jij/u</td>
                            <td>werkt</td>
                        </tr>
                        <tr>
                            <td>hij/zij/het</td>
                            <td>werkt</td>
                        </tr>
                        <tr>
                            <td>wij</td>
                            <td>werken</td>
                        </tr>
                        <tr>
                            <td>jullie</td>
                            <td>werken</td>
                        </tr>
                        <tr>
                            <td>zij</td>
                            <td>werken</td>
                        </tr>
                    </table>
                </div>

                <div class="practice-section">
                    <h3>Oefeningenvoorbeelden</h3>
                    <div class="exercise">
                        <p>Vul het juiste lidwoord in:</p>
                        <ol>
                            <li>___ tafel (table)</li>
                            <li>___ boek (book)</li>
                            <li>___ man (man)</li>
                        </ol>
                        <p class="answer-toggle" onclick="toggleAnswer('articles')">Toon antwoorden</p>
                        <div class="answer" id="articles-answer" style="display: none;">
                            <ol>
                                <li>de tafel</li>
                                <li>het boek</li>
                                <li>de man</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>`
    }
});
ContentManager.addContent('dutch2', {
    navigation: ['home', 'dutch', 'dutch1', 'exercises'],
    body: {
        EN: `<h2>Lesson 2</h2><p class="description">${TranslationManager.get('common', 'wip')}</p>`,
        NL: `<h2>Les 2</h2><p class="description">${TranslationManager.get('common', 'wip')}</p>`,
        FR: `<h2>Leçon 2</h2><p class="description">${TranslationManager.get('common', 'wip')}</p>`,
        DE: `<h2>Lektion 2</h2><p class="description">${TranslationManager.get('common', 'wip')}</p>`,
        IT: `<h2>Lezione 2</h2><p class="description">${TranslationManager.get('common', 'wip')}</p>`,
        PT: `<h2>Lição 2</h2><p class="description">${TranslationManager.get('common', 'wip')}</p>`,
        SV: `<h2>Lektion 2</h2><p class="description">${TranslationManager.get('common', 'wip')}</p>`
    }
});
ContentManager.addContent('exercises', {
    navigation: ['home', 'dutch'],
    body: {
        EN: `<h2>Exercises</h2><p>Test your knowledge or play.</p>
            <div class="content-links">
                <ul>
                    <li><a href="#" onclick="loadContent('exercise1')">Exercise 1: Basic Pronunciation</a></li>
                    <li><a href="#" onclick="loadContent('exercise2')">Exercise 2: Common Phrases</a></li>
                </ul>
            </div>`,
        NL: `<h2>Oefeningen</h2><p>Test je kennis of speel.</p>
            <div class="content-links">
                <ul>
                    <li><a href="#" onclick="loadContent('exercise1')">Oefening 1: Basis Uitspraak</a></li>
                    <li><a href="#" onclick="loadContent('exercise2')">Oefening 2: Veelgebruikte Zinnen</a></li>
                </ul>
            </div>`,
        FR: `<h2>Exercices</h2><p>Testez vos connaissances ou jouez.</p>
            <div class="content-links">
                <ul>
                    <li><a href="#" onclick="loadContent('exercise1')">Exercice 1: Prononciation de Base</a></li>
                    <li><a href="#" onclick="loadContent('exercise2')">Exercice 2: Phrases Courantes</a></li>
                </ul>
            </div>`,
        DE: `<h2>Übungen</h2><p>Testen Sie Ihr Wissen oder spielen Sie.</p>
            <div class="content-links">
                <ul>
                    <li><a href="#" onclick="loadContent('exercise1')">Übung 1: Grundlegende Aussprache</a></li>
                    <li><a href="#" onclick="loadContent('exercise2')">Übung 2: Häufige Sätze</a></li>
                </ul>
            </div>`,
        IT: `<h2>Esercizi</h2><p>Metti alla prova le tue conoscenze o gioca.</p>
            <div class="content-links">
                <ul>
                    <li><a href="#" onclick="loadContent('exercise1')">Esercizio 1: Pronuncia di Base</a></li>
                    <li><a href="#" onclick="loadContent('exercise2')">Esercizio 2: Frasi Comuni</a></li>
                </ul>
            </div>`,
        PT: `<h2>Exercícios</h2><p>Teste seu conhecimento ou pratique.</p>
            <div class="content-links">
                <ul>
                    <li><a href="#" onclick="loadContent('exercise1')">Exercício 1: Pronúncia Básica</a></li>
                    <li><a href="#" onclick="loadContent('exercise2')">Exercício 2: Frases Comuns</a></li>
                </ul>
            </div>`,
        SV: `<h2>Övningar</h2><p>Testa dina kunskaper eller öva.</p>
            <div class="content-links">
                <ul>
                    <li><a href="#" onclick="loadContent('exercise1')">Övning 1: Grundläggande Uttal</a></li>
                    <li><a href="#" onclick="loadContent('exercise2')">Övning 2: Vanliga Fraser</a></li>
                </ul>
            </div>`
    }
});
ContentManager.addContent('exercise1', {
    navigation: ['home', 'dutch', 'exercises'],
    body: {
        EN: `<h2>Exercise 1: Basic Pronunciation</h2>
            <div class="exercise-section">
                <h3>1. Vowel Sounds Practice</h3>
                <div class="sound-practice">
                    <div class="practice-card">
                        <h4>ui Sound</h4>
                        <div class="word-list">
                            <div class="word-item">
                                <span>huis</span>
                                <button onclick="playAudio('huis')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('huis')" class="practice-btn">Practice</button>
                            </div>
                            <div class="word-item">
                                <span>muis</span>
                                <button onclick="playAudio('muis')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('muis')" class="practice-btn">Practice</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="practice-card">
                        <h4>eu Sound</h4>
                        <div class="word-list">
                            <div class="word-item">
                                <span>deur</span>
                                <button onclick="playAudio('deur')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('deur')" class="practice-btn">Practice</button>
                            </div>
                            <div a="word-item">
                                <span>neus</span>
                                <button onclick="playAudio('neus')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('neus')" class="practice-btn">Practice</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>2. Consonant Combinations</h3>
                <div class="sound-practice">
                    <div class="practice-card">
                        <h4>sch Sound</h4>
                        <div class="word-list">
                            <div class="word-item">
                                <span>school</span>
                                <button onclick="playAudio('school')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('school')" class="practice-btn">Practice</button>
                            </div>
                            <div class="word-item">
                                <span>schip</span>
                                <button onclick="playAudio('schip')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('schip')" class="practice-btn">Practice</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>3. Word Builder Game</h3>
                <div class="word-builder-game">
                    <p>Drag the letters to form Dutch words:</p>
                    <div class="letter-bank">
                        <span class="drag-letter">h</span>
                        <span class="drag-letter">u</span>
                        <span class="drag-letter">i</span>
                        <span class="drag-letter">s</span>
                    </div>
                    <div class="word-space" data-correct="huis">
                        Form the word "house"
                    </div>
                </div>
            </div>`,
        NL: `<h2>Oefening 1: Basis Uitspraak</h2>
            <div class="exercise-section">
                <h3>1. Klinkerklanken Oefenen</h3>
                <div class="sound-practice">
                    <div class="practice-card">
                        <h4>ui Klank</h4>
                        <div class="word-list">
                            <div class="word-item">
                                <span>huis</span>
                                <button onclick="playAudio('huis')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('huis')" class="practice-btn">Oefen</button>
                            </div>
                            <div class="word-item">
                                <span>muis</span>
                                <button onclick="playAudio('muis')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('muis')" class="practice-btn">Oefen</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="practice-card">
                        <h4>eu Klank</h4>
                        <div class="word-list">
                            <div class="word-item">
                                <span>deur</span>
                                <button onclick="playAudio('deur')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('deur')" class="practice-btn">Oefen</button>
                            </div>
                            <div class="word-item">
                                <span>neus</span>
                                <button onclick="playAudio('neus')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('neus')" class="practice-btn">Oefen</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>2. Medeklinkercombinaties</h3>
                <div class="sound-practice">
                    <div class="practice-card">
                        <h4>sch Klank</h4>
                        <div class="word-list">
                            <div class="word-item">
                                <span>school</span>
                                <button onclick="playAudio('school')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('school')" class="practice-btn">Oefen</button>
                            </div>
                            <div class="word-item">
                                <span>schip</span>
                                <button onclick="playAudio('schip')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('schip')" class="practice-btn">Oefen</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>3. Woordbouwer Spel</h3>
                <div class="word-builder-game">
                    <p>Sleep de letters om Nederlandse woorden te vormen:</p>
                    <div class="letter-bank">
                        <span class="drag-letter">h</span>
                        <span class="drag-letter">u</span>
                        <span class="drag-letter">i</span>
                        <span class="drag-letter">s</span>
                    </div>
                    <div class="word-space" data-correct="huis">
                        Vorm het woord "huis"
                    </div>
                </div>
            </div>`,
        DE: `<h2>Übung 1: Grundlegende Aussprache</h2>
            <div class="exercise-section">
                <h3>1. Vokallaute Übung</h3>
                <div class="sound-practice">
                    <div class="practice-card">
                        <h4>ui Laut</h4>
                        <div class="word-list">
                            <div class="word-item">
                                <span>huis (Haus)</span>
                                <button onclick="playAudio('huis')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('huis')" class="practice-btn">Üben</button>
                            </div>
                            <div class="word-item">
                                <span>muis (Maus)</span>
                                <button onclick="playAudio('muis')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('muis')" class="practice-btn">Üben</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="practice-card">
                        <h4>eu Laut</h4>
                        <div class="word-list">
                            <div class="word-item">
                                <span>deur (Tür)</span>
                                <button onclick="playAudio('deur')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('deur')" class="practice-btn">Üben</button>
                            </div>
                            <div class="word-item">
                                <span>neus (Nase)</span>
                                <button onclick="playAudio('neus')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('neus')" class="practice-btn">Üben</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>2. Konsonantenkombinationen</h3>
                <div class="sound-practice">
                    <div class="practice-card">
                        <h4>sch Laut</h4>
                        <div class="word-list">
                            <div class="word-item">
                                <span>school (Schule)</span>
                                <button onclick="playAudio('school')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('school')" class="practice-btn">Üben</button>
                            </div>
                            <div class="word-item">
                                <span>schip (Schiff)</span>
                                <button onclick="playAudio('schip')" class="audio-btn">▶️</button>
                                <button onclick="checkPronunciation('schip')" class="practice-btn">Üben</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>3. Wortbau-Spiel</h3>
                <div class="word-builder-game">
                    <p>Ziehen Sie die Buchstaben, um niederländische Wörter zu bilden:</p>
                    <div class="letter-bank">
                        <span class="drag-letter">h</span>
                        <span class="drag-letter">u</span>
                        <span class="drag-letter">i</span>
                        <span class="drag-letter">s</span>
                    </div>
                    <div class="word-space" data-correct="huis">
                        Bilden Sie das Wort "Haus"
                    </div>
                </div>
            </div>`
    }
});
ContentManager.addContent('exercise2', {
    navigation: ['home', 'dutch', 'exercises'],
    body: {
        EN: `<h2>Exercise 2: Common Phrases</h2>
            <div class="exercise-section">
                <h3>1. Greetings and Introductions</h3>
                <div class="phrase-practice">
                    ${ExerciseTemplates.pronounciationExercise('goedemorgen', 'good morning')}
                    ${ExerciseTemplates.pronounciationExercise('hallo', 'hello')}
                    ${ExerciseTemplates.pronounciationExercise('tot ziens', 'goodbye')}
                </div>

                <h3>2. Practice Conversations</h3>
                <div class="conversation-practice">
                    ${ExerciseTemplates.multipleChoice(
            'How would you respond to "Hoe gaat het?" (How are you?)',
            ['Het gaat goed', 'Tot ziens', 'Dank je wel'],
            'Het gaat goed',
            'hoe-gaat-het'
        )}
                </div>

                <h3>3. Sentence Building</h3>
                <div class="sentence-practice">
                    ${ExerciseTemplates.sentenceBuilder(
            ['Ik', 'ben', 'een', 'student'],
            'Ik ben een student',
            'Create the sentence: "I am a student"'
        )}
                </div>
            </div>`,
        NL: `<h2>Oefening 2: Veelgebruikte Zinnen</h2>
            <div class="exercise-section">
                <h3>1. Begroetingen en Introducties</h3>
                <div class="phrase-practice">
                    ${ExerciseTemplates.pronounciationExercise('goedemorgen', 'goedemorgen')}
                    ${ExerciseTemplates.pronounciationExercise('hallo', 'hallo')}
                    ${ExerciseTemplates.pronounciationExercise('tot ziens', 'tot ziens')}
                </div>

                <h3>2. Oefen Gesprekken</h3>
                <div class="conversation-practice">
                    ${ExerciseTemplates.multipleChoice(
            'Hoe zou je antwoorden op "Hoe gaat het?"',
            ['Het gaat goed', 'Tot ziens', 'Dank je wel'],
            'Het gaat goed',
            'hoe-gaat-het'
        )}
                </div>

                <h3>3. Zinnen Bouwen</h3>
                <div class="sentence-practice">
                    ${ExerciseTemplates.sentenceBuilder(
            ['Ik', 'ben', 'een', 'student'],
            'Ik ben een student',
            'Maak de zin: "Ik ben een student"'
        )}
                </div>
            </div>`,
        DE: `<h2>Übung 2: Häufige Sätze</h2>
            <div class="exercise-section">
                <h3>1. Begrüßungen und Vorstellungen</h3>
                <div class="phrase-practice">
                    ${ExerciseTemplates.pronounciationExercise('goedemorgen', 'Guten Morgen')}
                    ${ExerciseTemplates.pronounciationExercise('hallo', 'Hallo')}
                    ${ExerciseTemplates.pronounciationExercise('tot ziens', 'Auf Wiedersehen')}
                </div>

                <h3>2. Übungsgespräche</h3>
                <div class="conversation-practice">
                    ${ExerciseTemplates.multipleChoice(
            'Wie würden Sie auf "Hoe gaat het?" (Wie geht es Ihnen?) antworten?',
            ['Het gaat goed', 'Tot ziens', 'Dank je wel'],
            'Het geht gut',
            'hoe-gaat-het'
        )}
                </div>

                <h3>3. Satzbildung</h3>
                <div class="sentence-practice">
                    ${ExerciseTemplates.sentenceBuilder(
            ['Ik', 'ben', 'een', 'student'],
            'Ik ben ein student',
            'Bilden Sie den Satz: "Ich bin ein Student"'
        )}
                </div>
            </div>`
    }
});

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