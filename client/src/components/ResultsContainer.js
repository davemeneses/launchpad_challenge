import React, { Component } from "react";
import VoterBox from "./VoterBox";
import { Container } from "reactstrap";
import API from "../utils/API";

class ResultsContainer extends Component {
  state = {
    apiData: [],
    hasVoted: false,
    voters: [],
    email: "",
    framework: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  postVote = () => {
    API.submitVote({
      email: this.state.email,
      framework: this.state.framework
    }).catch(err => console.log(err));
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
      alert("Please Enter Email");
    } else this.postVote();
    // console.log(this.state.framework);
    // console.log(this.state.email);
  };

  render() {
    return (
      <Container>
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
