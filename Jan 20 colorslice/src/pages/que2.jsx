import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { increment,decrement } from "../counterSlice"
const Que2=()=>{
    const dispatch=useDispatch()
    const count=useSelector((state)=>state.counter.count)
    return(
        <>
    <div id="counter">
        <h1>Counter Program</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <h1> {count}</h1>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
    </>
)
}
export default Que2