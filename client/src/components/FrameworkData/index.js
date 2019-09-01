import React from "react";
import axios from "axios";

class FrameworkData extends React.Component {
  state = {
    issuesCount: 0,
    twoWeekCommits: 0,
    stars: 0
  };
  componentDidMount() {
    // console.log("in framework js: ", this.props.framework);
    // axios
    //   .get(`http://localhost:5000/framework/${this.props.framework}`)
    //   .then(data => {
    //     console.log("returned FW data: ", data);
    //     this.setState({
    //       name: data.data.name,
    //       issuesCount: data.data.issues,
    //       twoWeekCommits: data.data.commits,
    //       stars: data.data.stars
    //     });
    //   });
    this.setState({
      name: "framework name",
      issuesCount: "# offramework issuess",
      twoWeekCommits: "# of issues commited in the past 2 weeks",
      stars: "# of users who starred"
    });
  }
  render() {
    console.log("this is the state: ", this.state);
    return (
      <tbody>
        <tr>
          <th>{this.state.name}</th>
          <td>{this.state.stars}</td>
          <td>{this.state.issuesCount}</td>
          <td>{this.state.twoWeekCommits}</td>
        </tr>
      </tbody>
    );
  }
}
export default FrameworkData;
