const path = require('path')
const fsPromises = require('fs').promises
const bcrypt = require('bcrypt')

const usersDB = {
    users:require('../model/users.json'),
    setUsers:function(data){this.users = data}
}

const createNewUser = async (req,res) =>{
    const {username, password} = req.body
    if(!username || !password){
        return res.status(400).json({"message":"username and pass are required!"})
    }
    const duplicate = usersDB.users.find(usr => usr.username  === username)
    if(duplicate){
        //conflict
        return res.status(409).json({"message":"User already exists"})
    }
    try{
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = {
            "username":username,
            "password":hashedPassword
        }
        usersDB.setUsers([...usersDB.users, newUser])
        
        await fsPromises.writeFile(
            path.join(__dirname, "..","model","users.json"),
            JSON.stringify(usersDB.users)
            )
        res.status(201).json({"message":`user ${username} created`})
    }catch(err){
        res.status(500).json({"message":err.message})
    }

}

module.exports = {
    createNewUser,
}