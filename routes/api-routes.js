const db = require("../models");

module.exports = function(app) {
  app.get("/api/votes", function(req, res) {
    db.Vote.findAll({}).then(function(votes) {
      res.json(votes);
    });
  });
  app.post("/api/vote", function(req, res) {
    db.Vote.create({
      email: req.body.email,
      framework: req.body.framework
    }).then(function(vote) {
      res.json(vote);
    });
  });
};
