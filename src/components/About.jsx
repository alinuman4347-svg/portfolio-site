export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="reveal">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="sec-num">(01)</span>
            <h2 className="sec-title">About</h2>
          </div>
        </div>
        <div className="about-body reveal">
          <p className="about-lead">
            Hi, I'm Numan — a passionate graphic designer dedicated to creating visually compelling and <b>meaningful</b> designs.
          </p>
          <p>I specialize in branding, packaging design, social media graphics, print materials, and marketing assets that help businesses communicate effectively and leave a lasting impression.</p>
          <p>My approach combines creativity, attention to detail, and strategic thinking to deliver designs that not only look great but also achieve business goals.</p>
          <div className="stats">
            <div className="stat"><div className="n">5+</div><div className="l">Core Services</div></div>
            <div className="stat"><div className="n">100%</div><div className="l">Client Focused</div></div>
            <div className="stat"><div className="n">9</div><div className="l">Specialisms</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
