const content = {
    home: {
        header: `
            <h1>Language Lessons by χαος</h1>
            <nav>
                <a href="#" onclick="loadContent('dutch')">Dutch</a>
            </nav>
        `,
        body: `
            <h2>Welcome!</h2>
            <p>
                Thank you for stopping by! I am a volunteer language teacher, currently teaching Dutch for the first time!
            </p>
            <p>
                This website is currently hosted by Github Pages or locally, by downloading this folder. I advise the use of a trusted and up-to-date browser, inspection of the source code or asking me for the GitHub repository link - should there be any privacy concerns! This is a hobby and volunteer project and I don't use any cookies or any scripts other than those comprised of official JS and ThreeJS libraries.
            </p>
        `
    },
    dutch: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('home')">Home</a>
                <a href="#" onclick="loadContent('lesson1')">Lessons</a>
                <a href="#" onclick="loadContent('exercises')">Exercises</a>
            </nav>
        `,
        body: `
            <h2>Dutch Lessons</h2>
            <p>Explore our interactive 3D environment and learn Dutch with style.</p>
        `
    },
    lesson1: {
        header: `
            <h1>Dutch Lessons</h1>
            <nav>
                <a href="#" onclick="loadContent('home')">Home</a>
                <a href="#" onclick="loadContent('dutch')">Dutch</a>
                <a href="#" onclick="loadContent('lesson2')">Next</a>
                <a href="#" onclick="loadContent('exercises')">Exercises</a>
            </nav>
        `,
        body: `
            <h2>Lesson 1: Introduction and exercise</h2>
            <p>Welkom bij de eerste les Nederlands. In deze les leer je de basisprincipes van de taal.</p>
        `
    },
    lesson2: {
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
            <h2>Lesson 2: Vocabulary and exercise</h2>
            <p>In deze les leer je meer over de Nederlandse woordenschat.</p>
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
    }
};
function loadContent(page) {
    document.getElementById('dynamic-header').innerHTML = content[page].header;
    document.getElementById('content').innerHTML = content[page].body;
}
loadContent('home');
