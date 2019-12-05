const express = require('express');
const router  = express.Router();
const Movies = require(`../models/Movies.js`);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies list page */
router.get('/movies', (req, res, next) => {
  Movies.find()
    .then(movies => {
      console.log(movies);
      res.render('movies', {
        movies: movies
      });
    })
    .catch(err => next(err))
});

/* GET movie details page */
router.get(`/movie/:id`, (req, res, next) => {
  Movies.findOne({"_id": req.params.id})
    .then(movie => {
      console.log(movie);
      res.render(`movie`, {
          movie: movie
      });
    })
    .catch(err => next(err))
})


module.exports = router;
