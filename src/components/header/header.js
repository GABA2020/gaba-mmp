import React, { useState } from 'react';
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, toggleMenu] = useState(false);

  return (
    <header>
      <div className={`menu menu--spin ${menuOpen ? 'is-active' : ''}`} onClick={() => toggleMenu(!menuOpen)}>
        <div className="menu-box">
          <div className="menu-inner"></div>
        </div>
      </div>
      <Link to="/">GABA</Link>
      <Link to="/profile">Profile</Link>
    </header>
  );
};

export default Header;
