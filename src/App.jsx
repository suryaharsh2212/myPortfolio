import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
// import SectionTech from "./Components/SectionTech"; 
function App() {
  return (
    <div>
      <Navbar/>  
      <Hero/>
      <Project/>
      {/* <SectionTech/> */}
      <Footer/>
    </div>
  );
}

export default App;
