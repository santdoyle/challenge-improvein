const mongoose = require('mongoose')
const {config} = require('../../config')

let rpta = mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => {
    console.log(err)
})

