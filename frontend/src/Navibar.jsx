import placeholder from './assets/placeholder.png'

import { Link } from 'react-router-dom';

function Navibar() {
  return (
    <nav className='Navibar'>
      <ul className="navibar-links">
        <li><Link to="/"><img src={placeholder}/></Link></li>
        <li><Link to="/">Wedding</Link></li>
        <li><Link to="/travelnstay">Travel & Stay</Link></li>
        <li><Link to="/rsvp">RSVP</Link></li>
      </ul>
    </nav>
  );
}

export default Navibar;