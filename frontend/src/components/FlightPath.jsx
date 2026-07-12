const weddingIllustration =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ27bBJtZ0yvi5-K49pXwtc7mwIN03TCgvZS727SVHw7vGro8ZyilsMY6yVfBVsh1o_8Okm_TJB_m2NQ6DIW0vFCr8bA8NCUKyqO-tx2Yhf-WBKZTWqW1Wg66bz5pTPgWcr1cJtMYnyjAZYKEEtmRAXiBGyyopJuO6SyR1sDjD_tUj8mywQ2xae8YtSnzK16dbmdDR1ReW7ttniYs00hhWPdmXFVt90xec1XGHtPvNIrboAqHgslcFeXVwUjaYumagWLa9EXz_Bvg'

function FlightPath() {
  return (
    <section id="wedding" className="flight-path-section">
      <div className="section-heading">
        <h2>The Flight Path</h2>
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