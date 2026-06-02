const services = [
  { idx: '01', name: 'Brand Identity Design', desc: 'Logos, brand guidelines, business cards, and complete visual identity systems.' },
  { idx: '02', name: 'Packaging Design', desc: 'Custom packaging solutions, labels, product boxes, and retail packaging.' },
  { idx: '03', name: 'Social Media Design', desc: 'Creative posts, banners, ads, and promotional graphics for digital platforms.' },
  { idx: '04', name: 'Print Design', desc: 'Brochures, flyers, catalogs, posters, and other marketing materials.' },
  { idx: '05', name: 'Video Editing', desc: 'Reels, promotional videos, motion graphics, and social media video content.' },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num">(02)</span>
          <h2 className="sec-title">Services</h2>
        </div>
        <div className="svc-list">
          {services.map(s => (
            <div key={s.idx} className="svc-row reveal">
              <span className="svc-idx">{s.idx}</span>
              <span className="svc-name">{s.name}</span>
              <span className="svc-desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
