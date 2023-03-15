require('dotenv').config()
const express = require('express')
const path = require('path')
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const connectDB = require('./config/DBconnection')
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())

app.use(express.static(path.join(__dirname,'public')))

app.use('/register', require('./routes/api/register'))
app.use('/login', require('./routes/api/login'))
app.use('/refresh', require('./routes/api/refresh'))
app.use('/logout', require('./routes/api/logout')
)
app.use(verifyJWT)
app.use('/students', require('./routes/api/students'))


mongoose.connection.once('open', ()=>{
    console.log("Connected to mongodb hurray!!")
    
    app.listen(5055, ()=>{
        console.log("server running...")
    })
})
