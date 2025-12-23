import { NavLink } from "react-router-dom";
import "./hero.css"
export const Hero = () => {
  return (<>
    <section>
          <div className="hero-offer-bar">
      <div className="offer-inner">
        <span className="offer-main">
          EXTRA 25% OFF ON EVERYTHING*
        </span>

        <span className="offer-sub">
          HOLIDAY SPARKLE | ENDS 25 DEC
        </span>

        <span className="offer-extra">
          + EXTRA 5% OFF ON ONLINE PAYMENTS
        </span>
      </div>
    </div>
    </section>  
    <section className="hero asics">
      <div className="hero-inner">

        {/* TEXT CONTENT */}
        <div className="hero-content">
          <span className="hero-tag">NAGINO™ COLLECTION</span>

          <h1>
            Feel Comfort <br />
            Find Calm
          </h1>

          <p>
            Designed for her, made for every move.
          </p>

        </div>
          <NavLink to="/product/1" >
        <div className="hero-image">
          <img src="/image/acise.webp" alt="Step-on Shoes" />
        </div>
          </NavLink>

      </div>
    </section>


  <section className="hero SKECHERS">
      <div className="hero-inner">

    
          <NavLink to="/product/16" >
        <div className="hero-image">
          <img src="/image/skechers.jpg" alt="Step-on Shoes" />
        </div>
          </NavLink>

      </div>
    </section>
    
  </>
  );
};

