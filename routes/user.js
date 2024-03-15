const userRouter = require("express").Router();
console.log("abc");
const { getUsers, addUser } = require("../service/user-service");

// userRouter.get("/login", (req, res) => {});

userRouter.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});
userRouter.post("/signup", async (req, res) => {
  const newUserData = req.body;
  const result = await addUser(newUserData);
  // res.json(result);
});
userRouter.post("/changeUserName", async (req, res) => {
  const data = req.body;
  const result = await changeUserNameDB(data);
});

userRouter.post("/deleteUser", async (req, res) => {
  const data = req.body;
  const result = await deleteUserDB(data);
});

userRouter.post("/createTable", async (req, res) => {
  const result = await dbqurey(req.body);
});

module.exports = userRouter;
