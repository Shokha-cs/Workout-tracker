// src/routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import About from "./pages/About";
import Suggestion from "./pages/Suggestion";

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/suggestion" element={<Suggestion />}/>
    </Routes>
  );
}

export default RoutesList;
