// src/components/WatchedMovies.jsx
import React, { useEffect, useState } from 'react';
import headerImage from '../assets/stats-header-2024.jpg';
import '../styles/WatchedMovies.css';

// Load all film images using Vite's import.meta.glob
const images = import.meta.glob('../assets/films/*.jpg', {
  eager: true,
  import: 'default',
});

const WatchedMovies = () => {
  const [filmImages, setFilmImages] = useState([]);

  useEffect(() => {
    // Sort based on filename number
    const sortedImages = Object.entries(images)
      .sort((a, b) => {
        const getNumber = (str) => parseInt(str.match(/(\d+)\.jpg$/)?.[1] || '0', 10);
        return getNumber(a[0]) - getNumber(b[0]);
      })
      .map(([_, src]) => src);

    setFilmImages(sortedImages);
  }, []);

  const getFilmCount = () => {
    const width = window.innerWidth;
    let count;

    if (width >= 1200) count = 20;
    else if (width >= 768) count = 16;
    else count = 10;
  
    return count % 2 === 0 ? count : count - 1;
  };
  
  const [filmCount, setFilmCount] = useState(getFilmCount());
  
  useEffect(() => {
    const handleResize = () => setFilmCount(getFilmCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  


  return (
    <section className="watched-section">
      <div className="watched-banner">
        <img src={headerImage} alt="Stats Header" className="banner-img" />
        <div className="banner-content">
          {filmImages[0] && (
            <img src={filmImages[0]} alt="First Movie" className="first-movie" />
          )}
          <h2>Desafio 1 Mês de Filme - 2024</h2>
          <p>Desafio de 2024 de assistir um filme todo dia durante um mês!</p>
        </div>
      </div>
      <div className="film-strip">
        {filmImages.slice(1, filmCount+1).map((img, idx) => (
          <div className="poster-wrapper" key={idx}>
            <img src={img} alt={`Filme ${idx + 1}`} className="film-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WatchedMovies;
