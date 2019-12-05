const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find().then(function(movies){
    console.log (movies);
    res.render('movies', {
      allmovies:movies
    });
  }).catch(err=>console.error(err)); 
});
router.get('/movies/:movieid', function(req, res, next){
  Movie.findOne ({id : req.params.movieid}).then(function(movies){
    res.render ('movie-details',{
      movie : movie
    });
  }).catch(err=>console.error(err)); 
  res.send('Movie id : ', req.params.movieid); 
});

module.exports = router;