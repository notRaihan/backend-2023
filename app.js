// import express

const express = require("express");
const app = express();

// import routes
const webRoutes = require("./routes/api");

// use routes
app.use("/", webRoutes);

// listen on port 3000
app.listen(3000, () => console.log("Listening on port 3000"));
