import React from 'react';
import "../styles/StatsHighlights.css";
import "../styles/Stats.css";
import { getPosterUrl } from "../utils/tmdb";

const Highlights = ({ movies }) => {
  const getDestaquesComEmpates = (moviesList, key, order = 'asc') => {
    const sorted = [...moviesList].sort((a, b) =>
      order === 'asc' ? a[key] - b[key] : b[key] - a[key]
    );
    const topValue = sorted[0][key];
    return sorted.filter(movie => movie[key] === topValue);
  };

  const destaques = [
    {
      titulo: 'Mais antigo',
      filmes: getDestaquesComEmpates(movies, 'year'),
      info: f => `Ano: ${f.year}`,
    },
    {
      titulo: 'Mais recente',
      filmes: getDestaquesComEmpates(movies, 'year', 'desc'),
      info: f => `Ano: ${f.year}`,
    },
    {
      titulo: 'Mais longo',
      filmes: getDestaquesComEmpates(movies, 'runtime', 'desc'),
      info: f => `${f.runtime} min`,
    },
    {
      titulo: 'Mais curto',
      filmes: getDestaquesComEmpates(movies, 'runtime'),
      info: f => `${f.runtime} min`,
    },
    {
      titulo: 'Maior nota',
      filmes: getDestaquesComEmpates(movies, 'imdbRating', 'desc'),
      info: f => `Nota: ${f.imdbRating}`,
    },
    {
      titulo: 'Menor nota',
      filmes: getDestaquesComEmpates(movies, 'imdbRating'),
      info: f => `Nota: ${f.imdbRating}`,
    },
  ];

  return (
    <section className="section highlights">
      <h3 className="sc-title">Estatísticas gerais dos filmes</h3>
      <div className="stats-grid">
        {destaques.map(({ titulo, filmes, info }) => {
          const posterSrc = getPosterUrl(filmes[0].poster_path);
          const movieTitle = filmes[0].originalTitle || filmes[0].title;

          return (
            <div key={titulo} className="stats-card">
              {posterSrc && (
                <img
                  src={posterSrc}
                  alt={movieTitle}
                  className="stats-poster"
                  loading="lazy"
                />
              )}
              <div className="stats-info-container">
                <h3 className="stats-subtitle">{titulo}</h3>
                <p className="stats-movie">
                  {filmes.length > 1 ? (
                    <span title={filmes.map(f => f.originalTitle || f.title).join(', ')}>
                      {movieTitle} +{filmes.length - 1}
                    </span>
                  ) : (
                    movieTitle
                  )}
                </p>
                <p className="stats-highlight-info">
                  {info(filmes[0])}
                  {filmes.length > 1 && (
                    <span className="stats-empate"> • {filmes.length} empatados</span>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Highlights;
