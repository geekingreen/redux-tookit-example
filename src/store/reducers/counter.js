import { createSlice } from "@reduxjs/toolkit";

const name = "counter";

const counterSlice = createSlice({
  name,
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
