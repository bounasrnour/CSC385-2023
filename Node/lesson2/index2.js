const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'dummy.txt'),'utf-8' ,(err, data) =>{
    if(err) throw err;
    console.log(data)
})

console.log('hello')

fs.writeFile(path.join(__dirname, 'files', 'dummywrite.txt'), "hello world", (err)=>{
    if(err) throw err;
    console.log("write completed")
})

fs.appendFile(path.join(__dirname, 'files', 'dummyappend.txt'), "hello world", (err)=>{
    if(err) throw err;
    console.log("append completed")
})

fs.rename(path.join(__dirname, 'files', 'dummy.txt'), path.join(__dirname, 'files', 'newdummy.txt'), (err)=>{
    if(err) throw err;
    console.log("rename completed")
})

process.on('uncaughtException', err=>{
    console.error(`There was an error ${err}`)
    process.exit();
})
