import { useState , useEffect } from "react"
import axios from "axios"
const App=()=>{
    const [mydata,setmydata]=useState([]);
const lodeData=()=>{
  let api="  https://jsonplaceholder.org/comments";

  axios.get(api).then((res)=>{
    setmydata(res.data);
  })
}
    useEffect(()=>{
      lodeData();
    },[])
    const ans=mydata.map((key)=>{
      return(
        <> <tr>
        <td>{key.id}</td>
        <td>{key.postId}</td>
        <td>{key.userId}</td>
        <td>{key.comment}</td>

        </tr>
        </>
      )
    })

    

  return(
    <>
      <h1>Live api data coming</h1>
      <table>
        <tr> 
          <td> ID</td>
          <td> Post</td>
          <td> User</td>
          <td> Comment</td>

        </tr>
        {ans}
      </table>
    
    </>
  )
}
 export default App;