const foodRecommendations = [
  {
    name: "Option 1",
    description:
      "Short Descriptiong and Address",
    // image:
    //   "https://lh3.googleusercontent.com/aida-public/AB6AXuBOfkrF2qCobadRFPLVv9BvLSLzo1Ci6jQ5x-XOnA9y7kd5s3ZgAf3S4KW3pkgOp_0JQZVJJXbL4OKDH8ZKSgDqB3wpvvRJQYfrsKOyyroRBdoklfvWbSspEBADzK_tjAsIXzVJc3CWtlhAwmtlp60KlP8iNypS17AJhUDI7osl92rtUxTRcZRYollZJXz510ERXpJ8y1SJCqzhqlfvTfu_0RH2YTouued55W75oiyPqVSCK0QUwzUgVASeic_LPf7AV78ibANggOc",
  },
  {
    name: "Co Loi's Grill Pork In Hoi An",
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
      "If you ever come to Hoi An, you don't want to miss this place. Co Loi grill-pork, located at 3 Nguyen Hue, Hoi An",
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

              <h2>Before You Travel</h2>
            </div>

            {/* <p className="travel-card-hint">
              Tap each section to expand the details.
            </p> */}

            <div className="travel-accordion">
              <CollapsibleSection title="Passport &amp; Visa">
                <ul>
                  <li>
                    Make sure your passport is valid for at least
                    <strong> 6 months after your arrival date</strong>, with a
                    couple of blank pages for stamps.
                  </li>

                  <li>
                    Most travelers will need a visa. Vietnam offers a
                    convenient <strong>e-visa</strong> (valid up to 90 days,
                    single or multiple entry) through the official government
                    portal — apply online about 1-2 weeks before you fly. A
                    handful of nationalities are exempt for short stays, so
                    double-check the rules for your passport before booking.
                  </li>
                </ul>
              </CollapsibleSection>

              <CollapsibleSection title="Vaccines &amp; Health">
                <p>
                  No vaccines are <em>required</em> to enter Vietnam (unless
                  you&apos;re arriving from a country with yellow fever), but a
                  few are commonly recommended:
                </p>

                <ul>
                  <li>Make sure your routine vaccines are up to date.</li>
                  <li>
                    <strong>Hepatitis A</strong> and <strong>Typhoid</strong>{" "}
                    are usually recommended for travel to Vietnam.
                  </li>
                  <li>
                    Depending on your plans, a doctor may also suggest{" "}
                    <strong>Hepatitis B</strong>, <strong>Tetanus</strong>, or{" "}
                    <strong>Japanese Encephalitis</strong> for longer or more
                    rural stays.
                  </li>
                </ul>

                <p>
                  Everyone&apos;s health needs are different, so please check
                  with your doctor or a travel clinic{" "}
                  <strong>4-6 weeks before departure</strong>. This is just a
                  friendly heads-up, not medical advice.
                </p>
              </CollapsibleSection>

              <CollapsibleSection title="Currency">
                <p>
                  The official currency is the{" "}
                  <strong>Vietnamese Dong (VND)</strong>. A few things to know:
                </p>

                <ul>
                  <li>
                    Cash is still king for markets, street food, and small
                    shops, while hotels and larger restaurants usually take
                    cards.
                  </li>
                  <li>
                    ATMs are everywhere - withdrawing from a bank ATM after you
                    land is often the easiest way to get local cash.
                  </li>
                  <li>
                    Let your bank know you&apos;re traveling so your card
                    isn&apos;t flagged, and carry small bills for taxis and
                    tips.
                  </li>
                </ul>
              </CollapsibleSection>

              <CollapsibleSection title="Flight Booking">
                <p>
                  We recommend flying to Da Nang International Airport (DAD):
                </p>

                <ul>
                  <li>
                    From most places you&apos;ll connect through a major Asian
                    hub such as Seoul (ICN), Tokyo, Taipei, Singapore, Bangkok,
                    or Hong Kong.
                  </li>
                  <li>
                    Fares are usually best when you book early, so keep an eye
                    out and lock in your seats when you spot a good deal.
                  </li>
                  <li>
                    We&apos;d suggest arriving a day or two before the wedding to
                    settle in, beat the jet lag, and enjoy the city with us.
                  </li>
                </ul>
              </CollapsibleSection>
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

            <h2>Stay Connected</h2>

            <div className="travel-accordion">
              <CollapsibleSection title="Data &amp; Wi-Fi">
                <ul>
                  <li>
                    Get an eSIM before you depart! We&apos;ve used{" "}
                    <strong>Nomad</strong> as our eSIM provider before;
                    here&apos;s our referral code:{" "}
                    <strong>HUYNRVTSES</strong>
                  </li>

                  <li>
                    Local SIM card: Viettel, Mobifone, and Vinaphone
                    all offer super affordable tourist data packages, and you
                    can pick one up at the airport, convenience stores, or
                    official carrier shops with quick activation.
                  </li>

                  <li>
                    Free Wi-Fi in most places: cafes, restaurants, hotels.
                  </li>
                </ul>
              </CollapsibleSection>
            </div>
          </article>

          <article className="travel-info-card transport-card">
            {/* <div className="travel-card-icon">
              <span className="material-symbols-outlined">
                local_taxi
              </span>
            </div> */}

            <h2>Getting Around</h2>

            <div className="travel-accordion">
              <CollapsibleSection title="Ride options &amp; good-to-knows">
                <ul>
                  <li>
                    <strong>Grab: </strong> Vietnamese&apos;s
                    Uber/Lyft; download the app before you land, and take a
                    minute to get familiar with it. It&apos;ll be your best
                    friend for getting around.
                  </li>

                  <li>
                    <strong>Private hotel transfer:</strong>book
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
              </CollapsibleSection>
            </div>
          </article>

          <article
            id="where-to-stay"
            className="travel-info-card accommodation-card"
          >
            <div className="accommodation-content">
              <h2>Where to Stay</h2>

              <p>
                We're thrilled to share that Da Nang Mikazuki Japanese Resorts will be 
                offering a discount code exclusively for our wedding guests - more details coming your way soon!

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

function CollapsibleSection({ title, defaultOpen = false, children }) {
  return (
    <details className="travel-collapse" open={defaultOpen}>
      <summary className="travel-collapse-summary">
        <span className="travel-collapse-title">{title}</span>

        <span
          className="travel-collapse-chevron material-symbols-outlined"
          aria-hidden="true"
        >
          expand_more
        </span>
      </summary>

      <div className="travel-collapse-body">{children}</div>
    </details>
  )
}

function RecommendationList({ icon, title, items }) {
  return (
    <div className="recommendation-column">
      <div className="recommendation-heading">
        <span
          className="recommendation-icon material-symbols-outlined"
          aria-hidden="true"
        >
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
            {item.image ? (
              <img
                className="recommendation-thumb"
                src={item.image}
                alt=""
              />
            ) : (
              <span
                className="recommendation-thumb recommendation-thumb-placeholder material-symbols-outlined"
                aria-hidden="true"
              >
                {icon}
              </span>
            )}

            <div className="recommendation-item-content">
              <h4>{item.name}</h4>
              {item.description ? <p>{item.description}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default TravelGuide