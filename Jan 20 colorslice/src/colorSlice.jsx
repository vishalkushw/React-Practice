import { createSlice } from "@reduxjs/toolkit";
const colorSlice = createSlice({
    name:"color",
    initialState:{
        color:"white"
    },
    reducers:{
     colorchange:(state,action)=>{
        state.color=action.payload
     }
    }
})
export const {colorchange}=colorSlice.actions
export default colorSlice.reducer