const routerTvShows = require('express').Router()
const controllerTvShows = require('../controllers/controllerTvShows')
const allowAccess = require('../utils/allowAccess')

routerTvShows.get('/tv-shows', allowAccess, async (req, resp) => {
    try {
        
        const tvShows = await controllerTvShows.getOne(req.query)

        resp.status(200).json(tvShows)
        

    } catch (error) {
        console.log(error)
    }
})

routerTvShows.post('/add-tvshow', allowAccess, async (req, resp) => {
    try {
        if(req.body != ''){
            const tvShows = await controllerTvShows.addTvShow(req.body)


            resp.status(200).json(tvShows)
        }else{
            resp.status(500).json({error: 'TV Show information, can not be empty.'})
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = routerTvShows