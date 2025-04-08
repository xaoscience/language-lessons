const LANGUAGES = {
    NL: { name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', flagStyle: 'fi fi-nl'},
    EN: { name: 'English', nativeName: 'English', flag: '🇬🇧', flagStyle: 'fi fi-gb'},
    FR: { name: 'French', nativeName: 'Français', flag: '🇫🇷', flagStyle: 'fi fi-fr'},
    DE: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', flagStyle: 'fi fi-de'},
    IT: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', flagStyle: 'fi fi-it'},
    PT: { name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', flagStyle: 'fi fi-pt'},
    SV: { name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', flagStyle: 'fi fi-sv'}
};
const DEFAULT_LANGUAGE = 'EN';
let currentLanguage = DEFAULT_LANGUAGE;
try {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && LANGUAGES[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
} catch (e) {
    console.warn('LocalStorage not available:', e);
}
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
            try {
                localStorage.setItem('preferred-language', lang);
            } catch (e) {
                console.warn('LocalStorage not available:', e);
            }
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
        start: 'Commencer'
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
        start: 'Anfang'
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
        start: 'Inizia'
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
        start: 'Começar'
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
        start: 'Börja'
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
        EN: `<h2>Welcome!</h2><p>Thank you for stopping by! I am a volunteer language teacher, currently teaching Dutch for the first time!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">This website is currently hosted by Github Pages or locally, by downloading and extracting <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">this folder (download link)</a>.<br>No cookies or scripts other than official JS, CSS and Three.js are used.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Dutch Lessons</a></li></ul></div>`,
        NL: `<h2>Welkom!</h2><p>Bedankt voor uw bezoek! Ik ben een vrijwillige taalleraar die momenteel voor het eerst Nederlands geeft!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Deze website wordt momenteel gehost op Github Pages of lokaal, door het downloaden en uitpakken van <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">deze map (download link)</a>.<br>Er worden geen cookies of scripts gebruikt behalve de officiële JS, CSS en Three.js.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Nederlandse Lessen</a></li></ul></div>`,
        FR: `<h2>Bienvenue!</h2><p>Merci de votre visite ! Je suis un professeur de langues bénévole, et j'enseigne actuellement le néerlandais pour la première fois !</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Ce site web est actuellement hébergé sur Github Pages ou en local, en téléchargeant et en extrayant <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">ce dossier (lien de téléchargement)</a>.<br>Aucun cookie ni script autre que JS, CSS et Three.js officiels n'est utilisé.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Cours de Néerlandais</a></li></ul></div>`,
        DE: `<h2>Willkommen!</h2><p>Danke für Ihren Besuch! Ich bin ein ehrenamtlicher Sprachlehrer und unterrichte derzeit zum ersten Mal Niederländisch!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Diese Website wird derzeit auf Github Pages oder lokal gehostet, durch Herunterladen und Entpacken von <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">diesem Ordner (Download-Link)</a>.<br>Es werden keine Cookies oder Skripte außer den offiziellen JS, CSS und Three.js verwendet.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Niederländisch Unterricht</a></li></ul></div>`,
        IT: `<h2>Benvenuti!</h2><p>Grazie per la visita! Sono un insegnante di lingue volontario e attualmente insegno olandese per la prima volta!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Questo sito web è attualmente ospitato su Github Pages o in locale, scaricando ed estraendo <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">questa cartella (link per il download)</a>.<br>Non vengono utilizzati cookie o script diversi da JS, CSS e Three.js ufficiali.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Lezioni di Olandese</a></li></ul></div>`,
        PT: `<h2>Bem-vindo!</h2><p>Obrigado pela visita! Sou um professor voluntário de idiomas, atualmente ensinando holandês pela primeira vez!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Este site está atualmente hospedado no Github Pages ou localmente, baixando e extraindo <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">esta pasta (link para download)</a>.<br>Nenhum cookie ou script além do JS, CSS e Three.js oficial é usado.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Aulas de Holandês</a></li></ul></div>`,
        SV: `<h2>Välkommen!</h2><p>Tack för att du tittar in! Jag är en volontär språklärare som för första gången undervisar i holländska!</p><p style="font-size:0.9em; color: gray;font-style: oblique;">Denna webbplats är för närvarande värd på Github Pages eller lokalt, genom att ladda ner och extrahera <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">denna mapp (nedladdningslänk)</a>.<br>Inga cookies eller skript annat än officiell JS, CSS och Three.js används.</p><div class="content-links"><h3>${TranslationManager.get('common', 'sections')}:</h3><ul><li><a href="#" onclick="loadContent('dutch')">Holländskalektioner</a></li></ul></div>`
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
        EN: `<h2>Lesson 1: Introduction and exercises</h2><p class="description">In the first lesson, I attempt to transform my passion for language into an expanded introduction to the language that is most boring to me - Dutch. Herein, I shall discuss the etymology and origin and display the form of the language through the aid of history and art.</p><div class="content-links"><h3>Contents:</h3><ul><li><a href="#" onclick="loadContent('dutch1_1')">Origin and etymology</a></li><li><a href="#" onclick="loadContent('dutch1_2')">The form of the language</a></li><li><a href="#" onclick="loadContent('dutch1_3')">Grammatics</a></li></ul></div>`,
        NL: `<h2>Les 1: Introductie en oefeningen</h2><p class="description">In de eerste les, tracht ik mijn passie voor taal om te zetten in een uitgebreide kennismaking met de taal die het meest saai voor mij is - Nederlands. Hierbij zal ik de etymologie en oorsprong bespreken en de vorm van de taal uitbeelden met behulp van (m.b.v) historiek en kunst.</p><div class="content-links"><h3>Inhoud:</h3><ul><li><a href="#" onclick="loadContent('dutch1_1')">Oorsprong en etymologie</a></li><li><a href="#" onclick="loadContent('dutch1_2')">De vorm van de taal</a></li><li><a href="#" onclick="loadContent('dutch1_3')">Grammatica</a></li></ul></div>`,
        FR: `<h2>Leçon 1: Introduction et exercices</h2><p class="description">Dans la première leçon, j'essaie de transformer ma passion pour la langue en une introduction approfondie à la langue qui m'ennuie le plus - le néerlandais. Ici, je discuterai de l'étymologie et de l'origine et présenterai la forme de la langue à travers l'histoire et l'art.</p><div class="content-links"><h3>Contenu:</h3><ul><li><a href="#" onclick="loadContent('dutch1_1')">Origine et étymologie</a></li><li><a href="#" onclick="loadContent('dutch1_2')">La forme de la langue</a></li><li><a href="#" onclick="loadContent('dutch1_3')">Grammaire</a></li></ul></div>`,
        DE: `<h2>Lektion 1: Einführung und Übungen</h2><p class="description">In der ersten Lektion versuche ich, meine Sprachleidenschaft in eine erweiterte Einführung in die für mich langweiligste Sprache - Niederländisch - umzuwandeln. Hierin werde ich die Etymologie und den Ursprung besprechen und die Form der Sprache mithilfe von Geschichte und Kunst darstellen.</p><div class="content-links"><h3>Inhalt:</h3><ul><li><a href="#" onclick="loadContent('dutch1_1')">Ursprung und Etymologie</a></li><li><a href="#" onclick="loadContent('dutch1_2')">Die Form der Sprache</a></li><li><a href="#" onclick="loadContent('dutch1_3')">Grammatik</a></li></ul></div>`,
        IT: `<h2>Lezione 1: Introduzione ed esercizi</h2><p class="description">Nella prima lezione, cerco di trasformare la mia passione per la lingua in un'introduzione approfondita alla lingua che trovo più noiosa - l'olandese. Qui, discuterò l'etimologia e l'origine e mostrerò la forma della lingua attraverso la storia e l'arte.</p><div class="content-links"><h3>Contenuti:</h3><ul><li><a href="#" onclick="loadContent('dutch1_1')">Origine ed etimologia</a></li><li><a href="#" onclick="loadContent('dutch1_2')">La forma della lingua</a></li><li><a href="#" onclick="loadContent('dutch1_3')">Grammatica</a></li></ul></div>`,
        PT: `<h2>Lição 1: Introdução e exercícios</h2><p class="description">Na primeira lição, tento transformar minha paixão pela língua em uma introdução expandida à língua que considero mais chata - o holandês. Aqui, discutirei a etimologia e origem e demonstrarei a forma da língua através da história e da arte.</p><div class="content-links"><h3>Conteúdo:</h3><ul><li><a href="#" onclick="loadContent('dutch1_1')">Origem e etimologia</a></li><li><a href="#" onclick="loadContent('dutch1_2')">A forma da língua</a></li><li><a href="#" onclick="loadContent('dutch1_3')">Gramática</a></li></ul></div>`,
        SV: `<h2>Lektion 1: Introduktion och övningar</h2><p class="description">I den första lektionen försöker jag omvandla min passion för språk till en utökad introduktion till det språk som jag tycker är tråkigast - holländska. Här kommer jag att diskutera etymologin och ursprunget samt visa språkets form genom historia och konst.</p><div class="content-links"><h3>Innehåll:</h3><ul><li><a href="#" onclick="loadContent('dutch1_1')">Ursprung och etymologi</a></li><li><a href="#" onclick="loadContent('dutch1_2')">Språkets form</a></li><li><a href="#" onclick="loadContent('dutch1_3')">Grammatik</a></li></ul></div>`
    }
});
ContentManager.addContent('dutch1_1', {
    navigation: ['home', 'dutch1', 'exercises'],
    body: {
        EN: `<h2>Origin and etymology</h2>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="A hierarchical tree diagram of the entire germanic branch.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo European --> Proto-Germanic --> West Germanic --> West Low Franconian --> Dutch</p>`,
        NL: `<h2>Oorsprong en etymologie</h2>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Een hiërarchische boomdiagram van de hele germaanse tak.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo Europees --> Proto-Germaans --> West Germaans --> West Lagefrankisch --> Nederlands</p>`,
        FR: `<h2>Origine et étymologie</h2>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Un diagramme arborescent hiérarchique de toute la branche germanique.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo Européen --> Proto-Germanique --> Germanique Occidental --> Bas-Francique Occidental --> Néerlandais</p>`,
        DE: `<h2>Ursprung und Etymologie</h2>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Ein hierarchisches Baumdiagramm des gesamten germanischen Zweigs.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indoeuropäisch --> Proto-Germanisch --> Westgermanisch --> Westfränkisch --> Niederländisch</p>`,
        IT: `<h2>Origine ed etimologia</h2>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Un diagramma ad albero gerarchico dell'intero ramo germanico.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo Europeo --> Proto-Germanico --> Germanico Occidentale --> Basso Francone Occidentale --> Olandese</p>`,
        PT: `<h2>Origem e etimologia</h2>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Um diagrama em árvore hierárquica de todo o ramo germânico.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo Europeu --> Proto-Germânico --> Germânico Ocidental --> Baixo-Francônio Ocidental --> Holandês</p>`,
        SV: `<h2>Ursprung och etymologi</h2>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Ett hierarkiskt träddiagram över hela den germanska grenen.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo-Europeiska --> Proto-Germanska --> Västgermanska --> Västlågfrankiska --> Holländska</p>`
    }
});
ContentManager.addContent('dutch1_2', {
    navigation: ['home', 'dutch1_1', 'dutch1_3', 'exercises'],
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
        </ul>`,
        PT: `<h2>A Forma da Língua</h2>
        <p>O holandês usa o alfabeto latino com 26 letras. Combinações especiais incluem:</p>
        <ul>
            <li>ij - Frequentemente tratado como uma única letra</li>
            <li>ch - Som gutural</li>
            <li>sch - Combinação comum</li>
        </ul>
        <p>Regras de pronúncia:</p>
        <ul>
            <li>aa, ee, oo - Vogais longas</li>
            <li>g/ch - Sons guturais</li>
            <li>ui, eu, oe - Sons únicos do holandês</li>
        </ul>`,
        SV: `<h2>Språkets Form</h2>
        <p>Holländska använder det latinska alfabetet med 26 bokstäver. Speciella kombinationer inkluderar:</p>
        <ul>
            <li>ij - Ofta behandlad som en enda bokstav</li>
            <li>ch - Gutturalt ljud</li>
            <li>sch - Vanlig kombination</li>
        </ul>
        <p>Uttalsregler:</p>
        <ul>
            <li>aa, ee, oo - Långa vokaler</li>
            <li>g/ch - Gutturala ljud</li>
            <li>ui, eu, oe - Unika holländska ljud</li>
        </ul>`
    }
});
ContentManager.addContent('dutch1_3', {
    navigation: ['home', 'dutch1_2', 'dutch2', 'exercises'],
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
            <li>zijn (sein): ik ben, jij bent, hij/zij/het ist</li>
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
        </ul>`,
        PT: `<h2>Gramática Básica</h2>
        <p>A gramática holandesa compartilha características com o inglês e o alemão:</p>
        <ul>
            <li>Ordem das palavras: Sujeito-Verbo-Objeto (em orações principais)</li>
            <li>Dois gêneros gramaticais: Comum e neutro</li>
            <li>Artigos: 'de' (comum) e 'het' (neutro)</li>
        </ul>
        <p>Exemplos de conjugação verbal:</p>
        <ul>
            <li>zijn (ser/estar): ik ben, jij bent, hij/zij/het is</li>
            <li>hebben (ter): ik heb, jij hebt, hij/zij/het heeft</li>
        </ul>`,
        SV: `<h2>Grundläggande Grammatik</h2>
        <p>Holländsk grammatik delar egenskaper med både engelska och tyska:</p>
        <ul>
            <li>Ordföljd: Subjekt-Verb-Objekt (i huvudsatser)</li>
            <li>Två grammatiska genus: Utrum och neutrum</li>
            <li>Artiklar: 'de' (utrum) och 'het' (neutrum)</li>
        </ul>
        <p>Exempel på verbböjning:</p>
        <ul>
            <li>zijn (vara): ik ben, jij bent, hij/zij/het is</li>
            <li>hebben (ha): ik heb, jij hebt, hij/zij/het heeft</li>
        </ul>`
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
        EN: `<h2>Basic Pronunciation</h2><p>Coming soon...</p>`,
        NL: `<h2>Basis Uitspraak</h2><p>Binnenkort beschikbaar...</p>`,
        FR: `<h2>Prononciation de Base</h2><p>Bientôt disponible...</p>`,
        DE: `<h2>Grundlegende Aussprache</h2><p>Demnächst verfügbar...</p>`,
        IT: `<h2>Pronuncia di Base</h2><p>Prossimamente...</p>`,
        PT: `<h2>Pronúncia Básica</h2><p>Em breve...</p>`,
        SV: `<h2>Grundläggande Uttal</h2><p>Kommer snart...</p>`
    }
});
ContentManager.addContent('exercise2', {
    navigation: ['home', 'dutch', 'exercises'],
    body: {
        EN: `<h2>Common Phrases</h2><p>Coming soon...</p>`,
        NL: `<h2>Veelgebruikte Zinnen</h2><p>Binnenkort beschikbaar...</p>`,
        FR: `<h2>Phrases Courantes</h2><p>Bientôt disponible...</p>`,
        DE: `<h2>Häufige Sätze</h2><p>Demnächst verfügbar...</p>`,
        IT: `<h2>Frasi Comuni</h2><p>Prossimamente...</p>`,
        PT: `<h2>Frases Comuns</h2><p>Em breve...</p>`,
        SV: `<h2>Vanliga Fraser</h2><p>Kommer snart...</p>`
    }
});
export { LANGUAGES, DEFAULT_LANGUAGE, currentLanguage, TranslationManager, ContentManager };