const express = require('express');
const router  = express.Router();
const Movie= require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find().then(function(movies){
    console.log('les films de la DB sont :', movies);
    res.render('movies', {
      movies:movies
    });

  }).catch(err=>console.error(err))
 
});

router.get('/movies/:movieid', function(req, res, next){
  Movie.find({_id:req.params.movieid}).then(function(movie) {
    
    res.render('MovieDetails', {
      movie:movie[0]
      
    });
  }).catch(err=>console.error(err))
  
});

module.exports = router;
