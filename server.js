var express = require("express");
// var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var db = require("./models");

require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);


// db.sequelize.sync().then(function () {

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
// });