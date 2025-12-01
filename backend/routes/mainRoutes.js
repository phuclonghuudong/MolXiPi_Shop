const express = require("express");
const userRoutes = require("./userRoutes");

const mainRouter = express.Router();

mainRouter.use("/api/users", userRoutes);

module.exports = mainRouter;
