import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Jumbo = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="text-center">LaunchPad Challenge</h1>
          <h3 className=" text-center">
            Help your team choose a new client side framework!
          </h3>
        </Container>
      </Jumbotron>
      <h5 className=" text-center">
        Enter your email and select a framework below. Only 1 selection may be
        made per user.
      </h5>
    </div>
  );
};

export default Jumbo;
