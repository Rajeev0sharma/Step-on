import shoesData from "../data/shoes.json";
import { ShoesCart } from "../ui/ShoesCart";

export const Product = () => {
  return (
    <section className="product-section">
      <div className="product-header">
        <h1>Foot Wares</h1>
      </div>

      <div className="product-grid-wrapper">
        <ul className="shoe-card-grid">
          {shoesData.map((curElem) => (
            <ShoesCart key={curElem.id} curElem={curElem} />
          ))}
        </ul>
      </div>
    </section>
  );
};
