import { Fragment } from "react"

// Room-rate quote from Da Nang Mikazuki Japanese Resorts (group code 1174097).
// Snapshot of the hotel's quote sheet (rev. 13.03.27) — update here if the
// hotel revises rates. USD figures are approximate at 26,000 vn₫ = $1.
const roomRates = [
  {
    type: "Deluxe Ocean View",
    url: "https://mikazuki.com.vn/en/deluxe-ocean-view-room.html",
    size: 70,
    beds: "King or Twin",
    sleeps: "2A + 2C",
    packages: [
      {
        label: "BB",
        std: { vnd: "3,924,375", usd: "$151" },
        early: { vnd: "3,335,719", usd: "$128" },
        long: { vnd: "3,139,500", usd: "$121" },
      },
      {
        label: "BBOW",
        std: { vnd: "4,344,375", usd: "$167" },
        early: { vnd: "3,692,719", usd: "$142" },
        long: { vnd: "3,475,500", usd: "$134" },
      },
    ],
  },
  {
    type: "Premium Deluxe Ocean View",
    url: "https://mikazuki.com.vn/en/premium-deluxe-ocean-view-room.html",
    size: 85,
    beds: "King or Twin",
    sleeps: "2A + 2C",
    packages: [
      {
        label: "BB",
        std: { vnd: "4,470,375", usd: "$172" },
        early: { vnd: "3,799,819", usd: "$146" },
        long: { vnd: "3,576,300", usd: "$138" },
      },
      {
        label: "BBOW",
        std: { vnd: "4,890,375", usd: "$188" },
        early: { vnd: "4,156,819", usd: "$160" },
        long: { vnd: "3,912,300", usd: "$150" },
      },
    ],
  },
  {
    type: "Family Ocean View",
    url: "https://mikazuki.com.vn/en/family-ocean-view-room.html",
    size: 70,
    beds: "1 King + 2 Twin",
    sleeps: "4A + 2C",
    packages: [
      {
        label: "BB",
        std: { vnd: "6,176,625", usd: "$238" },
        early: { vnd: "5,250,131", usd: "$202" },
        long: { vnd: "4,941,300", usd: "$190" },
      },
      {
        label: "BBOW",
        std: { vnd: "7,016,625", usd: "$270" },
        early: { vnd: "5,964,131", usd: "$229" },
        long: { vnd: "5,613,300", usd: "$216" },
      },
    ],
  },
  {
    type: "Premium Family Ocean View",
    url: "https://mikazuki.com.vn/en/premium-family-ocean-view-room.html",
    size: 85,
    beds: "1 King + 2 Twin",
    sleeps: "4A + 2C",
    packages: [
      {
        label: "BB",
        std: { vnd: "6,722,625", usd: "$259" },
        early: { vnd: "5,714,231", usd: "$220" },
        long: { vnd: "5,378,100", usd: "$207" },
      },
      {
        label: "BBOW",
        std: { vnd: "7,562,625", usd: "$291" },
        early: { vnd: "6,428,231", usd: "$247" },
        long: { vnd: "6,050,100", usd: "$233" },
      },
    ],
  },
  {
    type: "Executive Suite",
    url: "https://mikazuki.com.vn/en/executive-suite-ocean-view-room.html",
    size: 200,
    beds: "1 King + 2 Twin",
    sleeps: "4A + 2C",
    packages: [
      {
        label: "BB",
        std: { vnd: "12,114,375", usd: "$466" },
        early: { vnd: "10,297,219", usd: "$396" },
        long: { vnd: "9,691,500", usd: "$373" },
      },
      {
        label: "BBOW",
        std: { vnd: "12,954,375", usd: "$498" },
        early: { vnd: "11,011,219", usd: "$424" },
        long: { vnd: "10,363,500", usd: "$399" },
      },
    ],
  },
  {
    type: "Japanese Suite",
    url: "https://mikazuki.com.vn/en/japanese-suite-ocean-view-room.html",
    size: 200,
    beds: "1 King + 1 Queen",
    sleeps: "4A + 2C",
    packages: [
      {
        label: "BB",
        std: { vnd: "13,650,000", usd: "$525" },
        early: { vnd: "11,602,500", usd: "$446" },
        long: { vnd: "10,920,000", usd: "$420" },
      },
      {
        label: "BBOW",
        std: { vnd: "14,490,000", usd: "$557" },
        early: { vnd: "12,316,500", usd: "$474" },
        long: { vnd: "11,592,000", usd: "$446" },
      },
    ],
  },
  {
    type: "Presidential Suite",
    url: "https://mikazuki.com.vn/en/presidential-suite-ocean-view-room.html",
    size: 400,
    beds: "1 King + 2 Twin",
    sleeps: "4A + 2C",
    packages: [
      {
        label: "BB",
        std: { vnd: "31,224,375", usd: "$1,201" },
        early: { vnd: "26,540,719", usd: "$1,021" },
        long: { vnd: "24,979,500", usd: "$961" },
      },
      {
        label: "BBOW",
        std: { vnd: "32,064,375", usd: "$1,233" },
        early: { vnd: "27,254,719", usd: "$1,048" },
        long: { vnd: "25,651,500", usd: "$987" },
      },
    ],
  },
  {
    type: "Villa (2 bedrooms)",
    url: "https://mikazuki.com.vn/en/2-bedroom-private-pool-villa.html",
    size: 228,
    beds: "1 King + 1 Twin",
    sleeps: "4A + 2C",
    packages: [
      {
        label: "BB",
        std: { vnd: "14,950,000", usd: "$575" },
        early: { vnd: "12,707,500", usd: "$489" },
        long: { vnd: "11,960,000", usd: "$460" },
      },
      {
        label: "BBOW",
        std: { vnd: "15,790,000", usd: "$607" },
        early: { vnd: "13,421,500", usd: "$516" },
        long: { vnd: "12,632,000", usd: "$486" },
      },
    ],
  },
  {
    type: "Villa (3 bedrooms)",
    url: "https://mikazuki.com.vn/en/3-bedroom-pivate-pool-villa.html",
    size: 284,
    beds: "2 King + 1 Twin",
    sleeps: "6A + 2C",
    packages: [
      {
        label: "BB",
        std: { vnd: "19,435,000", usd: "$746" },
        early: { vnd: "16,519,750", usd: "$635" },
        long: { vnd: "15,548,000", usd: "$598" },
      },
      {
        label: "BBOW",
        std: { vnd: "20,695,000", usd: "$796" },
        early: { vnd: "17,590,750", usd: "$677" },
        long: { vnd: "16,556,000", usd: "$637" },
      },
    ],
  },
]

