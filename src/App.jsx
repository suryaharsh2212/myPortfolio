

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Me from "./Components/Me";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import SectionTech from "./Components/SectionTech"; 
import { useEffect } from "react";

import { useRef } from "react";
function App() {
  useEffect(() => {
  
    window.gtag('config', 'G-CSWR5L9D6M', {
      page_path: window.location.pathname,
    });
  }, []);
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
       <Me/>
       
      <Project   ref={projRef}/>
      <SectionTech/>
      <Contact/>

      <Footer/>
    </div>
  );
}

export default App;
