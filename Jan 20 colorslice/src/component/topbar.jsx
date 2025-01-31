import { Link } from "react-router-dom"

const Topbar=()=>{
    return(
        <>
        <div id="Topbar">
        <Link to="/que1">Home |</Link>
        <Link to="/que2">Counter App | </Link>
        <Link to="/que3">Theme Change App |</Link>
        <Link to="/que4">To Do List App |</Link>
        <Link to="/que5">Contact us</Link>
        </div>
        </>
    )
}
export default Topbar  