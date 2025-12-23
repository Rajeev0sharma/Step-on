export const Footer=()=>{
    return (<>
     <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2>Step-On</h2>
          <p>Comfort That Moves With You — Step-on</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/product">Product</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect with Us</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Step-On. All rights reserved.</p>
      </div>
    </footer>
    
    </>)
}