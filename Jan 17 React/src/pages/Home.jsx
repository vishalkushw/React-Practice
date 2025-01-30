
import img1 from "../img/Screenshot 7.png";
import img2 from "../img/Screenshot 8.png";
import img3 from "../img/Screenshot 9.png";
const Home=()=>{
    return(
        <>
         <nav>
         <ul>
            <li> Home</li>
            <li> About</li>
            <li> contact</li>
            <li> Display</li>
            <li> Login</li>
           </ul>

         </nav>

         <div>
            <img src={img1} width="100%"/>
            
         </div>
           
        </>
    )
}
export default Home;