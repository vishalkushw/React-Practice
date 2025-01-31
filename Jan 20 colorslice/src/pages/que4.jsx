import { useSelector,useDispatch } from "react-redux"
import { addTask, deleteTask, edit, statusChange } from "./todoSlice"
import { useState } from "react"
const Que4=()=>{
const [t,sett]=useState("")
const [editid,setEditid]=useState("");
const [editbtn,setEditbtn]=useState(false);
    const dispatch=useDispatch()
    const task=useSelector((state)=>state.todo.task)
  let sn=0;
    const ans=task.map((key)=>{
   sn++;

let id="";
   const editdata=(id,task)=>{
   sett(task)
   setEditid(id)
   setEditbtn(true)
   }
   return(

    <>
    <tr>
        <td>{sn}</td>
        <td>{key.status==="complete"?<span style={{color:"red",textDecoration:"line-through"}}>{key.task}</span>:key.task}</td>
        <td><button onClick={()=>dispatch(deleteTask({id:key.id}))}>Delete</button></td>
        <td><button onClick={()=>{
         editdata(key.id,key.task);
        }} >Edit</button></td>

        <td><button onClick={()=>{dispatch(statusChange({id:key.id}))}}>{key.status==="complete"?"Incomplete":"Complete"}</button></td>
    </tr>
    </>
   )
    })
    return(
        <>
    <h1>Todo App</h1>
   Enter Task : <input type="text"value={t}  onChange={(e)=>sett(e.target.value)}/> 
  {!editbtn? <button onClick={()=>dispatch(addTask({id:Date.now() ,task:t,status:"incomplete"}),sett(""))}>Add</button>:
   <button onClick={()=>dispatch(edit({id:editid,task:t}),sett(""),setEditbtn(false))}>Save</button>}
<table>
    <tr>
        <th>SNo.</th>
        <th>Task</th>
        <th>Del</th>
        <th>Edit</th>
        <th>Status</th>
    </tr>

    {ans}
</table>
    </>
)
}
export default Que4