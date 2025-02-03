import { useState } from "react"
import { colorchange } from "../colorSlice"
import { useDispatch ,useSelector} from "react-redux"
const Que3=()=>{
const [color,setColor]=useState("white")
const dispatch=useDispatch()
const color1=useSelector((state)=>state.color.color)
    return(
        <>
        <center id="theme" style={{backgroundColor:color1}}>
    <h1>Theme changing App</h1>
    Enter Color: <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} /> <br /> <br />
    <button onClick={()=>dispatch(colorchange(color))}>Change</button>

    </center>
    </>
)
}
export default Que3