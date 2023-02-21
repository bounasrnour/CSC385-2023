const fs = require('fs')
const rs = fs.createReadStream('./files/dummy.txt', 'utf-8')
const ws = fs.createWriteStream('./files/stream-writer-dummy.txt')

//efficient
rs.on('data', (dataStream) =>{
    ws.write(dataStream);
})

//more efficient
rs.pipe(ws);