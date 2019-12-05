const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find().then(function(movies) {
      res.render('movies', { 
        movies:movies
      });
    }).catch(err=>console.error(err))

});

//router.get('/movies/:moviesId', function(req, res, next) {
//  Moovie.find({'_id': req.params.movieId})
//    .then(theMovie => {
  //    res.render('moviesDetails', { movie:movie[0]});
//})
//    .catch(error => {
//      console.log('Error movie details:', error);
//});

module.exports = router;

