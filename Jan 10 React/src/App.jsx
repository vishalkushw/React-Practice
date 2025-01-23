import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App=()=>{
   const nm="vishal";
   const age=22;
   return(
      <>
      <h1 style={{textAlign:"center",color:"white" ,backgroundColor:"green"}}>Well come to component page of react</h1>

      <Home/>
      <About/>
      <Contact/>

       <h2> My name is {nm} kushwah and my age is {age} year old</h2>
      </>
   )
}
export default App;