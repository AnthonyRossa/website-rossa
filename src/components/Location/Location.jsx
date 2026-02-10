export default function Location() {
  return (
    <section id="location" className="location">
      <h2 className="location__title">Onde nos encontrar:</h2>
      <div className="location__container">
        <h3 className="location__name">Nosso Ponto de Vendas:</h3>
        <div className="location__map-container">
          <iframe
            className="location__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.4074744477927!2d-51.07945283093101!3d-26.374396111695308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e68dc167f9bd39%3A0x2db37c261442705d!2sRossa%20Ind%C3%BAstria%20e%20Com%C3%A9rcio%20de%20Carnes!5e0!3m2!1spt-BR!2sbr!4v1770763661413!5m2!1spt-BR!2sbr"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="location__container">
        <h3 className="location__name">A Indústria:</h3>
        <div className="location__map-container">
          <iframe
            className="location__map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d893.5633726316022!2d-51.080436272979064!3d-26.38299687616849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1770763847438!5m2!1spt-BR!2sbr"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
