import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="top-nav">
      {/* <img className="logo" src={Logo} alt="shortlink-logo" /> */}
      <h3 className="logo">SHORTLINK</h3>

      <div className="hamburger-icon" onClick={handleMenu}>
        <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={showMenu ? "hamburger-menu active" : "hamburger-menu"}>
        <li>
          <a href="#about" className="about">
            About
          </a>
        </li>
        <li>
          <a href="#about" className="about">
            Products
          </a>
        </li>
        <li>
          <a href="#about" className="about">
            Docs
          </a>
        </li>
        <button className="btn">Sign In</button>
      </ul>
    </nav>
  );
};

export default Navbar;
