import "./App.css";
import React, { useState } from "react";
import { addSmurf } from "../actions";
import { connect } from "react-redux";

const Form = props => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  const addNewSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: name,
      age: age,
      height: height
    };
    props.addSmurf(newSmurf);
    setName("");
    setAge("");
    setHeight("");
  };

  return (
    <div className="SmurfForm">
      <form onSubmit={addNewSmurf}>
        <input
          onChange={e => setName(e.target.value)}
          placeholder="name"
          value={name}
          name="name"
          required
        />
        <input
          onChange={e => setHeight(e.target.value)}
          placeholder="height"
          value={height}
          name="height"
          required
        />
        <input
          type="number"
          onChange={e => setAge(e.target.value)}
          value={age}
          placeholder="age"
          name="age"
          required
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addSmurf }
)(Form);
