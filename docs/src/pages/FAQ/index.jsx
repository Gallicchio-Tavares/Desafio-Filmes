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
          Missões
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
        <section className="section regras">
          <h3>Séries e documentários contam no desafio?</h3>
          <p>
            Apenas filmes e documentários longa-metragem são válidos para o desafio. Séries, 
            minisséries e curta-metragens não são aceitos. A duração mínima para um filme é de 60 minutos (1 hora).
          </p>
        </section>

        <section className="section regras">
          <h3>Posso assistir mais de um filme em um dia só?</h3>
          <p>
            Poder você pode, mas isso não vai contar pro desafio. Escolha qual deles vai contar pro desafio
            no dia.
          </p>
        </section>

        <section className="section regras">
          <h3>Como comprovar que assisti ao filme?</h3>
          <p>
            Diariamente, você deve registrar ("logar") o filme assistido na plataforma Letterboxd. Ela é ideal para
            esse desafio porque não tem como falsificar um log. Se você não registrou nada, por exemplo, no dia 5 e
            logar qualquer coisa no dia 6 e mudar a data para o dia 5, ainda vai aparecer nas Atividades que 
            você incluiu o filme no dia 6. Além disso, você vai precisar escrever, mesmo que um pouco,
            sobre o que você viu e o que achou do filme.
            <br /><br />
            Também, uma vez no desafio, você não vai poder desaparecer do grupo de mensagens. Avise no grupo
            qual filme você vai ver no dia, isso auxilia na fiscalização.
          </p>
        </section>

        <section className="section regras">
          <h3>Eu posso editar um registro já feito?</h3>
          <p>
            Há três coisas na vida que nunca voltam atrás: a flecha lançada, a palavra pronunciada e o registro de um filme.
            Em outras palavras: não.
          </p>
        </section>
        
        <section className="section regras">
          <h3>O que acontece se eu perder um dia?</h3>
          <p>
            Não há compensação para dias perdidos. Se você não 
            assistir a um filme em determinado dia, não poderá compensar assistindo a 
            dois filmes no dia seguinte. Logo, você está desclassificado.
            Você pode continuar no desafio se quiser, mas não poderá mais concorrer à premiação final.
            
            <br></br><br></br>O único caso extremo aceito é se faltar luz ou qualquer conexão com a internet 
            o dia inteiro, te impossibilitando de assistir a um filme ou a logar ele. Mas, se isso acontecer, 
            você vai precisar comprovar que realmente foi impossibilitado (ex: print da concessionária de
            luz ou internet. Eles têm apps/redes com histórico de falta de luz/internet).
          </p>
        </section>
    
        <section className="section regras">
          <h3>O que acontece se eu esquecer de registrar o filme que eu vi?</h3>
          <p>
            Você está desclassificado. Sem o registro, não há como comprovar se você realmente assistiu ou não.
          </p>
        </section>

        <section className="section regras">
          <h3>O filme vai passar de meia-noite. E agora?</h3>
          <p>
              Desde que você tenha começado a ver o filme antes de meia-noite, não há problema algum se você
              terminá-lo depois de meia-noite. Mas você vai ter que avisar OBRIGATORIAMENTE no grupo do 
              desafio que isso vai acontecer, para termos um controle, e esse aviso precisa ser feito ANTES DE MEIA-NOITE,
              senão não poderemos saber se você realmente começou o filme no dia ou não. 
          </p>
          <p>
            Além disso, nós vamos verificar o horário em que o log foi feito, então há uma tolerância máxima
            de <strong>1 hora</strong> entre o momento em que você começou a assistir ao filme e o horário do 
            log. Então, por exemplo, se você começou a assistir a um filme de 1 hora e meia às 23:30, 
            espera-se que ele termine por volta de 1 da manhã. Se o log foi feito depois de 2 e meia da
            manhã, não vai contar como algo legítimo e você será desclassificado.
          </p>
        </section>

        <section className="section regras">
          <h3>O Letterboxd tá fora do ar e eu ainda não fiz meu registro. E agora?</h3>
          <p>
              O Letterboxd ficar fora do ar é uma possibilidade real, e já aconteceu no passado. Se isso
              acontecer e você ainda não tiver logado o seu filme do dia, nós vamos fazer pelo WhatsApp, 
              seguindo o mesmo padrão: diga qual filme você viu, escreva uma review sobre ele e, se for o caso,
              indique qual Missão ele cumpre.
          </p>
        </section>
      </div>


      {/* Missões */}
      <div className={`regras-category ${activeCategory === "premiacao" ? "active" : ""}`}>
       <section className="section regras">
          <h3>Um filme pode contar para mais de uma Missão?</h3>
          <p>
            As Missões Únicas não podem ser combinadas entre si, mas podemos juntar a Missão Geral com 
            alguma das Missões Únicas. 
          </p>
          <p>
            Então, por exemplo, se um filme é um musical indicado por outro participante, o filme pode entrar
            ou pra Missão de assistir a um Musical OU pra Missão de assistir a um filme indicado por outro
            participante, mas não para as duas ao mesmo tempo. Por outro lado, se você tem um musical sueco,
            esse filme pode contar para a Missão de assistir a um Musical E para a Missão de assistir a
            filmes de 12 países diferentes.
          </p>
        </section>

        <section className="section regras">
            <h3>Eu preciso necessariamente combinar a Missão Geral com uma Missão Única?</h3>
            <p>
              Não, isso não é necessário. Você pode assistir a um filme mexicano, por exemplo, e alocar ele para a
              Missão Geral apenas.
            </p>
        </section>

        <section className="section regras">
          <h3>Como vão verificar se eu estou cumprindo as Missões?</h3>
          <p>
              A definição das Missões vai depender inteiramente de você, ou seja, você define se um filme
              que você assistiu e que cumpra os requisitos representa uma Missão. Para definir formalmente,
              vai ser preciso que você coloque no topo da sua review a qual Missão o filme corresponde. Isso
              deve ser feito conforme o exemplo:
          </p>
          <p>
            <i>Desafio 1 Mês de Filme - Dia 12.<br/>
            Missão 5: filme de um país que não existe mais (URSS).</i>
          </p>
        </section>

        <section className="section regras">
          <h3>Já registrei o filme que eu vi mas esqueci de escrever a Missão que ele cumpria. E agora?</h3>
          <p>
              Se você esqueceu, esse filme não vai contar pra nenhuma Missão. Não é permitido editar um
              registro já feito.
          </p>
        </section>
      </div>

      {/* FAQ */}
      <div className={`regras-category ${activeCategory === "faq" ? "active" : ""}`}>
        <section className="section regras">
          <h3>Como o dinheiro será administrado?</h3>
          <p>
            O dinheiro será administrado por mim, que estou organizando o desafio. Eu criei uma conta
            exclusiva para o desafio e eu vou divulgar todo o valor arrecadado. Quando o grupo de 
            mensagens for criado, eu vou passar a chave Pix (desafio.filmes.oficial@gmail.com) para
            que todos enviem o valor.

          </p>
        </section>

        <section className="section regras">
          <h3>Como posso entrar em contato?</h3>
          <p>
            Entre em contato conosco através do meu <a href="https://discord.com/users/umapessoahumana">Discord</a> ou <a href="https://wa.me/5521972685484?text=Olá,%20quero%20participar%20do%20Desafio%20Filmes%202026!">WhatsApp</a>. Os 
            links também estão disponíveis no rodapé do site, junto com as minhas demais redes sociais.
          </p>
        </section>

        <section className="section regras">
          <h3>Alguém já perdeu o deafio?</h3>
          <p>
            Sim, em todos os desafios ao menos um participante perdeu, seja por não ter assistido ao filme
            no dia, seja por não ter registrado o filme que supostamente assistiu.
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


      </div>
    </div>
    <Footer />
    </>
  );
};

export default FAQ;