import './styles.css';

import logo from '../../assets/logo.svg';

function Banner() {
  return (
    <section id="Banner">
      <div className="content">
        <strong>Engenharia e Conhecimento</strong>
        <p>Acompanhe o progresso do Projeto Ingenium na nossa jornada para divulgar a atuação e importância a engenharia em nossas vidas</p>
        <a href="#!" className="button">Conferir</a>
      </div>
      <img src={logo} alt="Ingenium Logo" />
    </section>
  );
}

export default Banner;