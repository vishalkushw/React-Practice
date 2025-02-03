import { BrowserRouter ,Routes,Route } from "react-router-dom"; 
import Layout from "./Layout";
import Home from "./pages/Home";
import Display from "./pages/Display";
import Insert from "./pages/Insert";
const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Routes>

      <Route path="/" element={<Layout/>}>
        
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="display" element={<Display/>}/>
        <Route path="insert" element={<Insert/>}/>
      </Route>
     </Routes>
    
    </BrowserRouter>
       
    </>
  )
}
export default App;