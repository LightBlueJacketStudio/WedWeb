import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import monogramLogo from '../assets/monogram_logo_transparent.png';


const SECTION_LINKS = [
  { label: 'The Wedding', path: '/wedding' },
    { label: 'Travel Info', path: '/travel_guide' },
  { label: 'Gift Registry', path: '/gift_registry' }

];

const Navibar = () => {
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const isHome = pathname === '/';

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
        <Link to="/" className="navibar-logo" onClick={closeMenu}>
          <img src={monogramLogo} alt="B &amp; M" />
        </Link>

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
          {}
          {SECTION_LINKS.map(({ label, anchor, path }) => {
            const isActive = path ? pathname === path : isHome && hash === `#${anchor}`;
            const linkClassName = `nav-link${isActive ? ' is-active' : ''}`;

            return path ? (
              <Link key={label} to={path} className={linkClassName} onClick={closeMenu}>
                {label}
              </Link>
            ) : isHome ? (
              <a key={anchor} href={`#${anchor}`} className={linkClassName} onClick={closeMenu}>
                {label}
              </a>
            ) : (
              <Link key={anchor} to={`/#${anchor}`} className={linkClassName} onClick={closeMenu}>
                {label}
              </Link>
            );
          })}
          <Link className="rsvp-link" to="/rsvp" onClick={closeMenu}>
            RSVP
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navibar;