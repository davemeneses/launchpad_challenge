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
      </FormGroup>
      <Button color="secondary" onClick={props.handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
export default VoterBox;
