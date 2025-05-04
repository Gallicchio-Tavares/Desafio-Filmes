// src/components/WatchedMovies.jsx
import React, { useEffect, useState, useRef } from 'react';
import headerImage from '../assets/stats-header-2024.jpg';
import '../styles/WatchedMovies.css';
import moviesData from '../data/moviesData.json';

const WatchedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const carouselRef = useRef(null);

  // Preparar caminho para imagens de pôster
  useEffect(() => {
    // Importar todas as imagens de filmes usando Vite's import.meta.glob
    const posterImages = import.meta.glob('../assets/films/*.jpg', {
      eager: true,
      import: 'default',
    });

    // Mapear os dados do JSON combinando com os arquivos de imagem reais
    const moviesWithPosters = moviesData.map(movie => {
      const posterPath = Object.keys(posterImages).find(path => 
        path.includes(`/${movie.id}.jpg`) || path.endsWith(movie.poster)
      );

      return {
        ...movie,
        posterSrc: posterPath ? posterImages[posterPath] : null
      };
    });

    setMovies(moviesWithPosters);
    // Selecionar o primeiro filme por padrão se houver filmes
    if (moviesWithPosters.length > 0) {
      setSelectedMovie(moviesWithPosters[0]);
    }
  }, []);

  // Efeito para o carrossel automático
  useEffect(() => {
    if (carouselRef.current && movies.length > 0) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const containerWidth = carouselRef.current.clientWidth;
      
      let scrollPos = 0;
      const scrollSpeed = 1; // Pixels por intervalo
      
      const scrollInterval = setInterval(() => {
        if (carouselRef.current) {
          scrollPos = (scrollPos + scrollSpeed) % scrollWidth;
          carouselRef.current.scrollLeft = scrollPos;
          
          // Reiniciar quando chegar ao final
          if (scrollPos >= scrollWidth - containerWidth) {
            // Um pequeno atraso antes de reiniciar
            setTimeout(() => {
              if (carouselRef.current) {
                scrollPos = 0;
                carouselRef.current.scrollLeft = 0;
              }
            }, 2000);
          }
        }
      }, 30);
      
      return () => clearInterval(scrollInterval);
    }
  }, [movies]);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <section className="watched-section">
      <div className="watched-banner">
        <img src={headerImage} alt="Stats Header" className="banner-img" />
        <div className="banner-content">
          <h2>Desafio 1 Mês de Filme - 2024</h2>
          <p>Desafio de 2024 de assistir um filme todo dia durante um mês!</p>
        </div>
      </div>
      
      {/* Carrossel de capas de filmes */}
      <div className="films-carousel-container">
        <h3>Filmes do Desafio</h3>
        <div className="films-carousel" ref={carouselRef}>
          <div className="carousel-inner">
            {movies.map((movie, idx) => (
              movie.posterSrc && (
                <div key={movie.id || `poster-${idx}`} className="carousel-item">
                  <img 
                    src={movie.posterSrc} 
                    alt={movie.title} 
                    className="carousel-poster" 
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      
      {/* Layout de filmes assistidos e detalhes lado a lado */}
      <div className="side-by-side-layout">
        {/* Painel de detalhes do filme selecionado */}
        <div className="movie-details-panel">
          {selectedMovie ? (
            <div className="details-layout">
              <div className="details-poster">
                {selectedMovie.posterSrc && (
                  <img src={selectedMovie.posterSrc} alt={selectedMovie.title} />
                )}
              </div>
              <div className="details-content">
                <h2>{selectedMovie.title} <span>({selectedMovie.year})</span></h2>
                <div className="details-metadata">
                  <p><strong>Diretor:</strong> {selectedMovie.director}</p>
                  <p><strong>País:</strong> {selectedMovie.country}</p>
                  <p><strong>Duração:</strong> {selectedMovie.runtime} minutos</p>
                  <p className="category-tag">Categoria do desafio: {selectedMovie.category}</p>
                </div>
                {selectedMovie.genre && (
                  <div className="details-genres">
                    {Array.isArray(selectedMovie.genre) 
                      ? selectedMovie.genre.map(g => (
                          <span key={g} className="genre-tag">{g}</span>
                        ))
                      : <span className="genre-tag">{selectedMovie.genre}</span>
                    }
                  </div>
                )}
                {selectedMovie.imdbRating && (
                  <div className="details-rating">
                    <span className="imdb-badge">IMDb</span>
                    <span className="rating-value">{selectedMovie.imdbRating}</span>
                  </div>
                )}
                {selectedMovie.plot && (
                  <div className="details-plot">
                    <h3>Sinopse</h3>
                    <p>{selectedMovie.plot}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <p>Selecione um filme da lista ao lado para ver mais detalhes</p>
            </div>
          )}
        </div>
        
        {/* Grade de filmes assistidos */}
        <div className="movie-grid">
          <h3>Filmes Assistidos</h3>
          <div className="posters-grid">
            {movies.map((movie, idx) => (
              <div 
                key={movie.id || `grid-${idx}`}
                className={`poster-container ${selectedMovie && selectedMovie.id === movie.id ? 'selected' : ''}`}
                onClick={() => handleSelectMovie(movie)}
              >
                {movie.posterSrc ? (
                  <img 
                    src={movie.posterSrc} 
                    alt={movie.title} 
                    className="poster-image" 
                  />
                ) : (
                  <div className="poster-placeholder">
                    <span>{movie.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchedMovies;
