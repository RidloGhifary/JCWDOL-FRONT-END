import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export const fetchUserRequest = createAsyncThunk(
  "users/fetchUserRequest",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const reducer = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRequest.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUserRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUserRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default reducer.reducer;
