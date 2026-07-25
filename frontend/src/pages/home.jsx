import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navibar from '../components/Navibar'
import HeroPassport from '../components/HeroPassport'
import FlightPath from '../components/FlightPath'
import PlanningCards from '../components/PlanningCards'
import Footer from '../components/Footer'

function Home() {
  const { hash } = useLocation()

  // Nav links to sections here (e.g. "/#journey") land with a hash but
  // client-side routing doesn't trigger the browser's native scroll-to-hash.
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <>
      <Navibar />

      <main className="page-container">
        <HeroPassport />
        <FlightPath />
        <PlanningCards />
      </main>

      <Footer />
    </>
  )
}

export default Home
