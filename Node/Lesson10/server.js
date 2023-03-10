const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/students', require('./routes/api/students'))
app.use('/register', require('./routes/api/register'))
app.use('/login', require('./routes/api/login'))

app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.listen(5055, ()=>{
    console.log("server running...")
})