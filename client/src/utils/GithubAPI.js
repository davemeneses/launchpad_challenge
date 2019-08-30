import axios from "axios";

export default {
  getGithub: function() {
    axios
      .get("https://api.github.com/repos/facebook/react")
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }
};
