const skills = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Packaging Design',
  'Branding',
  'Logo Design',
  'Print Design',
  'Social Media Design',
  'UI Graphics',
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num">(04)</span>
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
