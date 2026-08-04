import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import saveTheDate from '../assets/save-the-date.jpg'
import vietnamStamp from '../assets/DN-stamp-burgundy.jpg'
import { ContactUs } from './ContactUs'

// Quick links that live on the postcard's right side, in place of the usual
// address lines. Each keeps the "little stamp / ticket" look of a real postcard.
const PLAN_LINKS = [
  { label: 'RSVP', to: '/rsvp', icon: 'edit_calendar' },
  { label: 'Travel Guide', to: '/travel_guide', icon: 'explore' },
  { label: 'Where to Stay', to: '/travel_guide#where-to-stay', icon: 'hotel' },
  { label: 'Gift Registry', to: '/gift_registry', icon: 'redeem' },
]

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function FlightPath() {
  // Reduced-motion visitors skip the entrance/flip animation and start on the
  // fully-entered front, so seed the state instead of setting it in an effect.
  const [entered, setEntered] = useState(prefersReducedMotion)
  const [flipped, setFlipped] = useState(false)
  const cardRef = useRef(null)
  const pcCardRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = cardRef.current
    if (!node) return
    if (prefersReducedMotion) return

    const timers = []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            // Pop the postcard in, then flip it over to the note with a single
            // calm turn (same motion as a manual tap).
            timers.push(setTimeout(() => setEntered(true), 120))
            timers.push(setTimeout(() => setFlipped(true), 1700))
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [])

  // Keep the flip container's height in sync with the note's real content height
  // The landscape card is rotated + absolutely positioned, so its
  // natural height can't feed back into the layout on its own, measure it and
  // hand the container an explicit --card-h. This lets the note grow on narrow
  // screens (more text wrapping = taller card) instead of being clipped.
  useEffect(() => {
    const card = pcCardRef.current
    const container = cardRef.current
    if (!card || !container) return

    const sync = () =>
      container.style.setProperty('--card-h', `${card.offsetHeight}px`)
    sync()

    const observer = new ResizeObserver(sync)
    observer.observe(card)

    // Re-measure once the handwritten web fonts load, since the note reflows.
    if (document.fonts?.ready) document.fonts.ready.then(sync)

    return () => observer.disconnect()
  }, [])

  const toggle = () => setFlipped((prev) => !prev)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle()
    }
  }

  return (
    <section id="wedding" className="postcard-section">
      <div
        ref={cardRef}
        className={[
          'postcard',
          entered ? 'is-entered' : '',
          flipped ? 'is-flipped' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={
          flipped
            ? 'Save the Date postcard, showing our note. Activate to see the front.'
            : 'Save the Date postcard. Activate to read our note.'
        }
        onClick={toggle}
        onKeyDown={handleKeyDown}
      >
        <div className="postcard-inner">
          {/* FRONT — the Save the Date*/}
          <div className="postcard-face postcard-front">
            <img
              src={saveTheDate}
              alt="Save the Date — Hoàng My & Ngọc Bảo, Saturday 13 March 2027, Đà Nẵng, Việt Nam"
            />
            <span className="postcard-hint" aria-hidden="true">
              <span className="postcard-hint-icon">↻</span> Flip me
            </span>
          </div>

          {/* BACK — the landscape postcard */}
          <div className="postcard-face postcard-back">
            <div className="pc-card" ref={pcCardRef}>
              <div className="pc-left">
                <div className="pc-return">
                  <p className="pc-return-name">
                    Mikazuki Da Nang
                    <br />
                    Japanese Resorts &amp; Spa
                  </p>
                  <p className="pc-return-addr">
                    
                    Nguyen Tat Thanh Street
                    <br />
                    Hai Van Ward, Da Nang, Viet Nam
                    <br />
                  </p>
                </div>

                <div className="pc-savedate">
                  <p>Save the Date</p>
                  <p className="pc-savedate-date">13 March 2027</p>
                </div>

              <div className="pc-message">
                <p>Hi families and friends,</p>
                <p>
                  Greetings from Da Nang, Viet Nam! We're getting married, and we'd love for you to be there with
                  us.
                </p>
                <p>
                  It's going to be a beautiful excuse for a trip to our home
                  country where is has cool beaches, incredible food, and a celebration you
                  won't forget.
                </p>
                {/* <p>
                  More details (RSVP, accommodation, travel tips) coming soon.
                  For now, just mark your calendars and start looking into
                  flights!
                </p> */}
                <p className="pc-signoff">— Bao &amp; Amy</p>
              </div>
            </div>

            <div className="pc-divider" aria-hidden="true"></div>

            <div className="pc-right">
              <div className="pc-postage">
                {/* Postage stamp tucked into the corner. */}
                <img
                  className="pc-stamp-frame"
                  src={vietnamStamp}
                  alt="Việt Nam 2027 air-mail postage stamp"
                />
              </div>

              <div className="pc-deliver">
                <p className="pc-deliver-label">Plan your visit:</p>
                <div
                  className="pc-actions"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  {PLAN_LINKS.map(({ label, to, icon }) => (
                    <Link key={label} to={to} className="pc-action">
                      <span
                        className="pc-action-icon material-symbols-outlined"
                        aria-hidden="true"
                      >
                        {icon}
                      </span>
                      <span className="pc-action-label">{label}</span>
                    </Link>
                  ))}
                </div>

                {/* Tapping "Contact us" opens a modal; keep the click from
                    bubbling up to the card's flip toggle. */}
                {/* <div
                  className="pc-contact"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  <ContactUs className="contact-us-flat pc-contact-link" />
                </div> */}
              </div>
            </div>

              {/* <span className="postcard-hint" aria-hidden="true">
                <span className="postcard-hint-icon">↻</span> flip back
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlightPath
