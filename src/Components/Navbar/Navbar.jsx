import React, { useState } from 'react';
import './Navbar.css';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(prev => !prev); 
  };

  const handleProductsClick = () => {
    setMenuOpen(false); 
    navigate("/"); 
    setTimeout(() => {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        scroll.scrollTo(productsSection.offsetTop, {
          duration: 100,
          smooth: true,
        });
      }
    }, 100); 
  };

  return (
    <div className='navBar_div'>
      <h3 className='Company_name'>
        <RouterLink to="/">NavyaSiri Enterprises</RouterLink>
      </h3>
      <div className='menu-icon' onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav_menu ${menuOpen ? 'active' : 'hidden'}`}>
        <ul className='nav_links'>
          <li>
            <RouterLink to="/" onClick={() => setMenuOpen(false)}>Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" onClick={() => setMenuOpen(false)}>About</RouterLink>
          </li>
          <li>
            <a onClick={handleProductsClick}>Products</a>
          </li>
          <li>
            <RouterLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
