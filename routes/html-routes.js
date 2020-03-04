const path = require("path");

module.exports = function (app) {

    app.get("/", (req, res) => {
        res.render("index", { projectDisplay: 'none', aboutDisplay: 'block' });
    });

    app.get("/:project", (req, res) => {
        // res.render("project");
        console.log(req.params.project);
        switch (req.params.project) {
            case 'artiste':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Artiste Affame",
                    description: "Full-stack MERN application allows users to immerse themselves in the life of a renaissance artist. Users can play games, draw and share their art.",
                    stack: ["MongoDB", "Express", "React", "Node", "Mongoose", "Materialize", "Axios"],
                    repo: "https://github.com/kqarlos/artiste-affame",
                    deployed: "https://artiste-affame.herokuapp.com/"
                });
                break;
            case 'electionYear':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Election Year",
                    description: "Full-stack application that allows to create an account and search for their representatives.",
                    stack: ["MySQL", "Express", "Node", "Handlebars", "Sequelize", "Bootstrap", "Charts.js", "Axios"],
                    repo: "https://github.com/kqarlos/election-year",
                    deployed: "https://electionyear2020.herokuapp.com/"
                });
                break;
            case 'memoryGame':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Memory Game",
                    description: "Choose a game theme and start playing. Only click each image once. Click twice and it's game over",
                    stack: ["React", "Node", "Bootstrap", "Axios"],
                    repo: "https://github.com/kqarlos/memory-game",
                    deployed: "https://kqarlos.github.io/memory-game/"
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
                    deployed: "https://note-taker2020.herokuapp.com/"
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
                    deployed: "https://google-library-mern.herokuapp.com/"
                });
                break;
            case 'passwordGenerator':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Password Generator",
                    description: "",
                    repo: "",
                    deployed: "https://kqarlos.github.io/password-generator/"
                });
                break;
            case 'dayPlanner':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Day Planner",
                    description: "",
                    repo: "",
                    deployed: "https://kqarlos.github.io/day-planner/"
                });
                break;
            case 'weatherDashboard':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Weather Dashboard",
                    description: "",
                    repo: "",
                    deployed: "https://kqarlos.github.io/weather-dashboard/"
                });
                break;
            case 'dinnerParty':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Dinner Party",
                    description: "",
                    repo: "",
                    deployed: "https://kqarlos.github.io/dinner-party/"
                });
                break;
            case 'shoppingBuddy':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Shopping Buddy",
                    description: "",
                    repo: "",
                    deployed: "https://shopping-buddy2020.herokuapp.com/"
                });
                break;
            default:
                res.render("index", { projectDisplay: 'none', aboutDisplay: 'block' });

        }
    });

};