// src/routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />}/>
    </Routes>
  );
}

export default RoutesList;
