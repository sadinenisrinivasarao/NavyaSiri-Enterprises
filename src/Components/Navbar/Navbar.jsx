import React from 'react';
import './Navbar.css';
// Import Link from both react-router-dom and react-scroll
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navBar_div'>
      <h3 className='Company_name'>
        <RouterLink to="/">NavyaSiri Enterprises</RouterLink>
      </h3>
      <nav>
        <ul className='nav_links'>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            
            <ScrollLink to="products" smooth={true} duration={500}>
              Products
            </ScrollLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
