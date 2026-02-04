import headerImage from "../../images/header-image.jpg";

export default function Header() {
  return (
    <header className="header" id="header">
      <div className="header__content">
        <h1 className="header__title">Rossa Indústria e Comércio de Carnes</h1>
        <p className="header__description">
          De origem familiar, a Indústria e Comércio de Carnes Rossa vem a três
          gerações mantendo a qualidade e tradição de seus produtos. Localizada
          no Distrito de São Miguel da Serra, Porto União, a indústria é
          conhecida pelo seu diferencial no ramo de carnes, embutidos e
          defumados.
        </p>
      </div>
      <img
        className="header__image"
        alt="Fachada da Indústria Rossa"
        src={headerImage}
      />
    </header>
  );
}
