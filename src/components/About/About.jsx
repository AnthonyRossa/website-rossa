export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="about__title">Sobre a empresa:</h2>
      <div className="about__container">
        <div className="about__content">
          <p className="about__text">
            De origem familiar, a Indústria e Comércio de Carnes Rossa vem a
            três gerações mantendo a qualidade e tradição de seus produtos.
            Localizada no Distrito de São Miguel da Serra, Porto União, a
            indústria é conhecida pelo seu diferencial no ramo de carnes,
            embutidos e defumados. Com produtos de alta procedência, mas
            mantendo acima de tudo o sabor colonial, a empresa que a princípio
            iniciou seus trabalhos de maneira simples e artesanal, hoje
            modernizada, industrializada e padronizada as regulamentações
            exigidas pelo mercado, tornou-se um grande referencial. Aprovada em
            2018 pelo Sistema Brasileiro de Inspeção de Produtos de Origem
            Animal (SISBI –POA), o qual padroniza e harmoniza os procedimentos
            de inspeção de produtos de origem animal para garantir a inocuidade
            e segurança alimentar, a indústria fica autorizada a comercializar
            os seus produtos em todo mercado nacional. Sabor colonial, confiança
            e qualidade dos produtos você encontra na Indústria Rossa Defumados.
          </p>
        </div>
        <div className="about__frame-container">
          <iframe
            className="about__frame"
            src="https://www.youtube.com/embed/GaWTE57GsDg?si=epupkdabLjVBJ8Mh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className="about__frame-description">
            Video feito em colaboração com o Supermercado Didomenico, nosso
            pareceiro de longa data. Mostrando os bastidores da nossa Indústria.
          </p>
        </div>
      </div>
    </section>
  );
}
