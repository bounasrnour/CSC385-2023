const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises
const PORT = process.env.PORT || 5056

async function serveFile(filePath, ContentType, res)
{
    try
    {
        const rawData = await fsPromises.readFile(filePath, !ContentType.includes('image')? 'utf-8':'')
        const data = ContentType === 'application/json'?JSON.parse(rawData):rawData
        res.writeHead(filePath.includes('404.html')? 404: 200, {"Content-Type":ContentType})
        res.end(ContentType === 'application/json'? JSON.stringify(data):data)
    }
    catch(err)
    {
        console.log(err)
        res.statusCode = 500
        res.end()
    }
}
const server = http.createServer((req,res) =>{
    console.log(req.url, req.method)

    let filePath;

   const fileExtension = path.extname(req.url)
    let ContentType;

   switch(fileExtension){
    case '.html':
        ContentType = 'text/html'
        break;
    case '.css':
        ContentType = 'text/css'
        break;
    case '.js':
        ContentType = 'text/js'
        break;
    case '.png':
        ContentType = 'image/png'
        break;
    case '.jpeg':
        ContentType = 'image/jpeg'
        break;
    case '.txt':
        ContentType = 'text/plain'
        break;
    case '.json':
        ContentType = 'application/json'
        break;
    default:
        ContentType = 'text/html'
   }

   if(ContentType === 'text/html' && req.url === '/')
   {
        filePath = path.join(__dirname, 'views', 'index.html')
   }
   else if(ContentType === 'text/html' && req.url.slice(-1) ==='/')
   {
        filePath = path.join(__dirname, 'views', req.url, 'index.html')
   }
   else if(ContentType === 'text/html')
   {
        filePath = path.join(__dirname, 'views', req.url)
   }
   else
   {
        filePath = path.join(__dirname, req.url)
   }
   
   if(!fileExtension && req.url.slice(-1) !=='/'){
    filePath += '.html'
   }

   const fileExists = fs.existsSync(filePath);

   if(fileExists)
   {
    serveFile(filePath, ContentType, res)
   }
   else
   {
    switch(path.parse(filePath).base){
        case 'old-index.html':
            res.writeHead(301, {
                'Location':'/new-index.html'
            })
            res.end()
            break;
        default:
          serveFile(path.join(__dirname, 'views','404.html'), 'text/html',res)
    }
   }
})

server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})

