// required dependencies 
var express = require ("express");
var expresshbs = require("express-handlebars");
var mysql = require("mysql");

//EXPRESS SERVER & PORT
var PORT = process.env.PORT || 8000;
var app = express();    
    // Static content accessed from PUBLIC sub-folder under APP
    app.use(express.static("public"));  
    //Parsing app body
    app.use(express.urlencoded({ extended: true}));
    app.use(express.json());

//EXPRESS HANDLEBARS
app.engine("handlebars", expresshbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ROUTING & EXPRESS SERVER
var routes = require("./controllers/burgers_controller.js");
    app.use(routes);
    app.listen(PORT, function() {
            console.log("Listening on port: ", PORT);
    });




