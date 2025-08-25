import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WatchedMovies from "../components/WatchedMovies";
import StatsHeader from "../components/StatsHeader";
import Generos from "../components/Generos";
import Paises from "../components/Paises";
import Highlights from "../components/Highlights";
import Favoritos from "../components/Favoritos";
import Decadas from "../components/Decadas";

import favoritosData from "../data/favoritos/2025.json";
import movies2025 from "../data/filmes/2025_with_details.json"; // agr tá usando os posteres do tmdb

import "../styles/StatsHighlights.css";
import "../styles/Stats.css";
import "../styles/Decadas.css"
import "../styles/Favs.css";

const Stats2025 = () => {
  const filmesCount = movies2025.length;
  const horasCount = movies2025.reduce((acc, movie) => acc + movie.runtime, 0);
  const horas = Math.floor(horasCount / 60);

  const diretoresCount = new Set(movies2025.map(movie => movie.director)).size; 

  const paises = movies2025.flatMap(movie => movie.country.split(',').map(c => c.trim()));
  const paisesCount = new Set(paises).size;

  const idiomas = movies2025.flatMap(movie =>
  movie.language?.split(',').map(l => l.trim()) || []
  );
  const idiomasCount = new Set(idiomas).size;

  return (
    <>
    <div className="container">
      <Navbar />
      
      <StatsHeader 
        ano={2025}
        filmesCount={filmesCount}
        horasCount={horas}
        diretoresCount={diretoresCount}
        paisesCount={paisesCount}
        idiomasCount={idiomasCount}
      />

      <WatchedMovies moviesData={movies2025} />

      <Generos movies={movies2025} />

      <Paises movies={movies2025} />

      <Highlights movies={movies2025} />

      <Decadas movies={movies2025} />

      <Favoritos favoritos={favoritosData} movies={movies2025} />
    </div>
    <Footer />
    </>
  );
};

export default Stats2025;
