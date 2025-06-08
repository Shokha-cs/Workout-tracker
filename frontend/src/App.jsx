// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesList from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesList />
      <Footer />
    </BrowserRouter>
  );
}
