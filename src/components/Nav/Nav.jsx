import navLogo from "../../images/nav-logo.png";

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#header">
        <img className="nav__logo" src={navLogo} alt="Logotipo Rossa" />
      </a>
      <div className="nav__container">
        <ul className="nav__list">
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
            <a className="nav__list-item" href="#contact">
              Contato
            </a>
          </li>
          <li>
            <a className="nav__list-item" href="#location">
              Localização
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
