import { createSlice } from "@reduxjs/toolkit";

export const counterReducer = createSlice({
  name: "counter",
  initialState: { value:10 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = counterReducer.actions;
export const selectCount = (state) => state.counter.value;
export default counterReducer.reducer;