import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  errMsg: "",
};

export const fetchUserRequest = createAsyncThunk(
  "users/fetchUserRequest",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRequest.pending, (state) => {
        state.loading = true;
        state.errMsg = "";
      })
      .addCase(fetchUserRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUserRequest.rejected, (state, action) => {
        state.loading = false;
        state.errMsg = action.payload;
      });
  },
});

export default usersSlice.reducer;
