const REGISTRY_TITLE = "Skip the gift registry, save a cat!"

const REGISTRY_BODY =
  "Truthfully, we have everything we could ask for. But there's something we care about deeply: the feral cats in our community who don't have anyone looking out for them. If you're looking for a way to celebrate with us, a donation toward trap-neuter-spay efforts would mean the world."

const PAYMENT_METHODS = [
  {
    name: "Zelle",
    icon: "account_balance",
    handle: "408 646 7175",
  },
  {
    name: "Venmo",
    icon: "alternate_email",
    handle: "@bnhuynh",
  },
]

const ORGANIZATIONS = [
  {
    name: "San Jose Animal Care Center",
    category: "Community Cats & TNR",
    url: "https://www.sanjoseca.gov/your-government/departments-offices/animal-care-services/services/community-cats-and-tnr",
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
  return (
    <main className="registry-page">
      <div className="page-container">
        <section className="registry-hero">
          <h1>{REGISTRY_TITLE}</h1>

          <p className="registry-intro">{REGISTRY_BODY}</p>
        </section>

        <section className="registry-video">
          <div className="registry-video-box">
            {/* TODO: swap this placeholder for a YouTube embed (iframe) once the video is ready */}
            <div className="registry-video-content">
              <button
                type="button"
                className="registry-play-btn"
                aria-label="Play our rescue journey video"
              >
                <span className="material-symbols-outlined">play_arrow</span>
              </button>

              <h2>Our Rescue Journey</h2>

              <p>A collection of moments with the kitties we've loved and helped.</p>
            </div>

            <span className="registry-video-paw material-symbols-outlined" aria-hidden="true">
              pets
            </span>
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
                  <span>{method.name} QR</span>
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
