const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//connection to the database
mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
