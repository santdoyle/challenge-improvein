const routerMovies = require('express').Router()
const allowAccess = require('../utils/allowAccess')
const controllerMovies = require('../controllers/controllerMovies')

routerMovies.get('/movies', allowAccess, async (req, resp) => {
    try {
        const {gender, order} = req.query
        let moviesList
        if(gender){
            moviesList = await controllerMovies.getMoviesBy(gender, order)

            resp.status(200).json(moviesList)
        }else{
            moviesList = await controllerMovies.getAllMovies()
            resp.status(200).json(moviesList)
        }
    } catch (error) {
        console.log(error)
    }
})

routerMovies.post('/add-movie', allowAccess, async (req, resp) => {
    try {
        if(req.body != ''){
            const newMovie = await controllerMovies.addMovie(req.body)
            resp.status(200).json(newMovie)

        }else{
            resp.json({error: `Movie can't be empty.`})
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = routerMovies