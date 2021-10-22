const schemaUsers = require('./schema/schemaUsers')
const jwt = require('jsonwebtoken')

class Auth{
    async jwtAuth(data){
        try {
            const checkEmail = await schemaUsers.find({email: data[0]})
            if(checkEmail.length > 0 ){
                
                if(checkEmail[0].password === data[1]){

                    const payload = {
                        nombre: checkEmail[0].email,
                    }
    
                    const token = jwt.sign(payload, 'secretKey', {
                        expiresIn: 1000 * 60
                    })

                    return token
                }else{
                    return {error: 'Password is incorrect.'}
                }

            }else{
                return {error: 'Email is not registed.'}
            }
        } catch (error) {
            console.log(error)
        }
    }

    async refreshToken(token){
        try {
            if(token){
                let userData
                jwt.verify(token, 'secretKey', (err, user) => {
                    if (err) return resp.json({ error: 'You must be logged in.' })
                    userData = user
                })

                const newToken =  jwt.sign(userData, 'secretKey')
                
                return newToken
            }else{
                return {error: 'Token doesn t exist.'}
            }

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Auth