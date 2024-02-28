import React, { useState } from 'react';
import Logo from '../assets/Logo.jpeg';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <p>
          <b>ALL SALES ARE FINAL!!!</b> Discounted price will be reflected in
          cart
        </p>
      </div>
      <div className="navbar-section">
        <div className="navbar-middle">
          <div className="navbar-search-icons">
            <div className="hamburger-menu" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="search-icon">
              <i className="bx bx-search"></i>
            </div>
          </div>
          <div className="navbar-img">
            <img id="logo-img" src={Logo} alt="Logo" />
          </div>
          <div className="navbar-login-icons">
            <i className="bx bx-user"></i>
            <i className="bx bx-cart"></i>
            <span className="nav-cart-count">1</span>
          </div>
        </div>
        <ul className={isMenuOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <li onClick={closeMenu}>Home</li>
          <li onClick={closeMenu}>Category</li>
          <li onClick={closeMenu}>Gifts</li>
          <li onClick={closeMenu}>Toys</li>
          <li onClick={closeMenu}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
