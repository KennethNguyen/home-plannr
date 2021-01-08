const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(8000, (req, res) => console.log("Listening on Port 8000!"));
