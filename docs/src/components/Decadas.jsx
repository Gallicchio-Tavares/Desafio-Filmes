// src/components/Decadas.jsx
import React, { useMemo } from "react";
import "../styles/Decadas.css";
import "../styles/stats.css"

const Decadas = ({ movies }) => {
  // Agrupa filmes por década, calcula contagem e lista títulos
  const dadosDecadas = useMemo(() => {
    const decadas = {};

    movies.forEach(movie => {
      const decada = Math.floor(movie.year / 10) * 10;
      const decadaKey = `${decada}s`;

      if (!decadas[decadaKey]) {
        decadas[decadaKey] = {
          count: 0,
          startYear: decada,
          filmes: []
        };
      }

      decadas[decadaKey].count++;
      decadas[decadaKey].filmes.push(movie.title);
    });

    return Object.entries(decadas)
      .map(([decada, data]) => ({
        decada,
        count: data.count,
        startYear: data.startYear,
        filmes: data.filmes,
      }))
      .sort((a, b) => a.startYear - b.startYear);
  }, [movies]);

  // Máximo para definir largura das barras
  const maxDecadas = Math.max(...dadosDecadas.map(d => d.count));

  return (
    <section className="section decadas">
      <h3 className="sc-title">Filmes assistidos por década</h3>
      <div className="decadas-chart">
        {dadosDecadas.map(({ decada, count }) => (
          <div key={decada} className="decada-bar-container">
            <div className="decada-label">{decada}</div>
            <div className="decada-bar-bg">
              <div
                className={`decada-bar-fill ${count === maxDecadas ? "highest" : ""}`}
                style={{ width: `${(count / maxDecadas) * 100}%` }}
              >
                <span className="decada-count">{count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Decadas;
