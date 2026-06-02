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
        <div className="hero-image reveal">
          <img src="/profile.jpg" alt="Numan Ashraf" />
        </div>
        <div className="eyebrow reveal">Graphic Designer &amp; Creative Content Creator</div>
        <h1 className="hero-title reveal">
          Creating Meaningful Designs, Strong Brand Identities, and Engaging Visual Content That Leaves a <em>Lasting Impact</em>
        </h1>
        <div className="hero-bottom reveal">
          <div className="btns">
            <a href="https://www.behance.net/numanali65" target="_blank" rel="noopener noreferrer" className="btn btn-solid">View Portfolio ↗</a>
            <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          </div>
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
