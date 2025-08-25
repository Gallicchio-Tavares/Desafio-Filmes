import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import FAQ from "./pages/FAQ/index.jsx";
import Stats from "./pages/Stats.jsx";
import Stats2025 from "./pages/Stats2025.jsx";
import HallDaFama from "./pages/HallDaFama/index.jsx";

const App = () => {
  return (
    <Router basename="/Desafio-Filmes/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regras" element={<FAQ />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/stats/2025" element={<Stats2025 />} />
        <Route path="/halldafama" element={<HallDaFama />} />
      </Routes>
    </Router>
  );
};

export default App;
