const express = require("express")
const StudentController = require("./controllers/StudentController")
const port = 3000
const app = express()


app.get("/", (req, res)=> {
    res.send("Hello")
})

app.get("/api/v1/students", (req, res)=>{
    const StudentController = require("./controllers/StudentController")
    res.send(StudentController.getStudents())
})

app.get("/api/v1/students/certified", (req, res)=>{
    res.send(StudentController.getCertifiedStudents())
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})