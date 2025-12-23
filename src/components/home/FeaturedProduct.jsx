import { NavLink } from "react-router-dom";
import shoesData from "../../data/shoes.json";
import "./featuredProduct.css"

export const FeaturedProduct = () => {

  const featuredShoes = shoesData
    .filter((shoe) => shoe.inStock) 
    .slice(0, 4);                   

  return (
    <section className="home-section">
      <div className="home-section-inner">
        <h2 className="section-title">Featured Shoes</h2>
        <p className="section-subtitle">
          Premium picks loved by our customers
        </p>

        <ul className="shoe-card-grid">
          {featuredShoes.map((shoe) => (
            <NavLink
              to={`/product/${shoe.id}`}
              key={shoe.id}
              className="navlink-contanier"
            >
              <li className="shoe-card">
                <div className="shoe-card-image">
                  <img src={shoe.image} alt={shoe.name} />
                </div>

              <div className="shoe-card-body">
        <p className="shoe-card-brand">{shoe.brand}</p>
        <h3 className="shoe-card-name">{shoe.name}</h3>

        <p className="shoe-card-price">
          <span className="shoe-card-old">MRP: ₹{shoe.oldPrice}</span>
          <span className="shoe-card-current">₹{shoe.price}</span>
        </p>
         </div>
        </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </section>
  );
};
