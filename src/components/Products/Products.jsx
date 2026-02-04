import ProductsCard from "../ProductsCard/ProductsCard";
import linguicaImage from "../../images/linguica.jpg";
import salameImage from "../../images/salame.jpg";
import baconImage from "../../images/bacon.jpg";
import costelaImage from "../../images/costela.jpg";
import toscanaImage from "../../images/toscana.jpg";
import lomboImage from "../../images/lombo.jpg";
import torresmoImage from "../../images/torresmo.jpg";
import banhaImage from "../../images/banha.jpg";

const products = [
  {
    image: linguicaImage,
    title: "Linguiça de carne suína defumada",
    description: "-descriçao breve do produto-",
  },
  {
    image: salameImage,
    title: "Linguiça colonial",
    description: "-descriçao breve do produto-",
  },
  {
    image: baconImage,
    title: "Bacon",
    description: "-descriçao breve do produto-",
  },
  {
    image: costelaImage,
    title: "Costela salgada e defumada",
    description: "-descriçao breve do produto-",
  },
  {
    image: toscanaImage,
    title: "Linguiça Toscana",
    description: "-descriçao breve do produto-",
  },
  {
    image: lomboImage,
    title: "Lombo defumado",
    description: "-descriçao breve do produto-",
  },
  {
    image: torresmoImage,
    title: "Torresmo",
    description: "-descriçao breve do produto-",
  },
  {
    image: banhaImage,
    title: "Banha",
    description: "-descriçao breve do produto-",
  },
];

export default function Products() {
  return (
    <section id="products" className="products">
      <h2 className="products__title">Conheça nossos produtos!</h2>
      <div className="products__cards-container">
        {products.map((p) => (
          <ProductsCard
            key={p.title}
            image={p.image}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>
    </section>
  );
}
