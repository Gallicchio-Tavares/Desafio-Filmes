import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // arquivo CSS separado

import img1 from '../assets/header/12-Angry-Men.jpg';
import img2 from '../assets/header/das_cabinet_des_dr._caligari.jpg';
import img3 from '../assets/header/buster_keaton_2.jpg';
import img4 from '../assets/header/buster-keaton.jpg';
import img5 from '../assets/header/Ivan_The_Terrible_Part_I.jpg';
import img6 from '../assets/header/la-noire-de.jpg';
import img7 from '../assets/header/man-with-the-movie-camera.jpg';
import img8 from '../assets/header/nosferatu.jpg';
import img9 from '../assets/header/o_farol.jpg';
// import img10 from '../assets/header/persona.jpg';
import img11 from '../assets/header/rio-40-graus.jpg';
import img12 from '../assets/header/seven-samurai.jpg';
import img13 from '../assets/header/soleil_o.jpg';
import img14 from '../assets/header/stalker.jpg';
import img15 from '../assets/header/the-ascent.jpg';
import img16 from '../assets/header/The-Cremator.jpg';
import img17 from '../assets/header/ze-do-caixao.jpg';
import logo from '../assets/logo.png';

export default function Header() {
  const imagensFundo = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img11, img12, img13, img14, img15,
    img16, img17
  ];

  const [bgImage, setBgImage] = useState(imagensFundo[0]);
  const navHeight = 75;
  const [opacity, setOpacity] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const headlineRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    // Escolhe imagem aleatória no mount
    const indexAleatorio = Math.floor(Math.random() * imagensFundo.length);
    setBgImage(imagensFundo[indexAleatorio]);

    function onScroll() {
      const scrollTop = window.scrollY;
      const headlineHeight = (headlineRef.current?.offsetHeight || 400) - navHeight;
      const navOffset = navRef.current?.getBoundingClientRect().top || 0;

      setOpacity(1 - scrollTop / headlineHeight);
      setTranslateY(scrollTop * 0.4);
      setScrolled(navOffset <= headlineHeight);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="header-home">
      <div
        className="headline"
        ref={headlineRef}
        style={{ backgroundImage: `url(${bgImage})`, opacity }}
      >
        <div
          className="inner"
          style={{ transform: `translate(-50%, calc(-50% + ${translateY}px))` }}
        >
          <h1>Desafio Filmes</h1>
          <p>Você consegue assistir a um filme todo dia durante um mês?</p>
        </div>
      </div>
      <nav className={scrolled ? 'scrolled' : ''} ref={navRef}>
        <Link to="/" className="logo-link">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <ul>
          <li><Link to="/stats" className="nav-link">Stats</Link></li>
          <li><Link to="/halldafama" className="nav-link">Hall da Fama</Link></li>
          <li><Link to="/regras" className="nav-link">Regras</Link></li>
        </ul>
      </nav>
    </header>
  );
}
