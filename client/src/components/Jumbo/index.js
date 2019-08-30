import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Jumbo = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="text-center">LaunchPad Challenge</h1>
          <p className=" text-center">
            Help your team choose a new client side framework! <br></br>Enter
            your email and select a framework below. <br></br>Only 1 selection
            may be made per user.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
