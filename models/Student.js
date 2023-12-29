// import database
const db = require("../config/database");

// Membuat Class Student
class Student {
    /* 
        Membuat method untuk menampilkan semua data student
        Method ini menerima parameter berupa callback function
    */
    static all() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM students";

            db.query(query, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

    /*
        Membuat method untuk menampilkan satu data student
        Method ini menerima parameter berupa callback function
    */
    static find(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM students WHERE id = ?";

            db.query(query, id, (err, results) => {
                if (err) reject(err);

                resolve(results[0]);
            });
        });
    }

    static async create(data) {
        // insert to database
        const insertToDatabase = await new Promise((resolve, reject) => {
            const query = "INSERT INTO students SET ?";

            // set created_at and updated_at to current time
            data.created_at = new Date();
            data.updated_at = new Date();

            db.query(query, data, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });

        // get data student yang baru diinsert
        return await Student.find(insertToDatabase.insertId);
    }

    static async update(id, data) {
        // update to database
        const updateToDatabase = await new Promise((resolve, reject) => {
            const query = "UPDATE students SET ? WHERE id = ?";

            // set updated_at to current time
            data.updated_at = new Date();

            db.query(query, [data, id], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
        // get data student yang baru diupdate
        return await Student.find(id);
    }

    static async destroy(id) {
        // delete to database
        const deleteToDatabase = await new Promise((resolve, reject) => {
            const query = "DELETE FROM students WHERE id = ?";

            db.query(query, id, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });

        // get data student yang baru diupdate
        return await Student.find(id);
    }
}

module.exports = Student;
