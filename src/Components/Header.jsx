import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="">
      <h1 id="logo" className="non-selectable">
        KA
      </h1>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <p className="navbar-element">About</p>
        </li>
        <li>
          <p className="navbar-element">Experience</p>
        </li>
        <li>
          <p className="navbar-element">Contact Me</p>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
