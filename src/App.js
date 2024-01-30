import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/Home/Section1"; // Adjust imports as needed
import OurMenu from "./pages/Home/Section2";
import Shop from "./pages/Home/Section4";
import Blog from "./pages/Home/Section5";
import Contact from "./pages/Home/Section7";
 // Create a Cart component if not already present

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<OurMenu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;
