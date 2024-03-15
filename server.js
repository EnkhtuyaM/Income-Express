const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// const { addUser } = require("./route/add-user");
// const { getUser } = require("./route/get-user");
const userRouter = require("./routes/user.js");
const app = express();

// const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// router.post("/add-user", addUser);
// router.get("/get-users", getUser);

// app.use(router);

app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
