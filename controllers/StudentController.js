const StudentService = require("../services/StudentService")

module.exports = class StudentController{
    static getStudents(){
        return StudentService.getStudents()
    }
}