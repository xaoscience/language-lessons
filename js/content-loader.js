const flagStylePath = "../data/flagicons/css/flag-icons.css";
const LANGUAGES = {
    NL: { name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', flagStyle: 'fi fi-nl'},
    EN: { name: 'English', nativeName: 'English', flag: '🇬🇧', flagStyle: 'fi fi-gb'},
    FR: { name: 'French', nativeName: 'Français', flag: '🇫🇷', flagStyle: 'fi fi-fr'},
    DE: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', flagStyle: 'fi fi-de'},
    IT: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', flagStyle: 'fi fi-it'},
};
const DEFAULT_LANGUAGE = 'EN';
let currentLanguage = DEFAULT_LANGUAGE;
class TranslationManager {
    static translations = new Map();
    static addTranslations(namespace, translations) {
        this.translations.set(namespace, translations);
    }
    static get(namespace, key, lang = currentLanguage) {
        const nsTranslations = this.translations.get(namespace);
        if (!nsTranslations) {
            console.warn(`No translations found for namespace: ${namespace}`);
            return key;
        }
        return nsTranslations[lang]?.[key] || nsTranslations[DEFAULT_LANGUAGE][key] || key;
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
        dutch1: 'Les 1: Introductie'
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
        dutch1: 'Lesson 1: Introduction'
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
        wip: 'En cours',
        dutch1: 'Leçon 1: Introduction'
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
        dutch1: 'Lektion 1: Einführung'
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
        wip: 'Lavori in Corso',
        dutch1: 'Lezione 1: Introduzione'
    },
});
class ContentManager {
    static content = new Map();
    static addContent(pageId, content) {
        this.content.set(pageId, content);
    }
    static getContent(pageId) {
        return this.content.get(pageId);
    }
}
class PageRenderer {
    static renderLanguageSwitcher() {
        const existingContainer = document.getElementById('language-switcher-container');
        if (existingContainer) {
            existingContainer.remove();
        }
        return `
            <div id="language-switcher-container">
                ${Object.entries(LANGUAGES)
                    .map(([code, { nativeName, flagStyle }]) => `
                        <button class="language-switch ${code === currentLanguage ? 'active' : ''}"
                                onclick="switchLanguage('${code}')"
                                aria-label="${nativeName}">
                            <span class="${flagStyle}"></span>
                        </button>
                    `).join('')}
            </div>`;
    }
    static renderNavigation(page) {
        const content = ContentManager.getContent(page);
        const navigation = content?.navigation || ['home'];
        return navigation
            .map(item => `
                <a href="#" 
                   onclick="loadContent('${item}')"
                   aria-label="${TranslationManager.get('common', item)}">
                    ${TranslationManager.get('common', item)}
                </a>
            `).join('');
    }
    static renderContent(page) {
        const content = ContentManager.getContent(page);
        if (!content) {
            console.error(`No content found for page: ${page}`);
            return;
        }
        const title = TranslationManager.get(page, 'title');
        const description = TranslationManager.get(page, 'description');
        const body = content.body?.[currentLanguage] || '';
        document.getElementById('dynamic-header').innerHTML = `
            <h1>${title}</h1>
            <nav>${this.renderNavigation(page)}</nav>
        `;
        document.getElementById('content').insertAdjacentHTML('beforebegin', this.renderLanguageSwitcher());
        document.getElementById('content').innerHTML = `
            <h2>${title}</h2>
            <p class="description">${description}</p>
            ${body}
        `;
    }
}
function switchLanguage(newLanguage) {
    if (LANGUAGES[newLanguage]) {
        currentLanguage = newLanguage;
        PageRenderer.renderContent(window.currentPage);
    }
}
function setLanguage(lang) {
    if (LANGUAGES[lang]) {
        currentLanguage = lang;
        loadContent(window.currentPage || 'home');
    }
}
function loadContent(page) {
    window.currentPage = page;
    PageRenderer.renderContent(page);
}
ContentManager.addContent('home', {
    navigation: ['home'],
    sections: {
        EN: ['Introduction', 'Getting Started', 'Resources'],
        NL: ['Introductie', 'Aan de slag', 'Bronnen']
    }
});
TranslationManager.addTranslations('home', {
    EN: {
        title: 'Language Lessons by χαος',
        welcome: 'Welcome!',
        description: 'Thank you for stopping by! I am a volunteer language teacher, currently teaching Dutch for the first time!'
    },
    NL: {
        title: 'Taallessen door χαος',
        welcome: 'Welkom!',
        description: 'Bedankt voor je bezoek! Ik ben een vrijwillige taalleraar, momenteel geef ik voor het eerst Nederlandse les!'
    }
});
ContentManager.addContent('dutch', {
    navigation: ['home', 'dutch', 'exercises'],
    sections: {
        EN: [{
            title: TranslationManager.get('dutch1', 'title'),
            link: 'dutch1'
        }, {
            title: TranslationManager.get('common', 'wip'),
            link: 'dutch2'
        }],
        NL: [{
            title: TranslationManager.get('dutch1', 'title'),
            link: 'dutch1'
        }, {
            title: TranslationManager.get('common', 'wip'),
            link: 'dutch2'
        }]
    }
});
ContentManager.addContent('dutch1', {
    navigation: ['home', 'dutch', 'exercises'],
    sections: {
        EN: [{
            title: `${TranslationManager.get('common', 'chapter')} 1: ${TranslationManager.get('dutch1_1', 'title')}`,
            link: 'dutch1_1'
        }, {
            title: `${TranslationManager.get('common', 'chapter')} 2: ${TranslationManager.get('dutch1_2', 'title')}`,
            link: 'dutch1_2'
        }, {
            title: `${TranslationManager.get('common', 'chapter')} 3: ${TranslationManager.get('dutch1_3', 'title')}`,
            link: 'dutch1_3'
        }],
        NL: [{
            title: `${TranslationManager.get('common', 'chapter')} 1: ${TranslationManager.get('dutch1_1', 'title')}`,
            link: 'dutch1_1'
        }, {
            title: `${TranslationManager.get('common', 'chapter')} 2: ${TranslationManager.get('dutch1_2', 'title')}`,
            link: 'dutch1_2'
        }, {
            title: `${TranslationManager.get('common', 'chapter')} 3: ${TranslationManager.get('dutch1_3', 'title')}`,
            link: 'dutch1_3'
        }]
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
    }
});
TranslationManager.addTranslations('dutch1', {
    EN: {
        title: 'Introduction to Dutch',
        description: 'In the first lesson, I attempt to transform my passion for language into an expanded introduction to Dutch. Herein, I shall discuss the etymology and origin and display the form of the language through the aid of history and art.'
    },
    NL: {
        title: 'Introductie Nederlands',
        description: 'In de eerste les, tracht ik mijn passie voor taal om te zetten in een uitgebreide kennismaking met Nederlands. Hierbij zal ik de etymologie en oorsprong bespreken en de vorm van de taal uitbeelden met behulp van (m.b.v) historiek en kunst.'
    },
    FR: {
        title: 'Introduction au Néerlandais',
        description: 'La première leçon couvre les bases de la langue néerlandaise, ses origines et sa structure.'
    },
    DE: {
        title: 'Einführung in die niederländische Sprache',
        description: 'Die erste Lektion behandelt die Grundlagen der niederländischen Sprache, ihre Ursprünge und Struktur.'
    },
    IT: {
        title: 'Introduzione all\'Olandese',
        description: 'La prima lezione copre le basi della lingua olandese, le sue origini e la sua struttura.'
    }
});
TranslationManager.addTranslations('dutch1_1', {
    EN: {
        title: 'Origin and etymology',
        content: `
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="A hierarchical tree diagram of the entire germanic branch.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo European --> Proto-Germanic --> West Germanic --> West Low Franconian --> Dutch </p>
        `
    },
    NL: {
        title: 'Oorsprong en etymologie',
        content: `
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Een hiërarchische boomdiagram van de hele germaanse tak.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo Europees --> Proto-Germaans --> West Germaans --> West Lagefrankisch --> Nederlands </p>
        `
    }
});

