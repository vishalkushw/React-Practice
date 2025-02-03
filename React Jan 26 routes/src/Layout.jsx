import { Link ,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
          <Link to="home">Home</Link>
          <Link to="display">Display</Link>
          <Link to="insert">Insert</Link>

          <Outlet/>

   <br />
          well come to our page
           
        </>
    )
}
export default Layout;