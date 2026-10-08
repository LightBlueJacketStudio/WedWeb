import { useState } from "react"
import MapView from "../components/MapView.jsx"

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/rLKvbn2fDBApr7oh7"

const VENUE_ADDRESS =
  "Nguyễn Tất Thành, Hải Vân, Đà Nẵng 55000, Vietnam"

const AGENDA_ITEMS = [
  {
    time: "16:00",
    title: "First Look & Vows",
    icon: "diamond",
    side: "left",
  },
  {
    time: "17:30",
    title: "Welcome - Cocktail",
    icon: "local_bar",
    side: "right",
  },
  {
    time: "18:00",
    title: "Ceremony",
    icon: "church",
    side: "left",
  },
  {
    time: "18:30",
    title: "Reception",
    icon: "restaurant",
    side: "right",
  },
]

const DRESSCODE_COLORS = [
  { name: "Dusty Rose", hex: "#C48793" },
  { name: "Mauve", hex: "#B18A9E" },
  { name: "Sage Green", hex: "#9CAF88" },
  { name: "Soft Lilac", hex: "#C9B6DE" },
]

function TheWedding() {
  const [copied, setCopied] = useState(false)

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(VENUE_ADDRESS)
      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error("Could not copy address:", error)
    }
  }

  return (
    <main className="travel-guide-page">
      <div className="page-container">
        <section className="travel-guide-hero">
          <div className="travel-hero-content">
            {/* <p className="travel-guide-label">
              The Celebration
            </p> */}

            <h1>The Wedding</h1>

            <p className="travel-guide-intro">
              Everything you need to know about our special day - 
              where to find us, and how the celebration will unfold.
            </p>
          </div>
        </section>

        <section className="travel-map-card">
          <div className="travel-map-header">
            <div>
              {/* <p className="travel-map-label">
                Interactive Map
              </p> */}

              <h2>
                <span className="material-symbols-outlined">
                  location_on
                </span>

                Wedding Venue
              </h2>
            </div>

            <p className="venue-name">
              Mikazuki Da Nang Resort &amp; Spa
            </p>
          </div>

          <div className="travel-map-wrapper">
            <MapView />

            <div className="venue-overlay-card">
              <p className="venue-address-label">
                Venue Address
              </p>

              <p className="venue-address">
                {VENUE_ADDRESS}
              </p>

              <div className="venue-actions">
                <button
                  type="button"
                  className="copy-address-button"
                  onClick={handleCopyAddress}
                  aria-label="Copy venue address"
                >
                  <span className="material-symbols-outlined">
                    {copied ? "check" : "content_copy"}
                  </span>

                  {copied ? "Copied!" : "Copy"}
                </button>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-maps-link"
                >
                  Open in Google Maps

                  <span className="material-symbols-outlined">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="venue-directions">
            <div className="venue-address-group">
              <p className="venue-address-label">
                Address
              </p>

              <div className="venue-address-row">
                <span className="material-symbols-outlined">
                  location_on
                </span>

                <p>{VENUE_ADDRESS}</p>

                <button
                  type="button"
                  className="copy-address-button"
                  onClick={handleCopyAddress}
                  aria-label="Copy venue address"
                >
                  <span className="material-symbols-outlined">
                    {copied ? "check" : "content_copy"}
                  </span>

                  <span>
                    {copied ? "Copied!" : "Copy"}
                  </span>
                </button>
              </div>
            </div>

            <a
              className="google-maps-button"
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">
                directions
              </span>

              Open in Google Maps

              <span className="material-symbols-outlined external-icon">
                open_in_new
              </span>
            </a>
          </div>
        </section>

        <section className="wedding-agenda-card">
          <div className="wedding-agenda-header">
            {/* <p className="travel-map-label">
              The Itinerary
            </p> */}

            <h2>
              <span className="material-symbols-outlined">
                event_note
              </span>
              Agenda
            </h2>

            <p className="wedding-agenda-note">
              A proposed timeline for the day. The times may still shift a little,
              so please check back closer to the date.
            </p>
          </div>

          <ol className="wedding-timeline">
            {AGENDA_ITEMS.map((item) => (
              <li
                key={item.time}
                className={`wedding-timeline-item is-${item.side}`}
              >
                <div className="timeline-content">
                  <p className="timeline-time">
                    {item.time}
                  </p>

                  <div className="timeline-event">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>

                    <p className="timeline-title">
                      {item.title}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="wedding-dresscode">
            <h3>Dresscode</h3>

            {/* <p className="dresscode-hint">
              Join us in these colours - soft garden tones that will look
              lovely against the sea and the sunset.
            </p> */}

            <ul className="dresscode-swatches">
              {DRESSCODE_COLORS.map((color) => (
                <li key={color.hex}>
                  <span
                    className="dresscode-dot"
                    style={{ background: color.hex }}
                    aria-hidden="true"
                  />

                  <span className="dresscode-name">
                    {color.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export default TheWedding
