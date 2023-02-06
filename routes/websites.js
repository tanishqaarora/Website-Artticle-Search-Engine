const express = require('express');
const router = express.Router();

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

  website.addWebsite(website, function(err, website) {
    if(err) {
      console.log(err);
      res.send(err);
    }
    res.redirect("/");
  });
});


module.exports = router;
