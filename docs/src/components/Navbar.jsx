import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Importando o CSS para estilizar o Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Início</Link>
      <Link to="/stats" className="nav-link">Stats</Link>
      <Link to="/faq" className="nav-link">FAQ</Link>
    </nav>
  );
};

export default Navbar;
