// src/pages/StatsAnual.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import WatchedMovies from "../../components/ElementosStats/WatchedMovies";
import StatsHeader from "../../components/ElementosStats/StatsHeader";
import Generos from "../../components/ElementosStats/Generos";
import Paises from "../../components/ElementosStats/Paises";
import Highlights from "../../components/ElementosStats/Highlights";
import Favoritos from "../../components/ElementosStats/Favoritos";
import Decadas from "../../components/ElementosStats/Decadas";

import favoritos2024 from "../../data/favoritos/2024.json";
import favoritos2025 from "../../data/favoritos/2025.json";
import movies2024 from "../../data/filmes/2024_with_details.json";
import movies2025 from "../../data/filmes/2025_with_details.json";

import "./StatsAnual.css";

const StatsAnual = () => {
  const [anoSelecionado, setAnoSelecionado] = useState(2025); // ano atual como padrao

  const dadosPorAno = {
    2024: {
      movies: movies2024,
      favoritos: favoritos2024
    },
    2025: {
      movies: movies2025,
      favoritos: favoritos2025
    }
  };

  const { movies, favoritos } = dadosPorAno[anoSelecionado];

  // calculos das estatísticas
  const filmesCount = movies.length;
  const horasCount = movies.reduce((acc, movie) => acc + movie.runtime, 0);
  const horas = Math.floor(horasCount / 60);
  const diretoresCount = new Set(movies.map(movie => movie.director)).size;
  
  const paises = movies.flatMap(movie => movie.country.split(',').map(c => c.trim()));
  const paisesCount = new Set(paises).size;

  const idiomas = movies.flatMap(movie =>
    movie.language?.split(',').map(l => l.trim()) || []
  );
  const idiomasCount = new Set(idiomas).size;

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="ano-selector">
          <button 
            className={`ano-btn ${anoSelecionado === 2024 ? 'active' : ''}`}
            onClick={() => setAnoSelecionado(2024)}
          >
            2024
          </button>
          <button 
            className={`ano-btn ${anoSelecionado === 2025 ? 'active' : ''}`}
            onClick={() => setAnoSelecionado(2025)}
          >
            2025
          </button>
        </div>

        <StatsHeader 
          ano={anoSelecionado}
          filmesCount={filmesCount}
          horasCount={horas}
          diretoresCount={diretoresCount}
          paisesCount={paisesCount}
          idiomasCount={idiomasCount}
        />

        <WatchedMovies moviesData={movies} />
        <Generos movies={movies} />
        <Paises movies={movies} />
        <Highlights movies={movies} />
        <Decadas movies={movies} />
        <Favoritos favoritos={favoritos} movies={movies} />
      </div>
      <Footer />
    </>
  );
};

export default StatsAnual;