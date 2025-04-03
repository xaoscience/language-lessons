const content = {
    home: {
        header: `
            <h1>Language Lessons by χαος</h1>
            <nav>
                <a href="#" onclick="loadContent('dutch_EN')">Dutch</a>
            </nav>
        `,
        body: `
            <h2>Welcome!</h2>
            <p style="color: dimgrey;">
                Thank you for stopping by! I am a volunteer language teacher, currently teaching Dutch for the first time!
            </p>
            <p style="font-size:0.9em; color: gray;font-style: oblique;">
                This website is currently hosted by Github Pages or locally, by downloading <a style="color: #6b8e7c; text-decoration: none;" href="https://github.com/xaoscience/Language-Lessons/archive/refs/heads/main.zip">this folder (download link)</a>.<br>
                No cookies or scripts other than official JS, CSS and Three.js are used. 
            </p>
        `
    },
    dutch_EN: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('home')">Home</a>
                <a href="#" onclick="loadContent('dutch1_NL')">Start</a>
                <a href="#" onclick="loadContent('exercises')">Exercises</a>
            </nav>
        `,
        body: `
            <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch_NL')">Switch Language</button>
            <h2>Dutch Lessons</h2>
            <p>Interactive Dutch beginner to intermediate class with exercises.</p>
            <div class="content-links">
                <li><a href="#" onclick="loadContent('dutch1_NL')">Lesson 1: Introduction and exercises</a></li>
            </div>
        `
    },
    dutch_NL: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('home')">Home</a>
                <a href="#" onclick="loadContent('Dutch1_NL')">Start</a>
                <a href="#" onclick="loadContent('exercises')">Exercises</a>
            </nav>
        `,
        body: `
            <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch_EN')">Switch Language</button>
            <h2>Lessen Nederlands</h2>
            <p>Interactieve, beginner tot intermediaire Nederlands klas met oefeningen.</p>
            <div class="content-links">
                <li><a href="#" onclick="loadContent('dutch1_NL')">Les 1: Introductie en oefeningen</a></li>
            </div>
        `
    },
    dutch1_EN: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('home')">Home</a>
                <a href="#" onclick="loadContent('dutch_EN')">Back</a>
                <a href="#" onclick="loadContent('dutch2_EN')">Next</a>
                <a href="#" onclick="loadContent('exercises')">Exercises</a>
            </nav>
        `,
        body: `
            <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch1_NL')">Switch Language</button>
            <h2>Lesson 1: Introduction and exercises</h2>
            <p class="description">In the first lesson, I attempt to transfom my passion for language into an expanded introduction to the language that is most boring to me - Dutch. Herein, I shall discuss the etymology and origin and display the form of the language through the aid of history and art.</p>

            <div class="content-links">
                <h3>Inhoud:</h3>
                <ul>
                    <li><a href="#" onclick="loadContent('dutch1_1_EN')">Origin and etymology</a></li>
                    <li><a href="#" onclick="loadContent('dutch1_2_EN')">The form of the language</a></li>
                    <li><a href="#" onclick="loadContent('dutch1_3_EN')">Grammatics</a></li>
                </ul>
            </div>

        `
    },
    dutch1_NL: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('home')">Home</a>
                <a href="#" onclick="loadContent('dutch_NL')">Back</a>
                <a href="#" onclick="loadContent('dutch2_NL')">Next</a>
                <a href="#" onclick="loadContent('exercises')">Exercises</a>
            </nav>
        `,
        body: `
            <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch1_EN')">Switch Language</button>
            <h2>Les 1: Introductie en oefeningen</h2>
            <p class="description">In de eerste les, tracht ik mijn passie voor taal om te zetten in een uitgebreide kennismaking met de taal die het meest saai voor mij is - Nederlands. Hierbij zal ik de etymologie en oorsprong bespreken en de vorm van de taal uitbeelden met behulp van (m.b.v) historiek en kunst.</p>

            <div class="content-links">
                <h3>Inhoud:</h3>
                <ul>
                    <li><a href="#" onclick="loadContent('dutch1_1_NL')">Oorsprong en etymologie</a></li>
                    <li><a href="#" onclick="loadContent('dutch1_2_NL')">De vorm van de taal</a></li>
                    <li><a href="#" onclick="loadContent('dutch1_3_NL')">Grammatica</a></li>
                </ul>
            </div>

        `
    },
    exercises: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('dutch')">Back</a>
            </nav>
        `,
        body: `
            <h2>Exercises</h2>
            <p>Test your knowledge with these exercises.</p>
        `
    },
    dutch1_1_EN: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('home')">Home</a>
                <a href="#" onclick="loadContent('lesson1')">Back</a>
                <a href="#" onclick="loadContent('Dutch1_2')">Next</a>
                <a href="#" onclick="loadContent('exercises')">Exercises</a>
            </nav>
        `,
        body: `
            <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch1_1_NL')">Switch Language</button>
            <h2>Origin and etymology</h2>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="A hierarchical tree diagram of the entire germanic branch.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo European --> Proto-Germanic --> West Germanic --> West Low Franconian --> Dutch </p>
        `
    },
    dutch1_1_NL: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('home')">Home</a>
                <a href="#" onclick="loadContent('lesson1')">Back</a>
                <a href="#" onclick="loadContent('Dutch1_2')">Next</a>
                <a href="#" onclick="loadContent('exercises')">Exercises</a>
            </nav>
        `,
        body: `
            <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch1_1_EN')">Switch Language</button>
            <h2>Oorsprong en etymologie</h2>
            <div class="content-image">
                <img src="https://www.highlifehighland.com/nucleus-nuclear-caithness-archives/wp-content/uploads/sites/121/2023/01/Picture15-768x475.png" alt="Een hiërarchische boomdiagram van de hele germaanse tak.">
            </div>
            <p style="font-weight: bold; font-size: 0.9em;">Proto-Indo Europees --> Proto-Germaans --> West Germaans --> West Lagefrankisch --> Nederlands </p>
        `
    },
    Dutch1_2_EN: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('home')">Home</a>
                <a href="#" onclick="loadContent('Dutch1_1')">Back</a>
                <a href="#" onclick="loadContent('Dutch1_3')">Next</a>
                <a href="#" onclick="loadContent('exercises')">Exercises</a>
            </nav>
        `,
        body: `
            <h2>Vorm van de taal</h2>
            <div class="content-list">
            <p></p>
        `
    },
    dutch2_EN: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('home')">Home</a>
                <a href="#" onclick="loadContent('dutch')">Dutch</a>
                <a href="#" onclick="loadContent('lesson1')">Back</a>
                <a href="#" onclick="loadContent('lesson3')">Next</a>
                <a href="#" onclick="loadContent('exercises')">Exercises</a>
            </nav>
        `,
        body: `
            <button id="EN_NL_switch" class="switch" href="#" onclick="loadContent('dutch2_NL')">Switch Language</button>
            <h2>Lesson 2</h2>
            <p>.</p>
        `
    },
    dutch2_NL: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('home')">Home</a>
                <a href="#" onclick="loadContent('dutch')">Dutch</a>
                <a href="#" onclick="loadContent('lesson1')">Back</a>
                <a href="#" onclick="loadContent('lesson3')">Next</a>
                <a href="#" onclick="loadContent('exercises')">Exercises</a>
            </nav>
        `,
        body: `
            < class="switch" href="#" onclick="loadContent('dutch2_EN')">Switch Language</div>
            <h2>Les 2</h2>
            <p></p>
        `
    }
};
function loadContent(page) {
    if (content[page]) {
        if (content[page].header) {
            document.getElementById('dynamic-header').innerHTML = content[page].header;
        }
        if (content[page].body) {
            document.getElementById('content').innerHTML = content[page].body;
            if (document.querySelectorAll('#content .content-image').length > 0) {
                setContainerAlt();
            }
        }
        if (content[page].footer) {
            document.getElementById('dynamic-footer').innerHTML = content[page].footer;
        }
        if (content[page].title) {
            document.title = content[page].title;
        }
    }
};
loadContent('home');
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
