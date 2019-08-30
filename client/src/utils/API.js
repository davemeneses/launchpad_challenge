import axios from "axios";

export default {
  checkVote: function(id) {
    return axios.get("/api/vote/" + id);
  },

  submitVote: function(Vote) {
    return axios.post("/api/vote", Vote);
  },

  githubData: function() {}
};
