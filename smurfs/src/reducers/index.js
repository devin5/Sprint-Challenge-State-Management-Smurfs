import {
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  DELETE_SMURFS_SUCCESS
} from "../actions";

const initialState = {
  fetchingSmurfs: false,
  error: null,
  smurfs: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };
    case GET_SMURFS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case DELETE_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
