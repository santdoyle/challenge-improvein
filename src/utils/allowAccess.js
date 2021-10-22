const jwt = require('jsonwebtoken')

function allowAccess(req, resp, next){
    try {
        const tokenCookie = req.cookies.token

        if (tokenCookie) {
        
            if (!tokenCookie) return resp.json({ error: 'You need to be loged in.' })
            
            jwt.verify(tokenCookie, 'secretKey', (err, user) => {
                if (err) return resp.json({ error: 'You need to be loged in.' })
                req.user = user
                next()
            })

        } else {
            resp.json({error: 'You need to be loged in.'})
        }
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = allowAccess