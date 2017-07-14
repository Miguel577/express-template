var express = require('express');
var router = express.Router();
var models = require('../models');
var User = models.User;

//////////////////////////////// PUBLIC ROUTES ////////////////////////////////
// Users who are not logged in can see these routes

router.get('/', function(req, res, next) {
  res.render('home');
});

///////////////////////////// END OF PUBLIC ROUTES /////////////////////////////

// router.use(function(req, res, next){
//   if (!req.user) {
//     res.redirect('/login');
//   } else {
//     return next();
//   }
// });

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/travel', function(req, res, next) {
  res.render('travel');
});


//////////////////////////////// PRIVATE ROUTES ////////////////////////////////
// Only logged in users can see these routes

router.get('/login', function(req, res, next) {
  res.render('login');
});


///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
