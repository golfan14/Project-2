// Requiring our models and passport 
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  // If the user has correct login info, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/user");
  });

  //signing up a new user
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  })

   // Route for logging user out
   app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

// Route for getting some data about our user to be used client side
app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

};
















//API endpoints for appointments 

    //GET user appointments 
    //POST user appointments 
        
//API endpoints for persecriptions 

    //GET scripts
    //POST new scripts 

//API Endpoints for insurance 

    //GET insurance 
    //POST insurance 

//API endpoint for vaccines 
    
    //GET Vaccines 
    //POST vacciene