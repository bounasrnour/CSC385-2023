const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = (req,res,next) =>{
    const authorizationHeader = req.headers['authorization']

    if(!authorizationHeader){
        return res.sendStatus(401)
    }
    console.log(authorizationHeader)
    const token = authorizationHeader.split(' ')[1]
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN,
        (err,data)=>{
            if(err){
                console.log(err)
              return  res.sendStatus(403) //forbidden
            }
            req.user = data.username;
            next()
        }
    )
}

module.exports = verifyJWT