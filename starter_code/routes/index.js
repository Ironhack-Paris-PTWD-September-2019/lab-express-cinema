const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(allMoviesFromDB => {
    res.render('movies', {movies: allMoviesFromDB});
  })
  .catch(error => {
    console.log('Error while getting the movies from the DB:', error);
  })
});

/* GET details page */
router.get('/movies/:id', (req, res, next) => {
  Movie.findOne({'_id': req.params.id})
    .then(theMovie => {
      res.render('movie-details', { movie: theMovie });
    })
    .catch(error => {
      console.log('Error while retrieving the book details: ', error);
    })
});

module.exports = router;
