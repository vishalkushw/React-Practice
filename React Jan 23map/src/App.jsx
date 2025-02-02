// const App=()=>{

//   const name=["Vishal","Pawan","Ram","sumit"];
//   const data=name.map((key)=>{
//     return(
//       <>
//          <h1>{key}</h1>
//       </>
//     )

//   })
//   return(
//     <>
//      <h1>{data}</h1>
//     </>
//   )

  
// }
// export default App;


// const App=()=>{
//    const student=[
//     {
//       "name":"Vishal",
//        "rollnom":21,
//        "subject":"mern",
//        "branch":"btech"
//     },
//     {
//       "name":"Pawan",
//        "rollnom":22,
//        "subject":"mern",
//        "branch":"btech"
//     },
//     {
//       "name":"Sumit",
//        "rollnom":23,
//        "subject":"mern",
//        "branch":"btech"
//     },
//     {
//       "name":"Ram",
//        "rollnom":24,
//        "subject":"mern",
//        "branch":"btech"
//     },
//   ]


//   const data=student.map((key)=>{

//     return(
//       <>

//       <tr>
//         <td>{key.name}</td>
//         <td>{key.rollnom}</td>
//         <td>{key.subject}</td>
//         <td>{key.branch}</td>
//       </tr>
      
//       </>
//     )
//   })

//   return(
//     <> 
//     <h1>wellcpme to student data</h1>

//     <table>
//       <tr>
//         <td>Name</td>
//         <td>Rollnom</td>
//         <td>subject</td>
//         <td>Branch</td>
//       </tr>

//       {data}
//     </table>
    
    
//     </>
//   )

// }
// export default App;


const App=()=>{
  const car=[
    {
      "name":"BMW",
       "color":"red",
       "price":210000
    },
    {
      "name":"SUV",
       "color":"white",
       "price":208000
    },
    {
      "name":"Farari",
       "color":"black",
       "price":2216578
    },
    {
      "name":"Safari",
       "color":"red",
       "price":220000
    }
  ]

  const ans=car.map((key)=>{
    return(
      <>
      <tr style={{color:"red",}}>
        <td>{key.name}</td>
        <td>{key.color}</td>
        <td>{key.price}</td>
      </tr>
      </>
    )
  })

  return(
    <>
      <table style={{border:"2px solid green", width:"50%", height:"80%", textAlign:"center"}}>
        <tr>
          <td>Car Name</td>
          <td>Color</td>
          <td>Price</td>
        </tr>

        {ans}
      </table>
    </>
  )
 
}
export default App;