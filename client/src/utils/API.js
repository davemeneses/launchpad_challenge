import axios from "axios";

export default {
  submitVote: function(Vote) {
    return axios.post("/api/vote", Vote);
  }
};
