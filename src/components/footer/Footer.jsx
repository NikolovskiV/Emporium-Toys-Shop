import React from 'react';
import Logo from '../assets/Logo.jpeg';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <div>
          <div className="footer-social-network">
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-instagram-alt"></i>
            <i className="bx bxl-twitter"></i>
          </div>
          <div className="footer-company-info">
            <i className="bx bxs-user">
              {' '}
              <span>Vande Nikolovski</span>
            </i>
            <i className="bx bxs-envelope">
              {' '}
              <span>vande_nikolovski@live.se</span>
            </i>
            <i className="bx bxl-internet-explorer">
              {' '}
              <span>www.nikolovski.se</span>
            </i>
            <i className="bx bxs-phone">
              {' '}
              <span>+46700484114</span>
            </i>
          </div>
        </div>
        <div>
          <div className="navbar-img">
            <img id="logo-img-footer" src={Logo} alt="Logo" />
          </div>
        </div>
        <div>
          <div className="footer-customer">
            <h3>CUSTOMER SERVICE</h3>
            <p>FAQ</p>
            <p>Contact</p>
            <p>Legal Stuff - Terms</p>
            <p>More Legal Stuff - Privacy</p>
            <p>Refund policy</p>
            <p>Do not sell my personal information</p>
          </div>
        </div>
      </div>
      <div>
        <p className="footer-right">
          &copy; <span>{new Date().getFullYear()}</span> All rights reserved
          Vande Nikolovski
        </p>
      </div>
    </div>
  );
};

export default Footer;
