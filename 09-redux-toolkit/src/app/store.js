import { configureStore } from "@reduxjs/toolkit";
import indomieSlice from "../feature/indomie/indomieSlice";
import laysSlice from "../feature/lays/laysSlice";

const store = configureStore({
  reducer: {
    indomie: indomieSlice,
    lays: laysSlice,
  },
});

export default store;
