const verifyRoles = (...roles) =>{
    return (req,res,next)=>{
        if(!req?.role){
            return res.sendStatus(401) //unauth
        }
        const roleArray = [...roles]
        console.log(roleArray)
        console.log(req.role)

        const result = req.role.map(role => roleArray.includes(role)).find(value => value === true)
        
        if(!result){
            res.sendStatus(401)
        }
        next()
    }
}

module.exports = verifyRoles