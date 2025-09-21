import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./index.css";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("geral");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
    <div className="container">
      <Navbar />
      
      <header className="titulo-regras">
        <h1 className="title">Regras do Desafio</h1>
      </header>

      <div className="regras-category-tabs">
        <button 
          className={`category-tab ${activeCategory === "geral" ? "active" : ""}`} 
          onClick={() => handleCategoryChange("geral")}
        >
          Geral
        </button>
        <button 
          className={`category-tab ${activeCategory === "premiacao" ? "active" : ""}`}
          onClick={() => handleCategoryChange("premiacao")}
        >
          Premiação
        </button>
        <button 
          className={`category-tab ${activeCategory === "faq" ? "active" : ""}`}
          onClick={() => handleCategoryChange("faq")}
        >
          FAQ
        </button>
      </div>

      {/* Regras gerais */}
      <div className={`regras-category ${activeCategory === "geral" ? "active" : ""}`}>
        {/* Nas regras gerais, precisa ter informação  */}

        <section className="section regras">
          <h3>Como eu participo?</h3>
          <p>
            Primeiro, você precisa comunicar o seu interesse em participar do desafio, seja pelo WhatsApp
            ou pelo Discord. Daí, quando estiver próximo da data, nós vamos criar o grupo do desafio no
            WhatsApp com todos os participantes. Você vai precisar contribuir com R$30,00 para entrar no desafio, que vai
            compor o montante que será distribuído entre os vencedores ao cabo dos 30 dias de desafio.
          </p>
        </section>
        
        <section className="section regras">
          <h3>Séries e documentários contam no desafio?</h3>
          <p>
            Não. Apenas filmes longa-metragem são válidos para o desafio. Séries, 
            minisséries, documentários e curta-metragens não são aceitos.
          </p>
        </section>
        
        <section className="section regras">
          <h3>O que acontece se eu perder um dia?</h3>
          <p>
            Não há compensação para filmes não assistidos. Se você não 
            assistir a um filme em determinado dia, não poderá compensar assistindo a 
            dois filmes no dia seguinte. Você pode continuar no desafio se quiser, mas não poderá mais 
            concorrer à premiação final.<br></br><br></br>O único caso extremo aceito é se faltar luz ou qualquer conexão com a internet 
            o dia inteiro, te impossibilitando de assistir a um filme ou a logar ele. Mas, se isso acontecer, 
            você vai precisar comprovar que realmente foi impossibilitado (ex: print da concessionária de
            luz ou internet. Eles têm apps/redes com histórico de falta de luz/internet).
          </p>
        </section>
        
        <section className="section regras">
          <h3>Como comprovar que assisti ao filme?</h3>
          <p>
            Diariamente, você deve registrar o filme assistido na plataforma Letterboxd. Ela é ideal para
            esse desafio porque não tem como falsificar um log. Se você não registrou nada, por exemplo, no dia 5 e
            logar qualquer coisa no dia 6 e mudar a data para o dia 5, ainda vai aparecer nas Atividades que 
            você incluiu o filme no dia 6. Além disso, você vai precisar escrever, mesmo que um pouco,
            sobre o que você viu e o que achou do filme. Então, não tem como mentir.
            <br /><br />
            Também, uma vez no desafio, você não vai poder desaparecer do grupo de mensagens. Dê sinais de vida
            lá mostrando que você está ativo no desafio.
          </p>
        </section>

        <section className="section regras">
          <h3>Um filme pode contar para mais de uma categoria?</h3>
          <p>
            Não. Cada filme só pode ser contabilizado para uma única categoria do desafio, 
            então escolha estrategicamente como classificá-los.
          </p>
        </section>

        <section className="section regras">
          <h3>Onde posso encontrar filmes do desafio passado?</h3>
          <p>
            Você pode encontrar a lista completa de filmes do desafio anterior na página 
            de estatísticas do nosso site. Lá, estão disponíveis todos os filmes que foram 
            assistidos pelos participantes na edição anterior.
          </p>
        </section>
      </div>

      {/* Premiação */}
      <div className={`regras-category ${activeCategory === "premiacao" ? "active" : ""}`}>
        <section className="section regras">
          <h3>Qual é a premiação?</h3>
          <p>
            Todos os participantes entram com R$30. Quem completar o desafio inteiro (30 filmes e 
            todas as 8 Edição 2025) divide o prêmio igualmente. Quem não completar, perde sua contribuição.
          </p>
        </section>
        
        <section className="section regras">
          <h3>Quando a premiação é distribuída?</h3>
          <p>
            A premiação será distribuída no dia 25 de agosto de 2025, após a verificação dos registros 
            de todos os participantes.
          </p>
        </section>

        <section className="section regras">
          <h3>Como o dinheiro será administrado?</h3>
          <p>
            O dinheiro será administrado por mim, que estou organizando o desafio. Eu criei uma conta
            exclusiva para o desafio e eu vou divulgar todo o valor arrecadado. Quando o grupo de 
            mensagens for criado, eu vou passar a chave Pix (desafio.filmes.oficial@gmail.com) para
            que todos enviem o valor.

          </p>
        </section>
      </div>

      {/* FAQ */}
      <div className={`regras-category ${activeCategory === "faq" ? "active" : ""}`}>
        <section className="section regras">
          <h3>Posso assistir mais de um filme em um dia só?</h3>
          <p>
            Poder você pode, mas isso não vai contar pro desafio.
          </p>
        </section>

        <section className="section regras">
          <h3>Como posso entrar em contato?</h3>
          <p>
            Entre em contato conosco através do meu <a href="https://discord.com/users/umapessoahumana">Discord</a> ou <a href="https://wa.me/5521972685484?text=Olá,%20quero%20participar%20do%20Desafio%20Filmes%202025!">WhatsApp</a>. Os 
            links também estão disponíveis no rodapé do site, junto com as minhas demais redes sociais.
          </p>
        </section>

        <section className="section regras">
          <h3>Como eu posso procurar um filme para assistir?</h3>
          <p>Use essas opções infalíveis em 99% das vezes:</p>
            <ol>
                <li>Se você tiver algum streaming, ver se o filme está nele</li> 
                <li>Ver se o filme está em algum streaming gratuito (YouTube, PlutoTV, Plex, JustWatch. Mais comum pra filmes muito antigos)</li>
                <li>Ver se o filme possui torrent (recomendação: usar o Stremio)</li>
                <li>Procurar Drive do filme. A melhor maneira é entrar no grupo de Telegram do
                  Clube do Drive, procurar o filme lá ou pedir o Drive caso ele ainda não esteja que
                  alguém vai arrumar pra você.</li> 
            </ol>
        </section>

        <section className="section regras">
          <h3>O que é considerado "um país que não existe mais"?</h3>
          <p>
            São países que existiram oficialmente, mas que atualmente não existem com 
            a mesma formação política. O filme deve ter sido <b>produzido no país</b> quando ele ainda existia 
            oficialmente. Alguns exemplos que produziram filmes são: União Soviética, Iugoslávia, Tchecoslováquia, Pérsia, 
            Ceilão, Índias Orientais Holandesas e Alemanha Oriental.
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FAQ;