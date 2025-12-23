import { NavLink } from "react-router-dom";

export const Header = () => {
  return (<>
      <header className="setion-navbar">
        <section className="top_txt">
          <div className="top_txt_inner">
            <div>
              <p>Get your first order free</p>
            </div>
            <div className="top_auth_links">
              <NavLink to="/signIn">SIGN IN</NavLink>
              <NavLink to="/signUp">SIGN UP</NavLink>
             
            </div>
          </div>
        </section>

        <section className="main_navbar">
          <div className="navbar_inner">
            <div className="logo-container">
              <img src="/image/step-on-logo.png" alt="" />
            </div>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </NavLink>

                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Product
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
      </header>
    </>
);
};
