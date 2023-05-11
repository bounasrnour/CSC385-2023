const express = require('express')

const app = express()


app.get('/home', (req,res)=>{
    res.send({"result":"hello world"})
})

app.listen(5000, ()=>{
    console.log('listening on port 5000')
})