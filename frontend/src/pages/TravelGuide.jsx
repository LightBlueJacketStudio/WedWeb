import conMarket from "../assets/con-market.jpg"
import { ContactUs } from "../components/ContactUs"

const diningTips = [
  {
    icon: "storefront",
    text: "Hit the local markets, Con Market and Han Market are total food heavens and an unmissable part of the Da Nang experience. Amazing food, amazing prices.",
  },
  {
    icon: "groups",
    text: "How to spot the good stuff: look for spots packed with locals — that's usually your sign the food's delicious and the hygiene checks out.",
  },
  {
    icon: "payments",
    text: "Budget-friendly: most street food dishes run about 25,000–40,000 VND per plate.",
  },
  {
    icon: "coffee",
    text: "Heads up: we love our Vietnamese coffee with condensed milk! Most coffee shops will also have milk tea variations. Bring your Lactaid if you need it.",
  },
]

const favoriteFoods = [
  { meal: "Breakfast", icon: "breakfast_dining", dish: "Xôi gà / Xôi đậu xanh" },
  { meal: "Appetizer", icon: "tapas", dish: "Bánh bèo" },
  { meal: "Lunch", icon: "lunch_dining", dish: "Bánh canh" },
  { meal: "Dinner", icon: "dinner_dining", dish: "Mì Quảng" },
  { meal: "Drink", icon: "local_cafe", dish: "Salted Coffee" },
  { meal: "Dessert", icon: "icecream", dish: "Kem bơ" },
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
            <div className="travel-hero-ask">
              <p className="travel-guide-intro">
                Ask us anything!
              </p>

              <ContactUs className="contact-us-flat" />
            </div>
          </div>
        </section>

        <section className="travel-info-grid">
          <article className="travel-info-card before-travel-card">
            <div className="travel-card-heading">
              <div className="travel-card-icon">
                <span className="material-symbols-outlined" aria-hidden="true">
                  luggage
                </span>
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
                    portal - apply online about 1-2 weeks before you fly. A
                    handful of nationalities are exempt for short stays, so
                    double check the rules for your passport before booking.
                  </li>
                </ul>
              </CollapsibleSection>

              <CollapsibleSection title="Vaccines">
                <ul>
                  <li>
                    Double check you&apos;re up to date on recommended
                    vaccinations before you go. (Highly recommended)
                  </li>
                  <li>
                    Check with a travel clinic or the CDC website for guidance
                    specific to you.
                  </li>
                </ul>
              </CollapsibleSection>

              <CollapsibleSection title="Currency">
                <p>
                  The official currency is the{" "}
                  <strong>Vietnamese Dong (VND)</strong>. A few things to know:
                </p>

                <ul>
                  <li>
                    Cash is king — you&apos;ll want it for markets, street food,
                    and taxis. Keep a good stash of small bills handy.
                  </li>
                  <li>
                    Credit cards are widely accepted at hotels, upscale
                    restaurants, and shopping centers, but expect a 2–3%
                    transaction fee.
                  </li>
                  <li>
                    ATMs are easy to find at major banks like Vietcombank, ACB,
                    and Techcombank — just watch for withdrawal limits and
                    international fees.
                  </li>
                  <li>
                    Best places to exchange money: the airport, major banks, or
                    reputable gold shops (tiệm vàng).
                  </li>
                  <li>
                    <strong>Quick caution:</strong> Vietnamese notes (20,000,
                    50,000, 100,000, 200,000, and 500,000 VND) can look
                    surprisingly similar. The 20,000 and 500,000 VND notes
                    especially, same-ish color very different value, so
                    give your cash a second glance before you hand it over!
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
                    hub such as Seoul (ICN), Taipei (TPE), Singapore(SIN),
                    or Hong Kong (HKG).
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
            <div className="travel-card-heading">
              <div className="travel-card-icon">
                <span className="material-symbols-outlined" aria-hidden="true">
                  wifi
                </span>
              </div>

              <h2>Stay Connected</h2>
            </div>

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
            <div className="travel-card-heading">
              <div className="travel-card-icon">
                <span className="material-symbols-outlined" aria-hidden="true">
                  local_taxi
                </span>
              </div>

              <h2>Getting Around</h2>
            </div>

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
              <div className="travel-card-heading">
                <div className="travel-card-icon">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    hotel
                  </span>
                </div>

                <h2>Where to Stay</h2>
              </div>

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
          {/* <div className="local-gems-header">
            <h2>Local Gems</h2>

            <p>Things we love in our favorite city</p>
          </div> */}

          <div className="dining-grid">
            <article className="dining-card dining-tips-card">
              <div className="dining-card-heading">
                <span
                  className="dining-card-icon material-symbols-outlined"
                  aria-hidden="true"
                >
                  ramen_dining
                </span>

                <h3>Dining Tips</h3>
              </div>

              <figure className="dining-tips-photo">
                <img
                  src={conMarket}
                  alt="Con Market in Da Nang"
                />

                <figcaption>Con Market, Da Nang</figcaption>
              </figure>

              <ul className="dining-tips-list">
                {diningTips.map((tip) => (
                  <li key={tip.text}>
                    <span
                      className="dining-tip-icon material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {tip.icon}
                    </span>

                    <p>{tip.text}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="dining-card favorite-foods-card">
              <div className="dining-card-heading">
                <span
                  className="dining-card-icon material-symbols-outlined"
                  aria-hidden="true"
                >
                  restaurant_menu
                </span>

                <h3>Foods We Grew Up Eating</h3>
              </div>

              <p className="favorite-foods-note">
                A little menu of our childhood favorites, we&apos;ll add
                the restaurants soon.
              </p>

              <ul className="favorite-foods-menu">
                {favoriteFoods.map((food) => (
                  <li key={food.meal}>
                    <span
                      className="favorite-food-icon material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {food.icon}
                    </span>

                    <span className="favorite-food-meal">{food.meal}</span>

                    <span
                      className="favorite-food-leader"
                      aria-hidden="true"
                    ></span>

                    <span className="favorite-food-dish">{food.dish}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* <div className="local-gems-grid local-gems-sights">
            <RecommendationList
              icon="explore"
              title="Sights to See"
              items={sightseeingRecommendations}
            />
          </div> */}
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