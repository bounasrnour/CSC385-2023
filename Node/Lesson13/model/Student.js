const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    grade:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Student", studentSchema)