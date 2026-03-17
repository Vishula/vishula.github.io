import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner glass-card">
        <p className="footer-copy">
          © {new Date().getFullYear()} Vishula. Built with React &amp; ❤️
        </p>
        <p className="footer-sub">Designed with liquid glass &amp; dark mode in mind.</p>
      </div>
    </footer>
  )
}
