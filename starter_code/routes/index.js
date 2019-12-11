const express = require('express');
const router  = express.Router();
const Movie = require('../models/movies'); 

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies',(req, res, next)=>{
  Movie.find().then(function(moviesFromDb){
    console.log('movies',moviesFromDb)
    res.render('movies', {
      allMovies: moviesFromDb,
    
    });
  }).catch(err =>console.error(err));
});

router.get('/movies/:id', function(req, res, next){
  Movie.findById(req.params.id)
  .then(theMovie =>{
    res.render('movie-details',{movie : theMovie})
  })
.catch(err =>console.error(err));
});


module.exports = router;
