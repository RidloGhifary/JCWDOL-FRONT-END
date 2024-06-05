import { configureStore } from "@reduxjs/toolkit";
import indomieSlice from "../feature/indomie/indomieSlice";
import laysSlice from "../feature/lays/laysSlice";
import usersSlice from "../feature/users/usersSlice";

const store = configureStore({
  reducer: {
    indomie: indomieSlice,
    lays: laysSlice,
    users: usersSlice,
  },
});

export default store;
