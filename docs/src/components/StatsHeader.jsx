import React from "react";
import "../styles/Stats.css";

const StatsHeader = ({
  ano,
  filmesCount,
  horasCount,
  diretoresCount,
  paisesCount,
  idiomasCount
}) => {
  return (
    <header className="stats-header">
      <h1>{ano}</h1>
      <p className="subtitle">Estatísticas dos participantes</p>
      <div className="info-geral">
        <span>
          <h2>{filmesCount}</h2>
          <p>Filmes</p>
        </span>
        <span>
          <h2>{horasCount}</h2>
          <p>Minutos</p>
        </span>
        <span>
          <h2>{diretoresCount}</h2>
          <p>Diretores</p>
        </span>
        <span>
          <h2>{paisesCount}</h2>
          <p>Países</p>
        </span>
        <span>
          <h2>{idiomasCount}</h2>
          <p>Idiomas</p>
        </span>
      </div>
    </header>
  );
};

export default StatsHeader;
