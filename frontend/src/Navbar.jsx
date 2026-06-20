// assest imports
import placeholder from './assets/placeholder.png'

// Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'>
      <Link  to="/">
        <img src={placeholder} />
      </Link>

      <ul className="navbar-links">
        <li><Link to="/">Wedding</Link></li>
        <li><Link to="/travelnstay">Travel & Stay</Link></li>
        <li><Link to="/rsvp">RSVP</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;