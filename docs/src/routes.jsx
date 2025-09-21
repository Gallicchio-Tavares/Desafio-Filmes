import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import FAQ from "./pages/FAQ/index.jsx";
import HallDaFama from "./pages/HallDaFama/index.jsx";
import StatsAnual from "./pages/StatsAnual.jsx";

const App = () => {
  return (
    <Router basename="/Desafio-Filmes/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regras" element={<FAQ />} />
        <Route path="/stats" element={<StatsAnual />} />
        <Route path="/stats/2024" element={<Navigate to="/stats?ano=2024" replace />} />
        <Route path="/stats/2025" element={<Navigate to="/stats?ano=2025" replace />} />
        <Route path="/halldafama" element={<HallDaFama />} />
      </Routes>
    </Router>
  );
};

export default App;
