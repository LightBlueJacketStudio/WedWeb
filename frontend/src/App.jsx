import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../scss/index.scss'
import Home from './pages/home'
import RsvpPage from './pages/RsvpPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RsvpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App