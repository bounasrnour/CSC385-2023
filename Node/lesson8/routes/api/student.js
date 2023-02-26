const express = require('express')
const router = express.Router()
const path = require('path')

const data = {}
data.students = require('../../data/student.json')

router.route('/')
    .get((req,res) =>{
        res.json(data.students)
    })
    .post((req,res)=>{
        res.json({
            "firstName":req.body.firstName,
            "lastName": req.body.lastName,
            "grade": req.body.grade
        })
    })
    .delete((req,res)=>{
        res.json(
            {"id": res.body.id}
        )
    })
    .put((req,res)=>{
        res.json({
            "firstName":req.body.firstName,
            "lastName": req.body.lastName,
            "grade": req.body.grade
        })
    });

    router.route('/:id')
        .get((req,res)=>{
            res.json(req.params.id)
        })
module.exports = router
