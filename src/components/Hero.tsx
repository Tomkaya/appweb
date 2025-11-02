import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Casifo App ile
              <span className="gradient-text"> Geleceği Keşfedin</span>
            </h1>
            <p className="hero-description">
              Casifo App, modern ve kullanıcı dostu arayüzüyle size en iyi deneyimi sunuyor. 
              Yenilikçi çözümlerimizle tanışın.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Hemen Başlayın
              </a>
              <a href="#projects" className="btn btn-secondary">
                Projelerimiz
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Tamamlanan Proje</div>
              </div>
              <div className="stat">
                <div className="stat-number">40+</div>
                <div className="stat-label">Mutlu Müşteri</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-preview">
                  <div className="preview-header"></div>
                  <div className="preview-content">
                    <div className="preview-card"></div>
                    <div className="preview-card"></div>
                    <div className="preview-card"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="float-element element-1">💡</div>
              <div className="float-element element-2">🚀</div>
              <div className="float-element element-3">⚡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

