// TODO 3: Import data students dari folder data/students.js
const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
    index(req, res) {
        // TODO 4: Tampilkan data students
        const data = {
            message: "Show All data students",
            students: students,
        };

        res.json(data);
    }

    store(req, res) {
        // TODO 5: Tambahkan data students
        const data = {
            message: "Create data students",
            students: students,
        };

        const { name } = req.body;

        students.push({
            id: students.length + 1,
            name: name,
        });

        res.json(data);
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
