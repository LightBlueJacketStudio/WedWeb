import { useState } from "react"
import MapView from "../components/MapView.jsx"

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/rLKvbn2fDBApr7oh7"

const VENUE_ADDRESS =
  "Nguyễn Tất Thành, Hải Vân, Đà Nẵng 55000, Vietnam"

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
              Everything you need to know about our special day —
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
              Mikazuki Resort &amp; Spa
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
            <p className="travel-map-label">
              The Itinerary
            </p>

            <h2>
              <span className="material-symbols-outlined">
                event_note
              </span>

              Agenda
            </h2>
          </div>

          <div className="wedding-agenda-pending">
            <span className="material-symbols-outlined" aria-hidden="true">
              schedule
            </span>

            <p>
              TBD - please check again later when it comes closer to the date
              for more information.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default TheWedding
