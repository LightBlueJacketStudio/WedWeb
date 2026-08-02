const foodRecommendations = [
  {
    name: "Option 1",
    description:
      "Short Descriptiong and Address",
    // image:
    //   "https://lh3.googleusercontent.com/aida-public/AB6AXuBOfkrF2qCobadRFPLVv9BvLSLzo1Ci6jQ5x-XOnA9y7kd5s3ZgAf3S4KW3pkgOp_0JQZVJJXbL4OKDH8ZKSgDqB3wpvvRJQYfrsKOyyroRBdoklfvWbSspEBADzK_tjAsIXzVJc3CWtlhAwmtlp60KlP8iNypS17AJhUDI7osl92rtUxTRcZRYollZJXz510ERXpJ8y1SJCqzhqlfvTfu_0RH2YTouued55W75oiyPqVSCK0QUwzUgVASeic_LPf7AV78ibANggOc",
  },
  {
    name: "Option 2",
    description:
      "Short Description and Address",
    // image:
    //   "https://lh3.googleusercontent.com/aida-public/AB6AXuAGfFekRini4HkInOjmMsKusQ171Dg0UnGxaIST8LYQCUtoAAuhpl2_YwijXOOC1Cmg3qRTMQRRTVCWZ9mZUiR1EneKV8T8FikPQE0DfiHLN3XGN6Lv2hbTTGsZGNDJhQdxYHPbjWX4IWOzNLfGmQRv9jvIGduTN-XzCAer7tQyO2nPez9pa0niQSkizPrpckZbUT1sqXHOCRZWGR7IlEvf1MnscSsAQeohrpP90rf1sNV5QaTPiqVBXaNLaPGDr3DpfmRYzB5cbSc",
  },
]

const sightseeingRecommendations = [
  {
    name: "Hoi An",
    description:
      "Description about Hoi An, Maybe how to get there. Also add some images",
    // image:
    //   "https://lh3.googleusercontent.com/aida-public/AB6AXuAUq7PUZcBXeS1exeM5hPC9kOnV4peW4PFFARjqXk1ObBCHYydGkJyoWE0Ol-OxW81b8Q8FkTj8D5dtAA1hCCNeNrGrnJp222rSxPOWtKtwz3sidIVjXdZlTWrS4BKGWqq8BjL2MV9ynKFXf2OLYzk_KxepSIF3P6Xox7XvN4It3xVVaPEq0qgPBFcUtNwS41XARObIVR8BwTwwVHi4xeUzyn5c3oak3mw-JbV5yPnDOX1F9lL4oMS4FoUmGu5ABB45-bfrK1wE-r8",
  },
  {
    name: "Option 2",
    // description:
    //   "Visit the Lady Buddha and spot the rare red-shanked douc monkeys.",
    // image:
    //   "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6TITIxlm5qxKxLSe8e9343VtGjkP0Bz7y2Q-Ca8WoELhHhkTke2Cn7U7IuZng3W8sFQ3918GToI3r_hnEymCZiD9uqjIamg3lDCX5_WpH-3qCHgzScCekLfYqtAb_9JX3XLdL-QlS05FyNRvB0VY469Wz1HCqC4Ey3EhIMlIPtpWk6ZzHxz5l7R5erIqxCKph_UzY7EjF-zoW6KC8uK_EkylJJ-ACDCimCRCdQmU6y0JcbnmMWTHWdDe5OUDLFIwAfWrFJD2y6o",
  },
]

