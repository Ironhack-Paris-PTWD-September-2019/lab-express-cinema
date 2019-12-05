const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find().then(function(movies){
    console.log("Mes films de la DB sont",movies)
    res.render('movies', {
      movies:movies
    });
  }).catch( err => console.error(err));
  

});

router.get('/movies/:id',function(req,res,next){
  Movie.find({_id:req.params.id}).then(function(movies){
    let movie = movies [0];

    res.render("moviedetails", {
      movie:movie
    })
  }).catch(err => console.error(err))
  
})

module.exports = router;
