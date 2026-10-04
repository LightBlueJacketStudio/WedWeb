import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import benThanhMarket from '../assets/Saigon/ben-thanh-market.jpg'
import notreDameSaigon from '../assets/Saigon/Notre-Dame-saigon.png'
import saigonFront from '../assets/Saigon/saigon-front.png'
import daNangFront from '../assets/da-nang/da-nang-front.png'
import haNoiFront from '../assets/ha-noi/ha-noi-front.png'
import hueFront from '../assets/hue/hue-front.png'
import sapaFront from '../assets/sapa/sapa-front.png'
import hoianFront from '../assets/hoi-an/hoi-an-front.png'
import { VN_PATH, VN_VIEWBOX, projectToPercent } from '../data/vietnamOutline'

// The five places we send guests to, in north-to-south order.
// star for HaNoi - Capital and button for other cities

const CITIES = [
  {
    id: 'sapa',
    name: 'Sa Pa',
    region: 'Northwest highlands',
    marker: 'dot',
    lat: 22.3364,
    lon: 103.8438,
    labelSide: 'right',
    tagline: '',
    photo: sapaFront,
    photoAlt: 'Sunrise over the Fansipan',
    blurb: '',
    dontMiss: [],
    eats: [],
    gettingThere: '',
    bestTime: '',
  },
  {
    id: 'hanoi',
    name: 'Hà Nội',
    region: 'Northern Vietnam',
    marker: 'star',
    lat: 21.0278,
    lon: 105.8342,
    labelSide: 'right',
    tagline: '',
    photo: haNoiFront,
    photoAlt: 'Turtle Tower on Hoan Kiem Lake',
    blurb: '',
    dontMiss: [],
    eats: [],
    gettingThere: '',
    bestTime: '',
  },
  {
    id: 'hue',
    name: 'Huế',
    region: 'Central coast',
    marker: 'dot',
    lat: 16.4637,
    lon: 107.5909,
    labelSide: 'right',
    labelNudge: '-0.5rem',
    tagline: '',
    photo: hueFront,
    photoAlt: 'The Imperial City gate in Huế',
    blurb: '',
    dontMiss: [],
    eats: [],
    gettingThere: '',
    bestTime: '',
  },
  {
    id: 'danang',
    name: 'Đà Nẵng',
    region: 'Central coast - where we are getting married',
    marker: 'dot',
    wedding: true,
    lat: 16.0544,
    lon: 108.2022,
    labelSide: 'right',
    // No nudge: this name is the one that has to sit dead centre on its dot.
    // Huế above and Hội An below are the ones moved out of its way.
    labelNudge: '0rem',
    tagline: '',
    photo: daNangFront,
    photoAlt: 'The Golden Bridge',
    blurb: '',
    dontMiss: [],
    eats: [],
    gettingThere: '',
    bestTime: '',
  },
  {
    id: 'hoian',
    name: 'Hội An',
    region: 'Central coast',
    marker: 'dot',
    lat: 15.8801,
    lon: 108.338,
    labelSide: 'right',
    labelNudge: '0.55rem',
    // 19km from Đa Nang 
    // down and out to sit beside its neighbour rather than under it.
    pinNudge: { x: '0.35rem', y: '0.7rem' },
    tagline: '',
    photo: hoianFront,
    photoAlt: 'Hoi An Acient Towm at Night',
    blurb: '',
    dontMiss: [],
    eats: [],
    gettingThere: '',
    bestTime: '',
  },
  {
    id: 'saigon',
    name: 'Sài Gòn',
    region: 'Southern Vietnam',
    marker: 'dot',
    lat: 10.8231,
    lon: 106.6297,
    labelSide: 'right',
    tagline: 'Where Amy grew up',
    photo: saigonFront,
    photoAlt: 'Sài Gòn at street level, motorbikes and shopfronts',
    blurb:
      'Sài Gòn is the city Amy grew up in, and she is always proud to call herself a Sài Gònian. As Vietnam\u2019s largest city and its economic heart, it never slows down: motorbikes flow like rivers, street vendors are up before the sun, and there is a coffee cart on every corner. But behind the hustle is a city rich with history, from French colonial landmarks to old temples tucked between skyscrapers. It is busy, loud, and full of life, and she cannot wait to show you her hometown.',
    dontMiss: [
      {
        name: 'Ben Thanh Market',
        note: 'Classic market for souvenirs, snacks, and people-watching. Bargain politely.',
        photo: benThanhMarket,
        photoAlt: 'Stalls packed with goods inside Ben Thanh Market',
      },
      {
        name: 'Saigon Central Post Office & Notre-Dame Cathedral',
        note: 'French-era landmarks right next to each other. Great photo stop and souvenir.',
        photo: notreDameSaigon,
        photoAlt: 'The red brick towers of Notre-Dame Cathedral in Sài Gòn',
      },
      {
        name: 'Independence Palace',
        note: 'The \u201cWhite House\u201d of the Vietnamese president back in the day - a time capsule of 1960s architecture and Vietnam\u2019s history.',
      },
      {
        name: 'War Remnants Museum',
        note: 'A good way to explore the Vietnam War through Vietnamese perspectives.',
      },
      {
        name: 'Nguyen Hue Walking Street',
        note: 'Stroll, grab a drink, and watch the city light up at night.',
      },
      {
        name: 'Bui Vien Walking Street',
        note: 'Loud, colorful, and the go-to spot for nightlife.',
      },
      {
        name: 'Cholon (Chinatown)',
        note: 'Old temples like Thien Hau, plus some of the best local eats.',
      },
      {
        name: 'Cu Chi Tunnels',
        note: 'A half-day trip outside the city if you want a deeper look at history.',
      },
      {
        name: 'Bitexco Sky Deck or Landmark 81',
        note: 'See the whole city from above.',
      },
    ],
    // Adding food location later
    // "What to Eat" section appears on its own.
    eats: [],
    gettingThere: '',
    bestTime: '',
  },
]

