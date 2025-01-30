import { Link , Outlet} from "react-router-dom";

const Contact=()=>{
    return(
        <>
        
        <h1>contact page</h1>
        <Link to="topHead"> TopHead</Link>

        <Outlet/>
        </>
    )
}
export default Contact;