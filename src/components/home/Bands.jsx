import { NavLink } from "react-router-dom";
import "./bands.css"
export const Bands = () => {
  return (
    <section className="bands">
      <h2 className="section-title">Brands We Deal In</h2>

      <div className="brands-grid">
        <NavLink to="/nike">
        <div className="brand-card">
          <img src="/image/brands/nike-svg.svg" alt="Nike" />
          <span>Nike</span>
        </div>
        </NavLink>
    
    <NavLink to="/nikejordon">  
        <div className="brand-card">
          <img src="/image/brands/jordan-air-svg.svg" alt="Jordan" />
          <span>Nike Jordan</span>
        </div>
    </NavLink>
    <NavLink to="/asics">
        <div className="brand-card">
          <img src="/image/brands/asics-svg.svg" alt="Asics" />
          <span>Asics</span>
        </div>
    </NavLink>

<NavLink to="/puma">
        <div className="brand-card">
          <img src="/image/brands/puma-svg.svg" alt="Puma" />
          <span>PUMA</span>
        </div>
</NavLink>
<NavLink to="/adidas">
        <div className="brand-card">
          <img src="/image/brands/adidas-svg.svg" alt="Adidas" />
          <span>Adidas</span>
        </div>
</NavLink>

<NavLink to="/redtape">
        <div className="brand-card">
          <img src="/image/brands/Red-Tape-svg.webp" alt="Red Tape" />
          <span>Red Tape</span>
        </div>
</NavLink>
<NavLink to="/skechers">
        <div className="brand-card">
          <img src="/image/brands/skecherlogo.webp" alt="Skechers" />
          <span>Skechers</span>
        </div>
</NavLink>
      </div>
    </section>
  );
};
