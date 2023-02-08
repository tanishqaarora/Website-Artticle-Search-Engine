const express = require('express');
const router = express.Router();

const Website = require('../models/website');

/* GET websites listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
  res.render('add_website');
})

router.post('/add', function(req, res, next) {
  let website = new Website();
  website.title = req.body.title;
  website.url = req.body.url;
  website.description = req.body.description;

  Website.addWebsite(website, function(err, website) {
    if(err) {
      console.log("getting an error...", err);
      // return res.send(err);
    }
    return res.redirect("/");
  });
});


module.exports = router;
