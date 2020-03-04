const path = require("path");

module.exports = function (app) {

    app.get("/", (req, res) => {
        res.render("index", { projectDisplay: 'none', aboutDisplay: 'block' });
    });

    app.get("/:project", (req, res) => {
        // res.render("project");
        console.log(req.params.project);
        switch (req.params.project) {
            case 'electionYear':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Election Year",
                    description: "",
                    repo: "",
                    deployed: "https://electionyear2020.herokuapp.com/"
                });
                break;
            case 'memoryGame':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Memory Game",
                    description: "",
                    repo: "",
                    deployed: "https://kqarlos.github.io/memory-game/"
                });
                break;
            case 'noteTaker':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Note Taker",
                    description: "",
                    repo: "",
                    deployed: "https://note-taker2020.herokuapp.com/"
                });
                break;
            case 'googleLibrary':
                res.render('index', {
                    projectDisplay: 'block',
                    aboutDisplay: 'none',
                    name: "Google Library",
                    description: "",
                    repo: "",
                    deployed: "https://afternoon-fortress-59314.herokuapp.com/"
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