
// var express = require("express");
// var app = express();

// var port = 3306;
var isAuthenticated = require('../config/middleware/isAuthenticated.js')

//homepage 
module.exports = function(app){
    // app.get("/", function(req, res){
    //     res.render("index");
    // })

    app.get("/", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
          res.redirect("index");
        }
        res.render("sign-up");
    });
    
      app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
          res.redirect("index");
        }
        res.render("login");
    });
    
      // Here we've add our isAuthenticated middleware to this route.
      // If a user who is not logged in tries to access this route they will be redirected to the signup page
      app.get("/user", isAuthenticated, function(req, res) {
        res.render("index");
    });
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