import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import "./index.css";
import headerImg from "../../assets/desafio-filmes.png";
import Footer from "../../components/Footer";
import CountdownTimer from "../../components/CountdownTimer";
import ITSOVER from "../../components/ITSOVER";

const Home = () => {
  
  return (
    <>
      <Header/>
      <div className="container">
        {/* <ITSOVER /> */}
        <section className="section rules">
          <h3>Como funciona</h3>
          <ul>
            <li>O desafio ocorrerá a partir do dia 26/07 até 24/08.</li>
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
        
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
