//import express from "express";

const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/StudentController");

router.get("/", (req, res) => {
    res.send("Hello World from Express");
});

// students routes
router.get("/students", StudentController.index);

router.post("/students", StudentController.store);

router.put("/students/:id", StudentController.update);

router.delete("/students/:id", StudentController.destroy);

router.get("/students/:id", StudentController.show);

module.exports = router;
