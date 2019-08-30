import React, { Component } from "react";
import VoterBox from "./VoterBox";
import FrameworkInfo from "./FrameworkInfo";
import { Container } from "reactstrap";
import API from "../utils/API";

class ResultsContainer extends Component {
  state = {
    hasVoted: false,
    email: "",
    framework: ""
  };

  loadVotes = () => {
    API.getVotes()
      .then(res => this.setState({ voters: res.data }))
      .catch(err => console.log(err));
  };

  recordVote = () => {
    API.submitVote({
      email: this.state.email,
      framework: this.state.framework
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.framework === "" || this.state.email === "") {
      alert("Please enter an email address and select a framework.");
    } else
      API.submitVote({
        email: this.state.email,
        framework: this.state.framework
      })
        .then(res => {
          if (res.data.error)
            alert("Please enter a valid, unique email address");
          else alert("Vote Submitted");
        })
        .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <FrameworkInfo></FrameworkInfo>
        <VoterBox
          framework={this.state.framework}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></VoterBox>
      </Container>
    );
  }
}
export default ResultsContainer;
