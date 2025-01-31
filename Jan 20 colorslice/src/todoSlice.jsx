import { createSlice } from "@reduxjs/toolkit";
const todoSlice= createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{        
        addTask:(state, actions)=>{
          state.task.push(actions.payload);
        },

        deleteTask:(state, actions)=>{
        console.log(actions.payload.id);
        state.task=state.task.filter(key=> key.id!=actions.payload.id);
        },
        
        edit:(state, actions)=>{
            for (var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id==actions.payload.id)
                {
                    state.task[i].task=actions.payload.task;
                }
            }
            // return state
        },
        statusChange :(state, actions)=>{
            for (var i=0; i<state.task.length; i++)
                {
                    if (state.task[i].id==actions.payload.id  && state.task[i].status=="incomplete")
                    {
                        state.task[i].status="complete"
                    }
                    else if(state.task[i].id==actions.payload.id  && state.task[i].status=="complete")
                    {
                        state.task[i].status="incomplete"
                    }
                }
        }


    }
})
export const {addTask, deleteTask, edit,statusChange} = todoSlice.actions;
export default todoSlice.reducer;