const Router = require("express").Router();
const PopulationRouter = require("./populationRoutes");

Router.use("/population", PopulationRouter);

module.exports = Router;
