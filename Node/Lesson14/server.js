require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/home', (req,res)=>{
    res.render('home', {title:"Home Page"})
})

let todoList = ['buy food', 'watch real madrid', 'cook dinner']
app.get('/todo', (req,res)=>{
    res.render('todo', {todoList})
})

app.post('/todo',(req,res)=>{
    const data = req.body.todoInput
    todoList = [...todoList, data]
    //res.send("ToDo Created YAY!")
    res.redirect('/todo')
})

app.get('/contact',(req,res)=>{
    res.render("contact",  {title:"contact"})
})
app.listen(process.env.PORT, ()=>{
    console.log(`App running on PORT ${process.env.PORT}`)
})