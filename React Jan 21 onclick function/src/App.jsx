// const App=()=>{
//   const display=()=>{

//     document.write("Vishal")
//   }
//   return(
//     <>
//       <h1>well come to wardha</h1>
//       <button onClick={display}> click</button>
//     </>
//   )
// }
// export default App


// const App=()=>{
//   const display=(e)=>{

//     alert(`my name is ${e}`)
//   }
//   return(
//     <>
//       <h1>well come to wardha</h1>
//       <button onClick={()=>display("vishal")}> click</button>
//     </>
//   )
// }
// export default App

// const App=()=>{
//   const display=(nm ,e)=>{

//     console.log(e);
//     alert(`my name is ${nm}  and ${e.type}` )
//   }
//   return(
//     <>
//       <h1>well come to wardha</h1>
//       <button onClick={(e)=>display("vishal",e)}> click</button>
//     </>
//   )
// }
// export default App

const App=()=>{
  const show=(e)=>{
    const nm=e.target.name;
    const val=e.target.value;

  
    console.log({name:nm , value:val});
  }
  return(
    <>
      <h1>well come to wardha</h1>
      <input type="text" name="city" onChange={show}/>
    </>
  )
}
export default App

