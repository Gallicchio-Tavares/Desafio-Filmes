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

import favoritosData from "../data/favoritos2024.json";
import movies2024 from "../data/moviesData2024.json";

import "../styles/StatsHighlights.css";
import "../styles/Stats.css";
import "../styles/Decadas.css"
import "../styles/Favs.css";

const Stats = () => {
  const filmesCount = movies2024.length;
  const horasCount = movies2024.reduce((acc, movie) => acc + movie.runtime, 0);
  const diretoresCount = new Set(movies2024.map(movie => movie.director)).size;

  const paises = movies2024.flatMap(movie => movie.country.split(',').map(c => c.trim()));
  const paisesCount = new Set(paises).size;

  const idiomas = movies2024.flatMap(movie => movie.language.split(',').map(l => l.trim()));
  const idiomasCount = new Set(idiomas).size;

  return (
    <>
    <div className="container">
      <Navbar />
      
      <StatsHeader 
        ano={2024}
        filmesCount={filmesCount}
        horasCount={horasCount}
        diretoresCount={diretoresCount}
        paisesCount={paisesCount}
        idiomasCount={idiomasCount}
      />

      <WatchedMovies moviesData={movies2024} />

      <Generos movies={movies2024} />

      <Paises movies={movies2024} />

      <Highlights movies={movies2024} />

      <Decadas movies={movies2024} />

      <Favoritos favoritos={favoritosData} movies={movies2024} />
    </div>
    <Footer />
    </>
  );
};

export default Stats;
