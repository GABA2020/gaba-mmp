import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, toggleMenu] = useState(false);

    return (
        <>
            <header>
                <div
                    className={`menu menu--spin ${menuOpen ? "is-active" : undefined}`}
                    onClick={() => toggleMenu(!menuOpen)}
                >
                    <div className="menu-box">
                        <div className="menu-inner"></div>
                    </div>
                </div>
                <Link className="logo-type" to="/">GABA</Link>
                <Link to="/profile">Profile</Link>
            </header>
            <nav className={menuOpen ? "open" : undefined}>
                <p>menu</p>
            </nav>
        </>
    );
};

export default Header;
