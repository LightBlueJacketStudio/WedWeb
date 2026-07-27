import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../scss/index.scss'
import Home from './pages/home'
import RsvpPage from './pages/RsvpPage'
import TravelGuide from './pages/TravelGuide'
import GiftRegistry from './pages/GiftRegistry'
import Navibar from './components/Navibar'

function App() {
  return (
    <BrowserRouter>
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RsvpPage />} />
        <Route path="/travel_guide" element={<TravelGuide />} />
        <Route path="/gift_registry" element={<GiftRegistry />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App