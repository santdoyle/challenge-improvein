const mongoose = require('mongoose')

const collectionTvshows = 'tvshows'

const schemaTvshows = new mongoose.Schema({
    title: {type: String, required: true},
    actors: {type: [String], required: true},
    director: {type: String, required: true},
    seasons: {type: [String], required: true}
})

module.exports = mongoose.model(collectionTvshows, schemaTvshows)