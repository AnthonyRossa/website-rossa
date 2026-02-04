export default function ProductsCard({ image, title, description }) {
  return (
    <div className="products__card">
      <img className="products__card-image" src={image} alt={title} />
      <p className="products__card-title">{title}</p>
      <p className="products__card-description">{description}</p>
    </div>
  );
}
