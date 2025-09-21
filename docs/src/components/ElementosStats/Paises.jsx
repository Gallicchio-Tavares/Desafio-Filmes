import "./Paises.css";

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
    if (Array.isArray(language)) {
      language.forEach(lang => {
        acc[lang] = (acc[lang] || 0) + 1;
      });
    } else {
      acc[language] = (acc[language] || 0) + 1;
    }
    return acc;
  }, {});

  // Transformar e ordenar países (top 12)
  const countries = Object.entries(countryCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);

  // Transformar e ordenar idiomas (top 12)
  const languages = Object.entries(languageCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);

  // Máximos para normalizar barras
  const maxCountry = countries.length > 0 ? countries[0].count : 1;
  const maxLanguage = languages.length > 0 ? languages[0].count : 1;

  return (
    <section className="section paises">
      <h3 className="sc-title">Distribuição por país</h3>
      <div className="bar-charts-wrapper">
        <div className="bar-chart">
          <h4 className="chart-subtitle">Países</h4>
          {countries.length > 0 ? (
            countries.map((item) => (
              <div key={item.name} className="pais-bar-container">
                <div className="pais-label">{item.name}</div>
                <div className="pais-bar-bg">
                  <div
                    className="pais-bar-fill"
                    style={{ width: `${(item.count / maxCountry) * 100}%` }}
                  ></div>
                </div>
                <span className="pais-count">{item.count}</span>
              </div>
            ))
          ) : (
            <p className="no-data">Nenhum país encontrado</p>
          )}
        </div>

        <div className="bar-chart">
          <h4 className="chart-subtitle">Idiomas</h4>
          {languages.length > 0 ? (
            languages.map((item) => (
              <div key={item.name} className="pais-bar-container">
                <div className="pais-label">{item.name}</div>
                <div className="pais-bar-bg">
                  <div
                    className="pais-bar-fill"
                    style={{ width: `${(item.count / maxLanguage) * 100}%` }}
                  ></div>
                </div>
                <span className="pais-count">{item.count}</span>
              </div>
            ))
          ) : (
            <p className="no-data">Nenhum idioma encontrado</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Paises;