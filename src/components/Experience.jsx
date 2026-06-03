const experiences = [
  {
    role: 'Graphic Designer',
    company: 'SymuFolk',
    companyUrl: 'https://symufolk.com/',
    period: 'Jan 2025 – Present',
    location: 'Porto, Portugal',
    bullets: [
      'Designed social media posts and carousel layouts for LinkedIn and Instagram',
      'Developed brand visuals and marketing creatives for campaigns',
      'Supported content creation through video editing and design assets',
      'Maintained consistent brand identity across posts, templates, and campaigns',
    ],
  },
  {
    role: 'Graphic Designer',
    company: 'Azure Partners (Remote)',
    companyUrl: 'https://azurepartners.ai/en',
    period: 'Jul 2025 – Present',
    location: 'United States',
    bullets: [
      'Created social media graphics and educational content visuals',
      'Edited videos and produced supporting design assets for marketing',
      'Delivered clean, modern visuals aligned with brand guidelines',
      'Collaborated with teams to ensure consistent visual communication',
    ],
  },
  {
    role: 'Freelance Graphic Designer',
    company: null,
    period: '2024',
    location: null,
    bullets: [
      'Designed logos, brand identities, and social media creatives for clients',
      'Created editable templates in Canva and Figma for fast content production',
      'Developed visual concepts and campaign design ideas for marketing use',
      'Worked with multiple clients to deliver custom branding solutions',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="sec-title">Professional Experience</h2>
        </div>
        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div className="exp-entry reveal" key={i}>
              <div className="exp-accent" />
              <div className="exp-body">
                <div className="exp-top">
                  <div className="exp-role">
                    {exp.role}
                    {exp.company && (
                      <span className="exp-company">
                        {' — '}
                        {exp.companyUrl
                          ? <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-company-link">{exp.company}</a>
                          : exp.company}
                      </span>
                    )}
                    {exp.tag && <span className="exp-tag">{exp.tag}</span>}
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    {exp.location && <span className="exp-dot">·</span>}
                    {exp.location && <span className="exp-location">{exp.location}</span>}
                  </div>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