function TravelGuide() {
  return (
    <main className="travel-guide-page">
      <div className="page-container">
        <section className="travel-guide-hero">
          <div className="travel-hero-art">
            {/* <span className="material-symbols-outlined">
              flight_takeoff
            </span> */}
          </div>

          <div className="travel-hero-content">
            {/* <p className="travel-guide-label">
              The Adventure Begins
            </p> */}

            <h1>Your Journey to Da Nang</h1>

            <p className="travel-guide-intro">
              We are so excited to share our home country with you.
              Da Nang is a city of magic, where the mountains meet
              the sea and ancient history lives alongside modern
              charm.
            </p>
          </div>
        </section>

        <section className="travel-info-grid">
          <article className="travel-info-card before-travel-card">
            <div className="travel-card-heading">
              <div className="travel-card-icon">
                {/* <span className="material-symbols-outlined">
                  downloading
                </span> */}
              </div>

              <h2>✈️ Before You Travel</h2>
            </div>

            <div className="before-travel-columns">
              <div>
                <p className="travel-card-label">
                  Visa Requirements
                </p>

                <p>
                  Most international visitors require an E-Visa.
                  Please apply at least two weeks in advance through
                  the official government portal. Your passport
                  should remain valid for at least six months.
                </p>
              </div>

              <div>
                <p className="travel-card-label">
                  Flight Booking
                </p>

                <p>
                  Da Nang International Airport, airport code DAD,
                  is the closest hub. We recommend arriving early
                  enough to settle in before the festivities.
                </p>
              </div>
            </div>

            <div className="paw-decoration">
              {/* <span className="material-symbols-outlined">
                pets
              </span> */}

              {/* <span className="material-symbols-outlined">
                pets
              </span> */}
            </div>
          </article>

          <article className="travel-info-card connected-card">
            <div className="travel-card-icon secondary-icon">
              {/* <span className="material-symbols-outlined">
                signal_cellular_alt
              </span> */}
            </div>

            <h2>📶 Stay Connected</h2>

            {/* <p>
              Consider purchasing a local SIM card at the airport
              from Viettel or Vinaphone. Affordable plans with
              generous mobile data are widely available.
            </p> */}

            <p className="travel-tip">
              <em>Pending - check back later when it get closer to your trip ^^</em>
            </p>
          </article>

          <article className="travel-info-card transport-card">
            {/* <div className="travel-card-icon">
              <span className="material-symbols-outlined">
                local_taxi
              </span>
            </div> */}

            <h2>🚗 Getting Around</h2>

            <p>
              <strong>Grab</strong> is basically Vietnam&apos;s
              Uber/Lyft; download the app before you land, and take
              a minute to get familiar with it. It&apos;ll be your
              best friend for getting around.
            </p>

            <ul>
              <li>
                <strong>Private hotel transfer</strong> - book
                directly through your resort ahead of time for an
                easy, seamless pickup right at the airport gate.
              </li>

              <li>
                <strong>Note:</strong> Public restrooms aren&apos;t
                super common, so if you&apos;re traveling a longer
                distance, expect to pay around 3,000–5,000 VND for a
                bathroom break at pit stops along the way.
              </li>
            </ul>
          </article>

          <article
            id="where-to-stay"
            className="travel-info-card accommodation-card"
          >
            <div className="accommodation-content">
              <h2>Where to Stay</h2>

              <p>
                While the wedding is at Mikazuki Resort, we have
                curated alternative stays ranging from beachfront
                hotels to city-center escapes.

              </p>

              {/* <button type="button">
                View Recommendations
              </button> */}
            </div>

            <div className="accommodation-image-wrapper">
              <img
                src="https://www.myoverseaswedding.com/wp-content/gallery/163296-reception/da-nang-mikazuki-japanese-resorts-and-spa-wedding-dinner-reception-17.jpg"
                alt="A tropical resort in Da Nang"
              />
            </div>
          </article>
        </section>

        <section className="local-gems-section">
          <div className="local-gems-header">
            <h2>Local Gems</h2>

            <p>Things we love in our favorite city</p>
          </div>

          <div className="local-gems-grid">
            <RecommendationList
              icon="restaurant"
              title="Must-Try Food"
              items={foodRecommendations}
            />

            <RecommendationList
              icon="explore"
              title="Sights to See"
              items={sightseeingRecommendations}
            />
          </div>
        </section>

        <section
          className="passport-stamps"
          aria-hidden="true"
        >
          {/* <div className="passport-stamp round-stamp">
            <span>Da Nang Airport</span>
            <strong>DAD</strong>
            <span>13 MAR 2027</span>
          </div> */}

          {/* <div className="passport-stamp admitted-stamp">
            <span>Vietnam</span>

            <span className="material-symbols-outlined">
              flight_land
            </span>

            <span>Admitted</span>
          </div>

          <div className="passport-stamp wedding-stamp">
            <span>Wedding Journey</span>
            <strong>M &amp; B</strong>
            <span>Love Always</span>
          </div> */}
        </section>
      </div>
    </main>
  )
}

function RecommendationList({ icon, title, items }) {
  return (
    <div className="recommendation-column">
      <div className="recommendation-heading">
        <span className="material-symbols-outlined">
          {icon}
        </span>

        <h3>{title}</h3>
      </div>

      <div className="recommendation-list">
        {items.map((item) => (
          <article
            className="recommendation-item"
            key={item.name}
          >
            <img src={item.image} alt="" />

            <div>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default TravelGuide