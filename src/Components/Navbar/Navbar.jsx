import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaRegWindowClose } from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Navbar = ({resetSearch}) => {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const handleHomeClick = () => {
    // Call the resetSearch function passed from parent component
    resetSearch();
    // Close the navbar
    setActive('navBar');
  };

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex" onClick={handleHomeClick}>
            <h1>
              <MdOutlineTravelExplore className="icon"/>
              Travel.
            </h1>
          </Link>
        </div>
        
        <div className={active}>
          <ul className="navLists grid">
            <li className="navItem">
              <Link to="/" className="navLink" onClick={handleHomeClick}>Home</Link>
            </li>
            
            <li className="navItem">
              <Link to="/about" className="navLink">About</Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">Contact</Link>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Login</a>
            </li>
            <li className="navItem">
              <button className="book-now-button">
                <a href="#">REGISTER</a>
              </button>
              <div className="closeNavbar">
                <FaRegWindowClose className="icon" />
              </div>
            </li>
          </ul>
          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icons"/>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
