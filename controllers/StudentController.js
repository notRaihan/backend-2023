// import model Student
const Student = require("../models/Student");

// Membuat Class StudentController
class StudentController {
    async index(req, res) {
        try {
            const students = await Student.all();
            const data = {
                message: "Show All data students",
                students: students,
            };

            res.json(data);
        } catch (error) {
            console.log(error);
            res.json({
                message: error.sqlMessage,
            });
        }
    }

    async store(req, res) {
        try {
            const data = req.body;
            const student = await Student.create(data);
            const result = {
                message: "Insert data students",
                student: student,
            };

            res.json(result);
        } catch (error) {
            console.log(error);
            res.json({
                message: error.sqlMessage,
            });
        }
    }

    async update(req, res) {
        const { id } = req.params;

        // check if student exists
        const student = await Student.find(id);
        if (!student) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        try {
            const data = req.body;
            const student = await Student.update(id, data);
            const result = {
                message: "Update data students",
                student: student,
            };

            res.json(result);
        } catch (error) {
            console.log(error);
            res.json({
                message: error.sqlMessage,
            });
        }
    }

    destroy(req, res) {
        const { id } = req.params;

        // check if student exists
        const student = Student.find(id);
        if (!student) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        try {
            Student.destroy(id);
            const result = {
                message: "Delete data students",
                student: student,
            };

            res.json(result);
        } catch (error) {
            console.log(error);
            res.json({
                message: error.sqlMessage,
            });
        }
    }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
