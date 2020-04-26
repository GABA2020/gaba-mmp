import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">GABA</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Link to="/profile">Profile</Link>
    </header>
  );
};

export default Header;
