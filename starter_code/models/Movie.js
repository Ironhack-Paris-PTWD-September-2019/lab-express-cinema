const mongoose = require ("mangoose");
const express = require ("express")
const router = express.Router();
const movie = require(" ") // route à définir
const Schema = mongoose.Schema;
const moviesSchema = new Schema ({
    title: String,
    director: String,
    stars: [String],
    description: String,
    cover: String, 
    description: String,
    sessions: [String]
})

const movie = mongoose.model("movie", moviesSchema);
module.exports = movie;