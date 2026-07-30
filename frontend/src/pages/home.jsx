import HeroPassport from '../components/HeroPassport'
import FlightPath from '../components/FlightPath'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <main className="page-container">
        {/* <HeroPassport /> */}
        <FlightPath />
      </main>

      <Footer />
    </>
  )
}

export default Home
