import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Urban Style</h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li>
          <NavLink to="/" className="cart">
            🛒 Cart
          </NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar