import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WatchedMovies from "../components/WatchedMovies";
import "../styles/Stats.css";

const Stats = () => {
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
            <h2>108.7</h2>
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

      <WatchedMovies />

      <section className="section generos">
        <h3>Gêneros mais vistos</h3>
        {/* <img src={generos} alt="Gráfico de gêneros" className="grafico" /> */}
      </section>

      <section className="section paises">
        <h3>Distribuição por país</h3>
        {/* <img src={paises} alt="Gráfico de países" className="grafico" /> */}
      </section>

      <section className="section duracao">
        <h3>Duração dos filmes</h3>
        {/* <img src={duracao} alt="Gráfico de duração" className="grafico" /> */}
      </section>

      <section className="section mapa">
        <h3>Mapa mundial dos filmes</h3>
        {/* <img src={mapa} alt="Mapa dos países dos filmes" className="grafico" /> */}
      </section>

      <Footer />
    </div>
  );
};

export default Stats;
