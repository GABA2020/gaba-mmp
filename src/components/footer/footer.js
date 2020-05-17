import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link className="logo-type" to="/">GABA</Link>
    </footer>
  );
};

export default Footer;
