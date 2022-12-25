const express = require('express');
const cors = require("cors");
const app = express();
const routes = require("./routes/router");


app.use(cors());

app.use(express.json());

app.use("/api",routes);

//db connection

const conn = require("./db/conn");

conn();

app.listen(3000, () => {
    console.log("server on")
})

