import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
        state.count=state.count+10;
        },
        decrement:(state)=>{
            if(state.count>0){
                state.count=state.count-10;
        }
            else{
                message.error("Count cannot be less than 0")
            }
            }
    }
})

export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer