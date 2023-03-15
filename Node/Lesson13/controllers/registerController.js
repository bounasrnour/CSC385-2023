
const bcrypt = require('bcrypt')
const User = require('../model/User')


const createNewUser = async (req,res) =>{
    const {username, password} = req.body
    if(!username || !password){
        return res.status(400).json({"message":"username and pass are required!"})
    }
    const duplicate = await User.findOne({username:username}).exec()
    console.log(duplicate)
    if(duplicate){
        //conflict
        return res.status(409).json({"message":"User already exists"})
    }
    try{
        const hashedPassword = await bcrypt.hash(password, 10)

        //create and store in mongo
        const newUser = User.create({
            "username":username,
            "password":hashedPassword,
        })
        
        console.log(newUser)
        res.status(201).json({"message":`user ${username} created`})
    }catch(err){
        res.status(500).json({"message":err.message})
    }

}

module.exports = {
    createNewUser,
}