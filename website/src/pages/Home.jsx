import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import headerImg from "../assets/desafio-filmes.png";
import Footer from "../components/Footer";
import CountdownTimer from "../components/CountdownTimer";

const Home = () => {
  
  return (
    <div className="container">
      <Navbar />

      <header>
      <img src={headerImg} alt="Desafio" className="header-img" />
      <div className="hero-content">
          <p className="hero-tagline">30 dias. 30 filmes. Uma jornada cinematográfica única.</p>
           
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">+100</span>
              <span className="stat-label">Horas assistidas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Filmes Vistos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Amor por Cinema</span>
            </div>
          </div>

          <CountdownTimer />
        </div>
      </header>

      <section className="section rules">
        <h3>Como funciona</h3>
        <ul>
          <li>Assista <strong>1 filme por dia</strong> sem pular nem acumular.</li>
          <li>O filme precisa ser <strong>inédito</strong> pra você e ter <strong>pelo menos 60 minutos</strong>.</li>
          <li>Não pode começar um filme num dia e terminar no outro.</li>
        </ul>
      </section>

      <section className="section challenges">
        <h3>Desafios da edição</h3>
        <ol>
          <li>Filmes de <strong>7 países diferentes</strong> (sem contar Brasil e o do item 5).</li>
          <li><strong>2 filmes brasileiros</strong>, excluindo os clássicos manjados.</li>
          <li><strong>1 filme com 100 anos ou mais</strong> (até 1925).</li>
          <li><strong>1 filme do desafio passado</strong> que você ainda não viu.</li>
          <li><strong>1 filme de um país que não existe mais</strong>.</li>
          <li><strong>1 filme dirigido por uma mulher</strong>.</li>
          <li><strong>1 filme de terror</strong>.</li>
          <li><strong>1 filme com 3 horas ou mais</strong>.</li>
        </ol>
        <p className="note">Cada filme só pode contar para uma única categoria.</p>
      </section>

      <section className="section prize">
        <h3>Recompensa</h3>
        <ul>
          <li>Todos entram com <strong>R$30</strong>.</li>
          <li>Quem cumprir os <strong>30 dias e todas as 8 categorias</strong> divide o prêmio igualmente.</li>
          <li>Quem não completar, perde tudo.</li>
        </ul>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