TranslationManager.addTranslations('dutch1_2', {
    EN: {
        title: 'The form of the language',
        content: `
            <div class="content-list">
                <h3>Basic Characteristics:</h3>
                <ul>
                    <li>Dutch uses the Latin alphabet with 26 letters</li>
                    <li>Special combinations: ij, ch, ng, sch</li>
                    <li>Consistent phonetic pronunciation</li>
                    <li>Word order: Subject-Verb-Object (SVO)</li>
                </ul>
            </div>
        `
    },
    NL: {
        title: 'De vorm van de taal',
        content: `
            <div class="content-list">
                <h3>Basiskenmerken:</h3>
                <ul>
                    <li>Nederlands gebruikt het Latijnse alfabet met 26 letters</li>
                    <li>Speciale combinaties: ij, ch, ng, sch</li>
                    <li>Consistente fonetische uitspraak</li>
                    <li>Woordvolgorde: Onderwerp-Werkwoord-Voorwerp (SVO)</li>
                </ul>
            </div>
        `
    }
});
TranslationManager.addTranslations('dutch1_3', {
    EN: {
        title: 'Grammatics',
        content: `
            <div class="content-list">
                <h3>Basic Grammar Rules:</h3>
                <ul>
                    <li>Articles: 'de' (common gender) and 'het' (neuter)</li>
                    <li>Plural forms usually add -en or -s</li>
                    <li>Regular verb conjugation patterns</li>
                    <li>Subject-verb agreement required</li>
                </ul>
            </div>
        `
    },
    NL: {
        title: 'Grammatica',
        content: `
            <div class="content-list">
                <h3>Basis Grammaticaregels:</h3>
                <ul>
                    <li>Lidwoorden: 'de' (de-woorden) en 'het' (het-woorden)</li>
                    <li>Meervoudsvormen meestal met -en of -s</li>
                    <li>Regelmatige werkwoordvervoegingen</li>
                    <li>Onderwerp-werkwoordovereenkomst vereist</li>
                </ul>
            </div>
        `
    }
});
TranslationManager.addTranslations('dutch1_1', {
    EN: {
        title: 'Origin and Etymology of Dutch',
        description: 'The historical development and linguistic roots of the Dutch language.'
    },
    NL: {
        title: 'Oorsprong en Etymologie van Nederlands',
        description: 'De historische ontwikkeling en taalkundige wortels van de Nederlandse taal.'
    }
});
ContentManager.addContent('exercises', {
    navigation: ['home', 'dutch'],
});
TranslationManager.addTranslations('exercises', {
    EN: {
        title: 'Exercises',
        description: 'Test your knowledge or play.'
    },
    NL: {
        title: 'Oefeningen',
        description: 'Test je kennis of speel.'
    }
});
document.addEventListener('DOMContentLoaded', () => {
    loadContent('home');
});
// const content = {
//     home: {
//         header: `
//             <h1>Language Lessons by χαος</h1>
//             <nav>
//                 <a href="#" onclick="loadContent('dutch_EN')">Dutch</a>
//             </nav>
//         `,
//         body: `
//             <h2>Welcome!</h2>
//             <p style="color: dimgrey;">
//                 Thank you for stopping by! I am a volunteer language teacher, currently teaching Dutch for the first time!
//             </p>
//             <p style="font-size:0.9em; color: gray;font-style: oblique;">
//                 This website is currently hosted by Github Pages or locally, by downloading and extracting <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">this folder (download link)</a>.<br>
//                 No cookies or scripts other than official JS, CSS and Three.js are used. 
//             </p>
//         `
//     },
//     dutch_EN: {
//         header: `
//             <h1>Dutch Lessons</h1>
//             <nav>
//                 <a href="#" onclick="loadContent('home')">Home</a>
//                 <a href="#" onclick="loadContent('dutch1_EN')">Start</a>
//                 <a href="#" onclick="loadContent('exercises')">Exercises</a>
//             </nav>
//         `,
//         body: `
//             <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch_NL')">Switch Language</button>
//             <h2>Dutch Lessons</h2>
//             <p>Interactive Dutch beginner to intermediate class with exercises.</p>
//             <div class="content-links">
//                 <li><a href="#" onclick="loadContent('dutch1_EN')">Lesson 1: Introduction and exercises</a></li>
//                 <li><a href="#" onclick="loadContent('dutch2_EN')">Lesson 2: WIP</a></li>
//             </div>
//         `
//     },
//     dutch_NL: {
//         header: `
//             <h1>Dutch Lessons</h1>
//             <nav>
//                 <a href="#" onclick="loadContent('home')">Home</a>
//                 <a href="#" onclick="loadContent('dutch1_NL')">Start</a>
//                 <a href="#" onclick="loadContent('exercises')">Exercises</a>
//             </nav>
//         `,
//         body: `
//             <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch_EN')">Switch Language</button>
//             <h2>Lessen Nederlands</h2>
//             <p>Interactieve, beginner tot intermediaire Nederlands klas met oefeningen.</p>
//             <div class="content-links">
//                 <li><a href="#" onclick="loadContent('dutch1_NL')">Les 1: Introductie en oefeningen</a></li>
//                 <li><a href="#" onclick="loadContent('dutch2_NL')">Les 2: WIP</a></li>
//             </div>
//         `
//     },
//     exercises: {
//         header: `
//             <h1>Exercises/h1>
//             <nav>
//                 <a href="#" onclick="loadContent('dutch_EN')">Back</a>
//             </nav>
//         `,
//         body: `
//             <h2>Oefeningen</h2>
//             <p>Test je kennis of speel.</p>
//         `
//     },
//     dutch1_EN: {
//         header: `
//             <h1>Dutch Lessons</h1>
//             <nav>
//                 <a href="#" onclick="loadContent('home')">Home</a>
//                 <a href="#" onclick="loadContent('dutch_EN')">Back</a>
//                 <a href="#" onclick="loadContent('dutch2_EN')">Next</a>
//                 <a href="#" onclick="loadContent('exercises')">Exercises</a>
//         `,
//         body: `
//             <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch1_NL')">Switch Language</button>
//             <h2>Lesson 1: Introduction and exercises</h2>
//             <p class="description">In the first lesson, I attempt to transfom my passion for language into an expanded introduction to the language that is most boring to me - Dutch. Herein, I shall discuss the etymology and origin and display the form of the language through the aid of history and art.</p>

