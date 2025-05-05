// src/components/WatchedMovies.jsx
import React, { useEffect, useState, useRef } from 'react';
import '../styles/WatchedMovies.css';
import moviesData from '../data/moviesData.json';

const WatchedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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

  const handleSelectMovie = (movie) => {
    if (selectedMovie?.id === movie.id) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
    }
  };

  return (
    <section className="watched-section">
        <div className="movie-details-panel">
          {selectedMovie ? (
            <div className="details-layout">
              <div className="details-poster">
                {selectedMovie.posterSrc && (
                  <img src={selectedMovie.posterSrc} alt={selectedMovie.title} />
                )}
              </div>
              
              <div className="details-content">
                <h2 className="movie-title">{selectedMovie.title} <span className="movie-year">({selectedMovie.year})</span></h2>
                <div className="details-metadata">
                  <p><strong>Diretor:</strong> {selectedMovie.director}</p>
                  <p><strong>País:</strong> {selectedMovie.country}</p>
                  <p><strong>Duração:</strong> {selectedMovie.runtime} minutos</p>
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
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <p>Selecione um filme da lista para ver mais detalhes</p>
            </div>
          )}
        </div>
        
        <div className="movie-grid">
          <h3>Filmes Assistidos</h3>
          <div className={`posters-grid ${selectedMovie ? 'dim-others' : ''}`}>
            {movies.map((movie) => (
              <div 
                key={movie.id}
                className={`poster-container ${selectedMovie?.id === movie.id ? 'selected' : ''}`}
                onClick={() => handleSelectMovie(movie)}
                aria-label={`Selecionar filme ${movie.title}`}
              >
                {movie.posterSrc ? (
                  <img 
                    src={movie.posterSrc} 
                    alt={`Poster do filme ${movie.title}`} 
                    className="poster-image" 
                    loading="lazy"
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
    </section>
  );
};

export default WatchedMovies;