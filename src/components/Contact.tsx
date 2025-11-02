import { useState, FormEvent } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    { icon: '📧', label: 'E-posta', value: 'info@casifoapp.com' },
    { icon: '📱', label: 'Telefon', value: '+90 (555) 123 45 67' },
    { icon: '📍', label: 'Adres', value: 'İstanbul, Türkiye' }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Casifo App İletişim</h2>
          <p>Sorularınız için bizimle iletişime geçin, size yardımcı olalım</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Bizimle İletişime Geçin</h3>
            <p className="contact-intro">
              Casifo App hakkında daha fazla bilgi almak ister misiniz? 
              Size en kısa sürede dönüş yapalım.
            </p>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div>
                    <div className="contact-label">{info.label}</div>
                    <div className="contact-value">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="GitHub">💻</a>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Adınız Soyadınız</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ad Soyad"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta Adresiniz</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ornek@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefon Numaranız</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+90 (555) 123 45 67"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Projeniz hakkında bize bilgi verin..."
                />
              </div>
              <button type="submit" className="submit-btn">
                {submitted ? '✓ Gönderildi!' : 'Mesaj Gönder'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

