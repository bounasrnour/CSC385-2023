const fsPromises = require('fs').promises
const path = require('path')


const fileOperations = async() =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','dummy.txt','utf-8'))
        console.log(data);
    }
    catch(err){
        console.error(err)
    }
}
