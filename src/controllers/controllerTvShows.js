const modelTvShows = require('../models/modelTvShows')

const TvShows = new modelTvShows()

module.exports = {
    addTvShow: async (data) => {
        try {
           return await TvShows.addTvShow(data)
        } catch (error) {
            console.log(error)
        }
    },
    getAllTvShows: async () =>{
        try {
            return await TvShows.getAll()
         } catch (error) {
             console.log(error)
         }
    },
    getOne: async (data) => {
        try {
            return await TvShows.getOne(data)
         } catch (error) {
             console.log(error)
         }
    }
}