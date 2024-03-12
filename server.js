require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { addUser } = require("./route/add-user");
const { getUser } = require("./route/get-user");
const app = express();

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
