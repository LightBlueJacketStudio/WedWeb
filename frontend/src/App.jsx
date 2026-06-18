// dependency imports
import { Suspense, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css'

// assest imports
import placeholder from './assets/placeholder.png'

// page imports
import Rsvp from './Rsvp'
import TravelnStay from './TravelnStay'
import Wedding from './Wedding'

// component imports
import Navbar from './Navbar'

//helper component to make sure the Navbar is always visible
function Layout({ Page }) {
  return (
    <>
      <Navbar />
      <Page />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout Page={Wedding} />} />
        <Route path="/travelnstay" element={<Layout Page={TravelnStay} />} />
        <Route path="/rsvp" element={<Layout Page={Rsvp} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App