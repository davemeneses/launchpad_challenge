import axios from "axios";

export default {
  // getVotes: function() {
  //   return axios.get("/api/vote");
  // },

  checkVote: function(id) {
    return axios.get("/api/vote/" + id);
  },

  submitVote: function(Vote) {
    return axios.post("/api/vote", Vote);
  }
};
