import Navibar from '../components/Navibar'
import Rsvp from '../components/Rsvp'
import Footer from '../components/Footer'

function RsvpPage() {
  return (
    <>
      <Navibar />

      <main className="page-container">
        <Rsvp />
      </main>

      <Footer />
    </>
  )
}

export default RsvpPage
