import "./Favoritos.css";

const pastelColors = [
  { primary: "#A8D5BA", secondary: "#D0E8D0" },
  { primary: "#F9C6C9", secondary: "#F9E2E2" },
  { primary: "#F3D6E4", secondary: "#F7E6F2" },
  { primary: "#FFD9B3", secondary: "#FFE6CC" },
  { primary: "#B5D8EB", secondary: "#D6E9F7" },
  { primary: "#FFE3A3", secondary: "#FFF3CC" },
  { primary: "#D6CDEA", secondary: "#E8E3F7" },
];

const Favoritos = ({ favoritos, movies }) => {
  return (
    <section className="section favoritos">
      <h3 className="sc-title">Filmes favoritos da edição</h3>
      <div className="favoritos-container">
        {favoritos.map((participante, index) => {
          const filmes = participante.favoritos
            .map((id) => movies.find((m) => m.id === id))
            .filter(Boolean);

          const colors = pastelColors[index % pastelColors.length];

          return (
            <div
              key={participante.id}
              className="participante-favoritos"
              style={{
                "--cor-primaria": colors.primary,
                "--cor-secundaria": colors.secondary,
              }}
            >
              <h4 className="participante-nome">{participante.nome}</h4>
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Favoritos;
