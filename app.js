const express = require('express');
const cors = require("cors");
const app = express();


app.use(cors());

app.use(express.json());

//db connection

const conn = require("./db/conn");

conn();

app.listen(3000, () => {
    console.log("server on")
})

