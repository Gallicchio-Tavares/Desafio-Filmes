import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Stats from "./pages/Stats.jsx";
import FAQ from "./pages/FAQ"; 

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
};

export default App;
