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
          className={`category-tab ${activeCategory === "halldafama" ? "active" : ""}`}
          onClick={() => handleCategoryChange("halldafama")}
        >
          Hall da Fama
        </button>
        <button 
          className={`category-tab ${activeCategory === "faq" ? "active" : ""}`}
          onClick={() => handleCategoryChange("faq")}
        >
          Outros
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
          <h3>O que é considerado uma resenha válida?</h3>
          <p>
            A resenha não precisa ser extremamente elaborada, ela só precisa mostrar que você realmente viu o filme.
            Um parágrafo explicando as suas impressões é suficiente. Não vale algo como "Muito bom! Curti demais, veria de novo". Isso
            não significa nada. Verifque um exemplo de uma resenha <a href="https://boxd.it/aCRJyl" target="_blank" rel="noopener noreferrer">padrão</a> e uma <a href="https://boxd.it/aDzoVL" target="_blank" rel="noopener noreferrer">longa</a>.
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
              seguindo o mesmo padrão: diga qual filme você viu, escreva uma resenha sobre ele e, se for o caso,
              indique qual Missão ele cumpre.
          </p>
        </section>

        <section className="section regras">
          <h3>Como funciona o Hall da Fama?</h3>
          <p>
              O Letterboxd ficar fora do ar é uma possibilidade real, e já aconteceu no passado. Se isso
              acontecer e você ainda não tiver logado o seu filme do dia, nós vamos fazer pelo WhatsApp, 
              seguindo o mesmo padrão: diga qual filme você viu, escreva uma resenha sobre ele e, se for o caso,
              indique qual Missão ele cumpre.
          </p>
        </section>        
      </div>


      {/* Missões */}
      <div className={`regras-category ${activeCategory === "premiacao" ? "active" : ""}`}>        
        <section className="section regras">
          <h3>Como vão verificar se eu estou cumprindo as Missões?</h3>
          <p>
              A definição das Missões vai depender inteiramente de você, ou seja, você define se um filme
              que você assistiu pode representar uma Missão. Para definir formalmente,
              vai ser preciso que você sinalize no topo da sua resenha a qual Missão o filme corresponde. Isso
              deve ser feito conforme o exemplo:
          </p>
          <p>
            <i>Desafio 1 Mês de Filme - Dia 12.<br/>
            Missão 5: filme de um país que não existe mais (URSS).</i>
          </p>
          <p>Nós vamos olhar a sua resenha pra verificar se a Missão realmente procede.
            Se você estiver em dúvida se o filme representa uma Missão, pode perguntar pra gente antes de ver o filme ou antes 
            de fazer o registro. Caso você já tenha feito o registro mas o filme não bate com a Missão que você sinalizou, 
            a sinalização será desconsiderada.
          </p>
          <p>É ideal que você acompanhe por conta própria as Missões que você está cumprindo para se planejar.
            Mas, pra ajudar, diariamente nós atualizamos e enviamos no grupo do Desafio um Notebook Jupyter 
            com gráficos para você poder verificar quais missões já foram e quais ainda faltam. Exemplo da 
            <a href="https://github.com/Gallicchio-Tavares/Analise-estatistica-participantes/blob/main/2025/analise.ipynb" target="_blank">Edição de 2025</a>.
          </p>
        </section>
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
              Não, isso não é necessário. Você pode assistir a um musical italiano, por exemplo, e alocar ele para a
              Missão Geral apenas ou para a Missão Única de um musical apenas. Isso vai depender da sua estratégia e 
              planejamento.
            </p>
        </section>

        <section className="section regras">
          <h3>Todo filme precisa cumprir uma Missão?</h3>
          <p>
              Não. Há 8 Missões Únicas e 12 países diferentes pra você assistir no desafio. Então, no mínimo, você
              vai ter 12 filmes alocados para missões (sobrando 18 livres) e, se não misturar nada, 20 filmes 
              alocados em Missões (sobrando 10 livres). Então não precisa se preocupar, mas tome cuidado para não
              deixar as Missões todas pro final pra você não se embananar.
          </p>
        </section>

        <section className="section regras">
          <h3>Existe ordem ou limite para cumprir as Missões?</h3>
          <p>
              Não tem ordem obrigatória nem limite por período. 
              O importante é que todas as Missões estejam cumpridas até o final do desafio, então preste atenção no 
              que você tá fazendo!
          </p>
        </section>

        <section className="section regras">
          <h3>Já registrei o filme que eu vi mas esqueci de escrever a Missão que ele cumpria. E agora?</h3>
          <p>
              Se você esqueceu, esse filme não vai contar pra nenhuma Missão. Não é permitido editar um
              registro já feito. Tentativas de burlar o sistema podem resultar na invalidação do desafio 
              para o participante.
          </p>
        </section>

        <section className="section regras">
          <h3>Posso repetir países que apareceram na Missão Geral?</h3>
          <p>
              Sim. A Missão Geral exige um <strong>MÍNIMO</strong> de 12 países diferentes, mas não impede que esses 
              países apareçam mais de uma vez. Então, se você alocou um filme a um país x, digamos, o México, o próximo
              filme mexicano que você ver obviamente não vai poder contar mais pra Categoria Geral.
          </p>
        </section>

        <section className="section regras">
          <h3>O filme que eu vi foi realizado por vários países. A qual país eu associo o meu filme?</h3>
          <p>
              É comum filmes terem produções conjuntas. Quando isso acontece,
              precisamos verificar qual o país principal que está por trás do filme. Há casos simples e casos complexos
              que podem aparecer.
          </p>
          <p>
            Por exemplo, para o filme <a href="https://boxd.it/BPEO" target="_blank" rel="noopener noreferrer">Ainda Estou Aqui (2024)</a>,
            podemos ver na seção de detalhes os países Brasil e França, mas todo mundo sabe que Ainda Estou Aqui
            definitivamente não é francês. A França só colaborou com a produção do filme. Então ele conta pro
            Brasil.
          </p>
          <p>Entretanto, há casos mais complexos, como no filme <a href="https://boxd.it/Ag9E" target="_blank" rel="noopener noreferrer">Terra de Deus (2022)</a>.
          Nesse filme consta 4 países responsáveis: Dinamarca, França, Islândia e Suécia. Aqui, a França e a Suécia
          apenas bancaram a produção do filme. A dúvida fica entre Dinamarca e Islândia. Sabemos que esse filme se
          passa nos dois países, o idioma falado predominantemente é o dinamarquês, ele foi dirigido por um homem islandês, 
          há atores tanto islandeses quanto
          dinamarqueses e, além disso, o filme concorreu ao Oscar de melhor filme estrangeiro pela Islândia. 
          A Islândia parece a mais razoável, mas a Dinamarca também não estaria errada. Como
          não há um único país, fica ao seu encargo escolher a qual país você quer associá-lo.
          </p>

          <p>Em resumo, use o bom senso.</p>
        </section>

        <section className="section regras">
          <h3>Os Estados Unidos contam pra Missão de diferentes países?</h3>
          <p>
            Eu pessoalmente achei muito engraçado essa dúvida ter surgido, mas sim. Os EUA são um país,
            logo ele conta pra essa Missão.
          </p>
        </section>
      </div>

      {/* HALL DA FAMA */}
      <div className={`regras-category ${activeCategory === "halldafama" ? "active" : ""}`}> 
        <section className="section regras">
          <h3>O que é o Hall da Fama?</h3>
          <p>
            O Hall da Fama é um local especial para as pessoas que concluíram o desafio de um jeito diferente,
            merecendo um destaque só delas. Nós temos 5 categorias:
          </p>
          <ol>
              <li><strong>Diversos</strong>: conquistas únicas bem diferentes entre si e das demais categorias</li>
              <li><strong>Temáticos</strong>: conquistas que seguem uma temática específica de filme</li>
              <li><strong>Regionais</strong>: conquistas relacionadas a países ou continentes específicos</li>
              <li><strong>Décadas</strong>: conquistas relacionadas a uma década específica do século XX</li>
              <li><strong>Gêneros</strong>: conquistas relacionadas a gêneros cinematográficos específicos</li>
            </ol>
          <p><i>Obs: não incluímos décadas do século XXI na categoria de Décadas porque isso seria fácil demais, heh. Os anos
              1900 também não estão contemplados porque basicamente ainda nem existiam longa-metragens nessa época.</i></p>
        </section>

        <section className="section regras">
          <h3>Como vocês verificam as conquistas do Hall da Fama?</h3>
          <p>
            É um processo um pouquinho complexo, mas o fluxo é o seguinte: <br></br><br></br>

            Durante o desafio, escrevemos numa planilha o nome do Participante associado aos filmes assistidos
            por ele. Em seguida, usamos a API do Tmdb para coletar as informações relevantes sobre os filmes
            vistos por todos e salvamos tudo em um JSON. Essa API é a mesma que alimenta os dados do Letterboxd sobre qualquer filme.
            Daí, cruzamos os dados e criamos uma análise exploratória
            sobre dados Regionais, de Décadas e de Gêneros pra fazer a verificação. 
          </p>
          <p>
            As conquistas Diversas e as Temáticas são verificadas manualmente, porque elas são mais subjetivas e complexas de
            se contabilizar.
          </p>
          <p>
            Aqui tem um exemplo da <a href="https://github.com/Gallicchio-Tavares/Analise-estatistica-participantes/blob/main/2025/stats.csv" target="_blank">planilha completa</a>, 
            do <a href="https://github.com/Gallicchio-Tavares/Desafio-Filmes/blob/main/docs/src/data/filmes/2025_with_details.json" target="_blank">JSON</a> 
            e da <a href="https://github.com/Gallicchio-Tavares/Analise-estatistica-participantes/blob/main/2025/analise_final.ipynb" target="_blank">análise exploratória</a>,
            todos da edição de 2025.
          </p>
        </section>

        <section className="section regras">
          <h3>Preciso concluir o desafio para entrar no Hall da Fama?</h3>
          <p>
            Sim, apenas quem venceu pode obter as conquistas.
          </p>
        </section>
        
        <section className="section regras">
          <h3>O que acontece se duas pessoas obtiveram a mesma conquista na edição?</h3>
          <p>
            Nas conquistas que dependem de passar de um certo número assistido, se duas ou mais pessoas 
            chegam nesse número em uma edição, a pessoa que ficará com a conquista é aquela que assistiu 
            mais filmes da categoria. Se houve empate, ambas obtém a conquista.
          </p>
          <p>Para conquistas não numéricas (<i>Crítico de Cinema</i>, <i>Eu Vou Até o Fim</i>, <i>Eu Sou um Cara Simples</i> e 
          <i> Anti-Imperialista</i>  
            ), ambos obtém a conquista.</p>
        </section>
        
        <section className="section regras">
          <h3>É possível obter uma conquista já desbloqueada?</h3>
          <p>
            Sim, mas apenas se você conseguir ultrapassar o número alcançado pela pessoa que já a obteve.
            Conquistas não numéricas não podem ser conquistadas novamente.
          </p>
        </section>

        <section className="section regras">
          <h3>Todos os filmes assistidos contam para o Hall da Fama?</h3>
          <p>
            Sim, qualquer filme pode ser contabilizado para o Hall da Fama, ele só precisa cumprir os requisitos
            da conquista em questão. Não precisa estar atrelado a uma Missão.
          </p>
        </section>

        <section className="section regras">
          <h3>O Hall da Fama interfere na premiação?</h3>
          <p>
            Não. É algo extra.
          </p>
        </section>
        
        <section className="section regras">
          <h3>Uma mesma pessoa pode obter várias conquistas na mesma edição?</h3>
          <p>
            Pode!
          </p>
        </section>

        <section className="section regras">
          <h3>Quando o Hall da Fama é atualizado?</h3>
          <p>
            Ele é atualizado junto com a aba Stats, alguns dias depois do final do desafio, assim que 
            validarmos as informações estatísticas de cada participante.
          </p>
        </section>

        <section className="section regras">
          <h3>As conquistas são por edição ou acumuladas ao longo dos anos?</h3>
          <p>
            Elas são por edição.
          </p>
        </section>

        <section className="section regras">
          <h3>Posso sugerir uma conquista pro Hall da Fama?</h3>
          <p>
            Pode! Quanto mais criativa e inusitada, maior a chance de realmente incluirmos ela. 
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
            Entre em contato conosco através do <a href="https://discord.com/users/umapessoahumana">Discord</a>, <a href="https://wa.me/5521972685484?text=Olá,%20quero%20participar%20do%20Desafio%20Filmes%202026!">WhatsApp</a> ou <a href="mailto:desafio.filmes.oficial@gmail.com">E-mail</a> (desafio.filmes.oficial@gmail.com). Os links também estão disponíveis no rodapé do site, 
            junto com as demais redes sociais.
          </p>
        </section>

        <section className="section regras">
          <h3>Alguém já perdeu o desafio?</h3>
          <p>
            Sim, em todos os desafios ao menos um participante perdeu, seja por não ter assistido ao filme
            no dia, seja por não ter registrado o filme que supostamente assistiu.
          </p>
        </section>

        <section className="section regras">
          <h3>Onde posso encontrar filmes do desafio passado?</h3>
          <p>
            Você pode encontrar a lista completa de filmes do desafio anterior na página 
            de estatísticas do nosso site ou no meu Letterboxd. Em ambos temos disponíveis todos os filmes que foram 
            assistidos pelos participantes nas edições passadas.
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