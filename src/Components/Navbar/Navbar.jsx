import React, { useState } from 'react';
import './Navbar.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
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
            <ScrollLink to="products" smooth={true} duration={500} onClick={toggleMenu}>
              Products
            </ScrollLink>
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
