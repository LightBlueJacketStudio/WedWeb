import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// The couple's contact details, shown in the reusable ContactCard below.
const CONTACTS = [
  {
    name: 'Bao',
    phone: '(408)-646-7175',
    tel: '+14086467175',
    email: 'huynhbao04@gmail.com',
  },
  {
    name: 'Amy',
    phone: '(304)-674-7839',
    tel: '+13046747839',
    email: 'dohoangmy.5297@gmail.com',
  },
]

// The plain "Contact us" card: a title and the two of us with tap-to-call /
// tap-to-email links. Used inline (travel guide) and inside the modal below.
export function ContactCard({ className = '' }) {
  return (
    <div className={['contact-card', className].filter(Boolean).join(' ')}>
      <p className="contact-card-title">Contact us</p>

      <div className="contact-card-people">
        {CONTACTS.map((person) => (
          <div className="contact-person" key={person.name}>
            <p className="contact-person-name">{person.name}</p>

            <a className="contact-person-line" href={`tel:${person.tel}`}>
              <span className="material-symbols-outlined" aria-hidden="true">
                call
              </span>
              {person.phone}
            </a>

            <a
              className="contact-person-line"
              href={`mailto:${person.email}`}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                mail
              </span>
              {person.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

// A "Contact us" button that opens the ContactCard in a centered modal. The
// modal is portalled to <body> so it escapes transformed ancestors (e.g. the
// 3D-flipped postcard) and stays anchored to the viewport.
export function ContactUs({
  className = '',
  label = 'Contact us',
  icon = 'alternate_email',
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    // Freeze background scroll while the dialog is up.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className={['contact-us-trigger', className].filter(Boolean).join(' ')}
        onClick={() => setOpen(true)}
      >
        <span
          className="contact-us-trigger-icon material-symbols-outlined"
          aria-hidden="true"
        >
          {icon}
        </span>
        <span className="contact-us-trigger-label">{label}</span>
      </button>

      {open &&
        createPortal(
          <div
            className="contact-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Contact us"
            onClick={() => setOpen(false)}
          >
            <div
              className="contact-modal"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="contact-modal-close"
                aria-label="Close contact details"
                onClick={() => setOpen(false)}
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  close
                </span>
              </button>

              <ContactCard />
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}

export default ContactUs
