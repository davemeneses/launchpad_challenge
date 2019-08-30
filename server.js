//Express is the server framework when working with Node
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

const db = require("./models");

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "./client/build/index.html"));
});

require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on PORT:", PORT);
  });
});
