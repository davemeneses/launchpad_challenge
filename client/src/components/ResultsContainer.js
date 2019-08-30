import React, { Component } from "react";
import VoterBox from "./VoterBox";
// import FrameworkInfo from "./FrameworkInfo";
import { Container } from "reactstrap";
import API from "../utils/API";

class ResultsContainer extends Component {
  state = {
    hasVoted: false,
    email: "",
    framework: "",
    emailError: "",
    frameworkError: "",
    voteSuccess: false,
    validateSession: false
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

  validateFramework = () => {
    let frameworkError = "";
    if (this.state.framework === "") {
      frameworkError = "Please select a framework";
    }
    if (frameworkError) {
      this.setState({ frameworkError });
      return false;
    }
    return true;
  };

  validateEmail = () => {
    let emailError = "";
    if (!this.state.email.includes("@") || this.state.email === "") {
      emailError = "invalid email";
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    return true;
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    let emailError = "";
    let frameworkError = "";
    let voteSuccess = false;
    let validateSession = false;
    event.preventDefault();
    const validEmail = this.validateEmail();
    const validFramework = this.validateFramework();
    if (validEmail && validFramework) {
      API.submitVote({
        email: this.state.email,
        framework: this.state.framework
      })
        .then(res => {
          if (res.data.error) {
            emailError = "Only 1 vote permitted per employee";
            this.setState({ emailError });
          } else {
            emailError = "";
            frameworkError = "";
            voteSuccess = true;
            validateSession = true;
            this.setState({
              emailError,
              frameworkError,
              voteSuccess,
              validateSession
            });
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (!this.state.voteSuccess) {
      return (
        <Container>
          <VoterBox
            framework={this.state.framework}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            emailError={this.state.emailError}
            frameworkError={this.state.frameworkError}
          ></VoterBox>
        </Container>
      );
    } else {
      return (
        <Container>
          <h1>Thanks for voting!</h1>
        </Container>
      );
    }
  }
}
export default ResultsContainer;
