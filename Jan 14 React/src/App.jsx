import { useState } from "react";

const App=()=>{
     const [cnt,setCnt] = useState("0");

     const myInt=()=>{
            setCnt(cnt+1)
     }

     const myDcr=()=>{
    if(cnt<=0){
        alert("you can not Decrement less than zero");
    }
    else{
        setCnt(cnt-1);
    }
 }
   
    return(
        <>
          <h1>My counter : {cnt}</h1>
          <button onClick={myInt}>Increment</button>
          <button onClick={myDcr}>Decrement</button>
          <button onClick={()=>{setCnt(0)}}>Reset</button>
        
        </>
    )
  }
  export default App;