//             <div class="content-links">
//                 <h3>Inhoud:</h3>
//                 <ul>
//                     <li><a href="#" onclick="loadContent('dutch1_1_EN')">Origin and etymology</a></li>
//                     <li><a href="#" onclick="loadContent('dutch1_2_EN')">The form of the language</a></li>
//                     <li><a href="#" onclick="loadContent('dutch1_3_EN')">Grammatics</a></li>
//                 </ul>
//             </div>

//         `
//     },
//     dutch1_NL: {
//         header: `
//             <h1>Dutch Lessons</h1>
//             <nav>
//                 <a href="#" onclick="loadContent('home')">Home</a>
//                 <a href="#" onclick="loadContent('dutch_NL')">Back</a>
//                 <a href="#" onclick="loadContent('dutch2_NL')">Next</a>
//                 <a href="#" onclick="loadContent('exercises')">Exercises</a>
//             </nav>
//         `,
//         body: `
//             <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch1_EN')">Switch Language</button>
//             <h2>Les 1: Introductie en oefeningen</h2>
//             <p class="description">In de eerste les, tracht ik mijn passie voor taal om te zetten in een uitgebreide kennismaking met de taal die het meest saai voor mij is - Nederlands. Hierbij zal ik de etymologie en oorsprong bespreken en de vorm van de taal uitbeelden met behulp van (m.b.v) historiek en kunst.</p>

