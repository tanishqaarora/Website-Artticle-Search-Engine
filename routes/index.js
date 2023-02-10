const express = require('express');
const router = express.Router();

Website = require('../models/website');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {

  let searchText = req.body.searchText;
  let searchType = req.body.searchType;

  if(searchType == 'website'){
    Website.searchWebsites(searchText, function(err, websites){
      console.log(websites);
      if(err){
        console.log(err);
        res.send(err);
      }
      let model = {
        websites: websites.results
      }
      res.render('website_results', model);
    });
  } else if(searchText == 'news'){

  } else {
    res.send('Plearse choose a type');
  }
});

module.exports = router;
