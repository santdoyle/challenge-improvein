const modelAuth = require('../models/modelAuth')

const Auth = new modelAuth()

module.exports = {
    setAuth: async (...data) => {
        try {
            return await Auth.jwtAuth(data)
        } catch (error) {
            console.log(error)
        }
    },
    refreshToken: async (token) => {
        try {
            return await Auth.refreshToken(token)
        } catch (error) {
            console.log(error)
        }
    }
}