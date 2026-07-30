import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Client-side route changes don't reset scroll position like a full page
// load would, so every tab switch would otherwise keep the previous page's scroll offset.
// When the URL carries a hash (e.g. /travel_guide#where-to-stay), scroll to that
// section instead of the top so cross-page anchor links land in the right place.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target page has laid out before we measure it.
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo(0, 0)
      })
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
