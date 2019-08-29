import axios from "axios";

export default {
  getVotes: function() {
    return axios.get("/api/vote");
  },
  submitVote: function(Vote) {
    return axios.post("/api/vote", Vote);
  }
};
