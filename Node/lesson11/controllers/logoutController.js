const path = require('path')
const fsPromises = require('fs').promises


const usersDB = {
    users:require('../model/users.json'),
    setUsers:function(data){this.users = data}
}

const logoutUser =  async (req,res)=>{
    //we should also delete the access token from the client
    //but we can't do this here as this is the backend :(

    const cookies = req.cookies
    if(!cookies?.jwt){
        return res.sendStatus(204) // mo content to send back 
    }
    const refreshToken = cookies.jwt
    

    const findUser = usersDB.users.find(tkn => tkn.refreshToken  === refreshToken)

    if(!findUser){
        res.clearCookie('jwt', {httpOnly:true, maxAge:24*60*60*100})
        return res.sendStatus(204) //success but no content

    }

   //delete from db
   const otherUsers = usersDB.users.filter(usr=> usr.refreshToken !== findUser.refreshToken)
   const currentUser = {...findUser, refreshToken:''}
   usersDB.setUsers([...otherUsers,currentUser])

   await fsPromises.writeFile(
    path.join(__dirname, '..', 'model', 'users.json'),
    JSON.stringify(usersDB.users)
   )

   res.clearCookie('jwt', {httpOnly:true, maxAge:24*60*60*100})
   res.sendStatus(203)

}

module.exports = {logoutUser}