
// var express = require("express");
// var app = express();

// var port = 3306;


//homepage 
module.exports = function(app){
    app.get("/", function(req, res){
        res.render("login");
    })

    app.get("/home", function(req, res){
        res.render("index")
    })
}


//API endpoints for appointments 

    //GET user appointments 
    //POST user appointments 
        
//API endpoints for ?

    //GET alergies 
    //POST new allergies 

//API Endpoints for ?

    //GET vaccinations 
    //POST vacciantions 