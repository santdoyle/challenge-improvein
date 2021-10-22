const schemaMovies = require('./schema/schemaMovies')

class Movies{
    async addNewMovie(data){
        try {
            
            const newMovie = await schemaMovies.create({
                title: data.title,
                actors: JSON.stringify(data.actors),
                director: data.director,
                gender: data.gender
            })

            if(newMovie._id) return {message: 'Movie added correctly'}
            else return {message: 'An error occurred adding the movie, try again.'}

        } catch (error) {
            console.log(error)
        }
        
    }

    async getOneMovie(data){
        try {

            const moviesList = await schemaMovies.find({gender: data[0]}).sort({gender: data[1]}).exec()

            if(moviesList.length > 0){
                return moviesList
            }else{
                return {message: 'There are no movies on that gender.'}
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(){
        try {
            const allMovies = await schemaMovies.find()

            if(allMovies.length > 0){
                return allMovies
            }else{
                return {message: 'There are no movies available.'}
            }

        } catch (error) {
            
        }

    }
}

module.exports = Movies