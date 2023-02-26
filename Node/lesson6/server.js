const express = require('express')
const PORT = 5055
const path = require('path')

const app = express()

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/home', (req,res)=>{
   // res.sendFile('./views/home.html', {root:__dirname})
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.get('/about(.html)?', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

app.get('/about-us(.html)?', (req,res)=>{
    res.redirect(301, '/about.html')
})

//chaining
app.get('/chaining', (req,res, next)=>{
    console.log("Hello")
    next()
},(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','about.html'))
})

function chain1(req,res, next){
    console.log("Chain1")
    next()
}
function chain2(req, res){
    console.log("Chain 2")
    res.send("Finished chain 2")
}
app.get('/chaining1', [chain1, chain2])

//all routes
app.get('/*', (req,res)=>{
    res.status(404).sendFile(path.join(__dirname, 'views','404.html'))
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
