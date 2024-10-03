import React, { useState } from 'react';
import './Navbar.css';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {  animateScroll as scroll } from 'react-scroll'; // Added animateScroll for custom scrolling
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProductsClick = () => {
    toggleMenu();
    navigate("/");
    setTimeout(() => {
      scroll.scrollTo(document.getElementById("products").offsetTop, {
        duration: 100,
        smooth: true,
      });
    });
  };

  return (
    <div className='navBar_div'>
      <h3 className='Company_name'>
        <RouterLink to="/">NavyaSiri Enterprises</RouterLink>
      </h3>
      <div className='menu-icon' onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav_menu ${menuOpen ? 'active' : ''}`}>
        <ul className='nav_links'>
          <li>
            <RouterLink to="/" onClick={toggleMenu}>Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" onClick={toggleMenu}>About</RouterLink>
          </li>
          <li>
            <a onClick={handleProductsClick}>Products</a> 
          </li>
          <li>
            <RouterLink to="/contact" onClick={toggleMenu}>Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
