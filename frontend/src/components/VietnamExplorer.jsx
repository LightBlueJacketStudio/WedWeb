import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import benThanhMarket from '../assets/Saigon/ben-thanh-market.jpg'
import independencePalace from '../assets/Saigon/independent-palace.png'
import notreDameSaigon from '../assets/Saigon/Notre-Dame-saigon.png'
import saigonFront from '../assets/Saigon/saigon-front.png'
import daNangFront from '../assets/da-nang/da-nang-front.png'
import haNoiFront from '../assets/ha-noi/ha-noi-front.png'
import hueFront from '../assets/hue/hue-front.webp'
import bunBoHue from '../assets/hue/bun-bo-hue.webp'
import banhUot from '../assets/hue/banh-uot.webp'
import saltedCoffee from '../assets/hue/salted-coffee.webp'
import dongBaMarket from '../assets/hue/dong-ba-market.webp'
import imperialCity from '../assets/hue/imperial-city.webp'
import imperialCitySunset from '../assets/hue/imperial-city2.webp'
import hueTrain1 from '../assets/hue/train1.webp'
import hueTrain2 from '../assets/hue/train2.webp'
import hueTrain3 from '../assets/hue/train3.webp'
import hueTrain4 from '../assets/hue/train4.webp'
import thienMuPagoda from '../assets/hue/thien-mu-pagoda.webp'
import sapaFront from '../assets/sapa/sapa-front.png'
import hoianFront from '../assets/hoi-an/hoi-an-front.png'
import hoianTown1 from '../assets/hoi-an/hoi-an-town.webp'
import hoianTown2 from '../assets/hoi-an/hoi-an-town2.webp'
import hoianTown3 from '../assets/hoi-an/hoi-an-town3.webp'
import basketBoat from '../assets/hoi-an/basket-boat.png'
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
    photo: hueFront,
    photoAlt: 'The Imperial City gate in Hue',
    blurb:
      'Hue is where my father’s side is from. It’s another UNESCO listed city and the imperial capital of Vietnam’s last dynasty. Every time I’m in Hue, I’m overwhelmed with emotion and admiration. To this day, I still can’t put the feeling into words. Maybe you can describe it for me when you visit.',
    dontMiss: [
      {
        name: 'Heritage train from Da Nang to Hue',
        carousel: true,
        photos: [
          { src: hueTrain1, alt: 'On board the heritage train out of Hue' },
          { src: hueTrain2, alt: 'The carriage interior of the heritage train' },
          { src: hueTrain3, alt: 'Looking out of the train window' },
          {
            src: hueTrain4,
            alt: 'The coastline from the train on the Hải Vân Pass',
          },
        ],
      },
      {
        name: 'Imperial City',
        mapUrl:
          'https://maps.app.goo.gl/QGTjnB74obfhwd3LA',
        photos: [
          {
            src: imperialCity,
            alt: 'The Meridian Gate and courtyard of the Imperial City in Hue',
          },
          {
            src: imperialCitySunset,
            alt: 'Bao outside the citadel wall as the sun sets over Hue',
          },
        ],
      },
      {
        name: 'Đong Ba Market',
        mapUrl: 'https://maps.app.goo.gl/QaHDiGNvDk5c6C769',
        photo: dongBaMarket,
        photoAlt:
          'A bún bò Hue stall inside Đong Ba Market, with its price board overhead',
      },
      {
        name: 'Thien Mu Pagoda',
        mapUrl:
          'https://www.google.com/maps/search/?api=1&query=Ch%C3%B9a%20Thi%C3%AAn%20M%E1%BB%A5%2C%20Hu%E1%BA%BF',
        photo: thienMuPagoda,
        photoAlt:
          'The seven tiered tower of Thiên Mụ Pagoda above the Perfume River',
      },
    ],
    eats: [
      {
        dish: 'Bun Bo Hue',
        note: 'Remember the password to this website? It is actually the name of our most favourite Vietnamese dish, and it was born right here',
        photo: bunBoHue,
        photoAlt: 'Bun Bo Hue',
      },
      {
        dish: 'Bánh ướt thịt nướng',
        meta: '50 Kim Long, Phú Xuân · 8am - 7pm',
        mapUrl:
          'https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20%C6%B0%E1%BB%9Bt%20Huy%E1%BB%81n%20Anh%2C%2050%20Kim%20Long%2C%20Ph%C3%BA%20Xu%C3%A2n%2C%20Hu%E1%BA%BF',
        photo: banhUot,
        photoAlt:
          'A table spread of bánh ướt thịt nướng with herbs and dipping sauces',
      },
      {
        dish: 'Cà phê muối (Salted coffee)',
        meta: '142 Đặng Thái Thân, Phú Xuân · 7am - 10pm',
        mapUrl:
          'https://www.google.com/maps/search/?api=1&query=C%C3%A0%20ph%C3%AA%20mu%E1%BB%91i%20%C4%90%E1%BA%B7ng%20Th%C3%A1i%20Th%C3%A2n%2C%20142%20%C4%90%E1%BA%B7ng%20Th%C3%A1i%20Th%C3%A2n%2C%20Ph%C3%BA%20Xu%C3%A2n%2C%20Hu%E1%BA%BF',
        photo: saltedCoffee,
        photoAlt: 'A glass cup of cà phê muối on a wooden table in Hue',
      },
    ],
    gettingThere: '',
    bestTime: '',
  },
  {
    id: 'danang',
    name: 'Đà Nẵng',
    region: 'Where we are getting married',
    marker: 'dot',
    wedding: true,
    lat: 16.0544,
    lon: 108.2022,
    labelSide: 'right',
    labelNudge: '0rem',
    tagline: 'Where my heart is',
    photo: daNangFront,
    photoAlt: 'The Golden Bridge',
    blurb:
      'Đà Nẵng is where my heart is, and it’s where Amy’s family is from too. I grew up behind the Da Nang Train Station and spent my childhood playing soccer on the street, and walking along the sandy shore, which has since grown into a modern skyline. The city, the people, and the hospitality are second to none, and we can’t wait to welcome you to our home.',
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
    tagline: 'Where I was born',
    photo: hoianFront,
    photoAlt: 'Hoi An Acient Towm at Night',
    blurb:
      'Hội An is a UNESCO World Heritage site, and it’s where I was born. My grandparents’ old home sits by the riverside, where bamboo basket boats rise with the tide. At night, glowing lanterns light up the streets, and a cool river breeze drifts through the busy night market.',
    dontMiss: [
      {
        name: 'Ancient Town',
        mapUrl:
          'https://maps.app.goo.gl/q2iZKCZRYBV8i13b7',
        // note: 'The old quarter is best on foot after sunset, when the lanterns come on and the streets close to traffic. Wander the riverside, cross the Japanese Covered Bridge, and float a paper lantern down the Thu Bồn.',
        carousel: true,
        photos: [
          { src: hoianTown1, alt: 'Lanterns over the streets of the Ancient Town' },
          { src: hoianTown2, alt: 'The riverside of the Ancient Town at night' },
          { src: hoianTown3, alt: 'Old shopfronts along an Ancient Town lane' },
        ],
      },
      {
        name: 'Basket boat ride',
        mapUrl:
          'https://maps.app.goo.gl/VMz4GZznL6njdrcg6',
        // note: 'Round bamboo basket boats (thuyền thúng) paddle through the Bảy Mẫu coconut palms in Cẩm Thanh, just outside town. Expect spinning boats, singing rowers, and a very wet, very fun hour on the water.',
        photo: basketBoat,
        photoAlt:
          'Round bamboo basket boats crowding the water between the coconut palms',
      },
    ],
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
        photo: independencePalace,
        photoAlt: 'The front facade and lawn of Independence Palace in S\u00e0i G\u00f2n',
      },
      {
        name: 'War Remnants Museum',
        note: 'A good way to explore the Vietnam War through Vietnamese perspectives.',
      },
      {
        name: 'Nguyen Hue Walking Street/ Bui Viet Street',
        note: 'Stroll, grab a drink, and watch the city light up at night.',
      },
      {
        name: 'Cholon (Chinatown)',
        note: 'Old temples like Thien Hau, plus some of the best local eats.',
      },
      {
        name: 'Cu Chi Tunnels',
        note: 'A remarkable underground network that reveals how Vietnamese soldiers lived, fought, and survived during the Vietnam War. Take a half-day trip beyond the city to explore the tunnels and gain a deeper, more immersive look into Vietnam’s wartime history.',
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


function placePhotos(entry) {
  if (entry.photos) return entry.photos
  if (entry.photo) return [{ src: entry.photo, alt: entry.photoAlt }]

  return []
}

// How long each frame of a photo carousel holds before the track slides on.
const CAROUSEL_MS = 4000

// Auto-advancing strip for entries carrying a handful of photos. The track
// slides one frame to the left every CAROUSEL_MS and wraps back to the first
function PhotoCarousel({ photos }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const id = setInterval(
      () => setIndex((current) => (current + 1) % photos.length),
      CAROUSEL_MS,
    )

    return () => clearInterval(id)
  }, [paused, photos.length])

  return (
    <div
      className="city-place-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="city-place-carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {photos.map((photo) => (
          <figure key={photo.src} className="city-place-carousel-slide">
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>

      <div className="city-place-carousel-dots">
        {photos.map((photo, dot) => (
          <button
            key={photo.src}
            type="button"
            className={dot === index ? 'is-active' : undefined}
            aria-label={`Show photo ${dot + 1} of ${photos.length}`}
            aria-current={dot === index}
            onClick={() => setIndex(dot)}
          />
        ))}
      </div>
    </div>
  )
}

function PlaceItem({ entry, name }) {
  const photos = placePhotos(entry)
  const notes = [entry.note].flat().filter(Boolean)
  const classes = [
    photos.length > 0 && 'has-photo',
    entry.carousel && 'has-carousel',
  ].filter(Boolean)

  return (
    <li className={classes.length > 0 ? classes.join(' ') : undefined}>
      <div className="city-place-text">
        <h4>
          {entry.mapUrl ? (
            <a
              className="city-place-map-link"
              href={entry.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}

              <span className="material-symbols-outlined" aria-hidden="true">
                location_on
              </span>
            </a>
          ) : (
            name
          )}
        </h4>

        {entry.meta && <p className="city-place-meta">{entry.meta}</p>}

        {notes.map((note, paragraph) => (
          <p key={paragraph}>{note}</p>
        ))}
      </div>

      {photos.length > 0 && (
        <div className="city-place-photos">
          {entry.carousel && photos.length > 1 ? (
            <PhotoCarousel photos={photos} />
          ) : (
            photos.map((photo) => (
              <figure key={photo.src} className="city-place-photo">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </figure>
            ))
          )}
        </div>
      )}
    </li>
  )
}

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
    <section className="vietnam-explorer" id="make-a-trip" ref={sectionRef}>
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
            You have come all this way! Here are some cities we would recommend for your trip in Vietnam.
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
                  <PlaceItem key={place.name} entry={place} name={place.name} />
                ))}
              </ul>
            </section>
          )}

          {city.eats.length > 0 && (
            <section className="city-page-section">
              <h3>What to Eat</h3>

              <ul className="city-page-places">
                {city.eats.map((item) => (
                  <PlaceItem key={item.dish} entry={item} name={item.dish} />
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
