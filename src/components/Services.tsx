import './Services.css'

const Services = () => {
  const services = [
    {
      title: 'iOS Development',
      description: 'We develop native iOS applications using Swift and SwiftUI.',
      features: ['Native iOS Apps', 'SwiftUI', 'App Store Optimization', 'Push Notifications']
    },
    {
      title: 'Android Development',
      description: 'We create modern Android applications with Kotlin and Jetpack Compose.',
      features: ['Native Android', 'Jetpack Compose', 'Material Design', 'Google Play Services']
    },
    {
      title: 'Cross-Platform',
      description: 'We develop multi-platform applications with React Native and Flutter.',
      features: ['React Native', 'Flutter', 'Single Codebase', 'Fast Development']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Casifo App Features</h2>
          <p>Professional solutions we offer with Casifo App</p>
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
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

