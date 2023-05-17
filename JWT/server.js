require('dotenv').config()
const express = require('express')
const session = require('express-session')
const connectToMongoDB = require('./config/connection')
const verifyLoggedIn = require('./middlewares/verifyLogin')


const app = express()

// session middleware
app.use(session({
    secret: process.env.SESSION_TOKEN,
    resave: false,
    saveUninitialized: false,
}));

// config
connectToMongoDB()

// view engine
app.set('view engine', 'ejs')

// static
app.use(express.static('public'))

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(verifyLoggedIn)

app.use('/', require('./routes/home'))
app.use('/login', require('./routes/login'))
app.use('/register', require('./routes/register'))
app.use('/about', require('./routes/about'))
app.use('/contact', require('./routes/contact'))
app.use('/logout', require('./routes/logout'))

app.listen(process.env.PORT, ()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`)
})