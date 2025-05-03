import React from "react";

const Stats = () => {
  return (
    <div className="container">
      <h2 className="subtitle">Estatísticas de Edições Anteriores</h2>
      {/* aba do ano de 2024, por exemplo */}
      <ul>
        <li>📈 Participantes em 2024: 14</li>
        <li>✅ Pessoas que completaram: 9</li>
        <li>🎬 Filmes únicos assistidos: 328</li>
        <li>🏆 Gênero mais assistido: Drama</li>
        <li>🌟 Top 3 filmes: Memórias de um Assassinato, Jeanne Dielman, Tio Boonmee</li>
      </ul>
    </div>
  );
};

export default Stats;
