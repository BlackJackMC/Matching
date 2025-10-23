const express = require("express");
const sessionRouter = express.Router();

const { create, get_all } = require("../controller/session");

sessionRouter.post("/sessions", create);
sessionRouter.get("/sesions", get_all);

module.exports = sessionRouter;

