const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allTheMoviesFromDB => {
      console.log('Retrieved movies from DB:', allTheMoviesFromDB);
      res.render('movies', { movies: allTheMoviesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

/* GET movie details page */
router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovie => {
      console.log('Movie details');
      res.render('movie-details', { movie: theMovie });
  })
  .catch(error => {
    console.log('Error while retrieving movie details: ', error);
  })
});


module.exports = router;