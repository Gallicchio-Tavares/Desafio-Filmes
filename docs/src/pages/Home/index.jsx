import Header from "../../components/Header";
import "./index.css";
import Footer from "../../components/Footer";
import CountdownTimer from "../../components/CountdownTimer";
import ITSOVER from "../../components/ITSOVER";

const Home = () => {
  
  return (
    <>
      <Header/>
      <div className="container">
        <ITSOVER />
        <section className="section">
          <h3>O que é o Desafio Filmes?</h3>
          <p>
            O Desafio Filmes é uma maratona coletiva de cinema cuja a proposta é assistir 
            <strong> 1 filme por dia durante 1 mês</strong> (30 dias).
            O objetivo é expandir o repertório, conhecer obras de diferentes épocas e países 
            e, acima de tudo, se divertir!
          </p>
          {/* 1. Os filmes assistidos durante os 30 dias não podem se repetir
2. Os filmes assistidos não podem já ter sido vistos pelo participante anteriormente
3. Os filmes devem ser assistidos em sua integridade, sem deixá-los inacabados e sem longas pausas, ou seja, o participante não pode começar um filme em um dia, fazer uma pausa e voltar a assisti-lo no dia seguinte para poder terminar o filme
4. O conteúdo assistido deve apenas ser considerado como **filme longa-metragem**, não podendo ser episódio de série nem curta ou média-metragem
5. Não há compensação de dias para filmes não assistidos */}
        </section>

        <section className="section rules">
          <h3>Regras básicas</h3>
          <ol>
            <li>Um filme por dia, sem pular nem acumular sessões.</li>
            <li>O filme precisa ser <strong>inédito</strong> pra você e ter pelo menos <strong>60 minutos</strong>.</li>
            <li>Episódios de séries não contam</li>
            <li>Não vale começar o filme num dia e terminar no outro.</li>
            <li>Não há compensação de dias esquecidos.</li>
          </ol>
          <p className="note">
            OBS: Para mais informações, verifique a aba de <strong>Regras</strong> do site.
          </p>
        </section>

        <section className="section challenges">
          <h3>Categorias extras</h3>
          <p>
            Em cada edição, além da regra dos 30 filmes, criamos categorias especiais para diversificar o desafio. São missões com o objetivo de te fazer buscar
            obras de diferentes estilos, origens e contextos históricos.
            Para que o desafio seja válido, é necessário assistir aos filmes de <strong>todas</strong> as categorias da edição.
          </p>
        </section>

        <section className="section prize">
          <h3>Recompensa</h3>
          <p>
            Além da experiência cinematográfica, há também um prêmio coletivo: todos os participantes
            contribuem com R$30,00 e, no final, quem cumpre o desafio por completo divide o valor do montante acumulado igualmente.
            Os vencedores também terão o seu Top 3 da edição em display na aba <b>Stats</b> aqui do site.
          </p>
        </section>
        <div className="diamond-divider"></div>
        <h1 className="subtitulo-home">Categorias dos anos anteriores</h1>
        <section className="section ano2024">
            <h3>Edição de 2024</h3>
            <p>
              Cada participante precisa recomendar 3 filmes para que o outro assista obrigatoriamente.
            </p>
        </section>
        <section className="section ano2025">
          <h3>Edição de 2025</h3>
          <ol>
            <li>Filmes de 7 países diferentes (sem contar Brasil e o do item 5).</li>
            <li>Dois filmes brasileiros, excluindo os clássicos manjados.</li>
            <li>Um filme com 100 anos ou mais (até 1925).</li>
            <li>Um filme do desafio passado que você ainda não viu.</li>
            <li>Um filme de um país que não existe mais.</li>
            <li>Um filme dirigido por uma mulher.</li>
            <li>Um filme de terror.</li>
            <li>Um filme com 3 horas ou mais.</li>
          </ol>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
