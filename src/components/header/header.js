import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">GABA</Link>
      <Link to="/profile">Profile</Link>
    </header>
  );
};

export default Header;
