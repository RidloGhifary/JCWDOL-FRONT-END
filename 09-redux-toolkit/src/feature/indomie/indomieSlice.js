import { createSlice } from "@reduxjs/toolkit";
import { order as buyLays } from "../lays/laysSlice";

const initialState = {
  numOfIndomie: 100,
};

const indomieSlice = createSlice({
  name: "indomie",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfIndomie--;
    },
    addStock: (state, action) => {
      state.numOfIndomie += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyLays, (state, action) => {
      if (Number(action.payload) >= 2) state.numOfIndomie--;
    });
  },
});

export const { order, addStock } = indomieSlice.actions;
export default indomieSlice.reducer;
