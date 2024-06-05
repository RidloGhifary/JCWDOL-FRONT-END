import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfLays: 50,
};

const laysSlice = createSlice({
  name: "lays",
  initialState,
  reducers: {
    order: (state, action) => {
      state.numOfLays -= action.payload;
    },
    addStock: (state, action) => {
      state.numOfLays += action.payload;
    },
  },
});

export const { order, addStock } = laysSlice.actions;
export default laysSlice.reducer;
