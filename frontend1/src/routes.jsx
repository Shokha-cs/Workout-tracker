import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
// import About from "./pages/About";
// import Calculator from "./pages/Calculator";
// import Suggestions from "./pages/Suggestions";

// Layout Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <Router>
      {/* Uncomment and create Navbar/Footer components later if needed */}
      {/* <Navbar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/calculator" element={<Calculator />} /> */}
          {/* <Route path="/suggestion" element={<Suggestions />} /> */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default AppRoutes;