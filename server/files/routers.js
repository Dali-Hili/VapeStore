const express = require("express");
const router = express.Router();
const Controller = require("./controllers.js");
const verify = require("./verifyToken.js")
router.get("/products", Controller.findAll);
router.get("/users", Controller.findAllusers);
router.post('/create', Controller.createOne);
router.post('/login', Controller.findUser)

module.exports = router;
