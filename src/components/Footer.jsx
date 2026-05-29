import { Link} from "react-router-dom"

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">

          <h2>Urban Style</h2>

          <p>
            Modern everyday best fashion designed for comfort,confidence, and simplicity .
            
          </p>

        </div>


        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          < Link to="/products">Products</Link>

          < Link to="/about">About</Link>

          < Link to="/contact">Contact</Link>

        </div>


        <div className="footer-contact">

          <h3>Contact</h3>

          <p>urbanstyle@gmail.com</p>

          <p>+961 70 000 000</p>

          <p>Lebanon</p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Urban Style. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer