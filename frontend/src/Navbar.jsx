// assest imports
import placeholder from './assets/placeholder.png'

// Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <span className='Navbar'>
      <img src={placeholder} ></img>
      <nav>
        <ul className="navbar-links">
          <li><Link to="/">Wedding</Link></li>
          <li><Link to="/travelnstay">Travel & Stay</Link></li>
          <li><Link to="/rsvp">RSVP</Link></li>
        </ul>
      </nav>
    </span>
  );
}

export default Navbar;