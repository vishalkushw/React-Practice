// import { useState } from "react";

// const App = () => {
//   const [city, setCity] = useState("Bhopal");

//   const myval = () => {
//     setCity("Indore");
//   };

//   return (
//     <>
//       <h1>Welcome to : {city}</h1>
//       <button onClick={myval}>Click here</button>
//     </>
//   );
// };

// export default App;

// import { useState } from "react";
// const App=()=>{
//   const [color ,setColor] = useState("red");
//   return(
//     <>
//     <h2>This car color is {color}</h2>
//     <button onClick={()=>{setColor("green")}}>click</button>
//     </>
//   )
// }
// export default App;

// import { useState } from "react";
// const App=()=>{
//   const [color ,setColor] = useState("red");
//   return(
//     <>
//     <h2 style={{backgroundColor:color}}>This car color is {color}</h2>
//     <button onClick={()=>{setColor("green")}}>Green</button>
//     <button onClick={()=>{setColor("yellow")}}>yellow</button>
//     <button onClick={()=>{setColor("pink")}}>pink</button>
//     </>
//   )
// }
// export default App;

// import { useState } from "react"
// const App=()=>{
//   const[count ,setCount]=useState(0);
//   const incr=()=>{
//     setCount(count+1);
//   }

//   const decr=()=>{
//     if(count<=0){
//       alert("count not less then zero");
//     }
//     else{
//       setCount(count-1);
//     }
//   }
//   return(
//     <>
//      <h1>This is my counter Program</h1>
//       <h3>My count : {count}</h3>
//       <button onClick={incr}>increment</button>
//       <button onClick={decr}>decrement</button>
       
//     </>
//   )
// }
// export default App

// import { useState } from "react"
// const App=()=>{
//   const[name,setName]=useState("");
//   const[city,setCity]=useState("");
//   const handleSubmit=()=>{
//     alert("Name : " +name + "City : "+city);
//   }
//   return(
//     <>
//       <h1>Application Form</h1>
//        Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//        City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//        <button onClick={handleSubmit}>Click</button>
//     </>
//   )
// }
// export default App


// import { useState } from "react"
// const App=()=>{
//   const[name,setName]=useState("");
//   const[city,setCity]=useState("");
//   const handleSubmit=()=>{
//     alert("name"+ name +"city:" +city);
//   }
//   return(
//     <>
//      <h1> Application Form </h1>
//      Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//      <br />
//      City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//      <button onClick={handleSubmit}>Click</button>
//     </>
//   )
// }
// export default App;

import { useState } from "react"
const App=()=>{
  const[input,setInput]=useState({});
  const handleInput=()=>{
    let name=e.target.name;
    let value=e.target.value;

    setInput(values=>({...values,[name]:value}))}
  console.log(input);
  return(
    <>
     <h1> Application Form </h1>
     Name : <input type="text" name="name" onChange={handleInput}/>
     <br />
     City : <input type="text" name="city" onChange={handleInput}/>
     <br />
     Class : <input type="text" name="class" onChange={handleInput}/>
     <br />
     <button >Save</button>
    </>
  )
}
export default App;