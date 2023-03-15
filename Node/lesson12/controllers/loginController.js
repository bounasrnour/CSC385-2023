const path = require('path')
const fsPromises = require('fs').promises
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const usersDB = {
    users:require('../model/users.json'),
    setUsers:function(data){this.users = data}
}

const loginUser = async(req,res)=>{
    const {username, password} = req.body

    if(!username || !password){
        return res.status(400).json({"message":"username and password cannot be empty"})
    }

    const findUser = usersDB.users.find(usr => usr.username  === username)

    if(!findUser){
        return res.sendStatus(401) //unauth
    }

    const checkPassword = await bcrypt.compare(password, findUser.password)
    if(checkPassword){
        const role = Object.values(findUser.role)
        const accessToken = jwt.sign(
        {
            "userInfo":
            {
                "username": findUser.username,
                "role":role
            }
        },
        process.env.ACCESS_TOKEN,
        {expiresIn:'1d'}
        )

        const refreshToken = jwt.sign({
            "username": findUser.username
        },
        process.env.REFRESH_TOKEN,
        {expiresIn:'1d'}
        )

        const otherUsers = usersDB.users.filter(usr => usr.username !== findUser.username)
        const currentUser = {...findUser, refreshToken}
        usersDB.setUsers([...otherUsers, currentUser])

        await fsPromises.writeFile(
            path.join(__dirname, "..", 'model','users.json'),
            JSON.stringify(usersDB.users)
        )
        res.cookie('jwt', refreshToken, {httpOnly:true, maxAge:24*60*60*1000})
        res.json({accessToken})
    }
    else{
        res.sendStatus(401);
        
    }
}

module.exports = {
    loginUser
}