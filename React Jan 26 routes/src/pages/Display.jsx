import { useState , useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata ,setData]=useState([]);
    const loadData=()=>{
        let api= "http://localhost:3000/student";
        axios.get(api).then((res)=>{
            setData(res.data);
            console.log(res);
        })
    }

    useEffect(()=>{
        loadData();
    } ,[])

    const ans= mydata.map((key)=>{

        return(
            <tr>
                <td>{key.name}</td>
                <td>{key.branch}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
        )
    })
    return(
        <>
        <h1>Display page </h1>
          
           <table>
            <tr>
                <td>Name</td>
                <td>Branch</td>
                <td>City</td>
                <td>Fees</td>
            </tr>
            {ans}
           </table>
        </>
    )
}
export default Display;