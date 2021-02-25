const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database/connection.js");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
