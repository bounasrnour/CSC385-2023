const jwt = require('jsonwebtoken')
require('dotenv').config()

const usersDB = {
    users:require('../model/users.json'),
    setUsers:function(data){this.users = data}
}

const createNewAccessToken = (req,res)=>{
    const cookies = req.cookies
    if(!cookies?.jwt){
        return res.sendStatus(401)
    }
    console.log(cookies.jwt)
    const refreshToken = cookies.jwt
    

    const findUser = usersDB.users.find(tkn => tkn.refreshToken  === refreshToken)

    if(!findUser){
        return res.sendStatus(403) //forbidden
    }

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN,
        (err,data)=>{
            if(err || findUser.username !== data.username){
                return res.sendStatus(403)
            }
            const role = Object.values(findUser.role)
            const accessToken = jwt.sign(
                {
                    "userInfo":
                    {
                        "username":data.username,
                        "role":role
                    }
                },
                process.env.REFRESH_TOKEN,
                {expiresIn: '1d'}
            )

            return res.json({accessToken})
        }
    )
}

module.exports = {createNewAccessToken}