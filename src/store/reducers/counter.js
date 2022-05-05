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

const { increment, decrement } = counterSlice.actions;
export { increment, decrement };
export default counterSlice.reducer;
