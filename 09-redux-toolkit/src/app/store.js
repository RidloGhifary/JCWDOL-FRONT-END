import { configureStore } from "@reduxjs/toolkit";
import indomieSlice from "../feature/indomie/indomieSlice";

const store = configureStore({
  reducer: {
    indomie: indomieSlice,
  },
});

export default store;
