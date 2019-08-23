const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