//             <div class="content-links">
//                 <h3>Inhoud:</h3>
//                 <ul>
//                     <li><a href="#" onclick="loadContent('dutch1_1_NL')">Oorsprong en etymologie</a></li>
//                     <li><a href="#" onclick="loadContent('dutch1_2_NL')">De vorm van de taal</a></li>
//                     <li><a href="#" onclick="loadContent('dutch1_3_NL')">Grammatica</a></li>
//                 </ul>
//             </div>

//         `
//     },
//     dutch2_EN: {
//         header: `
//             <h1>Dutch Lessons</h1>
//             <nav>
//                 <a href="#" onclick="loadContent('home')">Home</a>
//                 <a href="#" onclick="loadContent('dutch_EN')">Dutch</a>
//                 <a href="#" onclick="loadContent('dutch1_EN')">Back</a>
//                 <a href="#" onclick="loadContent('dutch3_EN')">Next</a>
//                 <a href="#" onclick="loadContent('exercises')">Exercises</a>
//             </nav>
//         `,
//         body: `
//             <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch2_NL')">Switch Language</button>
//             <h2>Lesson 2</h2>
//             <p></p>
//         `
//     },
//     dutch2_NL: {
//         header: `
//             <h1>Dutch Lessons</h1>
//             <nav>
//                 <a href="#" onclick="loadContent('home')">Home</a>
//                 <a href="#" onclick="loadContent('dutch_NL')">Dutch</a>
//                 <a href="#" onclick="loadContent('dutch1_NL')">Back</a>
//                 <a href="#" onclick="loadContent('dutch3_NL')">Next</a>
//                 <a href="#" onclick="loadContent('exercises')">Exercises</a>
//             </nav>
//         `,
//         body: `
//             <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch2_EN')">Switch Language</button>
//             <h2>Les 2</h2>
//             <p></p>
//         `
//     },
//     dutch1_1_EN: {
//         header: `
//             <h1>Dutch Lessons</h1>
//             <nav>
//                 <a href="#" onclick="loadContent('home')">Home</a>
//                 <a href="#" onclick="loadContent('dutch1_EN')">Back</a>
//                 <a href="#" onclick="loadContent('dutch1_2_EN')">Next</a>
//                 <a href="#" onclick="loadContent('exercises')">Exercises</a>
//             </nav>
//         `,
//         body: `
//             <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch1_1_NL')">Switch Language</button>
//             <h2>Origin and etymology</h2>
//             <div class="content-image">
//                 <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="A hierarchical tree diagram of the entire germanic branch.">
//             </div>
//             <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo European --> Proto-Germanic --> West Germanic --> West Low Franconian --> Dutch </p>
//         `
//     },
//     dutch1_1_NL: {
//         header: `
//             <h1>Dutch Lessons<s/h1>
//             <nav>
//                 <a href="#" onclick="loadContent('home')">Home</a>
//                 <a href="#" onclick="loadContent('dutch1_NL')">Back</a>
//                 <a href="#" onclick="loadContent('dutch1_2_NL')">Next</a>
//                 <a href="#" onclick="loadContent('exercises')">Exercises</a>
//             </nav>
//         `,
//         body: `
//             <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch1_1_EN')">Switch Language</button>
//             <h2>Oorsprong en etymologie</h2>
//             <div class="content-image">
//                 <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Een hiërarchische boomdiagram van de hele germaanse tak.">
//             </div>
//             <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo Europees --> Proto-Germaans --> West Germaans --> West Lagefrankisch --> Nederlands </p>
//         `
//     },
//     dutch1_2_EN: {
//         header: `
//             <h1>Dutch Lessons</h1>
//             <nav>
//                 <a href="#" onclick="loadContent('home')">Home</a>
//                 <a href="#" onclick="loadContent('Dutch1_1')">Back</a>
//                 <a href="#" onclick="loadContent('Dutch1_3')">Next</a>
//                 <a href="#" onclick="loadContent('exercises')">Exercises</a>
//             </nav>
//         `,
//         body: `
//             <h2>Vorm van de taal</h2>
//             <div class="content-list">
//             <p></p>
//         `
//     },
//     dutch1_2_NL: {
//         header: `
//             <h1>Dutch Lessons</h1>
//             <nav>
//                 <a href="#" onclick="loadContent('home')">Home</a>
//                 <a href="#" onclick="loadContent('sutch1_1')">Back</a>
//                 <a href="#" onclick="loadContent('dutch1_3')">Next</a>
//                 <a href="#" onclick="loadContent('exercises')">Exercises</a>
//             </nav>
//         `,
//         body: `
//             <h2>Vorm van de taal</h2>
//             <div class="content-list">
//             <p></p>
//         `
//     }
// };
// function loadContent(page) {
//     if (content[page]) {
//         if (content[page].header) {
//             document.getElementById('dynamic-header').innerHTML = content[page].header;
//         }
//         if (content[page].body) {
//             document.getElementById('content').innerHTML = content[page].body;
//             if (document.querySelectorAll('#content .content-image').length > 0) {
//                 setContainerAlt();
//             }
//         }
//         if (content[page].footer) {
//             document.getElementById('dynamic-footer').innerHTML = content[page].footer;
//         }
//         if (content[page].title) {
//             document.title = content[page].title;
//         }
//     }
// };
// loadContent('home');
function toggleContent() {
    const content = document.getElementById('content');
    const background = document.getElementById('background-canvas');
    const header = document.getElementById('dynamic-header');
    const footer = document.getElementById('dynamic-footer');
    if (content.style.display === 'none') {
        content.style.display = '';
        header.style.display = '';
        footer.style.display = '';
    } else {
        content.style.display = 'none';
        header.style.display = 'none';
        footer.style.display = 'none';
    }
};
