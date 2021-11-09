import './styles.css';

import icon from '../../assets/icon.svg';

function Header() {
  return (
    <header id="MainMenu">
      <img src={icon} alt="Ingenium Logo" />
      <nav>
        <ul>
          <li><a href="#!">Projeto</a></li>
          <li><a href="#!">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;