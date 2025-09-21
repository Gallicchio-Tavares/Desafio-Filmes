import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import conquistasData from "../../data/conquistas.json";
import logoPreto from "../../assets/logo_preto.png";
import "./index.css";

// Importa todas as imagens de conquistas
const imagensConquistas = import.meta.glob('../../assets/conquistas/*.jpg', { eager: true, import: 'default' });

const HallDaFama = () => {
  const [revealed, setRevealed] = useState({});

  const toggleReveal = (id) => {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getImagem = (c) => {
    const fileName = `${c.id}.jpg`;
    const key = Object.keys(imagensConquistas).find(k => k.split('/').pop() === fileName);
    return key ? imagensConquistas[key] : logoPreto;
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <h1 className="title">Hall da Fama</h1>
        <p className="subtitulo">Conquistas especiais obtidas pelos participantes nos desafios! Toque nos cards para descobrir quem desbloqueou uma conquista.</p>

        <div className="conquistas">
          {conquistasData.map((c) => {
            const isRevealed = revealed[c.id] || false;

            return (
              <div
                key={c.id}
                className={`conquista ${c.unlocked ? "unlocked" : "locked"}`}
                onClick={() => c.unlocked && toggleReveal(c.id)}
                style={{ cursor: c.unlocked ? "pointer" : "default" }}
              >
                <img
                  src={getImagem(c)}
                  alt={c.titulo}
                  loading="lazy"
                  className="img_conquista"
                />
                <h3>{c.titulo}</h3>
                <p>{c.descricao}</p>

                {c.unlocked && isRevealed && c.conquistadoPor.length > 0 && (
                  <div className="conquistado-por">
                    <strong style={{ color: '#808080' }}>Conquistado por:</strong>
                    <ul>
                      {c.conquistadoPor.map((p, idx) => (
                        <li key={idx}>
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="conquistador-link"
                          >
                            {p.nome}
                          </a>
                          <span className="conquistador-info">
                            {" "}— edição {p.edicao}
                            {p.detalhes && (
                              <span className="conquistador-detalhes">
                                {" "}• {p.detalhes}
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HallDaFama;