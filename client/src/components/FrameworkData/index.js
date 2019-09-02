import React from "react";
import axios from "axios";

class FrameworkData extends React.Component {
  state = {
    name: "default",
    issuesCount: 0,
    twoWeekCommits: 0,
    stars: 0
  };
  componentDidMount() {
    // axios.get(`/framework/${this.props.framework}`).then(data => {
    //   this.setState({
    //     name: data.data.name,
    //     issuesCount: data.data.issues,
    //     twoWeekCommits: data.data.commits,
    //     stars: data.data.stars
    //   });
    // });

    this.setState({
      name: this.props.framework,
      issuesCount: "# of framework issues resolved",
      twoWeekCommits: "# of issues committed in the past 2 weeks",
      stars: "# of users who starred"
    });

    // this.dataReset();
  }

  dataReset() {
    setInterval(() => {
      axios
        .get(`http://localhost:5000/framework/${this.props.framework}`)
        .then(data => {
          this.setState({
            name: data.data.name,
            issuesCount: data.data.issues,
            twoWeekCommits: data.data.commits,
            stars: data.data.stars
          });
        });
    }, 15000);
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>{this.state.name}</td>
          <td>{this.state.stars}</td>
          <td>{this.state.issuesCount}</td>
          <td>{this.state.twoWeekCommits}</td>
        </tr>
      </tbody>
    );
  }
}
export default FrameworkData;
