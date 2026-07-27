import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Client-side route changes don't reset scroll position like a full page
// load would, so every tab switch would otherwise keep the previous page's scroll offset.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
