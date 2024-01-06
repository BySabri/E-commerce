import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import "./navbar.css";

export default function Navbar({ user, handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <Link className="logo "to="/">Black Line</Link>
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          {user ?
            <>
              <NavLink to="/cart" onClick={() => setIsOpen(false)}>Cart</NavLink>
              <button onClick={() => { handleLogout(); setIsOpen(false); }}>Log Out</button>
            </> :
            <NavLink to="/login" onClick={() => setIsOpen(false)}>Log in</NavLink>
          }
        </div>
      </div>
    </nav>
  );
}
