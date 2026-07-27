import HeroPassport from '../components/HeroPassport'
import FlightPath from '../components/FlightPath'
import PlanningCards from '../components/PlanningCards'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <main className="page-container">
        {/* <HeroPassport /> */}
        <FlightPath />
        <PlanningCards />
      </main>

      <Footer />
    </>
  )
}

export default Home
