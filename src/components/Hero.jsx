const marqueeText = (
  <span>
    Branding <b>✦</b> Packaging <b>✦</b> Logo Design <b>✦</b> Print <b>✦</b> Social Media <b>✦</b> Brand Identity <b>✦</b>{' '}
    Branding <b>✦</b> Packaging <b>✦</b> Logo Design <b>✦</b> Print <b>✦</b> Social Media <b>✦</b> Brand Identity <b>✦</b>{' '}
  </span>
)

export default function Hero() {
  return (
    <header>
      <div className="wrap">
        <div className="eyebrow reveal">Graphic Designer — Pakistan</div>
        <h1 className="hero-title reveal">
          Numan<br />Ash<em>r</em>af
        </h1>
        <div className="hero-bottom reveal">
          <p>Creating impactful visual identities, packaging designs, and marketing materials that help brands stand out.</p>
          <div className="btns">
            <a href="#work" className="btn btn-solid">View My Work ↓</a>
            <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          </div><a
  href="https://www.behance.net/numanali65"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-solid"
>
  View Portfolio
</a>
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
