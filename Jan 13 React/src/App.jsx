import { useState } from "react"
const App=()=>{
   const [city,setcity]=useState("bhopal");
   
   return(
      <> 
      <h1>well come to my {city}</h1>
      <button onClick={()=>{setcity("indore")}}>click</button>
      
      </>
   )
}
export default App;