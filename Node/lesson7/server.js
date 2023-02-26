const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use((req,res,next)=>{
    console.log(`Method: ${req.method},URL: ${req.url}`)
    next()
})
app.use(cors)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','home.html'))
})

app.listen(5056, ()=>{
    console.log("Listening on poer 5056")
})