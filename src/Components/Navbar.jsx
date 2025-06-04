import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/farmers">FARM-INFO</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li ><Link to="/login">LOGIN</Link></li>
        <li ><Link to="/signup">SIGNUP</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
