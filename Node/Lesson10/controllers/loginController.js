const path = require('path')
const fsPromises = require('fs').promises
const bcrypt = require('bcrypt')

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
        res.json({"message":`user ${username} is logged in!`})
    }
    else{
        res.sendStatus(401);
    }
}

module.exports = {
    loginUser
}