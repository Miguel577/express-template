var express = require('express');
var router = express.Router();
var models = require('../models');
var User = models.User;
var yelp = require('yelp-fusion');

// Search Results/Sorting
var searchQuery = {
  interests:{}
};
var foodResult;
var drinksResult;
var attractionsResult;
var artsResult;
var nightlightResult;
var outdoorResult;
var destinations;



//////////////////////////////// PUBLIC ROUTES ////////////////////////////////
// Users who are not logged in can see these routes
var secret = "wtqzBxeEshphwKaQ1rs9yeHpgwtmAQAfu8qlDtCz1Bwg43KUqKQV1su0Q8hzylf7";
var clientId = "4kl7mYAiWrgK0z90LBTOFA";
var authToken = "3n7o1glnI-XOl5GLmtRoAOD3MKbBqHYI4jdckgU0jQv1jkLQ1wIsDMq1U0Hzc3832nDIpPOgawp-KWztxzPZWwN80dU3fWz1zT5cBpSCAlA4bUK9baF4YKJeciNpWXYx";

var client = yelp.client(authToken);



router.get('/token', function(req, res, next) {
var token = yelp.accessToken(clientId, secret).then(response => {
  var auth_token = response.jsonBody.access_token;
  console.log(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});
  res.send("hi");
});
router.get('/resultsPage', function(req,res){
  res.render('results');
})

router.get('/results', function(req,res){
var location;
if(req.query.location){
   location = req.query.location;
}else{
  location = searchQuery.location;
}
  var promises = [];
  for(var key in searchQuery.interests){
    promises.push(client.search({
    term:searchQuery.interests[key],
    location: location,
    radius:1000,
    open_now: true
  }))
  }
  Promise.all(promises)
    .then(function(response){
      console.log(response[5].jsonBody.businesses)
      foodResult = response[0].jsonBody.businesses;
      drinksResult = response[1].jsonBody.businesses;
      attractionsResult = response[2].jsonBody.businesses;
      artsResult = response[3].jsonBody.businesses;
      nightlightResult = response[4].jsonBody.businesses;
      outdoorResult = response[5].jsonBody.businesses;
      foodResult.sort(function(a,b){
        return a.rating + b.rating;
      })
      drinksResult.sort(function(a,b){
        return a.rating + b.rating;
      })
      attractionsResult.sort(function(a,b){
        return a.rating + b.rating;
      })
      artsResult.sort(function(a,b){
        return a.rating + b.rating;
      })
      nightlightResult.sort(function(a,b){
        return a.rating + b.rating;
      })
      outdoorResult.sort(function(a,b){
        return a.rating + b.rating;
      })
      res.json({
        foods:foodResult,
        drinks:drinksResult,
        attractions:attractionsResult,
        arts:artsResult,
        nightlife:nightlightResult,
        outdoors:outdoorResult
      })
    })
})



///////////////////////////// END OF PUBLIC ROUTES /////////////////////////////

router.get('/search', function(req,res){
  res.render('searchPage');
})

router.get('/', function(req, res){
  res.render('homePage');
})

router.post('/search',function(req,res){
  // Make sure that the names of the inputs are right, check with front end
  searchQuery.location = req.body.location;
  searchQuery.interests.food = req.body.food;
  searchQuery.interests.drinks = req.body.drinks;
  searchQuery.interests.attractions = req.body.attractions;
  searchQuery.interests.arts = req.body.arts;
  searchQuery.interests.nightlife = req.body.nightlife;
  searchQuery.interests.outdoor = req.body.outdoors;

  res.redirect('/resultsPage');

})

router.post('/map', function(req,res){
destinations = req.body.destinations;
res.json(destinations)
})

router.get('/map', function(req,res){
  var json = JSON.parse(destinations);
  console.log("This is json", json);
  res.render('map', {
    start:searchQuery.location,
    destinations:json
  })
})

// router.get('/travel', function(req, res, next) {
//   res.render('travel');
// });
// router.get('/paths', function(req, res, next) {
//   res.render('paths');
// });
// router.get('/vacationHome', function(req, res, next) {
//   res.render('vacationHome');
// });
// router.get('/mapVacation', function(req, res, next) {
//   res.render('mapVacation');
// });
// router.get('/textVacation', function(req, res, next) {
//   res.render('textVacation');
// });
// router.get('/more-wayfares', function(req, res, next) {
//   res.render('more-wayfares');
// });

//////////////////////////////// PRIVATE ROUTES ////////////////////////////////
// Only logged in users can see these routes

// router.get('/protected', function(req, res, next) {
//   res.render('protectedRoute', {
//     username: req.user.username,
//   });
// });

///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
