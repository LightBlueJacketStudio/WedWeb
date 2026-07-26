import { useNavigate } from "react-router-dom"

const cards = [
  {
    icon: "flight",
    title: "Travel Guide",
    text: "Flights to DAD Airport, visa requirements, and transfers.",
    status: "Pending",
    path: "/travel_guide",
  },
  {
    icon: "hotel",
    title: "Accommodations",
    text: "Recommended resorts in Da Nang and booking codes.",
    status: "Pending",
  },
  {
    icon: "mail",
    title: "RSVP",
    text: "Check back here soon to confirm your attendance.",
    status: "Pending",
  },
]

function PlanningCards() {
  const navigate = useNavigate()

  const handleMouseMove = (event) => {
    const cardElement = event.currentTarget
    const rect = cardElement.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    cardElement.style.setProperty("--mouse-x", `${x}px`)
    cardElement.style.setProperty("--mouse-y", `${y}px`)
  }

  const handleCardClick = (card) => {
    console.log("Card clicked:", card)

    if (card.path) {
      navigate(card.path)
    }
  }

  return (
    <section id="travel" className="planning-section">
      <div className="planning-header">
        <div>
          <h2>Planning Your Visit</h2>
          <p>Details coming very soon</p>
        </div>

        <div className="planning-pets">
          <span className="material-symbols-outlined">pets</span>
        </div>
      </div>

      <div className="planning-grid">
        {cards.map((card) => (
          <div
            className={`paper-card ${card.path ? "clickable-card" : ""}`}
            key={card.title}
            onMouseMove={handleMouseMove}
            onClick={() => handleCardClick(card)}
          >
            <div className="paper-card-icon">
              <span className="material-symbols-outlined">
                {card.icon}
              </span>
            </div>

            <h3>{card.title}</h3>
            <p>{card.text}</p>

            <span className="status-pill">{card.status}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlanningCards