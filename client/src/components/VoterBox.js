import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function VoterBox(props) {
  return (
    <Form>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="example@launchpad.com"
          onChange={props.handleChange}
        />
        <div style={{ fontSize: "16px", color: "red" }}>{props.emailError}</div>
      </FormGroup>
      <FormGroup>
        <Label>Select</Label>
        <Input type="select" onChange={props.handleChange} name="framework">
          <option> </option>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="ember">Ember</option>
          <option value="view">View</option>
        </Input>
        <div style={{ fontSize: "16px", color: "red" }}>
          {props.frameworkError}
        </div>
      </FormGroup>
      <Button color="secondary" onClick={props.handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
export default VoterBox;
