const express = require('express')
const App = express()
const cookieParser = require('cookie-parser')

//.env configuration file
const {config} = require('./config')

//MongoDB configuration file
require('./src/models/dbConfig')

//Router imports
const routerAuth = require('./src/routers/routerAuth')
const routerMovies = require('./src/routers/routerMovies')
const routerTvShows = require('./src/routers/routerTvShows')

//Middlewares
App.use(express.urlencoded({extended: true}))
App.use(express.json())
App.use(cookieParser())
App.use(routerAuth)
App.use(routerMovies)
App.use(routerTvShows)

const server = App.listen(config.PORT, () => {
    console.log(`Working server on: ${server.address().port}`)
})