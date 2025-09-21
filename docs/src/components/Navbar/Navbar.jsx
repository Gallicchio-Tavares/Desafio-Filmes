import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assets/logo.png';
import menu from '../../assets/menus.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <img src={logo} alt="Home" className="navbar-logo" />
      </Link>

      <button 
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <img src={menu} alt="Menu" className="menu-icon" />
      </button>

      <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
        <Link to="/regras" className="nav-link" onClick={closeMenu}>
          Regras
        </Link>
        <Link to="/stats" className="nav-link" onClick={closeMenu}>
          Stats
        </Link>
        <Link to="/halldafama" className="nav-link" onClick={closeMenu}>
          Hall da Fama
        </Link>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;