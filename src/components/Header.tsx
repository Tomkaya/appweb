import { useState, useEffect } from 'react'
import './Header.css'
import logo from '../322.svg'

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleMenuClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <a href="#hero" className="logo">
            <img src={logo} alt="Casifo App" className="logo-icon" />
          </a>

          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={handleMenuClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

