import { useState } from 'react'

// Simple shared-password gate for the whole site.
//
// This is a client-side gate. It keeps out casual visitors and search
// engines, but it is NOT bulletproof
//  It's important to note that anyone determined can bypass a check
// that runs in the browser.
//
// We never store the plaintext password in the code. Instead we store the
// SHA-256 hash and compare the hash of whatever the visitor types.
//
// To change the password:
//   1. Run this in a terminal (replace THEPASSWORD):
//      node -e "crypto.subtle.digest('SHA-256',new TextEncoder().encode('THEPASSWORD')).then(b=>console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))"
//   2. Put the printed hash in a gitignored `.env` file at frontend/.env:
//      VITE_SITE_PWD_HASH=<the hash>

const DEFAULT_PWD_HASH =
  'e4a9024fc5b59e0c84eb79f6e7f67b1508032cbcdeb0a17dd365470b46d217ae'

const SITE_PWD_HASH = import.meta.env.VITE_SITE_PWD_HASH || DEFAULT_PWD_HASH

const STORAGE_KEY = 'wedweb-unlocked'

async function sha256Hex(text) {
  const bytes = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === 'true',
  )
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [checking, setChecking] = useState(false)

  if (unlocked) {
    return children
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setChecking(true)
    setError('')

    const hash = await sha256Hex(value)
    if (hash === SITE_PWD_HASH) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
      // Dismiss the mobile keyboard/focus before the gate unmounts so iOS
      // doesn't carry any focus-related viewport state into the site.
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
      // Always reveal the landing page ("/" Home) after unlocking, regardless
      // of which URL the visitor originally opened. The gate lives outside the
      // router, so we reset the URL here before <App /> mounts.
      window.history.replaceState(null, '', '/')
      setUnlocked(true)
    } else {
      setError('Incorrect password — try again')
      setValue('')
    }
    setChecking(false)
  }

  return (
    <div className="password-gate">
      <form className="password-gate__card" onSubmit={handleSubmit}>
        <p className="password-gate__eyebrow">You're invited</p>
        <h1 className="password-gate__title">Enter the password</h1>
        <p className="password-gate__subtitle">
          Please enter the password from your invitation to view the site.
        </p>

        <label className="password-gate__label" htmlFor="site-password">
          Password
        </label>
        <input
          id="site-password"
          className="password-gate__input"
          type="password"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          autoComplete="off"
          placeholder="Enter password"
        />

        {error && <p className="password-gate__error">{error}</p>}

        <button
          className="password-gate__button"
          type="submit"
          disabled={checking || value.length === 0}
        >
          {checking ? 'Checking…' : 'Unlock'}
        </button>
      </form>
    </div>
  )
}

export default PasswordGate
