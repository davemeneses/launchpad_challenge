import React, { Component } from "react";
import axios from "axios";
import VoterForm from "../components/VoterForm";
import FrameworkData from "../components/FrameworkData";
import Jumbo from "../components/Jumbo";
import Thanks from "../components/Thanks";
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
    validateSession: false,
    apiData: [],
    count: 0
  };

  componentDidMount() {
    sessionStorage.setItem("voted", false);
    this.loadFrameworkData();
    // this.startLoop();
  }

  loadFrameworkData = () => {
    const frameworkPaths = [
      "facebook/react",
      "angular/angular.js",
      "emberjs/ember.js",
      "vuejs/vue"
    ];
    let githubData = [];

    for (let i = 0; i < frameworkPaths.length; i++) {
      axios
        .get(`https://api.github.com/repos/${frameworkPaths[i]}`)
        .then(res => {
          githubData.push(res.data);
        })
        .catch(error => {
          console.log("Error fetching and parsing data", error);
        });
    }
    this.setState({ apiData: githubData });
  };

  startLoop = () => {
    setInterval(this.frameworkLoop, 10000);
  };

  frameworkLoop = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("we looped, count: ", this.state.count);
    this.loadFrameworkData();
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
    if (
      !this.state.email.includes("@") ||
      this.state.email === "" ||
      sessionStorage.getItem("voted") === true
    ) {
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
            sessionStorage.setItem("voted", true);
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
        <div>
          <Jumbo></Jumbo>
          <Container>
            <FrameworkData apiData={this.state.apiData}></FrameworkData>
            <VoterForm
              framework={this.state.framework}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              emailError={this.state.emailError}
              frameworkError={this.state.frameworkError}
            ></VoterForm>
          </Container>
        </div>
      );
    } else {
      return <Thanks></Thanks>;
    }
  }
}
export default ResultsContainer;
