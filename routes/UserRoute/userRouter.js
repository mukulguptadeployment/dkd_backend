const express = require("express");

const app = express.Router();

app.get("/", (req, res) => {
  res.json({ message: "User router is working" });
});

app.post("/login", (req, res) => {
    
});

module.exports = app;
