const express = require("express");
const bodyParser = require("body-parser");
var db = require("./database.js");
const { json } = require("body-parser");
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the english backend application." });
});

app.get("/api/:id", (req, res) => {
  var id = req.params.id;
  var sql = "select * from Post where country=?";
  var params = [id];

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json({
        "message":"success",
        "data":rows
    })
  });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});