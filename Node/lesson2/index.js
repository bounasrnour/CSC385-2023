const fs = require('fs')

fs.readFile('./files/dummy','utf-8' ,(err, data) =>{
    if(err) throw err;
    console.log(data)
})

console.log('hello')