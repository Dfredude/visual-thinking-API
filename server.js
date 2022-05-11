const express = require("express")
const port = 3000
const app = express()


app.get("/", (req, res)=> {
    res.send("Hello")
})

app.get("/api/v1/students", (req, res)=>{
    const StudentController = require("./controllers/StudentController")
    res.send(StudentController.getStudents())
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})