// Tapping a marker opens that city's own page over the top of the site.
export function VietnamExplorer() {
  const [openId, setOpenId] = useState(null)
  const sectionRef = useRef(null)
  // Keyed by city id so we can hand focus back to the marker that was tapped.
  const pinRefs = useRef({})

  const openCity = CITIES.find((city) => city.id === openId) ?? null

  const closeCity = useCallback(
    ({ scrollBack = false } = {}) => {
      // Send focus back to the marker that opened the page, without letting the
      // browser jump the scroll position while it does it.
      pinRefs.current[openId]?.focus({ preventScroll: true })
      setOpenId(null)

      if (scrollBack) {
        sectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    },
    [openId],
  )

  useEffect(() => {
    if (!openId) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeCity()
    }
    document.addEventListener('keydown', onKeyDown)

    // Freeze background scroll while the city page is up.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [openId, closeCity])

  return (
    <section className="vietnam-explorer" ref={sectionRef}>
      <div className="vietnam-explorer-header">
        <span
          className="vietnam-explorer-icon material-symbols-outlined"
          aria-hidden="true"
        >
          explore
        </span>

        <div>
          <h2>Make a Trip of It</h2>

          <p>
            You have come all this way! Here are five cities we would recommend for your trip in Vietnam.
          </p>
        </div>
      </div>

      <div className="vn-map-stage">
        <div
          className="vn-map-frame"
          style={{
            aspectRatio: `${VN_VIEWBOX.width} / ${VN_VIEWBOX.height}`,
          }}
        >
          <svg
            className="vn-map-svg"
            viewBox={`0 0 ${VN_VIEWBOX.width} ${VN_VIEWBOX.height}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            focusable="false"
          >
            <path className="vn-map-land" d={VN_PATH} />
          </svg>

          {CITIES.map((city) => (
            <button
              key={city.id}
              type="button"
              ref={(node) => {
                pinRefs.current[city.id] = node
              }}
              className={[
                'vn-pin',
                `vn-pin-${city.labelSide}`,
                `vn-pin-is-${city.marker}`,
                city.wedding ? 'vn-pin-is-wedding' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{
                ...projectToPercent(city.lat, city.lon),
                // Huế, Đà Nẵng and Hội An are within four percent of each other
                // top to bottom; labelNudge fans their names apart vertically
                // while the markers stay on their real coordinates.
                '--vn-label-nudge': city.labelNudge ?? '0rem',
                '--vn-pin-dx': city.pinNudge?.x ?? '0rem',
                '--vn-pin-dy': city.pinNudge?.y ?? '0rem',
              }}
              aria-label={`Read about ${city.name}`}
              aria-haspopup="dialog"
              aria-expanded={openId === city.id}
              onClick={() => setOpenId(city.id)}
            >
              {city.marker === 'star' && (
                <span className="vn-pin-halo" aria-hidden="true"></span>
              )}

              {city.marker === 'star' ? (
                <span
                  className="vn-pin-marker vn-pin-glyph material-symbols-outlined"
                  aria-hidden="true"
                >
                  star
                </span>
              ) : (
                <span className="vn-pin-marker vn-pin-dot" aria-hidden="true" />
              )}

              <span className="vn-pin-label">{city.name}</span>
            </button>
          ))}
        </div>
      </div>

      {openCity &&
        createPortal(
          <CityPage
            city={openCity}
            onClose={() => closeCity()}
            onBackToMap={() => closeCity({ scrollBack: true })}
          />,
          document.body,
        )}
    </section>
  )
}

// One city's page, portalled to <body> so it sits above everything and stays
// anchored to the viewport. Sections with nothing in them yet are left out.
function CityPage({ city, onClose, onBackToMap }) {
  const headingId = `city-page-${city.id}`
  const isEmpty =
    !city.blurb &&
    !city.gettingThere &&
    !city.bestTime &&
    !city.dontMiss.length &&
    !city.eats.length

  return (
    <div
      className="city-page-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
      onClick={onClose}
    >
      <article
        className="city-page"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="city-page-bar">
          <button
            type="button"
            className="city-page-back"
            onClick={onBackToMap}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_back
            </span>
            Back to the map
          </button>

          <button
            type="button"
            className="city-page-close"
            aria-label={`Close ${city.name}`}
            onClick={onClose}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        <div className="city-page-body">
          {city.photo ? (
            <figure className="city-page-photo">
              <img src={city.photo} alt={city.photoAlt} />
            </figure>
          ) : (
            <div className="city-page-photo-placeholder" aria-hidden="true">
              <span className="material-symbols-outlined">photo_camera</span>
            </div>
          )}

          <header className="city-page-heading">
            <h2 id={headingId}>{city.name}</h2>

            {city.region && <p className="city-page-region">{city.region}</p>}

            {city.tagline && <p className="city-page-tagline">{city.tagline}</p>}
          </header>

          {city.blurb && <p className="city-page-blurb">{city.blurb}</p>}

          {city.dontMiss.length > 0 && (
            <section className="city-page-section">
              <h3>Don&apos;t Miss</h3>

              <ul className="city-page-places">
                {city.dontMiss.map((place) => (
                  <li
                    key={place.name}
                    className={place.photo ? 'has-photo' : undefined}
                  >
                    <div className="city-place-text">
                      <h4>{place.name}</h4>

                      <p>{place.note}</p>
                    </div>

                    {place.photo && (
                      <figure className="city-place-photo">
                        <img
                          src={place.photo}
                          alt={place.photoAlt}
                          loading="lazy"
                        />
                      </figure>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {city.eats.length > 0 && (
            <section className="city-page-section">
              <h3>What to Eat</h3>

              <ul className="city-page-places">
                {city.eats.map((item) => (
                  <li key={item.dish}>
                    <div className="city-place-text">
                      <h4>{item.dish}</h4>

                      {item.note && <p>{item.note}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {city.gettingThere && (
            <section className="city-page-section">
              <h3>Getting There</h3>

              <p>{city.gettingThere}</p>
            </section>
          )}

          {city.bestTime && (
            <section className="city-page-section">
              <h3>Best Time to Visit</h3>

              <p>{city.bestTime}</p>
            </section>
          )}

          {isEmpty && (
            <p className="city-page-empty">
              We are still writing this one, check back soon!
            </p>
          )}
        </div>
      </article>
    </div>
  )
}

export default VietnamExplorer
