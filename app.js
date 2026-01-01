// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node + Docker + Jenkins!");
});

app.listen(3008, () => console.log("Server running on port 3008"));
