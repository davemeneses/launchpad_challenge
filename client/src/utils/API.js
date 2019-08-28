import axios from "axios";

export default {
  submitVote: function(vote) {
    return axios.post("/api/vote", vote);
  }
};
