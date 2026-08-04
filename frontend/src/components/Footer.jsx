import { ContactUs } from './ContactUs'

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-inner">
        <span className="footer-logo">B &amp; M</span>

        <ContactUs className="footer-contact-btn" />

        <div className="footer-pets">
          <span className="material-symbols-outlined">pets</span>
          <span className="material-symbols-outlined">pets</span>
        </div>

        <p>2027 • Made with love &amp; paw prints</p>
      </div>
    </footer>
  )
}

export default Footer
