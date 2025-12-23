import "./bands.css"
export const Bands = () => {
  return (
    <section className="bands">
      <h2 className="section-title">Brands We Deal In</h2>

      <div className="brands-grid">
        <div className="brand-card">
          <img src="/image/brands/nike-svg.svg" alt="Nike" />
          <span>Nike</span>
        </div>

        <div className="brand-card">
          <img src="/image/brands/jordan-air-svg.svg" alt="Jordan" />
          <span>Nike Jordan</span>
        </div>

        <div className="brand-card">
          <img src="/image/brands/asics-svg.svg" alt="Asics" />
          <span>Asics</span>
        </div>

        <div className="brand-card">
          <img src="/image/brands/puma-svg.svg" alt="Puma" />
          <span>PUMA</span>
        </div>

        <div className="brand-card">
          <img src="/image/brands/adidas-svg.svg" alt="Adidas" />
          <span>Adidas</span>
        </div>

        <div className="brand-card">
          <img src="/image/brands/Red-Tape-svg.webp" alt="Red Tape" />
          <span>Red Tape</span>
        </div>

        <div className="brand-card">
          <img src="/image/brands/skecherlogo.webp" alt="Skechers" />
          <span>Skechers</span>
        </div>
      </div>
    </section>
  );
};
