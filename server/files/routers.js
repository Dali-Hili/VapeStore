const express = require("express");
const router = express.Router();
const Controller = require("./controllers.js");

router.get("/products", Controller.findAll);

module.exports = router;
