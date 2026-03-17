import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge glass-card">
          <span className="badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Vishula</span>
        </h1>

        <p className="hero-tagline">
          Full-Stack Developer &amp; UI/UX Enthusiast
        </p>

        <p className="hero-description">
          I craft beautiful, performant web experiences with modern technologies.
          Passionate about clean code, thoughtful design, and building things that matter.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat glass-card">
            <span className="stat-number gradient-text">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat glass-card">
            <span className="stat-number gradient-text">2+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat glass-card">
            <span className="stat-number gradient-text">∞</span>
            <span className="stat-label">Curiosity</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="avatar-container glass-card">
          <div className="avatar-ring" />
          <div className="avatar-inner">
            <span className="avatar-letter gradient-text">V</span>
          </div>
          <div className="floating-badge fb-1 glass-card">React</div>
          <div className="floating-badge fb-2 glass-card">Node.js</div>
          <div className="floating-badge fb-3 glass-card">TypeScript</div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse glass-card">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  )
}
