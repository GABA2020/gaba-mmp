import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>footer</p>
      <Link to="/about">About Us</Link>
    </div>
  );
};

export default Footer;
