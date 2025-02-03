import Layout from "./Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Que1 from "./pages/que1"
import Que2 from "./pages/que2"
import Que3 from "./pages/que3"
import Que4 from "./pages/que4"
import Que5 from "./pages/que5"
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Que1/>}></Route>
        <Route path="/que1" element={<Que1/>}/>
        <Route path="/que2" element={<Que2/>}/>
        <Route path="/que3" element={<Que3/>}/>
        <Route path="/que4" element={<Que4/>}/>
        <Route path="/que5" element={<Que5/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
