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

    /**
     * TODO 1: Buat fungsi untuk insert data.
     * Method menerima parameter data yang akan diinsert.
     * Method mengembalikan data student yang baru diinsert.
     */
    static create(data) {
        return new Promise((resolve, reject) => {
            // add created_at and updated_at
            data.created_at = new Date();
            data.updated_at = new Date();
            const query = "INSERT INTO students SET ?";

            db.query(query, data, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
}

module.exports = Student;
