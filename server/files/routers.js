const express = require("express");
const router = express.Router();
const Controller = require("./controllers.js");
const verify = require("./verifyToken.js")
router.get("/users", Controller.findAllusers);
router.post('/create', Controller.createOne);
router.post('/login', Controller.findUser)

//ADMIN
router.get("/products", Controller.findAll);
router.post('/add', Controller.addprod)
router.delete('/delete/id', Controller.deleteOne)
router.put('/update/:id', Controller.update)

module.exports = router;
