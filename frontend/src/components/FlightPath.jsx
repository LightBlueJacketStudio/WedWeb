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
  {
    label: 'Where to Stay',
    to: '/travel_guide#where-to-stay',
    icon: 'hotel',
  },
  { label: 'Gift Registry', to: '/gift_registry', icon: 'redeem' },
]

const AUTO_ENTER_DELAY = 120
const AUTO_SHOW_BACK_DELAY = 1700

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function FlightPath() {
  // Reduced-motion visitors skip the entrance animation and begin with the
  // postcard fully visible.
  const [entered, setEntered] = useState(prefersReducedMotion)
  const [flipped, setFlipped] = useState(false)

  const cardRef = useRef(null)
  const hasAnimated = useRef(false)

  // Reveal the postcard when it enters the viewport, then automatically
  // transition from the front artwork to the note.
  useEffect(() => {
    const node = cardRef.current

    if (!node || prefersReducedMotion) return

    const timers = []

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimated.current) return

          hasAnimated.current = true

          timers.push(
            window.setTimeout(() => {
              setEntered(true)
            }, AUTO_ENTER_DELAY)
          )

          timers.push(
            window.setTimeout(() => {
              setFlipped(true)
            }, AUTO_SHOW_BACK_DELAY)
          )

          observer.disconnect()
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [])

  const toggle = () => {
    setFlipped((current) => !current)
  }

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return

    event.preventDefault()
    toggle()
  }

  const stopCardToggle = (event) => {
    event.stopPropagation()
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
        {/*
          Both panels remain rendered and occupy the same fixed stage.

          CSS controls which panel is visible:
          - the front exits when .postcard has .is-flipped
          - the back enters when .postcard has .is-flipped

          This preserves the existing class names while removing the need to
          rotate and measure a differently sized physical card.
        */}
        <div className="postcard-inner">
          {/* FRONT — Save the Date artwork */}
          <div
            className="postcard-face postcard-front"
            aria-hidden={flipped}
          >
            <img
              src={saveTheDate}
              alt="Save the Date — Hoàng My & Ngọc Bảo, Saturday 13 March 2027, Đà Nẵng, Việt Nam"
            />

            <span className="postcard-hint" aria-hidden="true">
              <span className="postcard-hint-icon">↻</span>
              Show note
            </span>
          </div>

          {/* BACK — landscape postcard note */}
          <div
            className="postcard-face postcard-back"
            aria-hidden={!flipped}
          >
            <div className="pc-card">
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
                  </p>
                </div>

                <div className="pc-savedate">
                  <p>Save the Date</p>
                  <p className="pc-savedate-date">13 March 2027</p>
                </div>

                <div className="pc-message">
                  <p>Hi families and friends,</p>

                  <p>
                    Greetings from Da Nang, Viet Nam! We're getting married,
                    and we'd love for you to be there with us.
                  </p>

                  <p>
                    It's going to be a beautiful excuse for a trip to our home
                    country, which has cool beaches, incredible food, and a
                    celebration you won't forget.
                  </p>

                  <p className="pc-signoff">— Bao &amp; Amy</p>
                </div>
              </div>

              <div className="pc-divider" aria-hidden="true" />

              <div className="pc-right">
                <div className="pc-postage">
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
                    onClick={stopCardToggle}
                    onKeyDown={stopCardToggle}
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
                </div>
              </div>
            </div>

            {/* <span className="postcard-hint" aria-hidden="true">
              <span className="postcard-hint-icon">↻</span>
              Show front
            </span> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlightPath