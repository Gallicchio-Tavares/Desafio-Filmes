import "./Favoritos.css";

const Favoritos = ({ favoritos, movies }) => {
  return (
    <section className="section favoritos">
      <h3 className="sc-title">Filmes favoritos da edição</h3>

      <div className="favoritos-container">
        {favoritos.map((participante) => {
          const filmes = participante.favoritos
            .map((id) => movies.find((m) => m.id === id))
            .filter(Boolean);

          return (
            <div
              key={participante.id}
              className="participante-favoritos"
            >
              <h4 className="participante-nome">
                {participante.nome}
              </h4>

              {filmes.length > 0 && (
                <div className="filmes-grid">
                  {filmes.map((filme) => {
                    const posterSrc = filme.poster_path
                      ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
                      : null;

                    return (
                      <div key={filme.id} className="filme-card">
                        {posterSrc ? (
                          <img
                            src={posterSrc}
                            alt={filme.title}
                            className="filme-poster"
                            loading="lazy"
                          />
                        ) : (
                          <div className="poster-placeholder">
                            <span>{filme.title}</span>
                          </div>
                        )}

                        <div className="filme-overlay">
                          <span>{filme.title}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Favoritos;