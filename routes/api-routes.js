const db = require("../models");

module.exports = function(app) {
  app.get("/api/vote", function(req, res) {
    db.Vote.findAll({}).then(function(Vote) {
      res.json(Vote);
    });
  });

  app.post("/api/vote", function(req, res) {
    // console.log(req.body);
    db.Vote.create({
      email: req.body.email,
      framework: req.body.framework
    }).then(function(Vote) {
      res.json(Vote);
    });
  });
};
