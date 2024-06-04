import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIndomie: 100,
};

const indomieSlice = createSlice({
  name: "indomie",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfIndomie -= 1;
    },
    addStock: (state, action) => {
      state.numOfIndomie += action.payload;
    },
  },
  extraReducers: {},
});

export const { order, addStock } = indomieSlice.actions;
export default indomieSlice.reducer;
