import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Client from "./components/Client";
import Login from "./components/Login"; 
import Blogs from "./components/Blogs";

import PotentialDesign from "./assets/PotentialDesign";

function App() {
  return (
    <>
   

      <div>
        <Navbar />
          <Routes future={{ v7_startTransition: true }} >
            <Route path="/" element={<PotentialDesign  />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services1" element={<Services />} />
            <Route path="/services2" element={<Services />} />
            <Route path="/services3" element={<Services />} />
            <Route path="/services4" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/client" element={<Client />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        <Footer />
        
      </div>

      
    </>
  );
}

export default App;
