import "../styles/Generos.css";

const Generos = ({ movies }) => {
  const genreCounts = movies.reduce((acc, movie) => {
    if (Array.isArray(movie.genre)) {
      movie.genre.forEach(genre => {
        if (genre) acc[genre] = (acc[genre] || 0) + 1;
      });
    }
    return acc;
  }, {});

  const genreArray = Object.entries(genreCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 12); // Aumentei para 12 para manter padrão

  const maxCount = genreArray.length > 0 ? genreArray[0].count : 1;

  return (
    <section className="section generos">
      <h3 className="sc-title">Gêneros mais vistos</h3>
      <div className="generos-chart">
        {genreArray.map(genre => (
          <div key={genre.name} className="genero-bar-container">
            <div className="genero-label">{genre.name}</div>
            <div className="genero-bar-bg">
              <div
                className="genero-bar-fill"
                style={{ width: `${(genre.count / maxCount) * 100}%` }}
              />
            </div>
            <span className="genero-count">{genre.count}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Generos;