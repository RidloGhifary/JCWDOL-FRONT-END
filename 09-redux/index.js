import { createStore, bindActionCreators, combineReducers } from "redux";

const BUY_INDOMIE = "BUY_INDOMIE";
const BUY_LAYS = "BUY_LAYS";
const RESTOCK_INDOMIE = "RESTOCK_INDOMIE";
const RESTOCK_LAYS = "RESTOCK_LAYS";

const initialState = {
  numOfIndomies: 100,
  numOfLays: 50,
};

function buyIndomie() {
  return {
    type: BUY_INDOMIE,
  };
}

function reStockIndomie(qty) {
  return {
    type: RESTOCK_INDOMIE,
    payload: qty,
  };
}

function buyLays() {
  return {
    type: BUY_LAYS,
  };
}

function reStockLays(qty) {
  return {
    type: RESTOCK_LAYS,
    payload: qty,
  };
}

function indomieReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_INDOMIE:
      return {
        ...state,
        numOfIndomies: state.numOfIndomies - 1,
      };
    case RESTOCK_INDOMIE:
      return {
        ...state,
        numOfIndomies: state.numOfIndomies + action.payload,
      };
    default:
      return state;
  }
}

function laysReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_LAYS:
      return {
        ...state,
        numOfLays: state.numOfLays - 1,
      };
    case RESTOCK_LAYS:
      return {
        ...state,
        numOfLays: state.numOfLays + action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  indomieReducer,
  laysReducer,
});

const store = createStore(rootReducer);
console.log("Initial state:", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Initial state:", store.getState())
);

const actions = bindActionCreators(
  { buyIndomie, buyLays, reStockIndomie, reStockLays },
  store.dispatch
);

actions.buyIndomie();
actions.buyIndomie();

unsubscribe();
