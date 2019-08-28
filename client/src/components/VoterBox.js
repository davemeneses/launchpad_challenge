import React from "react";

function VoterBox(props) {
  return (
    <form>
      <div>
        <select onChange={props.handleChange} name="framework">
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="ember">Ember</option>
          <option value="view">View</option>
        </select>
        {/* <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary mt-3"
        >
          Search
        </button> */}
        <button onClick={props.handleSubmit}>Submit</button>
      </div>
    </form>
  );
}
export default VoterBox;
