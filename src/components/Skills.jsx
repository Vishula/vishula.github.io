import './Skills.css'

const skillGroups = [
  {
    label: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'CSS / Tailwind', level: 88 },
      { name: 'Next.js', level: 75 },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 84 },
      { name: 'Python', level: 78 },
      { name: 'REST APIs', level: 88 },
      { name: 'PostgreSQL', level: 72 },
    ],
  },
  {
    label: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 68 },
      { name: 'CI/CD', level: 72 },
      { name: 'Figma', level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies I work with</p>

      <div className="skills-grid">
        {skillGroups.map(group => (
          <div key={group.label} className="skill-group glass-card">
            <div className="skill-group-header">
              <span>{group.icon}</span>
              <h3>{group.label}</h3>
            </div>
            <div className="skill-list">
              {group.skills.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
