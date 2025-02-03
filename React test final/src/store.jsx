import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";
import colorSlice from "./colorSlice";
const store=configureStore({
    reducer:{
        counter:counterSlice,
        color:colorSlice,
        todo:todoSlice
    }
})

export default store