import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import conquistasData from "../../data/conquistas.json";
import logoPreto from "../../assets/logo_preto.png";
import "./index.css";

const imagensConquistas = import.meta.glob('../../assets/conquistas/*.jpg', { eager: true, import: 'default' });

const CATEGORIAS = {
  misc: { 
    nome: "Diversos", 
    // desc: "Conquistas variadas e desafiadoras",
    icon: "fas fa-star" 
  },
  paises: { 
    nome: "Regionais", 
    // desc: "Conquistas baseadas em nacionalidade e região",
    icon: "fas fa-globe-americas" 
  },
  tematicos: { 
    nome: "Temáticos", 
    // desc: "Conquistas baseadas em temas específicos",
    icon: "fas fa-theater-masks" 
  },
  decadas: { 
    nome: "Décadas", 
    // desc: "Viagem no tempo através do cinema",
    icon: "fas fa-calendar-alt" 
  },
  generos: { 
    nome: "Gêneros", 
    // desc: "Exploração por gêneros cinematográficos",
    icon: "fas fa-film" 
  }
};

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

  // Agrupar conquistas por categoria
  const conquistasPorCategoria = conquistasData.reduce((acc, conquista) => {
    const categoria = conquista.categoria || "misc";
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(conquista);
    return acc;
  }, {});

  // Ordenar as categorias na ordem desejada
  const ordemCategorias = ['misc', 'tematicos', 'paises', 'decadas', 'generos'];

  return (
    <>
      <div className="container">
        <Navbar />
        <h1 className="title">Hall da Fama</h1>
        <p className="subtitulo">
          Conquistas especiais obtidas pelos participantes nos desafios! 
          Toque nos cards para descobrir quem desbloqueou uma conquista.
        </p>

        {ordemCategorias.map(categoriaKey => {
          const conquistas = conquistasPorCategoria[categoriaKey] || [];
          if (conquistas.length === 0) return null;

          const categoriaInfo = CATEGORIAS[categoriaKey];
          
          return (
            <div key={categoriaKey} className="categoria-section">
              <h2 className="categoria-titulo">
                <i className={categoriaInfo.icon}></i> {categoriaInfo.nome}
              </h2>
              <p className="categoria-descricao">{categoriaInfo.desc}</p>
              
              <div className="conquistas">
                {conquistas.map((c) => {
                  const isRevealed = revealed[c.id] || false;

                  return (
                    <div
                      key={c.id}
                      className={`conquista ${c.unlocked ? "unlocked" : "locked"}`}
                      onClick={() => c.unlocked && toggleReveal(c.id)}
                      style={{ 
                        cursor: c.unlocked ? "pointer" : "default", 
                        borderLeft: c.unlocked ? "5px solid #40A578" : "5px solid var(--secondary)"
                      }}>
                      <img
                        src={getImagem(c)}
                        alt={c.titulo}
                        loading="lazy"
                        className="img_conquista"
                      />
                      <h3 className="titulo-cat" style={{color: c.unlocked ? "#9DDE8B" : "var(--primary)"}}>{c.titulo}</h3>
                      <p className="descricao-cat">{c.descricao}</p>

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
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default HallDaFama;