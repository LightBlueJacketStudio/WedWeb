// Room-rate quote from Da Nang Mikazuki Japanese Resorts (group code 1174097).
// Snapshot of the hotel's quote sheet — update here if the hotel revises rates.
const roomRates = [
  {
    type: "Deluxe Ocean View",
    url: "https://mikazuki.com.vn/en/deluxe-ocean-view-room.html",
    size: 70,
    beds: "King or Twin",
    sleeps: "2A + 2C",
    bb: { vnd: "3,737,500", usd: "$143" },
    bbow: { vnd: "4,600,000", usd: "$177" },
  },
  {
    type: "Premium Deluxe Ocean View",
    url: "https://mikazuki.com.vn/en/premium-deluxe-ocean-view-room.html",
    size: 90,
    beds: "King or Twin",
    sleeps: "2A + 2C",
    bb: { vnd: "4,257,500", usd: "$163" },
    bbow: { vnd: "5,240,000", usd: "$201" },
  },
  {
    type: "Family Ocean View",
    url: "https://mikazuki.com.vn/en/family-ocean-view-room.html",
    size: 70,
    beds: "1 King + 2 Twin",
    sleeps: "4A + 2C",
    bb: { vnd: "5,882,500", usd: "$226" },
    bbow: { vnd: "7,240,000", usd: "$278" },
  },
  {
    type: "Premium Family Ocean View",
    url: "https://mikazuki.com.vn/en/premium-family-ocean-view-room.html",
    size: 90,
    beds: "1 King + 2 Twin",
    sleeps: "4A + 2C",
    bb: { vnd: "6,402,500", usd: "$246" },
    bbow: { vnd: "7,880,000", usd: "$302" },
  },
  {
    type: "Senior Suite",
    url: "https://mikazuki.com.vn/en/senior-suite-ocean-view-room.html",
    size: 140,
    beds: "1 King + 2 Twin",
    sleeps: "4A + 2C",
    bb: { vnd: "10,887,500", usd: "$418" },
    bbow: { vnd: "13,400,000", usd: "$514" },
  },
  {
    type: "Executive Suite",
    url: "https://mikazuki.com.vn/en/executive-suite-ocean-view-room.html",
    size: 200,
    beds: "1 King + 2 Twin",
    sleeps: "4A + 2C",
    bb: { vnd: "10,887,500", usd: "$418" },
    bbow: { vnd: "13,400,000", usd: "$514" },
  },
  {
    type: "Japanese Suite",
    url: "https://mikazuki.com.vn/en/japanese-suite-ocean-view-room.html",
    size: 200,
    beds: "1 King + 1 Queen",
    sleeps: "4A + 2C",
    bb: { vnd: "10,887,500", usd: "$418" },
    bbow: { vnd: "13,400,000", usd: "$514" },
  },
  {
    type: "Ambassador Suite",
    url: "https://mikazuki.com.vn/en/ambassador-suite-ocean-view-room.html",
    size: 170,
    beds: "1 King + 2 Twin",
    sleeps: "4A + 2C",
    bb: { vnd: "16,087,500", usd: "$617" },
    bbow: { vnd: "19,800,000", usd: "$760" },
  },
  {
    type: "Presidential Suite",
    url: "https://mikazuki.com.vn/en/presidential-suite-ocean-view-room.html",
    size: 400,
    beds: "1 King + 2 Twin",
    sleeps: "4A + 2C",
    bb: { vnd: "29,737,500", usd: "$1,141" },
    bbow: { vnd: "36,600,000", usd: "$1,405" },
  },
  {
    type: "Villa (2 bedrooms)",
    url: "https://mikazuki.com.vn/en/2-bedroom-private-pool-villa.html",
    size: 228,
    beds: "1 King + 1 Twin",
    sleeps: "4A + 2C",
    bb: { vnd: "14,950,000", usd: "$574" },
    bbow: { vnd: "15,916,000", usd: "$611" },
  },
  {
    type: "Villa (3 bedrooms)",
    url: "https://mikazuki.com.vn/en/3-bedroom-pivate-pool-villa.html",
    size: 284,
    beds: "2 King + 1 Twin",
    sleeps: "6A + 2C",
    bb: { vnd: "19,435,000", usd: "$746" },
    bbow: { vnd: "20,884,000", usd: "$801" },
  },
]

export function RoomRatesTable() {
  return (
    <>
      <div className="room-rates-table-wrapper">
        <table className="room-rates-table">
          <thead>
            <tr>
              <th>Room Type</th>
              <th>Size</th>
              <th>Beds</th>
              <th>Sleeps</th>
              <th>BB</th>
              <th>BBOW</th>
            </tr>
          </thead>
          <tbody>
            {roomRates.map((room) => (
              <tr key={room.type}>
                <th scope="row">
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
                <td>{room.size} m²</td>
                <td>{room.beds}</td>
                <td>{room.sleeps}</td>
                <td>
                  <span className="rate-vnd">{room.bb.vnd} vn₫</span>
                  <span className="rate-usd">~{room.bb.usd}</span>
                </td>
                <td>
                  <span className="rate-vnd">{room.bbow.vnd} vn₫</span>
                  <span className="rate-usd">~{room.bbow.usd}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="room-rates-note">
        Prices are per night. <strong>BB</strong> = Bed + Breakfast ·{" "}
        <strong>BBOW</strong> = Bed + Breakfast + Onsen + Waterpark. USD
        amounts are approximate. A = adults, C = children.
      </p>
    </>
  )
}
