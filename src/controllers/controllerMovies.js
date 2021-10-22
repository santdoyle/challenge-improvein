const modelMovies = require('../models/modelMovies')

const Movies = new modelMovies()

module.exports = {
    addMovie: async (data) => {
        try {
            return await Movies.addNewMovie(data)
        } catch (error) {
            console.log(error)
        }
    },
    getMoviesBy: async (...data) => {
        try {
            return await Movies.getOneMovie(data)
        } catch (error) {
            console.log(error)
        }
    },
    getAllMovies: async () => {
        try {
            return await Movies.getAll()
        } catch (error) {
            console.log(error)
        }
    }
}