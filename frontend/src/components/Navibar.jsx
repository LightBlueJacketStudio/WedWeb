import React, { useState } from 'react';
//import './YourStyles.scss'; // Adjust the import path to your SCSS file

const Navibar = () => {
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked (for better mobile UX)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="Navibar">
      <div className="navibar-inner">
        {/* Logo */}
        <span className="navibar-logo">B &amp; M</span>

        {/* Hamburger Button (only visible on mobile) */}
        <button 
          className={`navibar-menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`navibar-links ${isMenuOpen ? 'is-open' : ''}`}>
          <a href="#journey" onClick={closeMenu}>
            Our Journey
          </a>
          <a href="#wedding" onClick={closeMenu}>
            The Wedding
          </a>
          <a href="#travel" onClick={closeMenu}>
            Travel Info
          </a>
          <a className="rsvp-link" href="#rsvp" onClick={closeMenu}>
            RSVP
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navibar;