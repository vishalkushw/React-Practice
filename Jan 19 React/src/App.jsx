import Header from "./pages/Header";
import Student from "./pages/Student";
import Footer from "./pages/Footer";

const App = () => {

   let name = "vishal";
   var age = 22;
   var clas = "btech";

   const sub=(
      <ol>
      <li>Apple</li>
      <li>Mango</li>
      <li>Banana</li>
      <li>Apple</li>
      <li>Banana</li>
      <li>Mango</li>
      

      </ol>
   )
   const  student ={
         name:"Ram",
         class :"MERN"

      }
   
   return (
      <>
         <Header />
         <h1 style={{color:"red", textAlign:"center"}}>  My name is {name} kushwah and my age {age} year and i am {clas} student </h1>

         <h1>List : {sub}</h1>
         <h2>Student : {student.name}  and class  {student.class}</h2>
         <Student nm="Pawan" age="21">
            Bhopal
         </Student>
         <Footer />
      </>
   )
}
export default App;