import React from "react";
import { Table } from "reactstrap";

const FrameworkData = props => {
  console.log(props.apiData);

  Object.keys(props.apiData).map(function(keyName, keyIndex) {});
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

// import React, { Component } from "react";
// import { Table } from "reactstrap";

// class FrameworkData extends Component {
//   render(props) {
//     console.log(props);
//     return (
//       <Table hover>
//         <thead>
//           <tr>
//             <th>Framework</th>
//             <th>Stars</th>
//             <th>Forks</th>
//             <th>Issues</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {props.apiData} */}
//           <tr>
//             <th>data</th>
//             <td>will</td>
//             <td>go</td>
//             <td>here</td>
//           </tr>
//         </tbody>
//       </Table>
//     );
//   }
// }
// export default FrameworkData;
