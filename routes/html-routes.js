const path = require("path");

module.exports = function (app) {

    app.get("/", (req, res) => {
        res.render("index", {
            projectDisplay: 'none',
            aboutDisplay: 'block',
            portfolioDisplay: 'none'
        });
    });

    app.get("/:project", (req, res) => {
        switch (req.params.project) {
            case 'artiste':
                res.render('index', {
                    projectDisplay: 'block',
                    portfolioDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Artiste Affame",
                    description: "Full-stack MERN application allows users to immerse themselves in the life of a renaissance artist. Users can play games, draw and share their art.",
                    stack: ["MongoDB", "Express", "React", "Node", "Mongoose", "Materialize", "Axios", "HTML", "CSS", "Javascript"],
                    stackSnippet: [],
                    repo: "https://github.com/kqarlos/artiste-affame",
                    deployed: "https://artiste-affame.herokuapp.com/",
                    src: "assets/images/artiste-live.gif"
                });
                break;
            case 'electionYear':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Election Year",
                    description: "Full-stack application that allows to create an account and search for their representatives.",
                    stack: ["MySQL", "Express", "Node", "Handlebars", "Sequelize", "Bootstrap", "Charts.js", "Axios", "HMTL", "CSS", "Javascript"],
                    repo: "https://github.com/kqarlos/election-year",
                    deployed: "https://electionyear2020.herokuapp.com/",
                    src: "assets/images/election-year-live.gif"
                });
                break;
            case 'memoryGame':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Memory Game",
                    description: "Choose a game theme and start playing. Only click each image once. Click twice and it's game over",
                    stack: ["React", "Node", "Bootstrap", "Axios", "HTML", "CSS", "Javascript"],
                    repo: "https://github.com/kqarlos/memory-game",
                    deployed: "https://kqarlos.github.io/memory-game/",
                    src: "assets/images/memory-game-live.gif"
                });
                break;
            case 'noteTaker':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Note Taker",
                    description: "Real-time note taking application. Take notes, update them, and delete them with this note-taker.",
                    stack: ["Node", "Express", "Bootstrap"],
                    repo: "https://github.com/kqarlos/note-taker",
                    deployed: "https://note-taker2020.herokuapp.com/",
                    src: "assets/images/note-taker-live.gif"
                });
                break;
            case 'googleLibrary':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Google Library",
                    description: "Search through Google Books API and keep a list of your favorite books.",
                    stack: ["MongoDB", "Express", "React", "Node", "Bootstrap", "Axios", "Mongoose"],
                    repo: "https://github.com/kqarlos/google-library",
                    deployed: "https://google-library-mern.herokuapp.com/",
                    src: "assets/images/google-library-live.gif"
                });
                break;
            case 'passwordGenerator':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Password Generator",
                    description: "Generates a random password based on user preferences and copies it to the clipboard.",
                    stack: ["HTML", "CSS", "Javascript", "Bootstrap"],
                    repo: "https://github.com/kqarlos/password-generator",
                    deployed: "https://kqarlos.github.io/password-generator/",
                    src: "assets/images/password-generator.png"
                });
                break;
            case 'dayPlanner':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Day Planner",
                    description: "A planner for day activities that saves information to local storage",
                    stack: ["HTML", "CSS", "Javascript", "Moment.js", "Bootstrap"],
                    repo: "https://github.com/kqarlos/day-planner",
                    deployed: "https://kqarlos.github.io/day-planner/",
                    src: "assets/images/day-planner.png"
                });
                break;
            case 'weatherDashboard':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Weather Dashboard",
                    description: "Displays current weather and forecast for a searched city.",
                    stack: ["HTML", "CSS", "Javascript", "Moment.js", "Bootstrap"],
                    repo: "https://github.com/kqarlos/weather-dashboard",
                    deployed: "https://kqarlos.github.io/weather-dashboard/",
                    src: "assets/images/weather-live.gif"
                });
                break;
            case 'dinnerParty':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Dinner Party",
                    description: "Application that recommends a dish and a cocktail based on a protein choice",
                    stack: ["HTML", "CSS", "Javascript", "Materialize", "Bootstrap"],
                    repo: "https://github.com/kqarlos/dinner-party",
                    deployed: "https://kqarlos.github.io/dinner-party/",
                    src: "assets/images/dinner-party-live.webp"
                });
                break;
            case 'shoppingBuddy':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Shopping Buddy",
                    description: "Manage your shopping list on the go",
                    stack: ["HTML", "CSS", "Javascript", "Express", "Node", "Handlebars", "MySQL"],
                    repo: "https://github.com/kqarlos/shopping-buddy",
                    deployed: "https://shopping-buddy2020.herokuapp.com/",
                    src: "assets/images/shopping-buddy.gif"
                });
                break;
            default:
                res.render("index", { projectDisplay: 'none', aboutDisplay: 'block' });

        }
    });

};