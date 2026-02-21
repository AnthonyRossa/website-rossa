import navLogo from "../../images/nav-logo.png";
import { useState } from "react";
import burguerMenu from "../../images/burguer-menu.svg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className="nav">
      <a href="#header">
        <img className="nav__logo" src={navLogo} alt="Logotipo Rossa" />
      </a>
      <img className="nav__menu" onClick={toggleMenu} src={burguerMenu} />
      <ul className={`nav__list ${isOpen ? "nav__list_open" : ""}`}>
        <li>
          <a className="nav__list-item" href="#products">
            Produtos
          </a>
        </li>
        <li>
          <a className="nav__list-item" href="#about">
            Sobre
          </a>
        </li>
        <li>
          <a className="nav__list-item" href="#location">
            Localização
          </a>
        </li>
        <li>
          <a className="nav__list-item" href="#contact">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
