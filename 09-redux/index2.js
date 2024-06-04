import { createStore } from "redux";
import { produce } from "immer";

const UPDATE_STATE = "UPDATE_STATE";

const initialState = {
  name: "John Doe",
  address: {
    street: "123 Main street",
    city: "London",
    country: "United Kingdom",
  },
};

function updateStreet(street) {
  return {
    type: UPDATE_STATE,
    payload: street,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATE:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draftState) => {
        draftState.address.street = action.payload;
      });
    default:
      return state;
  }
}

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(updateStreet("Jalanin aja yuk 02"));

unsubscribe();
