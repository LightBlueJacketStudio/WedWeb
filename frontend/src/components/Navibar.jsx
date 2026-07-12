function Navibar() {
  return (
    <nav className="Navibar">
      <div className="navibar-inner">
        <span className="navibar-logo">B &amp; M</span>

        <div className="navibar-links">
          <a className="active" href="#journey">
            Our Journey
          </a>
          <a href="#wedding">The Wedding</a>
          <a href="#travel">Travel Info</a>
          <a className="rsvp-link" href="#rsvp">
            RSVP
          </a>
        </div>

        <button className="navibar-menu" type="button" aria-label="Open menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  )
}

export default Navibar