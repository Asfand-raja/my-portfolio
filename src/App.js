import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./components/Dropdown.css";


import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import WebDevelopment from "./components/WebDevelopment";
import GraphicDesign from "./components/GraphicDesign";
import UIDesign from "./components/UIDesign";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects/web-dev" element={<WebDevelopment />} />
          <Route path="/projects/graphic-design" element={<GraphicDesign />} />
          <Route path="/projects/ui-design" element={<UIDesign />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
