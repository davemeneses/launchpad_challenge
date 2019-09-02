import React, { Component } from "react";
import axios from "axios";
import { Jumbotron, Container, Table } from "reactstrap";

class Thanks extends Component {
  state = {
    angular: 0,
    ember: 0,
    react: 0,
    vue: 0
  };
  componentDidMount() {
    axios.get(`/api/vote`).then(data => {
      this.setState({
        angular: data.data.angular,
        ember: data.data.ember,
        react: data.data.react,
        vue: data.data.vue
      });
    });
  }
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="text-center">Thanks for voting!</h1>
            <h4 className=" text-center">Here are the current results</h4>
          </Container>
        </Jumbotron>
        <Container>
          <Table>
            <thead>
              <tr>
                <th>Framework</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Angular</td>
                <td>{this.state.angular}</td>
              </tr>
              <tr>
                <td>Ember</td>
                <td>{this.state.ember}</td>
              </tr>
              <tr>
                <td>React</td>
                <td>{this.state.react}</td>
              </tr>
              <tr>
                <td>Vue</td>
                <td>{this.state.vue}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default Thanks;
