import React from "react";
import { Table } from "reactstrap";

const FrameworkData = props => {
  console.log(props.apiData);

  return (
    <Table hover>
      <thead>
        <tr>
          <th>Framework</th>
          <th>Stars</th>
          <th>Forks</th>
          <th>Issues</th>
        </tr>
      </thead>
      <tbody>
        {/* {props.apiData} */}
        <tr>
          <th>data</th>
          <td>will</td>
          <td>go</td>
          <td>here</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default FrameworkData;
