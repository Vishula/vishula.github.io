import './About.css'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A little bit about who I am</p>

          <div className="about-card glass-card">
            <p>
              I'm a passionate developer who loves building modern, accessible, and
              performant web applications. I enjoy turning complex problems into simple,
              elegant solutions through thoughtful code and design.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to
              open-source projects, or experimenting with design systems and UI patterns.
              I believe that great software is at the intersection of technical excellence
              and beautiful user experience.
            </p>
            <p>
              Currently focused on full-stack development with React, Node.js, and
              cloud-native architectures — always eager to learn and grow.
            </p>
          </div>
        </div>

        <div className="about-highlights">
          {[
            { icon: '🚀', title: 'Fast Learner', desc: 'Quickly adapt to new technologies and frameworks' },
            { icon: '🎨', title: 'Design-Driven', desc: 'Passionate about pixel-perfect, accessible UIs' },
            { icon: '🔧', title: 'Problem Solver', desc: 'Love tackling complex engineering challenges' },
            { icon: '🤝', title: 'Team Player', desc: 'Collaborative mindset with strong communication' },
          ].map(item => (
            <div key={item.title} className="highlight-card glass-card">
              <span className="highlight-icon">{item.icon}</span>
              <div>
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
