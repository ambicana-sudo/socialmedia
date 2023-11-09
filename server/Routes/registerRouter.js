const { Router } = require("express");
const app = Router();

const registerController = require("../Controllers/registerController");


app.post("/register", registerController.registerUser);

module.exports = app;