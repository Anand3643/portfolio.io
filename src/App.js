import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Certificate from "./components/Certificate/Certificate";
import Bottem from "./components/Bottem/Bottem";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Certificate/>
      <Bottem/>
     
     

    </div>
  );
}

export default App;
