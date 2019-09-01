const axios = require("axios");
let axiosGH = axios.create({
  headers: {
    Authorization: process.env.TOKEN_GHITHUB_ENTERPRISE,
    Accept: "application/vnd.github.v3+json"
  }
});

// const axios = require('axios').create({
//   headers: {
//     Authorization: `token ${TOKEN_GHITHUB_ENTERPRISE}`,
//     Accept: 'application/vnd.github.v3+json'
//   }

// let githubCliDotCom = new GitHubClient({
//   baseUri: "https://api.github.com",
//   token: process.env.TOKEN_GITHUB_DOT_COM
// });

app.get("/framework/react", function(req, res) {
  return axiosGH.get(`https://api.github.com/repos/facebook/react`);
});
