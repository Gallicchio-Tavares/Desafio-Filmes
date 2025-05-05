import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/FAQ.css";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("geral");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container">
      <Navbar />
      
      <header className="header">
        <h1 className="title">FAQ - Perguntas Frequentes</h1>
        <p className="faq-intro">Encontre respostas para as dúvidas mais comuns sobre o Desafio Filmes 2025</p>
      </header>

      <div className="faq-category-tabs">
        <button 
          className={`category-tab ${activeCategory === "geral" ? "active" : ""}`} 
          onClick={() => handleCategoryChange("geral")}
        >
          Geral
        </button>
        <button 
          className={`category-tab ${activeCategory === "regras" ? "active" : ""}`}
          onClick={() => handleCategoryChange("regras")}
        >
          Regras
        </button>
        <button 
          className={`category-tab ${activeCategory === "categorias" ? "active" : ""}`}
          onClick={() => handleCategoryChange("categorias")}
        >
          Categorias
        </button>
        <button 
          className={`category-tab ${activeCategory === "premiacao" ? "active" : ""}`}
          onClick={() => handleCategoryChange("premiacao")}
        >
          Premiação
        </button>
      </div>

      {/* Perguntas gerais */}
      <div className={`faq-category ${activeCategory === "geral" ? "active" : ""}`}>
        <section className="section faq">
          <h3>O que é o Desafio Filmes 2025?</h3>
          <p>
            O Desafio Filmes 2025 é uma competição onde o objetivo é assistir a
            30 filmes durante 30 dias, seguindo categorias específicas de filmes.
            É uma forma divertida de explorar cinema de maneira organizada enquanto 
            compete com amigos.
          </p>
        </section>

        <section className="section faq">
          <h3>Quando acontece o Desafio Filmes 2025?</h3>
          <p>
            O desafio ocorrerá de 26 de julho a 24 de agosto de 2025. São exatamente 
            30 dias para assistir 30 filmes.
          </p>
        </section>

        <section className="section faq">
          <h3>Como eu participo?</h3>
          <p>
            Basta seguir as regras do desafio e completar as 8 categorias de filmes. 
            Você pode se inscrever através dos links de contato no nosso site até 
            o dia 20 de julho de 2025.
          </p>
        </section>

        <section className="section faq">
          <h3>Posso participar sozinho?</h3>
          <p>
            Sim, você pode participar sozinho e acompanhar seu progresso. Porém, 
            para concorrer à premiação, é necessário entrar no grupo oficial e 
            contribuir com o valor estipulado.
          </p>
        </section>
        
        <section className="section faq">
          <h3>Como posso entrar em contato?</h3>
          <p>
            Para mais informações, entre em contato conosco através do nosso 
            <a href="https://discord.com/users/umapessoahumana"> Discord</a> ou 
            <a href="https://wa.me/5521972685484?text=Olá,%20quero%20participar%20do%20Desafio%20Filmes%202025!"> WhatsApp</a>.
          </p>
        </section>
      </div>

      {/* Regras */}
      <div className={`faq-category ${activeCategory === "regras" ? "active" : ""}`}>
        <section className="section faq">
          <h3>Quais são as regras básicas do desafio?</h3>
          <p>
            As regras básicas são:
            <ul className="faq-list">
              <li>Assista 1 filme por dia durante 30 dias consecutivos</li>
              <li>O filme deve ser inédito para você</li>
              <li>O filme precisa ter pelo menos 60 minutos de duração</li>
              <li>Não é permitido acumular filmes ou assistir em dias diferentes</li>
              <li>Não é permitido começar um filme em um dia e terminar no outro</li>
            </ul>
          </p>
        </section>

        <section className="section faq">
          <h3>Posso assistir filmes mais de uma vez?</h3>
          <p>
            Não. Cada filme assistido deve ser inédito para o participante e não pode ser repetido
            durante o desafio.
          </p>
        </section>

        <section className="section faq">
          <h3>Séries e documentários contam no desafio?</h3>
          <p>
            Não. Apenas filmes longa-metragem são válidos para o desafio. Séries, 
            minisséries, documentários e curta-metragens não são aceitos.
          </p>
        </section>
        
        <section className="section faq">
          <h3>O que acontece se eu perder um dia?</h3>
          <p>
            Infelizmente, não há compensação para filmes não assistidos. Se você não 
            assistir a um filme em determinado dia, não poderá compensar assistindo a 
            dois filmes no dia seguinte. Você continuará no desafio, mas não poderá mais 
            concorrer à premiação final.
          </p>
        </section>
        
        <section className="section faq">
          <h3>Como comprovar que assisti ao filme?</h3>
          <p>
            Diariamente, você deve registrar o filme assistido no nosso grupo oficial. 
            Recomendamos que também registre em plataformas como Letterboxd para melhor 
            acompanhamento. Caso haja dúvidas, podemos pedir uma breve descrição ou análise 
            do filme.
          </p>
        </section>
      </div>

      {/* Categorias */}
      <div className={`faq-category ${activeCategory === "categorias" ? "active" : ""}`}>
        <section className="section faq">
          <h3>Quais são as categorias do desafio?</h3>
          <p>
            O Desafio Filmes 2025 inclui 8 categorias especiais:
            <ul className="faq-list">
              <li>Filmes de 7 países diferentes (excluindo Brasil e países extintos)</li>
              <li>2 filmes brasileiros (excluindo os mais conhecidos)</li>
              <li>1 filme com 100 anos ou mais (até 1925)</li>
              <li>1 filme do desafio passado que você ainda não assistiu</li>
              <li>1 filme de um país que não existe mais</li>
              <li>1 filme dirigido por uma mulher</li>
              <li>1 filme de terror</li>
              <li>1 filme com 3 horas ou mais de duração</li>
            </ul>
          </p>
        </section>
        
        <section className="section faq">
          <h3>Um filme pode contar para mais de uma categoria?</h3>
          <p>
            Não. Cada filme só pode ser contabilizado para uma única categoria do desafio, 
            então escolha estrategicamente como classificá-los.
          </p>
        </section>
        
        <section className="section faq">
          <h3>O que é considerado "um país que não existe mais"?</h3>
          <p>
            São países que existiram oficialmente, mas que atualmente não existem com 
            a mesma formação política, como a União Soviética, Iugoslávia, Tchecoslováquia, 
            entre outros. O filme deve ter sido produzido quando o país ainda existia 
            oficialmente.
          </p>
        </section>
        
        <section className="section faq">
          <h3>Onde posso encontrar filmes do desafio passado?</h3>
          <p>
            Você pode encontrar a lista completa de filmes do desafio anterior na página 
            de estatísticas do nosso site. Lá, estão disponíveis todos os filmes que foram 
            assistidos pelos participantes na edição anterior.
          </p>
        </section>
        
        <section className="section faq">
          <h3>Posso sugerir categorias para edições futuras?</h3>
          <p>
            Sim! Recebemos sugestões de categorias para próximas edições. Envie suas 
            ideias através do nosso Discord ou WhatsApp. As melhores sugestões poderão 
            ser incorporadas em desafios futuros.
          </p>
        </section>
      </div>

      {/* Premiação */}
      <div className={`faq-category ${activeCategory === "premiacao" ? "active" : ""}`}>
        <section className="section faq">
          <h3>Qual é a premiação?</h3>
          <p>
            Todos os participantes entram com R$30. Quem completar o desafio inteiro (30 filmes e 
            todas as 8 categorias) divide o prêmio igualmente. Quem não completar, perde sua contribuição.
          </p>
        </section>
        
        <section className="section faq">
          <h3>Quando a premiação é distribuída?</h3>
          <p>
            A premiação será distribuída no dia 25 de agosto de 2025, após a verificação dos registros 
            de todos os participantes. Certifique-se de que todos os filmes foram registrados corretamente.
          </p>
        </section>
        
        <section className="section faq">
          <h3>O que acontece com o dinheiro dos participantes que não completarem o desafio?</h3>
          <p>
            O valor dos participantes que não completarem o desafio será redistribuído entre os vencedores 
            que completarem o desafio inteiro.
          </p>
        </section>
        
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
