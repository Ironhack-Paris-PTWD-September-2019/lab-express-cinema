const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.js'); 

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */ 

router.get('/movies', (req, res, next) => {
  Movie.find().then(function(movies){
    console.log('Movies are loaded');
    res.render('movies', {
      movies : movies 
    });
    
  })
  .catch(err=>console.error(err));
  
});


module.exports = router;
