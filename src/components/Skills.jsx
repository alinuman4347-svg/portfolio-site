const skills = [
  'Branding',
  'Logo Design',
  'Print Media Design',
  'Social Media Creatives',
  'Email Campaign Design',
  'Video Editing',
]

const tools = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Figma',
  'Canva',
  'CapCut',
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="sec-title">Skills &amp; Tools</h2>
        </div>
        <div className="skills-grid">
          <div className="skills-category reveal">
            <h3 className="skills-cat-title">Skills</h3>
            <div className="skill-cloud">
              {skills.map(s => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
          <div className="skills-category reveal">
            <h3 className="skills-cat-title">Tools</h3>
            <div className="skill-cloud">
              {tools.map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
