
const data = {
    students:require('../model/students.json'),
    setStudentsData : (data)=>{this.students = data}
}

const getAllStudents = (req,res) =>{
    res.json(data.students)
}

function createNewStudent(req,res){
    const newStudent={
        id:data.students[data.students.length - 1].id + 1 || 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        grade: req.body.grade
    }

    if(!newStudent.firstName | !newStudent.lastName || !newStudent.grade){
        return res.status(404).json({"message":"firstname, lastname and grade are required!!"})
        
    }

    data.students = [...data.students, newStudent]
    res.status(201).json(data.students)
}

const updateStudent = (req,res) =>{
    const student = data.students.find(std => std.id === parseInt(req.body.id))
    if(!student){
      return  res.status(400).json({"message":"student not found in db"})
    }
    if(req.body.firstName){
        student.firstName = req.body.firstName
    }
    if(req.body.lastName){
        student.lastName = req.body.lastName;
    }
    if(req.body.grade){
        student.grade = req.body.grade;
    }
    //const filterStudents = data.students.filter(std => std.id !== data.students.id)
   // data.students = [...data.students, student]
    res.json(data.students)

}

const deleteStudent = (req,res) =>{
    const student = data.students.find(std => std.id === parseInt(req.body.id))
    if(!student){
      return  res.status(400).json({"message":"student not found in db"})
    }
    const filterStudents = data.students.filter(std => std.id !== student.id)
    console.log(filterStudents)
   // data.setStudentsData(filterStudents)
   data.students = filterStudents
    res.json(data.students)

}

const getStudent = (req,res)=>{
    const student = data.students.find(std => std.id === parseInt(req.body.id))
    if(!student){
      return  res.status(400).json({"message":"student not found in db"})
    }
    res.json(student)
}


module.exports = {
    getAllStudents,
    createNewStudent,
    getStudent,
    updateStudent,
    deleteStudent
}