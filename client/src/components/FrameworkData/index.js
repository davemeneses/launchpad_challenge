import React, { Component } from "react";
import API from "../../utils/GithubAPI";

class FrameworkData extends Component {
  //   state = {
  //     apiData: []
  //   };

  componentDidMount() {
    API.getGithub();
  }

  render() {
    return <div>loaded</div>;
  }
}
export default FrameworkData;
