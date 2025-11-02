import './Footer.css'
import logo from '../322.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'Hakkımızda', href: '#hero' },
      { label: 'Hizmetler', href: '#services' },
      { label: 'Projeler', href: '#projects' },
      { label: 'İletişim', href: '#contact' }
    ],
    services: [
      { label: 'iOS Geliştirme', href: '#services' },
      { label: 'Android Geliştirme', href: '#services' },
      { label: 'Cross-Platform', href: '#services' },
      { label: 'UI/UX Tasarım', href: '#services' }
    ],
    legal: [
      { label: 'Gizlilik Politikası', href: '#' },
      { label: 'Kullanım Koşulları', href: '#' },
      { label: 'KVKK', href: '#' },
      { label: 'Çerez Politikası', href: '#' }
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
              Casifo App, modern ve kullanıcı dostu çözümler sunan yenilikçi bir platform. 
              Sizin için en iyi deneyimi yaratıyoruz.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">💼</a>
              <a href="#" className="footer-social-link">🐦</a>
              <a href="#" className="footer-social-link">📷</a>
              <a href="#" className="footer-social-link">💻</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Şirket</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Hizmetler</h4>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Yasal</h4>
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
          <p>&copy; {currentYear} Casifo App. Tüm hakları saklıdır.</p>
          <p>Made with ❤️ in Istanbul</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

