const express = require('express');
const router  = express.Router();
const movie = require( "../models/movie" );

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  movie.find()
        .then(movie => res.render('movies', {movie}))
        .catch(error => console.log('Error while getting movies from the DB: ', error))
});

router.get('/movies/:movieId', (req, res, next) => {
  movie.findOne({'_id': req.params.movieId})
    .then(movie => {
      res.render('movie-details', {movie});
    })
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
    })
});

module.exports = router;
