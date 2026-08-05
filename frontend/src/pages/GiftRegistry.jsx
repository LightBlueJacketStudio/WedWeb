import { useEffect, useRef, useState } from "react"
import venmoQr from "../assets/venmo.png"
import zelleQr from "../assets/zelle.png"

const REGISTRY_TITLE = "Skip the gift registry, save a cat!"

const RESCUE_STATS = [
  { icon: "pets", value: 16, suffix: "", label: "Cats & Kittens Rescued" },
  { icon: "healing", value: 15, suffix: "+", label: "Community Cats TNR'd" },
  { icon: "volunteer_activism", value: 8, suffix: "", label: "Foster Kittens Raised" },
  { icon: "favorite", value: 5, suffix: "+", label: "Years of Rescue" },
]

function StatTile({ icon, value, suffix, label }) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const [count, setCount] = useState(prefersReducedMotion ? value : 0)
  const tileRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const node = tileRef.current
    if (!node) return

    let frame
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()

        const duration = 1200
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * value))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [value, prefersReducedMotion])

  return (
    <div className="registry-stat-tile" ref={tileRef}>
      <span className="registry-stat-icon material-symbols-outlined" aria-hidden="true">
        {icon}
      </span>

      <span className="registry-stat-value">
        {count}
        {suffix}
      </span>

      <span className="registry-stat-label">{label}</span>
    </div>
  )
}

const REGISTRY_BODY =
  "Truthfully, we have everything we could ask for. But there's something we care about deeply: the feral cats in our community who don't have anyone looking out for them. If you're looking for a way to celebrate with us, a donation toward our trap-neuter-spay efforts would mean the world."

const PAYMENT_METHODS = [
  {
    name: "Zelle",
    icon: "account_balance",
    handle: "408 646 7175",
    qr: zelleQr,
  },
  {
    name: "Venmo",
    icon: "alternate_email",
    handle: "@bnhuynh",
    qr: venmoQr,
  },
]

const ORGANIZATIONS = [
  {
    name: "San Jose Animal Care Center",
    category: "Community Cats & TNR",
    url: "https://www.sanjoseca.gov/your-government/departments-offices/animal-care-services/services/tnr",
  },
  {
    name: "13th Street Cats",
    category: "Rescue & Adoption",
    url: "https://www.13thstcats.org/",
  },
  {
    name: "Nine Lives Foundation",
    category: "Shelter Services",
    url: "https://ninelivesfoundation.org/",
  },
  {
    name: "Mini Cat Town",
    category: "Foster Network",
    url: "https://minicattown.org/",
  },
]

function GiftRegistry() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <main className="registry-page">
      <div className="page-container">
        <section className="registry-hero">
          <h1>{REGISTRY_TITLE}</h1>

          <p className="registry-intro">{REGISTRY_BODY}</p>
        </section>

        <section className="registry-stats">
          <h2 className="registry-stats-title">Our Rescue, By the Numbers</h2>

          <div className="registry-stats-grid">
            {RESCUE_STATS.map((stat) => (
              <StatTile key={stat.label} {...stat} />
            ))}
          </div>
        </section>

        <section className="registry-video">
          <div className="registry-video-box">
            <div
              className={`registry-video-frame${
                videoPlaying ? " is-playing" : ""
              }`}
            >
              {videoPlaying ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/K2NHhwJ8RSY?autoplay=1"
                  title="Our Rescue Journey"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : (
                <button
                  type="button"
                  className="registry-video-cover"
                  onClick={() => setVideoPlaying(true)}
                  aria-label="Play Our Rescue Journey video"
                >
                  <span className="registry-play-btn" aria-hidden="true">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </span>

                  <span className="registry-video-cover-title">
                    Our Rescue Journey
                  </span>

                  <span className="registry-video-cover-sub">
                    A collection of moments with the kitties we've loved and
                    helped.
                  </span>

                  <span
                    className="registry-video-paw material-symbols-outlined"
                    aria-hidden="true"
                  >
                    pets
                  </span>
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="registry-gift-card">
          <h2>
            <span className="registry-gift-icon" aria-hidden="true">
              🧧
            </span>
            Gifts / Red Envelope
          </h2>

          <p className="registry-gift-desc">
            If you're thinking of a red envelope, we'd recommend keeping your
            cash for travel instead! Feel free to gift us via Zelle or Venmo —
            we don't want you carrying extra cash around on your trip.
          </p>

          <div className="registry-payment-grid">
            {PAYMENT_METHODS.map((method) => (
              <div className="registry-payment-card" key={method.name}>
                <div className="registry-payment-icon">
                  <span className="material-symbols-outlined">
                    {method.icon}
                  </span>
                </div>

                <p className="registry-payment-label">{method.name}</p>

                <p className="registry-payment-value">{method.handle}</p>

                <div className="registry-qr-box">
                  {method.qr ? (
                    <img
                      src={method.qr}
                      alt={`${method.name} QR code`}
                      className="registry-qr-img"
                    />
                  ) : (
                    <span>{method.name} QR</span>
                  )}
                </div>

                <p className="registry-qr-caption">Scan to gift</p>
              </div>
            ))}
          </div>
        </section>

        <section className="registry-donations">
          <h2>Direct Donations</h2>

          <p>
            Prefer to give directly to a nonprofit? Here are a few
            organizations that have been doing this work and that we've had
            the pleasure of working with:
          </p>

          <div className="registry-org-grid">
            {ORGANIZATIONS.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="registry-org-tile"
              >
                <span className="registry-org-tile-name">{org.name}</span>

                <span className="registry-org-tile-category">
                  {org.category}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default GiftRegistry
