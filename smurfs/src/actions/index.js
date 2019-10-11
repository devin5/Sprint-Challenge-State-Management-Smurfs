import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

const url = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });

  axios
    .get(url)
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: GET_SMURFS_FAILURE, payload: err.message });
    });
};

// /export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
// export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const addSmurf = smurf => dispatch => {
  console.log("hi");
  axios
    .post(url, smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
    });
};
