const projects = [
  {
    tag: 'Video Editing',
    title: 'Video Editing Projects',
    desc: 'Reels, promotional videos, motion graphics, and social media video content.',
    thumb: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#16140f"/>
        {/* film strip top */}
        <rect x="0" y="0" width="400" height="36" fill="#1b3a2b"/>
        <rect x="14" y="7" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="58" y="7" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="102" y="7" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="146" y="7" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="190" y="7" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="234" y="7" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="278" y="7" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="322" y="7" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="366" y="7" width="28" height="22" rx="3" fill="#fbf9f3"/>
        {/* film strip bottom */}
        <rect x="0" y="264" width="400" height="36" fill="#1b3a2b"/>
        <rect x="14" y="271" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="58" y="271" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="102" y="271" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="146" y="271" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="190" y="271" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="234" y="271" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="278" y="271" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="322" y="271" width="28" height="22" rx="3" fill="#fbf9f3"/>
        <rect x="366" y="271" width="28" height="22" rx="3" fill="#fbf9f3"/>
        {/* play button circle */}
        <circle cx="200" cy="150" r="60" fill="#e8431f"/>
        <polygon points="185,122 185,178 238,150" fill="#fbf9f3"/>
      </svg>
    ),
  },
  {
    tag: 'Branding',
    title: 'Brand Identity Project',
    desc: 'Complete branding package including logo, color palette, and brand guidelines.',
    thumb: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#e8431f"/>
        <circle cx="200" cy="150" r="78" fill="none" stroke="#fbf9f3" strokeWidth="14"/>
        <path d="M200 90 L200 210 M140 150 L260 150" stroke="#fbf9f3" strokeWidth="14"/>
        <rect x="60" y="240" width="90" height="14" rx="7" fill="#16140f"/>
        <rect x="250" y="46" width="90" height="14" rx="7" fill="#16140f"/>
      </svg>
    ),
  },
  {
    tag: 'Digital Marketing',
    title: 'Social Media Campaign',
    desc: 'Creative marketing assets designed to increase engagement and brand awareness.',
    thumb: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#16140f"/>
        <rect x="50" y="50" width="130" height="130" rx="10" fill="#e8431f"/>
        <rect x="200" y="50" width="150" height="60" rx="10" fill="#fbf9f3"/>
        <rect x="200" y="125" width="150" height="55" rx="10" fill="#1b3a2b"/>
        <circle cx="115" cy="115" r="32" fill="#fbf9f3"/>
        <rect x="50" y="200" width="300" height="50" rx="10" fill="#fbf9f3"/>
        <circle cx="90" cy="225" r="14" fill="#e8431f"/>
        <rect x="120" y="219" width="120" height="12" rx="6" fill="#16140f"/>
      </svg>
    ),
  },
  {
    tag: 'Print',
    title: 'Print Marketing Materials',
    desc: 'Professional brochures, flyers, and promotional materials.',
    thumb: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#fbf9f3"/>
        <rect x="60" y="40" width="130" height="220" rx="4" fill="#1b3a2b"/>
        <rect x="200" y="40" width="140" height="105" rx="4" fill="#e8431f"/>
        <rect x="200" y="155" width="140" height="105" rx="4" fill="#16140f"/>
        <rect x="78" y="62" width="94" height="10" rx="5" fill="#fbf9f3"/>
        <rect x="78" y="82" width="60" height="10" rx="5" fill="#e8431f"/>
        <rect x="78" y="210" width="94" height="30" rx="4" fill="#e8431f"/>
      </svg>
    ),
  },
]

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="sec-title">Selected Work</h2>
        </div>
        <div className="work-grid">
          {projects.map((p, i) => (
            <div key={i} className="work-card reveal">
              <div className="thumb">{p.thumb}</div>
              <span className="arrow">↗</span>
              <div className="work-meta">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
