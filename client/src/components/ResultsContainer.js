import React, { Component } from "react";
import VoterBox from "./VoterBox";

class ResultsContainer extends Component {
  state = {
    hasVoted: false,
    voters: [],
    framework: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    // console.log(this.state.framework);
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.framework);
  };

  //   handleInputChange = event => {
  //     // Pull the name and value properties off of the event.target (the element which triggered the event)
  //     const { name, value } = event.target;

  //     // Set the state for the appropriate input field
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  render() {
    return (
      <div>
        <VoterBox
          framework={this.state.framework}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></VoterBox>
      </div>
    );
  }
}
export default ResultsContainer;
