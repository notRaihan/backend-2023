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

    update(req, res) {
        // TODO 6: Update data students
        const data = {
            message: "Update data students",
            students: students,
        };

        const { id } = req.params;
        const { name } = req.body;

        students.forEach((student) => {
            if (student.id == id) {
                student.name = name;
            }
        });

        res.json(data);
    }

    destroy(req, res) {
        // TODO 7: Hapus data students
        const data = {
            message: "Delete data students",
            students: students,
        };

        const { id } = req.params;

        students.forEach((student, index) => {
            if (student.id == id) {
                students.splice(index, 1);
            }
        });

        res.json(data);
    }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
