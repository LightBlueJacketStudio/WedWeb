const REGISTRY_TITLE = "Gift Registry"

const REGISTRY_BODY =
  "Truthfully, we have everything we could ask for. But there's something we care about deeply: the feral cats in our community who don't have anyone looking out for them. If you're looking for a way to celebrate with us, a donation toward trap-neuter-spay efforts would mean the world."

const ORGANIZATIONS = [
  {
    name: "San Jose Animal Care Center (Community Cats & TNR)",
    url: "https://www.sanjoseca.gov/your-government/departments-offices/animal-care-services/services/community-cats-and-tnr",
  },
  {
    name: "13th Street Cats",
    url: "https://www.13thstcats.org/",
  },
  {
    name: "Nine Lives Foundation",
    url: "https://ninelivesfoundation.org/",
  },
  {
    name: "Mini Cat Town",
    url: "https://minicattown.org/",
  },
]

function GiftRegistry() {
  return (
    <main className="registry-page">
      <div className="page-container">
        <section className="registry-hero">
          <div className="registry-stamp">
            <span className="material-symbols-outlined">pets</span>
          </div>

          <h1>{REGISTRY_TITLE}</h1>

          <p className="registry-intro">{REGISTRY_BODY}</p>
        </section>

        <section className="registry-org-card">
          <div className="registry-org-header">
            <div>
              <p className="registry-org-label">Give Directly</p>

              <h2>Organizations We Love</h2>

              <p>
                Prefer to give directly to a nonprofit? Here are a few
                organizations that have been doing this work and that we've
                had the pleasure of working with:
              </p>
            </div>

            <div className="registry-org-icon">
              <span className="material-symbols-outlined">
                volunteer_activism
              </span>
            </div>
          </div>

          <ul className="registry-org-list">
            {ORGANIZATIONS.map((org) => (
              <li key={org.name}>
                <a href={org.url} target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined">pets</span>

                  <span className="registry-org-name">{org.name}</span>

                  <span className="material-symbols-outlined external-icon">
                    open_in_new
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="registry-notice">
          <div className="registry-notice-icon" aria-hidden="true">
            🧧
          </div>

          <div>
            <p className="registry-notice-label">
              Gifts &amp; Red Envelopes
            </p>

            <p>
              If you're thinking of a red envelope, we'd recommend keeping
              your cash for travel instead! Feel free to gift us via Zelle or
              Venmo — we don't want you carrying extra cash around on your
              trip.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default GiftRegistry
