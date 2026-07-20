const sealImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCPBiNSkOd14icTvOqow6ONoSVAmv0yPBgYgRhR17wC6oe52ocpaf1A0ZqYf0g0ada7WaeyA4nUYlOUD3wBZv_nAVxJuphXWJicSSdDv8ukFShGBrvulN-VQZt3mSIEJVVPrbV8N7CnWaMLGpHCYbopRJxtvdIt7Twz_zSE8JG8EmjgMIUQMxUoQ45uBMeNLbzeF-doujn-JyTzllLabSNIWFOdxNDdN5YsGXaetopUIy3EH3dbowBSFSIeA_1HwbCE-1Fgy4ZGdRKrBA'

function HeroPassport() {
  return (
    <section id="journey" className="hero-passport">
      <div className="passport-card">
        <div className="passport-icon">
          <span className="material-symbols-outlined">flight_takeoff</span>
        </div>

        <div className="seal-wrapper">
          <div className="seal-frame">
            <img src={sealImage} alt="Marriage Certificate Seal" />
          </div>
        </div>

        <h1>Our Journey Begins</h1>

        <p className="hero-route">U.S. to Da Nang, Vietnam</p>

        <div className="hero-subtitle">
          <div className="subtitle-line" />
          <p>A transpacific celebration of love</p>
          <div className="subtitle-line" />
        </div>
      </div>
    </section>
  )
}
export default HeroPassport