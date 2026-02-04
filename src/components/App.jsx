import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";

function App() {
  return (
    <>
      <div className="page">
        <Nav />
        <Header />
        <Products />
        <section id="about" className="about">
          <h2 className="about__title">Sobre a empresa:</h2>
          <div className="about__container">
            <div className="about__content">
              <h3 className="about__text-title">*Sobre a Empresa*</h3>
              <p className="about__text">
                De origem familiar, a Indústria e Comércio de Carnes Rossa vem a
                três gerações mantendo a qualidade e tradição de seus produtos.
                Localizada no Distrito de São Miguel da Serra, Porto União, a
                indústria é conhecida pelo seu diferencial no ramo de carnes,
                embutidos e defumados. Com produtos de alta procedência, mas
                mantendo acima de tudo o sabor colonial, a empresa que a
                princípio iniciou seus trabalhos de maneira simples e artesanal,
                hoje modernizada, industrializada e padronizada as
                regulamentações exigidas pelo mercado, tornou-se um grande
                referencial. Aprovada em 2018 pelo Sistema Brasileiro de
                Inspeção de Produtos de Origem Animal (SISBI –POA), o qual
                padroniza e harmoniza os procedimentos de inspeção de produtos
                de origem animal para garantir a inocuidade e segurança
                alimentar, a indústria fica autorizada a comercializar os seus
                produtos em todo mercado nacional. Sabor colonial, confiança e
                qualidade dos produtos você encontra na Indústria Rossa
                Defumados.
              </p>
            </div>
            <div className="about__frame-container">
              <iframe
                className="about__frame"
                width="780"
                height="439"
                src="https://www.youtube.com/embed/GaWTE57GsDg?si=epupkdabLjVBJ8Mh"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="about__frame-description">
                Video feito em colaboração com o Supermercado Didomenico, nosso
                pareceiro de longa data. Mostrando os bastidores da nossa
                Indústria.
              </p>
            </div>
          </div>
        </section>
        <footer className="footer" id="footer">
          <div className="footer__content">
            <div className="footer__location" id="location">
              <p className="footer__title">Onde nos encontrar:</p>
              <ul className="footer__list">
                <li className="footer__list-item">Ponto de Venda</li>
                <li className="footer__list-item">Industria</li>
                <li className="footer__list-item">Restaurante</li>
              </ul>
            </div>
            <div className="footer__contact" id="contact">
              <p className="footer__title">Contato e Redes Sociais:</p>
              <ul className="footer__list">
                <li className="footer__list-item">Whatsapp</li>
                <li className="footer__list-item">Instagram</li>
                <li className="footer__list-item">Facebook</li>
              </ul>
            </div>
          </div>
          <div className="footer__info">
            <h4 className="footer__copyright">© 2025 Anthony Rossa</h4>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
