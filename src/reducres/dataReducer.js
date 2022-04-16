import { createSlice } from "@reduxjs/toolkit";
export const dataReducer = createSlice({
  name: "data",
  initialState: {
    value: [{ name: 'ali' },
      { name: 'ahmad' },
      { name: 'mohammad' },
    ]
  },
  reducers: {
    AddAction: (state,action) => {
      state.value = [...state.value,action.payload]
    },
  },
});
export const { AddAction } = dataReducer.actions;
export const userstate = state => state.data.value;
export default dataReducer.reducer