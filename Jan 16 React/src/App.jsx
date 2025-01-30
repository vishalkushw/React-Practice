import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
import Layout from "./Layout";
import TopHead from "./pages/TopHead";

// import NavbarTop from './components/NavbarTop';
// import Register from './components/Register';
import Login from './pages/Login';
// import Poetry from './components/Poetry';
// import Review from './components/Review';
const App=()=>{
    return(
        <>
        <BrowserRouter>
          <Routes>
           <Route  path="/" element={< Layout/>}>
            <Route path="home" element={< Home/>}/>
            <Route path="login"element={<Login/>} > 
            <Route path="tophead" element={<TopHead/>}/>
            </Route>
                
            </Route>
          </Routes>
        </BrowserRouter>
        
        </>
    )
}
export default App;