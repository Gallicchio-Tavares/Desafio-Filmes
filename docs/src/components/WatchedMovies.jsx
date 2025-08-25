import React, { useEffect, useState } from "react";
import "../styles/WatchedMovies.css";
import { getPosterUrl } from "../utils/tmdb";

const WatchedMovies = ({ moviesData }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const moviesWithPosters = moviesData.map((movie) => ({
      ...movie,
      posterSrc: getPosterUrl(movie.poster_path),
    }));

    setMovies(moviesWithPosters);
    if (moviesWithPosters.length > 0) {
      setSelectedMovie(moviesWithPosters[0]);
    }
  }, [moviesData]);

  const handleSelectMovie = (movie) => {
    setSelectedMovie((prev) => (prev?.id === movie.id ? null : movie));
  };

  return (
    <section className="watched-section">
      <div className="movie-details-panel">
        {selectedMovie ? (
          <div className="details-layout">
            <div className="details-poster">
              {selectedMovie.posterSrc ? (
                <img
                  src={selectedMovie.posterSrc}
                  alt={selectedMovie.title}
                  loading="lazy"
                />
              ) : (
                <div className="poster-placeholder">
                  <span>{selectedMovie.title}</span>
                </div>
              )}
            </div>
            <div className="details-content">
              <h2 className="movie-title">
                {selectedMovie.title}
                <span className="movie-year">({selectedMovie.year})</span>
              </h2>
              <div className="details-metadata">
                <p><strong>Diretor:</strong> {selectedMovie.director}</p>
                <p><strong>País:</strong> {selectedMovie.country}</p>
                <p><strong>Duração:</strong> {selectedMovie.runtime} minutos</p>
              </div>
              {selectedMovie.genre && (
                <div className="details-genres">
                  {Array.isArray(selectedMovie.genre)
                    ? selectedMovie.genre.map((g) => (
                        <span key={g} className="genre-tag">{g}</span>
                      ))
                    : <span className="genre-tag">{selectedMovie.genre}</span>}
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
        <div className={`posters-grid ${selectedMovie ? "dim-others" : ""}`}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className={`poster-container ${selectedMovie?.id === movie.id ? "selected" : ""}`}
              onClick={() => handleSelectMovie(movie)}
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
