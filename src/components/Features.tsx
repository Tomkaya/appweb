import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '🎨',
      title: 'Modern Tasarım',
      description: 'Kullanıcı deneyimini ön planda tutan, estetik ve işlevsel arayüzler tasarlıyoruz.'
    },
    {
      icon: '⚡',
      title: 'Yüksek Performans',
      description: 'Optimize edilmiş kod yapısı ile hızlı ve akıcı çalışan uygulamalar geliştiriyoruz.'
    },
    {
      icon: '🔒',
      title: 'Güvenli Altyapı',
      description: 'En güncel güvenlik standartlarını kullanarak verilerinizi koruma altına alıyoruz.'
    },
    {
      icon: '📱',
      title: 'Responsive Tasarım',
      description: 'Tüm cihazlarda mükemmel görünüm ve performans sağlayan responsive tasarımlar.'
    },
    {
      icon: '🚀',
      title: 'Hızlı Teslimat',
      description: 'Agile metodoloji ile hızlı ve esnek geliştirme süreçleri yürütüyoruz.'
    },
    {
      icon: '💬',
      title: 'Sürekli Destek',
      description: 'Proje tesliminden sonra da teknik destek ve güncelleme hizmeti sunuyoruz.'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          <h2>Neden Casifo App?</h2>
          <p>Casifo App'i özel kılan fark yaratan özelliklerimiz</p>
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

