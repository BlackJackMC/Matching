const express = require("express");
const router = express.Router();

const authRouter = require("./router/auth");
const userRouter = require("./router/user");
const sessionRouter = require("./router/session");
const invitationRouter = require("./router/invitation");

router.use(authRouter);
router.use(userRouter);
router.use(sessionRouter);
router.use(invitationRouter);

module.exports = router;

