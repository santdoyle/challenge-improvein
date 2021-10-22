const mongoose = require('mongoose')

const collectionMovies = 'Movies'

const schemaMovies = new mongoose.Schema({
    title: {type: String, required: true},
    actors: {type: String, required: true},
    director: {type: String, required: true},
    gender: {type: String, required: true}
})

module.exports = mongoose.model(collectionMovies, schemaMovies)