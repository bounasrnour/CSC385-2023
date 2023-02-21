const fs = require('fs')

if(!fs.existsSync('./files1')){
    fs.mkdirSync('./files1',(err)=>{
        if(err) throw err;
    })
}

if(fs.existsSync('./files1')){
    fs.rmdir('./files1',(err)=>{
        if(err) throw err;
    })
}