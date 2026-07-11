import './ITSOVER.css';

const ITSOVER = () => {
  const desafioConcluido = 0;

  return (
    <div className="closed-registration">
      <div className="closed-registration-content">
        <h3>INSCRIÇÕES ENCERRADAS</h3>
        <p>
          <strong>
            As inscrições para a edição de {new Date().getFullYear()} estão encerradas
          </strong>
        </p>

        {desafioConcluido === 1 && (
          <p>Desafio concluído! Verifique a aba de Stats</p>
        )}
      </div>
    </div>
  );
};

export default ITSOVER;