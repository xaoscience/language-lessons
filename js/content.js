const LANGUAGES = {
    NL: { name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', flagStyle: 'fi fi-nl'},
    EN: { name: 'English', nativeName: 'English', flag: '🇬🇧', flagStyle: 'fi fi-gb'},
    FR: { name: 'French', nativeName: 'Français', flag: '🇫🇷', flagStyle: 'fi fi-fr'},
    DE: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', flagStyle: 'fi fi-de'},
    IT: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', flagStyle: 'fi fi-it'},
};
const DEFAULT_LANGUAGE = 'EN';
const savedLanguage = localStorage.getItem('preferred-language');
let currentLanguage = savedLanguage && LANGUAGES[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;
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
            currentLanguage = lang;
            localStorage.setItem('preferred-language', lang);
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
        start: 'Begin'
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
        start: 'Start'
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
    }
});
ContentManager.addContent('dutch', {
    navigation: ['home', 'dutch', 'exercises'],
    body: {
        EN: `<h2>Dutch Lessons</h2><p>Interactive Dutch beginner to intermediate class with exercises.</p><div class="content-links"><ul><li><a href="#" onclick="loadContent('dutch1')">Lesson 1: Introduction and exercises</a></li><li><a href="#" onclick="loadContent('dutch2')">Lesson 2: Work in Progress</a></li></ul></div>`,
        NL: `<h2>Nederlandse Lessen</h2><p>Interactieve, beginner tot intermediaire Nederlands klas met oefeningen.</p><div class="content-links"><ul><li><a href="#" onclick="loadContent('dutch1')">Les 1: Introductie en oefeningen</a></li><li><a href="#" onclick="loadContent('dutch2')">Les 2: Werk in Uitvoering</a></li></ul></div>`
    }
});
ContentManager.addContent('dutch1', {
    navigation: ['home', 'dutch', 'exercises'],
    body: {
        EN: `<h2>Lesson 1: Introduction and exercises</h2><p class="description">In the first lesson, I attempt to transform my passion for language into an expanded introduction to Dutch.</p><div class="content-links"><h3>Contents:</h3><ul><li><a href="#" onclick="loadContent('dutch1_1')">Origin and etymology</a></li><li><a href="#" onclick="loadContent('dutch1_2')">The form of the language</a></li><li><a href="#" onclick="loadContent('dutch1_3')">Grammatics</a></li></ul></div>`,
        NL: `<h2>Les 1: Introductie en oefeningen</h2><p class="description">In de eerste les, tracht ik mijn passie voor taal om te zetten in een uitgebreide kennismaking met Nederlands.</p><div class="content-links"><h3>Inhoud:</h3><ul><li><a href="#" onclick="loadContent('dutch1_1')">Oorsprong en etymologie</a></li><li><a href="#" onclick="loadContent('dutch1_2')">De vorm van de taal</a></li><li><a href="#" onclick="loadContent('dutch1_3')">Grammatica</a></li></ul></div>`
    }
});
ContentManager.addContent('dutch2', {
    navigation: ['home', 'dutch', 'exercises'],
    body: {
        EN: `<h2>Lesson 2</h2><p class="description">${TranslationManager.get('common', 'wip')}</p>`,
        NL: `<h2>Les 2</h2><p class="description">${TranslationManager.get('common', 'wip')}</p>`
    }
});
ContentManager.addContent('home', {
    navigation: ['home'],
    body: {
        EN: `<h2>Welcome!</h2><p>Thank you for stopping by! I am a volunteer language teacher, currently teaching Dutch for the first time!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">This website is currently hosted by Github Pages or locally, by downloading and extracting <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">this folder (download link)</a>.<br>No cookies or scripts other than official JS, CSS and Three.js are used.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Dutch Lessons</a></li></ul></div>`,
        NL: `<h2>Welkom!</h2><p>Bedankt voor je bezoek! Ik ben een vrijwillige taalleraar, momenteel geef ik voor het eerst Nederlandse les!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Deze website wordt momenteel gehost door Github Pages of lokaal, door <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">deze map te downloaden</a>.<br>Er worden geen cookies of scripts gebruikt anders dan officiële JS, CSS en Three.js.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Nederlandse Lessen</a></li></ul></div>`,
        FR: `<h2>Bienvenue!</h2><p>Merci de votre visite! Je suis un professeur de langues bénévole, enseignant actuellement le néerlandais pour la première fois!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Ce site est hébergé sur Github Pages ou en local, en téléchargeant <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">ce dossier</a>.<br>Aucun cookie ni script autre que JS, CSS et Three.js officiels n'est utilisé.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Cours de Néerlandais</a></li></ul></div>`,
        DE: `<h2>Willkommen!</h2><p>Danke für Ihren Besuch! Ich bin ein ehrenamtlicher Sprachlehrer und unterrichte zum ersten Mal Niederländisch!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Diese Website wird auf Github Pages oder lokal gehostet, durch Herunterladen <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">dieses Ordners</a>.<br>Es werden keine Cookies oder Scripts außer offiziellen JS, CSS und Three.js verwendet.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Niederländisch Unterricht</a></li></ul></div>`,
        IT: `<h2>Benvenuti!</h2><p>Grazie per la visita! Sono un insegnante di lingue volontario, attualmente insegno olandese per la prima volta!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Questo sito è ospitato su Github Pages o in locale, scaricando <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">questa cartella</a>.<br>Non vengono utilizzati cookie o script diversi da JS, CSS e Three.js ufficiali.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Lezioni di Olandese</a></li></ul></div>`
    }
});
ContentManager.addContent('dutch1_1', {
    navigation: ['home', 'dutch1', 'exercises'],
    body: {
        EN: `<h2>Origin and etymology</h2>
            <p>In the first lesson, I attempt to transform my passion for language into an expanded introduction to the language that is most boring to me - Dutch. Herein, I shall discuss the etymology and origin and display the form of the language through the aid of history and art.</p>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="A hierarchical tree diagram of the entire germanic branch.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo European --> Proto-Germanic --> West Germanic --> West Low Franconian --> Dutch</p>`,
        NL: `<h2>Oorsprong en etymologie</h2>
            <p>In de eerste les, tracht ik mijn passie voor taal om te zetten in een uitgebreide kennismaking met de taal die het meest saai voor mij is - Nederlands. Hierbij zal ik de etymologie en oorsprong bespreken en de vorm van de taal uitbeelden met behulp van (m.b.v) historiek en kunst.</p>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Een hiërarchische boomdiagram van de hele germaanse tak.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo Europees --> Proto-Germaans --> West Germaans --> West Lagefrankisch --> Nederlands</p>`,
        FR: `<h2>Origine et étymologie</h2>
            <p>Dans la première leçon, j'essaie de transformer ma passion pour la langue en une introduction approfondie à la langue qui m'ennuie le plus - le néerlandais. Ici, je discuterai de l'étymologie et de l'origine et présenterai la forme de la langue à travers l'histoire et l'art.</p>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Un diagramme arborescent hiérarchique de toute la branche germanique.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo Européen --> Proto-Germanique --> Germanique Occidental --> Bas-Francique Occidental --> Néerlandais</p>`,
        DE: `<h2>Ursprung und Etymologie</h2>
            <p>In der ersten Lektion versuche ich, meine Sprachleidenschaft in eine erweiterte Einführung in die für mich langweiligste Sprache - Niederländisch - umzuwandeln. Hierin werde ich die Etymologie und den Ursprung besprechen und die Form der Sprache mithilfe von Geschichte und Kunst darstellen.</p>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Ein hierarchisches Baumdiagramm des gesamten germanischen Zweigs.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indoeuropäisch --> Proto-Germanisch --> Westgermanisch --> Westfränkisch --> Niederländisch</p>`,
        IT: `<h2>Origine ed etimologia</h2>
            <p>Nella prima lezione, cerco di trasformare la mia passione per la lingua in un'introduzione approfondita alla lingua che trovo più noiosa - l'olandese. Qui, discuterò l'etimologia e l'origine e mostrerò la forma della lingua attraverso la storia e l'arte.</p>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Un diagramma ad albero gerarchico dell'intero ramo germanico.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo Europeo --> Proto-Germanico --> Germanico Occidentale --> Basso Francone Occidentale --> Olandese</p>`
    }
});
ContentManager.addContent('dutch1_2', {
    navigation: ['home', 'dutch', 'dutch1'],
    body: {
        EN: `<h2>The Form of the Language</h2>
        <p>Dutch uses the Latin alphabet with 26 letters. Special combinations include:</p>
        <ul>
            <li>ij - Often treated as a single letter</li>
            <li>ch - Guttural sound</li>
            <li>sch - Common combination</li>
        </ul>
        <p>Pronunciation Rules:</p>
        <ul>
            <li>aa, ee, oo - Long vowels</li>
            <li>g/ch - Guttural sounds</li>
            <li>ui, eu, oe - Unique Dutch sounds</li>
        </ul>`,
        NL: `<h2>De Vorm van de Taal</h2>
        <p>Nederlands gebruikt het Latijnse alfabet met 26 letters. Bijzondere combinaties zijn:</p>
        <ul>
            <li>ij - Vaak behandeld als één letter</li>
            <li>ch - Keelklank</li>
            <li>sch - Veelvoorkomende combinatie</li>
        </ul>
        <p>Uitspraakregels:</p>
        <ul>
            <li>aa, ee, oo - Lange klinkers</li>
            <li>g/ch - Keelklanken</li>
            <li>ui, eu, oe - Unieke Nederlandse klanken</li>
        </ul>`,
        FR: `<h2>La Forme de la Langue</h2>
        <p>Le néerlandais utilise l'alphabet latin avec 26 lettres. Les combinaisons spéciales incluent:</p>
        <ul>
            <li>ij - Souvent traité comme une seule lettre</li>
            <li>ch - Son guttural</li>
            <li>sch - Combinaison courante</li>
        </ul>
        <p>Règles de prononciation:</p>
        <ul>
            <li>aa, ee, oo - Voyelles longues</li>
            <li>g/ch - Sons gutturaux</li>
            <li>ui, eu, oe - Sons uniques au néerlandais</li>
        </ul>`,
        DE: `<h2>Die Form der Sprache</h2>
        <p>Niederländisch verwendet das lateinische Alphabet mit 26 Buchstaben. Besondere Kombinationen sind:</p>
        <ul>
            <li>ij - Oft als ein Buchstabe behandelt</li>
            <li>ch - Kehllaut</li>
            <li>sch - Häufige Kombination</li>
        </ul>
        <p>Ausspracheregeln:</p>
        <ul>
            <li>aa, ee, oo - Lange Vokale</li>
            <li>g/ch - Kehllaute</li>
            <li>ui, eu, oe - Einzigartige niederländische Laute</li>
        </ul>`,
        IT: `<h2>La Forma della Lingua</h2>
        <p>L'olandese usa l'alfabeto latino con 26 lettere. Le combinazioni speciali includono:</p>
        <ul>
            <li>ij - Spesso trattata come una singola lettera</li>
            <li>ch - Suono gutturale</li>
            <li>sch - Combinazione comune</li>
        </ul>
        <p>Regole di pronuncia:</p>
        <ul>
            <li>aa, ee, oo - Vocali lunghe</li>
            <li>g/ch - Suoni gutturali</li>
            <li>ui, eu, oe - Suoni unici dell'olandese</li>
        </ul>`
    }
});
ContentManager.addContent('dutch1_3', {
    navigation: ['home', 'dutch', 'dutch1'],
    body: {
        EN: `<h2>Grammar Basics</h2>
        <p>Dutch grammar shares features with both English and German:</p>
        <ul>
            <li>Word order: Subject-Verb-Object (in main clauses)</li>
            <li>Two grammatical genders: Common and neuter</li>
            <li>Articles: 'de' (common) and 'het' (neuter)</li>
        </ul>
        <p>Verb conjugation examples:</p>
        <ul>
            <li>zijn (to be): ik ben, jij bent, hij/zij/het is</li>
            <li>hebben (to have): ik heb, jij hebt, hij/zij/het heeft</li>
        </ul>`,
        NL: `<h2>Grammatica Basis</h2>
        <p>Nederlandse grammatica deelt kenmerken met zowel Engels als Duits:</p>
        <ul>
            <li>Woordvolgorde: Onderwerp-Werkwoord-Object (in hoofdzinnen)</li>
            <li>Twee grammaticale geslachten: De-woorden en het-woorden</li>
            <li>Lidwoorden: 'de' (de-woorden) en 'het' (het-woorden)</li>
        </ul>
        <p>Werkwoordvervoegingen voorbeelden:</p>
        <ul>
            <li>zijn: ik ben, jij bent, hij/zij/het is</li>
            <li>hebben: ik heb, jij hebt, hij/zij/het heeft</li>
        </ul>`,
        FR: `<h2>Bases Grammaticales</h2>
        <p>La grammaire néerlandaise partage des caractéristiques avec l'anglais et l'allemand:</p>
        <ul>
            <li>Ordre des mots: Sujet-Verbe-Objet (dans les propositions principales)</li>
            <li>Deux genres grammaticaux: Commun et neutre</li>
            <li>Articles: 'de' (commun) et 'het' (neutre)</li>
        </ul>
        <p>Exemples de conjugaison:</p>
        <ul>
            <li>zijn (être): ik ben, jij bent, hij/zij/het is</li>
            <li>hebben (avoir): ik heb, jij hebt, hij/zij/het heeft</li>
        </ul>`,
        DE: `<h2>Grundlegende Grammatik</h2>
        <p>Die niederländische Grammatik teilt Merkmale mit Englisch und Deutsch:</p>
        <ul>
            <li>Wortstellung: Subjekt-Verb-Objekt (in Hauptsätzen)</li>
            <li>Zwei grammatikalische Geschlechter: Gemeinsam und neutral</li>
            <li>Artikel: 'de' (gemeinsam) und 'het' (neutral)</li>
        </ul>
        <p>Beispiele für Verbkonjugation:</p>
        <ul>
            <li>zijn (sein): ik ben, jij bent, hij/zij/het is</li>
            <li>hebben (haben): ik habe, jij hebt, hij/zij/het hat</li>
        </ul>`,
        IT: `<h2>Grammatica di Base</h2>
        <p>La grammatica olandese condivide caratteristiche con l'inglese e il tedesco:</p>
        <ul>
            <li>Ordine delle parole: Soggetto-Verbo-Oggetto (nelle frasi principali)</li>
            <li>Due generi grammaticali: Comune e neutro</li>
            <li>Articoli: 'de' (comune) e 'het' (neutro)</li>
        </ul>
        <p>Esempi di coniugazione dei verbi:</p>
        <ul>
            <li>zijn (essere): ik ben, jij bent, hij/zij/het is</li>
            <li>hebben (avere): ik ho, jij hebt, hij/zij/het ha</li>
        </ul>`
    }
});
export { LANGUAGES, DEFAULT_LANGUAGE, currentLanguage, TranslationManager, ContentManager };