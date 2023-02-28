const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = 5056
app.use((req,res,next)=>{
    console.log(`Method: ${req.method},URL: ${req.url}`)
    next()
})
const origins = {
    origin: [`http://localhost:${PORT}`],
};
app.use(cors(origins))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','home.html'))
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
