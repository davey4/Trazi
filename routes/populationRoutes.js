const Router = require("express").Router();
const controller = require("../controllers/populationController");

Router.get("/state/:state/city/:city", controller.getOne);
Router.put("/state/:state/city/:city", controller.putOne);

module.exports = Router;
