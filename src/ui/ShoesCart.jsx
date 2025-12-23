import { NavLink } from "react-router-dom";

export const ShoesCart = ({ curElem }) => {
  const { id, image, brand, name, oldPrice, price, sizes } = curElem;

  return (
    
       <li className="shoe-card" key={id}>
       <NavLink to={`/product/${id}`} className="navlink-contanier">
      <div className="shoe-card-image">
        <img src={image} alt={brand} />
      </div>

      <div className="shoe-card-body">
        <p className="shoe-card-brand">{brand}</p>
        <h3 className="shoe-card-name">{name}</h3>

        <p className="shoe-card-price">
          <span className="shoe-card-old">MRP: ₹{oldPrice}</span>
          <span className="shoe-card-current">₹{price}</span>
        </p>
         </div>
       </NavLink>
    </li>
     
  );
};
