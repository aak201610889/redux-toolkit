import { createSlice } from "@reduxjs/toolkit";
export const ApiReducer = createSlice({
  name: 'user',
  initialState: { value: 'i am user i swear' },
  reducers: {
    addUser: (state,action) => { state.value = [...state.value, action.payload];}
  }
  
})
export const { addUser}=ApiReducer.actions
export const userdata = state =>  state.user.value
export default ApiReducer.reducer