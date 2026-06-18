import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import placeholder from './assets/placeholder.png'

import Navbar from './Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>TITLE</header>
      <Navbar/>
    </>
  )
}

export default App
