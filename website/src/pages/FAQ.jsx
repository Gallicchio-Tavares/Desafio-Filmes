import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/FAQ.css";

const FAQ = () => {
  return (
    <div className="container">
      <Navbar />
      
      <header className="header">
        <h1 className="title">FAQ - Perguntas Frequentes</h1>
      </header>

      <section className="section faq">
        <h3>O que é o Desafio Filmes 2025?</h3>
        <p>
          O Desafio Filmes 2025 é uma competição onde o objetivo é assistir a
          30 filmes durante 30 dias, seguindo categorias específicas de filmes.
        </p>
      </section>

      <section className="section faq">
        <h3>Como eu participo?</h3>
        <p>
          Basta seguir as regras do desafio e completar as 8 categorias de filmes. 
          Você pode se inscrever através dos links de contato no nosso site.
        </p>
      </section>

      <section className="section faq">
        <h3>Posso assistir filmes mais de uma vez?</h3>
        <p>
          Não. Cada filme assistido deve ser inédito para o participante e não pode ser repetido.
        </p>
      </section>

      <section className="section faq">
        <h3>Qual é a premiação?</h3>
        <p>
          Todos os participantes entram com R$30. Quem completar o desafio e assistir aos 30 filmes, dividindo as 8 categorias, leva a premiação.
        </p>
      </section>

      <section className="section faq">
        <h3>Como posso entrar em contato?</h3>
        <p>
          Para mais informações, entre em contato conosco através do nosso <a href="/#">Discord</a> ou <a href="/#">WhatsApp</a>.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
