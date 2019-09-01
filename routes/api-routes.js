const db = require("../models");
// const moment = require('moment')
const axios = require("axios");
let axiosGH = axios.create({
  headers: {
    Authorization: process.env.TOKEN_GHITHUB_ENTERPRISE,
    Accept: "application/vnd.github.v3+json"
  }
});

// console.log("today's date: " + moment())

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

  app.get("/framework/:org/:framework", function(req, res) {
    let reactData = {
      name: "React"
    };
    console.log("params: ", req.params);
    res.send("test");
    axiosGH
      .get(
        `https://api.github.com/repos/${req.param.org}/${req.param.framework}`
      )
      .then(function(starData) {
        reactData.stars = starData.data.stargazers_count;
        axiosGH
          .get(
            `https://api.github.com/repos/${req.param.org}/${req.param.framework}/stats/participation`
          )
          .then(function(commitData) {
            let twoWeekTotal =
              commitData.data.all[commitData.data.all.length - 1] +
              commitData.data.all[commitData.data.all.length - 2];
            reactData.commits = twoWeekTotal;
            axiosGH
              .get(
                `https://api.github.com/search/issues?q=repo:${req.param.org}/${req.param.framework}+type:issue+state:closed`
              )
              .then(function(issueData) {
                reactData.issues = issueData.data.total_count;
                res.json(reactData);
              });
          });
      })
      .catch(function(err) {
        console.log(err);
      });
  });
};
