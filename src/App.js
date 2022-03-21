import  React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import {About, Contact, Services} from "./components/Pages"

function App() {
  return (
    <div className="App">
      <h1 className="one">First, solve the problem. Then, write the code!</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className='alLinks'>HOME PAGE</h1> } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />


      </Routes>
    </div>
  );
}
export default App