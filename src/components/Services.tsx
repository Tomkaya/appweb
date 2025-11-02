import './Services.css'

const Services = () => {
  const services = [
    {
      title: 'iOS Geliştirme',
      description: 'Swift ve SwiftUI kullanarak native iOS uygulamaları geliştiriyoruz.',
      features: ['Native iOS Apps', 'SwiftUI', 'App Store Optimization', 'Push Notifications']
    },
    {
      title: 'Android Geliştirme',
      description: 'Kotlin ve Jetpack Compose ile modern Android uygulamaları oluşturuyoruz.',
      features: ['Native Android', 'Jetpack Compose', 'Material Design', 'Google Play Services']
    },
    {
      title: 'Cross-Platform',
      description: 'React Native ve Flutter ile çoklu platform uygulamaları geliştiriyoruz.',
      features: ['React Native', 'Flutter', 'Tek Kod Tabanı', 'Hızlı Geliştirme']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Casifo App Özellikleri</h2>
          <p>Casifo App ile sunduğumuz profesyonel çözümler</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-btn">
                Teklif Alın
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

