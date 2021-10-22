const schemaTvshows = require('./schema/schemaTvShows')

class Tvshows{
    async addTvShow(data){
        const tvShow = await schemaTvshows.create({
            title: data.title,
            actors: data.actors,
            director: data.director,
            seasons: data.seasons
        })

        if(tvShow._id){
            return {message: 'Tv Show added correctly.'}
        }else{
            return {error: 'An error ocurred adding the tv show.'}
        }
    }

    async getAll(){
        try {
            const getAll = await schemaTvshows.find()

            if(getAll.length > 0){
                return getAll
            }else{
                return {error: `TV shows list it's empty.`}
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getOne(data){
        try {
            const getOne = await schemaTvshows.find({tvshow: data.name})

            if(data.season & !data.chapter){
                const arr = JSON.parse(getOne[0].seasons)

                return arr[data.season]

            }else if(data.season && data.chapter){
                const c = parseInt(data.chapter) - 1
                const arr = JSON.parse(getOne[0].seasons)

                return arr[data.season][data.chapter][c]
            }else{
                return getOne
            } 
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Tvshows