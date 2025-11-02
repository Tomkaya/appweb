import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'We design aesthetic and functional interfaces that prioritize user experience.'
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'We develop fast and smooth applications with optimized code structure.'
    },
    {
      icon: '🔒',
      title: 'Secure Infrastructure',
      description: 'We protect your data using the latest security standards.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Responsive designs that provide perfect appearance and performance on all devices.'
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'We conduct fast and flexible development processes with Agile methodology.'
    },
    {
      icon: '💬',
      title: 'Continuous Support',
      description: 'We provide technical support and update services even after project delivery.'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Casifo App?</h2>
          <p>Our distinctive features that make Casifo App special</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

