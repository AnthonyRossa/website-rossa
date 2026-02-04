export default function Products() {
  return (
    <section id="products" className="products">
      <h2 className="products__title">Conheça nossos produtos!</h2>
      <div className="products__cards-container">
        <div className="products__card">
          <img
            className="products__card-image"
            src="/images/linguica.jpg"
            alt=""
          />
          <p className="products__card-title">
            Linguiça de carne suína defumada
          </p>
          <p className="products__card-description">
            -descriçao breve do produto-
          </p>
        </div>
        <div className="products__card">
          <img
            className="products__card-image"
            src="/images/salame.jpg"
            alt=""
          />
          <p className="products__card-title">Linguiça colonial</p>
          <p className="products__card-description">
            -descriçao breve do produto-
          </p>
        </div>
        <div className="products__card">
          <img
            className="products__card-image"
            src="/images/bacon.jpg"
            alt=""
          />
          <p className="products__card-title">Bacon</p>
          <p className="products__card-description">
            -descriçao breve do produto-
          </p>
        </div>
        <div className="products__card">
          <img
            className="products__card-image"
            src="/images/costela.jpg"
            alt=""
          />
          <p className="products__card-title">Costela salgada e defumada</p>
          <p className="products__card-description">
            -descriçao breve do produto-
          </p>
        </div>
        <div className="products__card">
          <img
            className="products__card-image"
            src="/images/toscana.jpg"
            alt=""
          />
          <p className="products__card-title">Linguiça Toscana</p>
          <p className="products__card-description">
            -descriçao breve do produto-
          </p>
        </div>
        <div className="products__card">
          <img className="products__card-image" src="images/lombo.jpg" alt="" />
          <p className="products__card-title">Lombo defumado</p>
          <p className="products__card-description">
            -descriçao breve do produto-
          </p>
        </div>
        <div className="products__card">
          <img
            className="products__card-image"
            src="images/torresmo.jpg"
            alt=""
          />
          <p className="products__card-title">Torresmo</p>
          <p className="products__card-description">
            -descriçao breve do produto-
          </p>
        </div>
        <div className="products__card">
          <img className="products__card-image" src="images/banha.jpg" alt="" />
          <p className="products__card-title">Banha</p>
          <p className="products__card-description">
            -descriçao breve do produto-
          </p>
        </div>
      </div>
    </section>
  );
}
