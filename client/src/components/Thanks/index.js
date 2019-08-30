import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Thanks = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="text-center">Thanks for voting!</h1>
          <h4 className=" text-center">
            We'll let you know which framework won soon!
          </h4>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Thanks;
