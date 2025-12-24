import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Footer.css';

export default function Footer() {
  const LetterboxdIcon = (props) => (
    <svg viewBox="0 0 100 100" width={props.size || 20} height={props.size || 20} {...props}>
      <rect width="100" height="100" rx="20" fill="#14181C" />
      <circle cx="35" cy="50" r="10" fill="#00A0D1" />
      <circle cx="50" cy="50" r="10" fill="#F47D20" />
      <circle cx="65" cy="50" r="10" fill="#FFE800" />
    </svg>
  );

  return (
    <footer className="footer">
      <div className="footer-content">
      <div>
        <h3>Participar</h3>
        <p>Gostou e quer participar do desafio? Entre em contato comigo:</p>
        <div className="contact-buttons">
            <a href="https://discord.com/users/umapessoahumana" target="_blank" rel="noopener noreferrer" className="contact-btn discord">
                Me chama no Discord
            </a>
            <a href="https://wa.me/5521972685484?text=Olá,%20quero%20participar%20do%20Desafio%20Filmes%202025!" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp">
                Fala comigo no WhatsApp
            </a>
            <a
              href="mailto:desafio.filmes.oficial@gmail.com"
              className="contact-btn email"
            >
              Me manda um e-mail
            </a>
        </div>
      </div>
        <div>
          <h3>Redes Sociais</h3>
          <div className="footer-socials">
            <a href="https://github.com/Gallicchio-Tavares" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://boxd.it/6wVxb" target="_blank"><LetterboxdIcon /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Desafio Filmes. Feito por Uma Pessoa Humana e Mathamen.</p>
      </div>
    </footer>
  );
}
