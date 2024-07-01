import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.jpeg';
import { Link } from 'react-router-dom'; // Import Link
import './navbar.css';

const Navbar = ({ isLoggedIn, onLogout, onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const storedAvatar = localStorage.getItem('avatar');
    if (storedAvatar) {
      setAvatar(storedAvatar);
    } else {
      console.log('No avatar found in localStorage');
    }
  }, [isLoggedIn]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  console.log('Current avatar state:', avatar);

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
            {isLoggedIn ? (
              <>
                {avatar ? (
                  <img
                    id="log-img"
                    src={`http://localhost:5000/${avatar}`} // Ensure correct URL construction
                    alt="User Avatar"
                    className="user-avatar"
                    onError={(e) => {
                      console.error('Error loading avatar:', e);
                      setAvatar('default-avatar.jpg'); // Optionally, set a default avatar
                    }}
                  />
                ) : (
                  <p>Avatar not found</p>
                )}
                <button className="logout-button" onClick={onLogout}>
                  Logout
                </button>
              </>
            ) : (
              <div className="login-user-container" onClick={onLoginClick}>
                <i className="bx bx-user">
                  <p id="login-btn-text">LogIn</p>
                </i>
                {/* <span id="login-span">LogIn</span> */}
              </div>
            )}
            <i className="bx bx-cart"></i>
            <span className="nav-cart-count">1</span>
          </div>
        </div>
        <ul className={isMenuOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <li onClick={closeMenu}>
            <Link to="/">Home</Link> {/* Link to Home */}
          </li>
          <li onClick={closeMenu}>
            <Link to="/category">Category</Link>{' '}
            {/* Example: Link to another route */}
          </li>
          <li onClick={closeMenu}>Gifts</li>
          <li onClick={closeMenu}>Toys</li>
          <li onClick={closeMenu}>Contact</li>
        </ul>
        {/* <ul className={isMenuOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <li onClick={closeMenu}>Home</li>
          <li onClick={closeMenu}>Category</li>
          <li onClick={closeMenu}>Gifts</li>
          <li onClick={closeMenu}>Toys</li>
          <li onClick={closeMenu}>Contact</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Navbar;
