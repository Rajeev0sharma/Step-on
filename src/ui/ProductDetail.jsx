import { NavLink, useLoaderData } from "react-router-dom";
import "./productDetail.css"

export const ProductDetail = () => {
  const shoe = useLoaderData();
  if (!shoe) return <h1>Shoe not found</h1>;

  const { id, image, brand, name, oldPrice, price, sizes, description } = shoe;

  return (
    <section className="product-detail">
      <div className="product-detail-card">
        {/* LEFT: image */}
        <div className="product-detail-image">
          <img src={image} alt={brand} />
        </div>

        {/* RIGHT: info */}
        <div className="product-detail-info">
          <p className="pd-brand">{brand}</p>
          <h1 className="pd-name">{name}</h1>

          <p className="pd-price-row">
            <span className="pd-old">MRP: ₹{oldPrice}</span>
            <span className="pd-current">₹{price}</span>
          </p>

          {sizes && (
            <p className="pd-sizes">
              Sizes:
              {sizes.map((size) => (
                <span key={size}>{size}</span>
              ))}
            </p>
          )}

          {description && <p className="pd-desc">{description}</p>}

          <div className="pd-actions">
            <button className="pd-btn pd-primary">Add to Cart</button>
            <NavLink to="/product" className="pd-btn pd-secondary">
              Continue Shopping
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
