import { createSlice } from "@reduxjs/toolkit";


export const themeReducer = createSlice({
  name: "theme",
  initialState: { value: false },
  reducers: {
    themeAction: (state) => {
      state.value =!state.value;
    },
  },
});
export const { themeAction } = themeReducer.actions;
export const themingState = (state) => state.theme.value;
export default themeReducer.reducer