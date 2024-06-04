import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import axios from "axios";

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

const initialState = {
  loading: false,
  errorMessage: "",
  users: [],
};

function fetchUsersRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

function fetchUserSuccess(data) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
}

function fetchUserFailed(error) {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
}

function fetchUsers() {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());

    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(fetchUserSuccess(data));
    } catch (err) {
      dispatch(fetchUserFailed(err.message));
    }
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        errorMessage: "",
      };
    case FETCH_USER_FAILED:
      return {
        loading: false,
        users: state.users,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUsers());

unsubscribe();
