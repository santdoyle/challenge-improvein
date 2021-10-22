const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env')
})

const config = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
}

module.exports = {config}