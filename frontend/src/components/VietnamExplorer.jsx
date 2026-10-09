import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import benThanhMarket from '../assets/Saigon/ben-thanh-market.webp'
import independencePalace from '../assets/Saigon/independent-palace.webp'
import notreDameSaigon from '../assets/Saigon/Notre-Dame-saigon.webp'
import saigonFront from '../assets/Saigon/saigon-front.webp'
import daNangFront from '../assets/da-nang/da-nang-front.webp'
import haNoiFront from '../assets/ha-noi/ha-noi-front.webp'
import templeLiterature1 from '../assets/ha-noi/temple-literature.webp'
import templeLiterature2 from '../assets/ha-noi/temple-literature2.webp'
import templeLiterature3 from '../assets/ha-noi/temple-literature3.webp'
import trainStreet1 from '../assets/ha-noi/train-street.webp'
import trainStreet2 from '../assets/ha-noi/train-street2.webp'
import trainStreet3 from '../assets/ha-noi/train-street3.webp'
import onePillarPagoda from '../assets/ha-noi/one-pillar-pagoda.webp'
import hoanKiem1 from '../assets/ha-noi/hoan-kiem-lake1.webp'
import hoanKiem2 from '../assets/ha-noi/hoan-kiem-lake3.webp'
import hoanKiem3 from '../assets/ha-noi/hoan-kiem-lake2.webp'
import hueFront from '../assets/hue/hue-front.webp'
import bunBoHue from '../assets/hue/bun-bo-hue.webp'
import banhUot from '../assets/hue/banh-uot.webp'
import saltedCoffee from '../assets/hue/salted-coffee.webp'
import dongBaMarket from '../assets/hue/dong-ba-market.webp'
import dongBaMarketGate from '../assets/hue/dong-ba-market4.webp'
import dongBaMarketAisle from '../assets/hue/dong-ba-market2.webp'
import dongBaMarketFood from '../assets/hue/dong-ba-market3.webp'
import imperialCity from '../assets/hue/imperial-city.webp'
import imperialCitySunset from '../assets/hue/imperial-city2.webp'
import imperialCityFlagTower from '../assets/hue/imperial-city3.webp'
import hueTrain1 from '../assets/hue/train1.webp'
import hueTrain2 from '../assets/hue/train2.webp'
import hueTrain3 from '../assets/hue/train3.webp'
import hueTrain4 from '../assets/hue/train4.webp'
import hueTrain5 from '../assets/hue/train5.webp'
import thienMuPagoda from '../assets/hue/thien-mu-pagoda.webp'
import sapaFront from '../assets/sapa/sapa-front.webp'
// Named for the order they run in, which is the way up the mountain rather
// than the order they were dropped in the folder.
import fansipanCableCar from '../assets/sapa/fansipan3.webp'
import fansipanFunicular from '../assets/sapa/fansipan2.webp'
import fansipanSummit from '../assets/sapa/fansipan.webp'
import catCatVillage from '../assets/sapa/cat-cat-village2.webp'
import catCatWaterfall from '../assets/sapa/cat-cat-village.webp'
import catCatBridge from '../assets/sapa/cat-cat-village3.webp'
import catCatFalls from '../assets/sapa/cat-cat-village4.webp'
import catCatFalls2 from '../assets/sapa/cat-cat-village5.webp'
import catCatFalls3 from '../assets/sapa/cat-cat-village6.webp'
import muongHoaValley from '../assets/sapa/muong-hoa-valley.webp'
import sapaFood from '../assets/sapa/food.webp'
import hoianFront from '../assets/hoi-an/hoi-an-front.webp'
import hoianTown1 from '../assets/hoi-an/hoi-an-town.webp'
import hoianTown2 from '../assets/hoi-an/hoi-an-town2.webp'
import hoianTown3 from '../assets/hoi-an/hoi-an-town3.webp'
import hoianTown4 from '../assets/hoi-an/hoi-an-town4.webp'
import basketBoat from '../assets/hoi-an/basket-boat.webp'
import banahill from '../assets/da-nang/bana-hills.webp'
import banahill2 from '../assets/da-nang/bana-hills2.webp'
import banahill3 from '../assets/da-nang/bana-hills3.webp'
import myKhe from '../assets/da-nang/mykhe.webp'
import myKhe2 from '../assets/da-nang/mykhe2.webp'
import marbleMountain from '../assets/da-nang/marbel-mountain.webp'
import marbleMountain2 from '../assets/da-nang/marbel-mountain2.webp'
import marbleMountain3 from '../assets/da-nang/marbel-mountain3.webp'
import dragonBridge from '../assets/da-nang/dragon-bridge.webp'
import dragonBridge2 from '../assets/da-nang/dragon-bridge2.webp'
import dragonBridge3 from '../assets/da-nang/dragon-bridge3.webp'
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
    blurb:
      'Tucked into the mountains of northwest Vietnam, Sa Pa is a scenic escape from the city, about a 6-hour trip from Hà Nội by train or bus. If you love hiking, this is home to Fansipan, the highest peak in Vietnam and all of Indochina. Prefer to skip the climb? A cable car (plus a short funicular) brings you close to the summit. Nearby, Cát Cát Village is a traditional settlement of the H’Mông ethnic minority, where you can walk past terraced hillsides, waterfalls, and handwoven textiles, and get a glimpse of local mountain life.',
    dontMiss: [
      {
        name: 'Fansipan',
        carousel: true,
        photos: [
          {
            src: fansipanCableCar,
            alt: 'The Fansipan cable car crossing the valley above the forest',
          },
          {
            src: fansipanFunicular,
            alt: 'The red funicular climbing past the Buddha statue near the summit',
          },
          {
            src: fansipanSummit,
            alt: 'Sunrise over a sea of cloud from the summit deck',
          },
        ],
      },
      {
        name: 'Cát Cát Village',
        carousel: true,
        photos: [
          {
            src: catCatVillage,
            alt: 'The stilt houses and walkways of Cát Cát Village above the stream',
          },
          {
            src: catCatFalls2,
            alt: 'By the falls at Cát Cát Village',
          },
          {
            src: catCatWaterfall,
            alt: 'The two of us in H’Mông dress by the waterfall at Cát Cát',
          },
          {
            src: catCatBridge,
            alt: 'In H’Mông dress on the bridge over the Cát Cát waterfall',
          },
          {
            src: catCatFalls,
            alt: 'By the falls at Cát Cát Village',
          },
          {
            src: catCatFalls3,
            alt: 'By the falls at Cát Cát Village',
          },

        ],
      },
      {
        name: 'Mường Hoa Valley',
        photo: muongHoaValley,
        photoAlt: 'Walkers on a path through the terraced rice fields of the valley',
      },
    ],
    eats: [
      {
        dish: 'Sa Pa mountain specialties',
        note: 'Horse meat, wild edible vegetables, and sticky rice cooked inside bamboo are the specialties up here.',
        photo: sapaFood,
        photoAlt: 'A spread of Sa Pa mountain specialties',
      },
    ],
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
    blurb:
      'Hà Nội is the capital of Vietnam and one of Asia’s oldest capitals, with over a thousand years of history. In 2010, the city celebrated the 1,000th anniversary of Thăng Long – Hà Nội, which began in 1010 under the Lý Dynasty. Each era since has left its mark, and you can still see those layers today as you wander through the Old Quarter, where centuries-old streets, temples, and shophouses sit side by side with the energy of modern life.',
    dontMiss: [
      {
        name: 'Temple of Literature',
        mapUrl: 'https://maps.app.goo.gl/MmjCTqGq68w96V9B8',
        note: 'Known as the first university in Vietnam.',
        carousel: true,
        photos: [
          {
            src: templeLiterature1,
            alt: 'The main gate of the Temple of Literature, with its bell tower over the archway',
          },
          {
            src: templeLiterature2,
            alt: 'The Khue Van Cac pavilion, with conical lanterns strung along the path up to it',
          },
          {
            src: templeLiterature3,
            alt: 'The bronze urn in the inner courtyard, with the ceremonial hall behind it',
          },
        ],
      },
      {
        name: 'One Pillar Pagoda',
        mapUrl: 'https://maps.app.goo.gl/BttYkaeeYinqTx7d6',
        note: 'Another thousand-year-old piece of architecture.',
        photo: onePillarPagoda,
        photoAlt: 'The One Pillar Pagoda on its stone pillar above a lotus pond',
      },
      {
        name: 'Hoan Kiem Lake',
        mapUrl: 'https://maps.app.goo.gl/pExCaSSfbvD6QrZu5',
        carousel: true,
        photos: [
          {
            src: hoanKiem1,
            alt: 'The two of us by the lake, with Thê Húc Bridge behind',
          },
          {
            src: hoanKiem2,
            alt: 'A coffee on the lake path in the afternoon sun',
          },
          {
            src: hoanKiem3,
            alt: 'The two of us at the lake at night, Turtle Tower lit up across the water',
          },
        ],
      },
      {
        name: 'Train Street',
        mapUrl: 'https://maps.app.goo.gl/mod2N8toWrYZTEUT9',
        carousel: true,
        photos: [
          { src: trainStreet1, alt: 'A train squeezing past the cafes on Train Street' },
          {
            src: trainStreet3,
            alt: 'Walking the tracks ',
          },
          {
            src: trainStreet2,
            alt: 'Walking the tracks ',
          },

        ],
      },
    ],
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
          { src: hueTrain5, alt: 'Amy and Bao' },
        ],
      },
      {
        name: 'Imperial City',
        mapUrl:
          'https://maps.app.goo.gl/QGTjnB74obfhwd3LA',
        carousel: true,
        photos: [
          {
            src: imperialCity,
            alt: 'The Meridian Gate and courtyard of the Imperial City in Hue',
          },
          {
            src: imperialCitySunset,
            alt: 'Bao outside the citadel wall as the sun sets over Hue',
          },
          {
            src: imperialCityFlagTower,
            alt: 'The Flag Tower of the citadel at dusk, from the lawn outside the walls',
          },
        ],
      },
      {
        name: 'Đong Ba Market',
        mapUrl: 'https://maps.app.goo.gl/QaHDiGNvDk5c6C769',
        carousel: true,
        photos: [
          {
            src: dongBaMarketGate,
            alt: 'The entrance to Đong Ba Market under its sign',
          },
          {
            src: dongBaMarketAisle,
            alt: 'An aisle of stalls running through the middle of the market',
          },
          {
            src: dongBaMarket,
            alt: 'A bún bò Hue stall inside Đong Ba Market, with its price board overhead',
          },
          {
            src: dongBaMarketFood,
            alt: 'A food stall spread with skewers, bánh bèo and bowls of noodles',
          },
        ],
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
    photo: daNangFront,
    photoAlt: 'The Golden Bridge',
    blurb: [
      'Đà Nẵng is where my heart is, and it’s also where Amy’s family is from. I grew up just behind the Đà Nẵng Train Station, spending my childhood playing soccer in the streets and walking along the sandy shores; places that have since transformed into the modern skyline you see today.',
      'Sometimes it’s hard to reconcile the Đà Nẵng I remember with the city that stands here today. The streets I ran through, the shorelines I wandered, and the places that shaped my childhood have all grown and changed alongside the city. It’s all I think of, yet somehow nothing I can quite remember. So when you’re here, take plenty of pictures as the city is ever-evolving, and tomorrow may look different from today.',
      'We’re incredibly lucky to share it with you: the city, the people, and their warmth and hospitality are truly second to none. We can’t wait to welcome you to our home.',
    ],
    dontMiss: [
      {
        name: 'Ba Na Hills and Golden Bridge',
        mapUrl:
          'https://maps.app.goo.gl/xN9U3aCG2sCh7MxD8',
        carousel: true,
        photos: [
          { src: banahill2, alt: 'Ba Na Hills' },
          { src: banahill , alt: 'Ba Na Hills' },
          { src: banahill3, alt: 'Ba Na Hills' },
        ],
      },
      {
        name: 'My Khe Beach',
        mapUrl:
          'https://maps.app.goo.gl/kreHn1cWnngT36FX7',
        carousel: true,
        photos: [
          { src: myKhe, alt: 'My Khe Beach' },
          { src: myKhe2, alt: 'My Khe Beach' },
        ],
      },
      {
        name: 'Marble Mountains',
        mapUrl:
          'https://maps.app.goo.gl/5DQhJUbU1SSubQTs7',
        carousel: true,
        photos: [
          { src: marbleMountain, alt: 'Marble Mountains' },
          { src: marbleMountain2, alt: 'Marble Mountains' },
          { src: marbleMountain3, alt: 'Marble Mountains' },
        ],
      },
      {
        name: 'Dragon Bridge',
        mapUrl:
          'https://maps.app.goo.gl/5XApgvrgQMchxKbTA',
        carousel: true,
        photos: [
          { src: dragonBridge, alt: 'Dragon Bridge' },
          { src: dragonBridge2, alt: 'Dragon Bridge' },
          { src: dragonBridge3, alt: 'Dragon Bridge' },
        ],
      },
    ],
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
    blurb: [
      'Hội An is a UNESCO World Heritage site, and it’s where I was born. My grandparents’ old home sits by the riverside, where bamboo basket boats rise and fall with the tide. At night, glowing lanterns light up the streets, and a cool river breeze drifts through the busy night market.',
      'I remember the street outside my grandparents’ home being wide enough for us to run and play. Today, it feels smaller, packed with visitors and bustling with tourists. It’s still surreal to think that I got to call this place home for a time. If you have the chance, you should definitely explore Hội An. There’s something truly special about its architecture, old buildings, and colorful facades, you won’t find another town quite like it.',
    ],
    dontMiss: [
      {
        name: 'Ancient Town',
        mapUrl:
          'https://maps.app.goo.gl/q2iZKCZRYBV8i13b7',
        // note: 'The old quarter is best on foot after sunset, when the lanterns come on and the streets close to traffic. Wander the riverside, cross the Japanese Covered Bridge, and float a paper lantern down the Thu Bồn.',
        carousel: true,
        photos: [
          { src: hoianTown4, alt: 'Hoi An in a raining day' },
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
    blurb: [
      'Sài Gòn is the city Amy grew up in, and she has always been proud to call herself a Sài Gònian. Vietnam’s largest city and its economic heart, it never seems to slow down. Motorbikes flow through the streets like rivers, street vendors are up before the sun, and there’s a coffee cart around every corner.',
      'But behind the hustle and noise is a city rich with history, from French colonial landmarks to old temples tucked between towering skyscrapers. It’s busy, loud, and full of life, and Amy can’t wait to show you her hometown.',
      'There’s always something to do if you seek it out, and if you’re curious enough, you’ll find it. Visit the War Remnants Museum or Independence Palace, wander through the markets, or take in the city from one of its modern landmarks. When the sun goes down, settle into an acoustic bar, explore the nightlife, or simply find a corner to sit, drink, and watch the city go by. Sài Gòn has something for everyone.',
    ],
    dontMiss: [
      {
        name: 'Ben Thanh Market',
        mapUrl: 'https://maps.app.goo.gl/AxsX8rv7Qpana9Le8',
        note: 'Classic market for souvenirs, snacks, and people-watching. Bargain politely.',
        photo: benThanhMarket,
        photoAlt: 'Stalls packed with goods inside Ben Thanh Market',
      },
      {
        name: 'Saigon Central Post Office & Notre-Dame Cathedral',
        mapUrl: 'https://maps.app.goo.gl/FqKnHNzLw2SaTic26',
        note: 'French-era landmarks right next to each other. Great photo stop and souvenir.',
        photo: notreDameSaigon,
        photoAlt: 'The red brick towers of Notre-Dame Cathedral in Sài Gòn',
      },
      {
        name: 'Independence Palace',
        mapUrl: 'https://maps.app.goo.gl/JNW6STBkEAUvoF647',
        note: 'The \u201cWhite House\u201d of the Vietnamese president back in the day - a time capsule of 1960s architecture and Vietnam\u2019s history.',
        photo: independencePalace,
        photoAlt: 'The front facade and lawn of Independence Palace in S\u00e0i G\u00f2n',
      },
      {
        name: 'War Remnants Museum',
        mapUrl: 'https://maps.app.goo.gl/BivgB6CZbBCfBnAQ9',
        note: 'A good way to explore the Vietnam War through Vietnamese perspectives.',
      },
      {
        name: 'Nguyen Hue Walking Street/ Bui Viet Street',
        mapUrl:'https://maps.app.goo.gl/vAmbExtDmS4k8kJx8',
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

// How far a finger (or a held mouse) has to travel across the frame before the release counts as "next photo" rather than a tap that missed the dots.

const SWIPE_RATIO = 0.18
const SWIPE_MIN_PX = 40

// Auto-advancing strip for entries carrying a handful of photos. The track
// slides one frame to the left every CAROUSEL_MS and wraps back to the first,
// and the photo can also be picked by hand four ways: the arrow buttons, the
// left/right arrow keys once the frame has focus, the dots, or a drag across
// the frame. Dragging alone was only really usable on a phone.
function PhotoCarousel({ photos }) {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  // How far the current drag has travelled, in px. Null while nothing is being
  // dragged, which is also what tells the track to keep its slide transition.
  const [drag, setDrag] = useState(null)
  const frameRef = useRef(null)
  const startX = useRef(0)

  // Hovering and dragging each hold the loop still on their own, so letting go
  // mid-hover must not start it advancing under the cursor.
  const paused = hovered || drag !== null

  const step = useCallback(
    (delta) =>
      setIndex(
        (current) => (current + delta + photos.length) % photos.length,
      ),
    [photos.length],
  )

  useEffect(() => {
    if (paused) return

    const id = setInterval(() => step(1), CAROUSEL_MS)

    return () => clearInterval(id)
  }, [paused, step])

  const onPointerDown = (event) => {
    // Ignore right/middle clicks, and let the dots keep their own clicks.
    if (event.button !== 0) return

    startX.current = event.clientX
    setDrag(0)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event) => {
    if (drag === null) return

    setDrag(event.clientX - startX.current)
  }

  const onPointerUp = (event) => {
    if (drag === null) return

    const width = frameRef.current?.offsetWidth ?? 0
    const threshold = Math.max(SWIPE_MIN_PX, width * SWIPE_RATIO)

    if (Math.abs(drag) > threshold) step(drag < 0 ? 1 : -1)

    setDrag(null)

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') step(1)
    else if (event.key === 'ArrowLeft') step(-1)
    else return

    // Once the carousel holds focus the arrows are its own: stop them scrolling
    // the city page sideways underneath it.
    event.preventDefault()
  }

  return (
    <div
      ref={frameRef}
      className="city-place-carousel"
      // Focusable in its own right so the arrow keys work without having to
      // tab onto one of the buttons first.
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label="Photos — use the left and right arrow keys to change photo"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className={
          drag === null
            ? 'city-place-carousel-track'
            : 'city-place-carousel-track is-dragging'
        }
        style={{
          transform: `translateX(calc(${-index * 100}% + ${drag ?? 0}px))`,
        }}
      >
        {photos.map((photo) => (
          <figure key={photo.src} className="city-place-carousel-slide">
            <img src={photo.src} alt={photo.alt} loading="lazy" draggable={false} />
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="city-place-carousel-arrow is-prev"
        aria-label="Previous photo"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={() => step(-1)}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          chevron_left
        </span>
      </button>

      <button
        type="button"
        className="city-place-carousel-arrow is-next"
        aria-label="Next photo"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={() => step(1)}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          chevron_right
        </span>
      </button>

      <div className="city-place-carousel-dots">
        {photos.map((photo, dot) => (
          <button
            key={photo.src}
            type="button"
            className={dot === index ? 'is-active' : undefined}
            aria-label={`Show photo ${dot + 1} of ${photos.length}`}
            aria-current={dot === index}
            onPointerDown={(event) => event.stopPropagation()}
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
            You’ve come all this way! If you have the time to explore beyond the wedding, here are some of our favorite cities in Vietnam that we’ve visited and would recommend adding to your trip.
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

          {city.blurb &&
            (Array.isArray(city.blurb) ? city.blurb : [city.blurb]).map((paragraph, i) => (
              <p key={i} className="city-page-blurb">
                {paragraph}
              </p>
            ))}

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
