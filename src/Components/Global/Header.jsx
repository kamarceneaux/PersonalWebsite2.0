
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
          <a className="navbar-element">About</a>
        </li>
        <li>
          <a className="navbar-element">Projects</a>
        </li>
        <li>
          <a className="navbar-element">Extras</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
