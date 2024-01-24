if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express');
const Controller = require('./controllers/controller');
const app = express()
const port = 3000
const cors = require("cors");
const errHandle = require("./middlewares/errorHandlers");
app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/register", Controller.register)
app.post("/login", Controller.login)

app.use(errHandle)

module.exports = app