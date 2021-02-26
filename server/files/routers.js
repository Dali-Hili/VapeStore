const express = require("express");
const router = express.Router();
const Controller = require("./controllers.js");

router.get("/products", Controller.findAll);
router.post('/create', Controller.createOne);

module.exports = router;
