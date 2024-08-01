
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import SectionTech from "./Components/SectionTech"; 
import { useRef } from "react";
function App() {
  const projRef=useRef();
  const scrollToProjects = () => {
   if (projRef.current) {
     projRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }
 }
  return (
    <div>
      <Navbar fun={scrollToProjects}/>  
      <Hero/>
       <Contact/>
      <Project   ref={projRef}/>
  
      <SectionTech/>
      <Footer/>
    </div>
  );
}

export default App;
