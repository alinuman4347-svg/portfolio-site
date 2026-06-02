const marqueeText = (
  <span>
    Branding <b>✦</b> Packaging <b>✦</b> Logo Design <b>✦</b> Print <b>✦</b> Social Media <b>✦</b> Brand Identity <b>✦</b>{' '}
    Branding <b>✦</b> Packaging <b>✦</b> Logo Design <b>✦</b> Print <b>✦</b> Social Media <b>✦</b> Brand Identity <b>✦</b>{' '}
  </span>
)

export default function Hero() {
  return (
    <header>
      <div className="wrap hero-wrap">
        <div className="hero-text">
          <div className="eyebrow reveal">Graphic Designer</div>
          <h1 className="hero-title reveal">
            Numan<br />Ash<em>r</em>af
          </h1>
          <div className="hero-bottom reveal">
            <p className="hero-tagline">Turning Ideas Into <em>Impactful</em> Designs</p>
            <div className="btns">
              <a href="https://www.behance.net/numanali65" target="_blank" rel="noopener noreferrer" className="btn btn-solid">View Portfolio ↗</a>
            </div>
          </div>
        </div>
        <div className="hero-image reveal">
          <img src="/profile.jpg" alt="Numan Ashraf" />
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {marqueeText}
        </div>
      </div>
    </header>
  )
}
