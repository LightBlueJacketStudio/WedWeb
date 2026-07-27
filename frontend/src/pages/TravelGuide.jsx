import { useState } from "react"
import MapView from "../components/MapView.jsx"

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/rLKvbn2fDBApr7oh7"

const VENUE_ADDRESS =
  "Nguyễn Tất Thành, Hải Vân, Đà Nẵng 55000, Vietnam"

function TravelGuide() {
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
          <div className="travel-guide-stamp">
            <span className="material-symbols-outlined">
              flight_takeoff
            </span>
          </div>

          <p className="travel-guide-label">
            Destination Guide
          </p>

          <h1>Travel to Da Nang</h1>

          <p className="travel-guide-intro">
            Everything you need to make your trip to Vietnam smooth and stress-free.
          </p>
        </section>

        <section className="travel-map-card">
          <div className="travel-map-header">
            <div>
              <p className="travel-map-label">
                Interactive Map
              </p>

              <h2>Wedding Venue</h2>

              <p>
                View the venue below or open Google Maps for
                turn-by-turn directions.
              </p>
            </div>

            <div className="travel-map-icon">
              <span className="material-symbols-outlined">
                map
              </span>
            </div>
          </div>

          <MapView />

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

                  <span>{copied ? "Copied!" : "Copy"}</span>
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
      </div>
    </main>
  )
}

export default TravelGuide