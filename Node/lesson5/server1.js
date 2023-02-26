const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises
const PORT = process.env.PORT || 5056


const server = http.createServer((req,res) =>{
    console.log(req.url, req.method)

    let filePath;

    if(req.url === '/' || req.url === 'index.html'){
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')
        filePath = path.join(__dirname, 'views', 'index.html')
        fs.readFile(filePath, 'utf-8', (err, data)=>{
            console.log(filePath)
            res.end(data)
           
        })
    }
})

server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})

