import './Footer.css'
import logo from '../322.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#hero' },
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' }
    ],
    services: [
      { label: 'iOS Development', href: '#services' },
      { label: 'Android Development', href: '#services' },
      { label: 'Cross-Platform', href: '#services' },
      { label: 'UI/UX Design', href: '#services' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'GDPR', href: '#' },
      { label: 'Cookie Policy', href: '#' }
    ]
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <img src={logo} alt="Casifo App" className="logo-icon" />
              <span className="logo-text">Casifo App</span>
            </div>
            <p className="footer-description">
              Casifo App is an innovative platform offering modern and user-friendly solutions. 
              We create the best experience for you.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">💼</a>
              <a href="#" className="footer-social-link">🐦</a>
              <a href="#" className="footer-social-link">📷</a>
              <a href="#" className="footer-social-link">💻</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Casifo App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

