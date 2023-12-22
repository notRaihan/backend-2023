const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// destructuring env
const { DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, DB_DATABASE } = process.env;

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

// connect to database
// parameter pertama adalah host, parameter kedua adalah callback function

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
});

module.exports = db;
