const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Cinema Ironhack' });
});

router.get('/movies', (req, res, next) => {

  Movie
    .find()
    .then(movies => {
      res.render('movies',
        {
          title: 'Cinema Ironhack',
          movies: movies
        })
    })
    .catch(e => console.error(e))

})

router.get('/movies/:id', (req, res, next) => {

  Movie
    .findOne({ "_id": req.params.id })
    .then(movie => {
      res.render('movie',
        {
          title: movie.title,
          movie: movie
        })
    })
    .catch(e => console.error(e))

})

module.exports = router;
