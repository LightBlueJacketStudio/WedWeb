import weddingIllustration from '../assets/cat-city-skylight.png'

function FlightPath() {
  return (
    <section id="wedding" className="flight-path-section">
      <div className="section-heading">
        <h1>The Flight Path</h1>
        <p>Your itinerary for our special day</p>
      </div>

      <div className="flight-card">
        <div className="flight-image">
          <img src={weddingIllustration} alt="Wedding Illustration" />
        </div>

        <div className="flight-details">
          <div className="detail-group">
            <p className="detail-label">Departure Date</p>
            <p className="detail-value highlight">Saturday, 13 March, 2027</p>
          </div>

          <div className="detail-group">
            <p className="detail-label">Destination</p>
            <p className="detail-value strong">
              Mikazuke Da Nang Japanese Resorts &amp; Spa
            </p>
            <p className="detail-muted">Da Nang, Vietnam</p>
          </div>

          <div className="quote-block">
            <p>
              "Greeting from Da Nang, Viet Nam! We're excited to share that
              we're getting married, and we'd love for you to be there with us.
              It's going to be a beautiful excuse for a trip to our home
              country, cool beach, incredible food, and a celebration you won't
              forget."
            </p>
          </div>

          <div className="notice-box">
            <p>
              More details RSVP, accommodation, and travel tips coming soon. For
              now, just mark your calendars and start looking into flights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlightPath