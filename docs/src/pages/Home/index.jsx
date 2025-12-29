import Header from "../../components/Header/Header";
import "./index.css";
import Footer from "../../components/Footer/Footer";
import CountdownTimer from "../../components/ElementosHome/CountdownTimer";
import ITSOVER from "../../components/ElementosHome/ITSOVER";

const Home = () => {
  
  return (
    <>
      <Header/>
      <div className="container">
        <div className="clock">
            <CountdownTimer />
        </div>
        <section className="section">
          <h3 className="com-divider">O que é o Desafio Filmes?</h3>
          <p>
            O Desafio Filmes é um projeto de uma maratona coletiva de cinema cuja proposta é assistir a
            <strong> um filme por dia durante 1 mês</strong> (30 dias).
            O objetivo é expandir o repertório com filmes que você não assistiria tipicamente, conhecer obras de diferentes épocas e países 
            e, acima de tudo, se divertir!
          </p>
        </section>
        <section className="section rules">
          <h3 className="com-divider">Regras básicas</h3>
          <ol>
            <li>Um filme por dia, sem pular nem acumular sessões.</li>
            <li>O filme precisa ser <strong>inédito</strong> pra você e ter pelo menos <strong>60 minutos</strong>.</li>
            <li>Episódios de séries não contam</li>
            <li>Não vale começar o filme num dia e terminar no outro.</li>
            <li>Não há compensação de dias esquecidos.</li>
          </ol>
          <p><i>
            OBS: Para mais informações, verifique a aba de <strong>Regras</strong> do site.
          </i></p>
        </section>

        <section className="section challenges">
          <h3 className="com-divider">Missões Especiais</h3>
          <p>
            Em cada edição, além da regra dos 30 filmes, criamos categorias especiais para diversificar o desafio. 
            São missões com o objetivo de te fazer buscar obras de diferentes estilos, origens e contextos históricos.
            Para que o desafio seja válido, é necessário cumprir <strong>todas</strong> as missões da edição.
          </p>
        </section>

        <section className="section prize">
          <h3 className="com-divider">Recompensa</h3>
          <p>
            Além da experiência cinematográfica, há também um prêmio coletivo: todos os participantes
            contribuem com R$30,00 e, no final, quem cumpre o desafio por completo divide o valor do montante acumulado igualmente.
            Os vencedores também terão o seu Top 3 da edição em display na aba <b>Stats</b> aqui do site e podem aparecer no Hall da Fama.
          </p>
        </section>

        <div className="divider-dots"></div>
        <h1 className="subtitulo-home">EDIÇÃO 2026</h1>
        <section className="section edicao-atual">
          <h3 className="com-divider">Quando?</h3>
          <p>
            O desafio acontecerá a partir do dia <strong>11 de Julho</strong> (11/07/2026) até o dia <strong>9 de Agosto</strong> (09/08/2026)
            <br/><br/> <strong>Inscrições até 8 de Julho de 2026.</strong>
          </p>
          <h3 className="com-divider">Missões</h3>
          <h4>Missão Geral</h4>
          <p>Assistir a filmes de 12 países diferentes.</p>
          <h4>Missões Únicas</h4>
          <ol>
            <li>Um filme do desafio passado que você ainda não viu.</li>
            <li>Um filme com temática LGBTQIA+.</li>
            <li>Um filme indicado por outro participante.</li>
            <li>Um musical.</li>
            <li>Um filme lançado no ano em que um de seus avós nasceu.</li>
            <li>Um filme que se passa no futuro.</li>
            <li>Um filme brasileiro anterior ao ano 2000.</li>
            <li>Um filme em um idioma que você nunca ouviu.</li>
          </ol>
        </section>

        <div className="divider-dots"></div>
        <h1 className="subtitulo-home">Como Participar</h1>
        <section className="section participacao">
          <p><i>
            Participar do Desafio é simples! Você só precisa se comprometer com o processo e seguir as regras da edição.
            O passo a passo é o seguinte:
          </i></p>
          
          <h3 className="com-divider">1. Confirme a sua participação</h3>
          <p>
            Entre em contato com a organização do desafio dentro do prazo divulgado para a edição, nossos links de contato
            estão no final da página. Não há número máximo de participantes, mas as inscrições são encerradas 3 dias antes 
            do início do desafio para podermos nos organizar e tirar quaisquer dúvidas restantes.
          </p>
          <p>
            Se confirmar o interesse, você será adicionado no grupo de WhatsApp do desafio 7 dias antes da data de início, 
            junto com os demais participantes.
          </p>
          
          <h3 className="com-divider">2. Contribua com o valor coletivo</h3>
          <p>
            Como mencionado mais acima, todos os participantes contribuem com R$30,00. Esse valor compõe o prêmio coletivo, 
            que será dividido igualmente entre quem completar o desafio até o final. Quando chegar o prazo final das inscrições,
            vou passar a chave Pix para que todos enviem o valor. Teremos, então, 3 dias para coletar todas as contribuições e
            tirar quaisquer dúvidas remanescentes. Após esse período, a lista de participantes é considerada definitiva.
          </p>
          
          <h3 className="com-divider">3. Registre a sua experiência</h3>
          <p>
            Agora, você deve estar se perguntando como faremos a verificação dos filmes assistidos por cada um. Essa verificação é feita
            pela plataforma <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer">Letterboxd</a>,
            onde cada um pode registrar um filme diariamente e escrever sobre o que viu. Garanta que você tenha uma conta
            lá antes do início do desafio e nos envie o link do seu perfil, o qual nós acompanharemos durante todo o desafio.
          </p>
          <p>Para que o filme conte, é obrigatório:</p>
          <ul>
            <li>Registrar o filme no mesmo dia em que ele foi assistido</li>
            <li>Escrever uma resenha sobre o filme</li>
          </ul>
          <p>
            Caso você tenha mais dúvidas sobre o processo de verificação, olhe a aba de REGRAS aqui do site onde nós explicamos em
            detalhes o funcionamento de um registro e por que esse método é tão confiável.
          </p>
        </section>

        <div className="divider-dots"></div>
        
        <h1 className="subtitulo-home">Edições Anteriores</h1>
        <section className="section ano2024">
            <h3>Edição de 2024</h3>

            <div className="edition-grid">
              <div className="edition-block">
                <h4>Participantes</h4>
                <ul className="uma-coluna">
                  <li><a href="https://boxd.it/6wVxb" target="_blank" rel="noopener noreferrer">UmaPessoaHumana</a></li>
                  <li><a href="https://boxd.it/b9fXv" target="_blank" rel="noopener noreferrer">mathamen</a></li>
                </ul>
              </div>

              <div className="edition-block">
                <h4>Missões</h4>
                <p>
                  Cada participante precisa recomendar 3 filmes para que o outro assista obrigatoriamente.
                </p>
              </div>
            </div>
        </section>
        <section className="section ano2025">
          <h3>Edição de 2025</h3>

          <div className="edition-block">
            <h4>Participantes</h4>
            <ul className="duas-colunas">
              <li><a href="https://boxd.it/6wVxb" target="_blank" rel="noopener noreferrer">UmaPessoaHumana</a></li>
              <li><a href="https://boxd.it/b9fXv" target="_blank" rel="noopener noreferrer">mathamen</a></li>
              <li><a href="https://boxd.it/bX1RX" target="_blank" rel="noopener noreferrer">Tunim73</a></li>
              <li><a href="https://boxd.it/fHiUt" target="_blank" rel="noopener noreferrer">Belle_Is</a></li>
              <li><a href="https://boxd.it/3huwj" target="_blank" rel="noopener noreferrer">joaov0805</a></li>
              <li><a href="https://boxd.it/4ZSGJ" target="_blank" rel="noopener noreferrer">ok1na</a></li>
              <li><a href="https://boxd.it/db2Td" target="_blank" rel="noopener noreferrer">xeremel</a></li>
              <li><a href="https://boxd.it/41ixh" target="_blank" rel="noopener noreferrer">belovacomis</a></li>
              <li><a href="https://boxd.it/fHj1f" target="_blank" rel="noopener noreferrer">EdzinhoHowlett</a></li>
              <li><a href="https://boxd.it/fqLA9" target="_blank" rel="noopener noreferrer">carol__rosa</a></li>
              <li><a href="https://boxd.it/5pvud" target="_blank" rel="noopener noreferrer">anobree</a></li>
              <li><a href="https://boxd.it/fHNlf" target="_blank" rel="noopener noreferrer">brad_pittson69</a></li>
            </ul>
          </div>

          <div className="edition-block">
            <h4>Missões</h4>
            <ol>
              <li>Filmes de 7 países diferentes (sem contar Brasil e o do item 5).</li>
              <li>Dois filmes brasileiros.</li>
              <li>Um filme com 100 anos ou mais (até 1925).</li>
              <li>Um filme do desafio passado que você ainda não viu.</li>
              <li>Um filme de um país que não existe mais.</li>
              <li>Um filme dirigido por uma mulher.</li>
              <li>Um filme de terror.</li>
              <li>Um filme com 3 horas ou mais.</li>
            </ol>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
