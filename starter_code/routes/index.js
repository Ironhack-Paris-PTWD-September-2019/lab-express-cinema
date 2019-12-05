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

/* GET movie details page */ 

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id).then(function(movie){
    console.log('Movie details loaded');
    
    res.render('movie', {
      movie : movie 
    });
    
  })
  .catch(err=>console.error(err));
  
});

module.exports = router;