function RateCell({ rate }) {
  return (
    <td>
      <span className="rate-vnd">{rate.vnd} vn₫</span>
      <span className="rate-usd">~{rate.usd}</span>
    </td>
  )
}

export function RoomRatesTable() {
  return (
    <>
      <div className="room-rates-table-wrapper">
        <table className="room-rates-table">
          <thead>
            <tr>
              <th>Room Type</th>
              <th className="col-package">Package</th>
              <th>Size</th>
              <th>Beds</th>
              <th>Sleeps</th>
              <th>Rate / Night</th>
              <th>60-Day Early Bird</th>
              <th>5+ Nights</th>
            </tr>
          </thead>
          <tbody>
            {roomRates.map((room, roomIndex) => (
              <Fragment key={room.type}>
                {room.packages.map((pkg, pkgIndex) => {
                  const rowClass = [
                    roomIndex % 2 === 1 ? "room-row-alt" : "",
                    pkgIndex === 0 ? "room-group-start" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")

                  return (
                    <tr key={pkg.label} className={rowClass || undefined}>
                      {pkgIndex === 0 && (
                        <th scope="rowgroup" rowSpan={room.packages.length}>
                          {room.type}
                          <a
                            className="room-link"
                            href={room.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            See room
                            <svg
                              className="room-link-icon"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        </th>
                      )}
                      <td className="rate-plan col-package">{pkg.label}</td>
                      {pkgIndex === 0 && (
                        <>
                          <td rowSpan={room.packages.length}>{room.size} m²</td>
                          <td rowSpan={room.packages.length}>{room.beds}</td>
                          <td rowSpan={room.packages.length}>{room.sleeps}</td>
                        </>
                      )}
                      <RateCell rate={pkg.std} />
                      <RateCell rate={pkg.early} />
                      <RateCell rate={pkg.long} />
                    </tr>
                  )
                })}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="room-rates-note">
        <li>
          <strong>BB</strong> = Bed + Breakfast
        </li>
        <li>
          <strong>BBOW</strong> = Bed + Breakfast + Onsen + Waterpark
        </li>
        <li>Prices are per night.</li>
        <li>The early bird and long-stay rates are non-refundable.</li>
        <li>
          Rates are subject to room availability, a reservation is required.
        </li>
        <li>USD amounts are approximate (~26,000 vn₫ = $1).</li>
        <li>A = adults, C = children.</li>
      </ul>
    </>
  )
}
