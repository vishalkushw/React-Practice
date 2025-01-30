import { Link,Outlet } from "react-router-dom"
const Layout=()=>{
    return(
        <>
        <nav>
            <ul style={{display:"flex ", gap:"20px", backgroundColor:"red", height:"30px"}}>
                <li><Link to="home"> Home</Link></li>
                <li><Link to="login"> login</Link></li>
            </ul>
        </nav>
        
        <Outlet/>
        </>
    )
}
export default Layout;