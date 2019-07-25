const express = require("express");

const  app = express();

app.get("/users", (req, res) => {
  res.sendFile(__dirname + "/students.json");
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})


app.listen(7000, () => {
 console.log("Server running on port 7000")
})