const routerAuth = require('express').Router()
const controllerAuth = require('../controllers/controllerAuth')


routerAuth.post('/login-jwt', async (req, resp, next) => {
    try {
        const {email, password} = req.body

        if(email != '' && password != ''){
            const login = await controllerAuth.setAuth(email, password)
            
            if(login.error){
                resp.status(500).json(login)
            }else{

                resp.cookie('token', login, {
                    maxAge: 1000 * 60,
                    secure: false,
                    httpOnly: true,
                });

                resp.status(200).json({message: 'You are logged in.'})
            }

        }else{
            resp.status(500).json({
                error: 'Email and password fields cannot be empty.'
            })
        }
    } catch (error) {
        console.log(error)
    }

})

routerAuth.post('/refresh-token', async (req, resp) => {
    try {
        const {token} = req.cookies

        if(token){
            const newToken = await controllerAuth.refreshToken(token)
            
            resp.cookie('token', newToken, {
                maxAge: 1000 * 60,
                secure: false,
                httpOnly: true,
            });

            resp.status(200).json({message: 'Token updated correctly.'})
        }else{
            resp.status(500).json({error: `Token doesn't exist.`})
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = routerAuth