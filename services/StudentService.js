module.exports = class StudentService{
    static getStudents(){
        const Reader = require("../utils/Reader")
        return Reader.readJSONFile("visual_partners.json")
    }
}