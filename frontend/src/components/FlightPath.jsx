import { useEffect, useRef, useState } from 'react'
import saveTheDate from '../assets/save-the-date.png'
import arrivalStamp from '../assets/DAD-arrival-stamp.png'

function FlightPath() {
  const [entered, setEntered] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const [revealing, setRevealing] = useState(false)
  const cardRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = cardRef.current
    if (!node) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      setEntered(true)
      return
    }

    const timers = []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            // Pop the postcard in, then let it tumble over to the note.
            timers.push(setTimeout(() => setEntered(true), 120))
            timers.push(
              setTimeout(() => {
                setRevealing(true)
                setFlipped(true)
              }, 1700)
            )
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

  const toggle = () => setFlipped((prev) => !prev)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle()
    }
  }

  // Once the multi-spin reveal finishes, drop back to the plain flipped
  // state so later taps flip with a simple, calm turn.
  const handleAnimationEnd = () => setRevealing(false)

  return (
    <section id="wedding" className="postcard-section">
      <div
        ref={cardRef}
        className={[
          'postcard',
          entered ? 'is-entered' : '',
          flipped ? 'is-flipped' : '',
          revealing ? 'is-revealing' : '',
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
        <div className="postcard-inner" onAnimationEnd={handleAnimationEnd}>
          {/* FRONT — the Save the Date illustration */}
          <div className="postcard-face postcard-front">
            <img
              src={saveTheDate}
              alt="Save the Date — Hoàng My & Ngọc Bảo, Saturday 13 March 2027, Đà Nẵng, Việt Nam"
            />
            <span className="postcard-hint" aria-hidden="true">
              <span className="postcard-hint-icon">↻</span> tap to read our note
            </span>
          </div>

          {/* BACK — the landscape postcard */}
          <div className="postcard-face postcard-back">
            <div className="pc-card">
              <div className="pc-left">
                <div className="pc-return">
                  <p className="pc-return-name">
                    Mikazuki Da Nang
                    <br />
                    Japanese Resorts &amp; Spa
                  </p>
                  <p className="pc-return-addr">
                    {/* Xuan Thieu Tourism Area */}
                    
                    Nguyen Tat Thanh Street
                    <br />
                    Hai Van Ward, Da Nang, Viet Nam
                    <br />
                    {/* Vietnam */}
                  </p>
                </div>

                <div className="pc-savedate">
                  <p>Save the Date</p>
                  <p className="pc-savedate-date">13 March 2027</p>
                </div>

              <div className="pc-message">
                <p>Hi families and friends,</p>
                <p>
                  Greetings from Da Nang, Viet Nam! We're excited to share that
                  we're getting married, and we'd love for you to be there with
                  us.
                </p>
                <p>
                  It's going to be a beautiful excuse for a trip to our home
                  country — cool beaches, incredible food, and a celebration you
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
                <img
                  className="pc-stamp"
                  src={arrivalStamp}
                  alt="Da Nang arrival stamp, 03.13.2027"
                />
                <svg
                  className="pc-postmark"
                  viewBox="0 0 200 56"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <path id="pc-wave" d="M2,38 Q40,10 90,30 T198,24" />
                  <text fontSize="11">
                    {/* <textPath href="#pc-wave" startOffset="2">
                      www.weddingwebsitehere.com
                    </textPath> */}
                  </text>
                </svg>
              </div>

              <div className="pc-deliver">
                <p className="pc-deliver-label">Deliver To:</p>
                <span className="pc-line" aria-hidden="true"></span>
                <span className="pc-line" aria-hidden="true"></span>
                <span className="pc-line" aria-hidden="true"></span>
                <span className="pc-line" aria-hidden="true"></span>
              </div>
            </div>

              <span className="postcard-hint" aria-hidden="true">
                <span className="postcard-hint-icon">↻</span> tap to flip back
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlightPath
