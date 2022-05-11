const StudentService = require("../services/StudentService")
const Reader = require("../utils/Reader")

module.exports = class StudentController{
    static getStudents(){
        return StudentService.getStudents()
    }

    static getCertifiedStudents(){
        return StudentService.getCertifiedStudents(Reader.readJSONFile("visual_partners.json"))
    }
}