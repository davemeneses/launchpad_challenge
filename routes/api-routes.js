const db = require("../models");

module.exports = function(app) {
  // gets all people who have voted
  app.get("/api/vote", function(req, res) {
    db.Vote.findAll({}).then(function(Vote) {
      console.log("find all: ", res.json(Vote));
      res.json(Vote);
    });
  });

  app.post("/api/vote/", function(req, res) {
    // console.log(req.body);
    db.Vote.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(Vote) {
      if (Vote)
        res.json({
          error: 1
        });
      else
        db.Vote.create({
          email: req.body.email,
          framework: req.body.framework
        }).then(function(Vote) {
          res.json({
            error: 0
          });
        });
    });
  });

  // app.get("/frameworks", function(req, res){
  //   axios
  // })
};
