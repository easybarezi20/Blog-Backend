//import dotenv
require("dotenv").config()

const { PORT } = process.env;

//import express
const express = require("express");
const app = express();

//import mongodb connection
require("./config/db.connection");

app.use(express.json());

//import morgan and cors
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//test route
app.get("/", (req, res) => {
    res.send("sanity check")
})

//listen route 
app.listen(process.env.PORT || 4000, () => {
    console.log(`Listening on port ${PORT}`);
})

