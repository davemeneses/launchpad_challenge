import React from "react";
import { Table } from "reactstrap";

const FrameworkData = props => {
  console.log("this is props on FrameworkData ", props.apiData);
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
        <tr>
          <th></th>
          <td>Stars</td>
          <td>Forks</td>
          <td>Issues</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default FrameworkData;
