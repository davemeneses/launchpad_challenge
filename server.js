const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const db = require("./models");
// from routes
// const db = require("../models");
// const axios = require("axios");
// let axiosGH = axios.create({
//   headers: {
//     Authorization: process.env.TOKEN_GHITHUB_ENTERPRISE,
//     Accept: "application/vnd.github.v3+json"
//   }
// });
// end routes

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "./client/build")));
// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
// }

require("./routes/api-routes.js")(app);

// app.get("/api/vote", function(req, res) {
//   db.Vote.findAll({}).then(function(votes) {
//     let votingResults = {
//       react: 0,
//       angular: 0,
//       ember: 0,
//       vue: 0
//     };

//     for (let i = 0; i < votes.length; i++) {
//       switch (votes[i].framework) {
//         case "react":
//           votingResults.react = votingResults.react + 1;
//           break;
//         case "angular":
//           votingResults.angular = votingResults.angular + 1;
//           break;
//         case "ember":
//           votingResults.ember = votingResults.ember + 1;
//           break;
//         case "vue":
//           votingResults.vue = votingResults.vue + 1;
//           break;
//       }
//     }
//     res.json(votingResults);
//   });
// });

// app.post("/api/vote/", function(req, res) {
//   db.Vote.findOne({
//     where: {
//       email: req.body.email
//     }
//   }).then(function(Vote) {
//     if (Vote)
//       res.json({
//         error: 1
//       });
//     else
//       db.Vote.create({
//         email: req.body.email,
//         framework: req.body.framework
//       }).then(function(Vote) {
//         res.json({
//           error: 0
//         });
//       });
//   });
// });

// app.get("/framework/:org/:framework", function(req, res) {
//   let reactData = {
//     name: "React"
//   };
//   axiosGH
//     .get(
//       `https://api.github.com/repos/${req.params.org}/${req.params.framework}`
//     )
//     .then(function(starData) {
//       reactData.stars = starData.data.stargazers_count;
//       axiosGH
//         .get(
//           `https://api.github.com/repos/${req.params.org}/${req.params.framework}/stats/participation`
//         )
//         .then(function(commitData) {
//           let twoWeekTotal =
//             commitData.data.all[commitData.data.all.length - 1] +
//             commitData.data.all[commitData.data.all.length - 2];
//           reactData.commits = twoWeekTotal;
//           axiosGH
//             .get(
//               `https://api.github.com/search/issues?q=repo:${req.params.org}/${req.params.framework}+type:issue+state:closed`
//             )
//             .then(function(issueData) {
//               reactData.issues = issueData.data.total_count;
//               res.json(reactData);
//             });
//         });
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "./client/build/index.html"));
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on PORT:", PORT);
  });
});
