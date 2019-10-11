import "./App.css";
import React, { useEffect } from "react";
import { getSmurfs } from "../actions";
import { connect } from "react-redux";
import Form from "./Form";

function App(props) {
  console.log(props);
  useEffect(() => {
    props.getSmurfs();
  }, []);

  return (
    <div className="App">
      <Form />
      <div className="flex">
        {props.smurfs.map(smurf => (
          <Smurf smurf={smurf} />
        ))}
      </div>
    </div>
  );
}

const Smurf = props => {
  console.log(props);
  return (
    <div className="smurf">
      <p>{props.smurf.name}</p>
      <p>{props.smurf.height}</p>
      <p> {props.smurf.age} years old</p>
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
