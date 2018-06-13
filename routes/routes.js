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

//routes for CRUD operations 

//appt route
app.get("/user_appt", function(req, res){
  db.Appt.findAll().then(function(data) {
    res.json(data);
  }).catch(function(err) {
    console.log(err);
    res.json(err);
  });
});

app.post("/create_appt", function(req, res){
  db.Appt.findOrCreate({
    date: req.body.date,
    time: req.body.time,
    type: req.body.type,
    reason: req.body.reason
  }).then(function() {
    res.status(201).end();
  }).catch(function(err) {
    console.log(err);
    res.json(err);
  });
});

//meds 
app.get("/user_meds", function(req, res){
  db.Med.findAll({where: {user_id: req.body.user_id}}).then(function(data) {
    res.json(data);
  }).catch(function(err) {
    console.log(err);
    res.json(err);
  });
});

app.post("/new_meds", function(req, res){
  db.Med.create({
    name: req.body.name,
    type: req.body.type,
    condition: req.body.type,
    dose: req.body.type
  }).then(function(){
    res.status(201).end();
  }).catch(function(err){
    console.log(err);
    res.json(err);
  })
})

//history 
app.get("/med_history", function(req, res){
  db.History.findAll({where: {user_id: req.body.user_id}}).then(function(data) {
    res.json(data);
  }).catch(function(err) {
    console.log(err);
    res.json(err);
  });
})

app.post("/med_history", function(req, res){
  db.History.create({
    event: req.body.event,
    date: req.body.date
  }).then(function(err){
    console.log(err);
    res.json(err);
  })
})

//insurance 
app.get("/insurance", function (req, res){
  db.Insurance.findAll({where: {user_id: req.body.user_id}}).then(function(data) {
    res.json(data);
  }).catch(function(err) {
    console.log(err);
    res.json(err);
  });
})

app.post("/insurance", function(req, res){
  db.Insurance.create({
    type: req.body.type,
    carrier: req.body.carrier,
    insured_name: req.body.insured_name,
    id_number: req.body.id_number,
    group_id: req.body.group_id,
    effective_date: req.bod.effective_date
  }).then(function(err){
    console.log(err);
    res.json(err);
  })
})