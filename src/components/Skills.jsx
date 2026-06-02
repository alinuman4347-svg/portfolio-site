const skills = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Branding',
  'Logo Design',
  'Print Design',
  'Social Media Design',
  'CapCut',
  'Canva',
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="sec-title">Skills &amp; Capabilities</h2>
        </div>
        <div className="skill-cloud reveal">
          {skills.map(s => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
