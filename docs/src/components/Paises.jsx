import "../styles/Stats.css";
import React from "react";


const Paises = ({ movies }) => {
  // Contar países
  const countryCounts = movies.reduce((acc, movie) => {
    const country = movie.country || "Desconhecido";
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {});

  // Contar idiomas
  const languageCounts = movies.reduce((acc, movie) => {

    const language = movie.language || movie.languages || "Desconhecido";
    // Se language for array, conta cada idioma: (por enquanto n tem array, mas vou por quando tiver tempo)
    if (Array.isArray(language)) {
      language.forEach(lang => {
        acc[lang] = (acc[lang] || 0) + 1;
      });
    } else {
      acc[language] = (acc[language] || 0) + 1;
    }
    return acc;
  }, {});

  // Transformar objetos em arrays ordenados
  const countries = Object.entries(countryCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const languages = Object.entries(languageCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  // Máximos para normalizar barras
  const maxCountry = countries.length > 0 ? countries[0].count : 1;
  const maxLanguage = languages.length > 0 ? languages[0].count : 1;

  return (
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
  );
};

export default Paises;
