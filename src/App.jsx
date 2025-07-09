// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import ReactDetail from "./pages/TechDetail/ReactDetail";
import Java from "./pages/TechDetail/Java";
import ComputerShortcuts from "./pages/TechDetail/ComputerShortcuts";
import C from "./pages/TechDetail/C";
import Javascript from "./pages/TechDetail/Javascript";
import Footer from "./components/Footer";
import Backtotop from "./components/Backtotop";
import VScodeshortcut from "./pages/TechDetail/VScodeshortcut";
import HTMLpage from "./pages/TechDetail/HTMLpage";
import Reactpage from "./pages/TechDetail/Reactpage";
import CSS3 from "./pages/TechDetail/CSS3";



// import TechDetail from "./pages/TechDetail";  // we'll create this next

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/tech/react" element={<ReactDetail />} /> */}
         <Route path="/tech/java" element={<Java />} />
        <Route path="/tech/ComputerShortcuts" element={<ComputerShortcuts />} />
        <Route path="/tech/C" element={<C />} />
        <Route path="/tech/Javascript" element={<Javascript/>} />
        <Route path="/tech/VScodeshortcut" element={<VScodeshortcut/>}/>
        <Route path="/tech/Reactpage" element={<Reactpage/>}/>
        <Route path="/tech/HTMLpage" element={<HTMLpage/>}/>
        <Route path="/tech/CSS3" element={<CSS3/>}/>
        
       
        
        {/* <Route path="/tech/:techName" element={<TechDetail />} /> */}
      </Routes>
     <Backtotop />
      <Footer />
    </Router>
  );
};

export default App;
