import { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="">
      <h1 id="logo" className="non-selectable">
        <NavLink to="/">KA</NavLink>
      </h1>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/projects" className="navbar-element">
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
