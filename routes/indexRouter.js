const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.getMessages);
indexRouter.get("/new", indexController.getForm);
indexRouter.post("/new", indexController.postForm);
module.exports = indexRouter;