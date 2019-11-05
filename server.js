// required dependency EXPRESS
var express = require ("express");

var PORT = process.env.PORT || 8080;
var app = express();

// Static content accessed from PUBLIC sub-folder under APP
app,use(express.static("public"));

//Parsing app body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//required dependency EXPRESS HANDLEBARS
var expresshbs = require("express-handlebars");

app.engine("handlebars", expresshbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ROUTING
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
app.listen(PORT, function() {
        console.log("Listening on port: ", PORT);
});


