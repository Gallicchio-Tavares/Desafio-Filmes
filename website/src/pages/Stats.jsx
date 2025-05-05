import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WatchedMovies from "../components/WatchedMovies";
import movies from "../data/moviesData.json";
import "../styles/StatsHighlights.css";
import "../styles/Stats.css";

const Stats = () => {
  const posters = import.meta.glob('../assets/films/*.jpg', { eager: true });

    // Função para pegar todos os itens empatados no topo
    const getDestaquesComEmpates = (movies, key, order = 'asc') => {
      const sorted = [...movies].sort((a, b) => 
        order === 'asc' ? a[key] - b[key] : b[key] - a[key]
      );
      
      const topValue = sorted[0][key];
      return sorted.filter(movie => movie[key] === topValue);
    };

    // Calcula os destaques com tratamento de empates
  const calcularDestaques = () => {
    const maisAntigos = getDestaquesComEmpates(movies, 'year');
    const maisRecentes = getDestaquesComEmpates(movies, 'year', 'desc');
    const maisLongos = getDestaquesComEmpates(movies, 'runtime', 'desc');
    const maisCurtos = getDestaquesComEmpates(movies, 'runtime');
    const maioresNotas = getDestaquesComEmpates(movies, 'imdbRating', 'desc');
    const menoresNotas = getDestaquesComEmpates(movies, 'imdbRating');

    return [
      { 
        titulo: "Mais antigo", 
        filmes: maisAntigos,
        info: (filme) => `${filme.year}`
      },
      { 
        titulo: "Mais recente", 
        filmes: maisRecentes,
        info: (filme) => `${filme.year}`
      },
      { 
        titulo: "Mais longo", 
        filmes: maisLongos,
        info: (filme) => `${filme.runtime} min`
      },
      { 
        titulo: "Mais curto", 
        filmes: maisCurtos,
        info: (filme) => `${filme.runtime} min`
      },
      { 
        titulo: "Maior nota", 
        filmes: maioresNotas,
        info: (filme) => `IMDb: ${filme.imdbRating}`
      },
      { 
        titulo: "Menor nota", 
        filmes: menoresNotas,
        info: (filme) => `IMDb: ${filme.imdbRating}`
      }
    ];
  };

  const destaques = calcularDestaques();

  const countries = [
    { name: "EUA", count: 40 },
    { name: "UK", count: 9 },
    { name: "Brasil", count: 5 },
    { name: "França", count: 5 },
    { name: "Alemanha", count: 3 },
    { name: "Tchecoslovakia", count: 2 },
    { name: "Canadá", count: 2 },
    { name: "URSS", count: 2 },
    { name: "Suécia", count: 2 }
  ];
  
  const languages = [
    { name: "Inglês", count: 42 },
    { name: "Português", count: 3 },
    { name: "Tcheco", count: 2 },
    { name: "Russo", count: 2 },
    { name: "Francês", count: 2 }
  ];
  
  const maxCountry = Math.max(...countries.map(c => c.count));
  const maxLanguage = Math.max(...languages.map(l => l.count));

  return (
    <div className="container">
      <Navbar />

      <header className="stats-header">
        <h1>2024</h1>
        <p className="subtitle">Estatísticas dos participantes</p>
        <div className="info-geral">
          <span>
            <h2>57</h2>
            <p>Filmes</p>
          </span>
          <span>
            <h2>109</h2>
            <p>Horas</p>
          </span>
          <span>
            <h2>55</h2>
            <p>Diretores</p>
          </span>
          <span>
            <h2>19</h2>
            <p>Países</p>
          </span>
          <span>
            <h2>11</h2>
            <p>Idiomas</p>
          </span>
        </div>
      </header>

      <WatchedMovies/>

      <section className="section generos">
        <h3 className="sc-title">Gêneros mais vistos</h3>
        <div className="genre-bars">
          {[
            { name: "Drama", count: 37 },
            { name: "Thriller", count: 18 },
            { name: "Ação", count: 15 },
            { name: "Comédia", count: 12 },
            { name: "Aventura", count: 11 },
            { name: "Crime", count: 11 },
            { name: "Fantasia", count: 8 },
            { name: "Sci Fi", count: 7 },
            { name: "Terror", count: 6 },
            { name: "Romance", count: 6 }
          ].map((genre) => (
            <div key={genre.name} className="bar-wrapper">
              <span className="genre-name">{genre.name}</span>
              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{ width: `${(genre.count / 37) * 100}%` }}
                ></div>
              </div>
              <span className="genre-count">{genre.count}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section paises">
        <h3 className="sc-title">Distribuição por país</h3>
        <div className="bar-charts-wrapper">
          <div className="bar-chart">
            <h4>Países</h4>
            {countries.map((item) => (
              <div key={item.name} className="bar-wrapper-2">
                <span className="bar-label">{item.name}</span>
                <div className="bar-bg">
                  <div
                    className="bar-fill"
                    style={{ width: `${(item.count / maxCountry) * 100}%` }}
                  ></div>
                </div>
                <span className="bar-count">{item.count}</span>
              </div>
            ))}
          </div>

          <div className="bar-chart">
            <h4>Idiomas</h4>
            {languages.map((item) => (
              <div key={item.name} className="bar-wrapper-2">
                <span className="bar-label">{item.name}</span>
                <div className="bar-bg">
                  <div
                    className="bar-fill"
                    style={{ width: `${(item.count / maxLanguage) * 100}%` }}
                  ></div>
                </div>
                <span className="bar-count">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="section stats">
        <h3 className="sc-title">Estatísticas gerais dos filmes</h3>
        <div className="stats-grid">
          {destaques.map(({ titulo, filmes, info }) => (
            <div key={titulo} className="stats-card">
              {/* Mostra apenas o primeiro filme do array de empates */}
              <img
                src={posters[`../assets/films/${filmes[0].id}.jpg`].default}
                alt={filmes[0].title}
                className="stats-poster"
              />
              <div className="stats-info-container">
                <h3 className="stats-subtitle">{titulo}</h3>
                <p className="stats-movie">
                  {filmes.length > 1 ? (
                    <span title={filmes.map(f => f.title).join(', ')}>
                      {filmes[0].title} +{filmes.length - 1}
                    </span>
                  ) : (
                    filmes[0].title
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
          ))}
        </div>
      </section>

      <section className="section mapa">
        <h3 className="sc-title">Mapa mundial dos filmes</h3>
        {/* <img src={mapa} alt="Mapa dos países dos filmes" className="grafico" /> */}
      </section>

      <section className="section favoritos">
        <h3 className="sc-title">Filmes favoritos da edição</h3>
      </section>

      <Footer />
    </div>
  );
};

export default Stats;
