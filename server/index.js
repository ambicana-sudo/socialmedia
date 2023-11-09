const express = require("express");
const app = express();
require("dotenv").config();
const port = 5000;

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const connect = require("./db/connect");
connect();

const registerRouter = require("./Routes/registerRouter");

app.use(registerRouter)

app.listen(process.env.PORT, () => {
    console.log(`Food Server listening on port ${process.env.PORT}`);
  });