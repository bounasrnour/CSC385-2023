const express = require('express')
const router = express.Router()
const studentController = require('../../controllers/studentController')
const ROLES = require('../../config/roles')
const verifyRoles = require('../../middleware/verifyRoles')

router.route('/')
    .get(studentController.getAllStudents)
    .post(verifyRoles(ROLES.admin, ROLES.editor),studentController.createNewStudent)
    .put(verifyRoles(ROLES.admin, ROLES.editor),studentController.updateStudent)
    .delete(verifyRoles(ROLES.admin),studentController.deleteStudent);

router.route('/:id')
    .get(studentController.getStudent)

module.exports = router;