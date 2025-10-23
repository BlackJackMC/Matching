const express = require("express");
const userRouter = express.Router();

const { get_all, get_one } = request("../controller/user");

userRouter.get("/users", get_all);
userRouter.get("/users/:userId", get_one);

module.exports = userRouter;

