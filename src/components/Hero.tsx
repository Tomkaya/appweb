import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Discover the Future
              <span className="gradient-text"> with Casifo App</span>
            </h1>
            <p className="hero-description">
              Casifo App provides you with the best experience through its modern and user-friendly interface. 
              Meet our innovative solutions.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get Started
              </a>
              <a href="#projects" className="btn btn-secondary">
                Our Projects
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Completed Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">40+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="animated-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
            <div className="feature-cards">
              <div className="feature-card-small card-1">
                <div className="card-icon">⚡</div>
                <div className="card-text">Fast</div>
              </div>
              <div className="feature-card-small card-2">
                <div className="card-icon">🔒</div>
                <div className="card-text">Secure</div>
              </div>
              <div className="feature-card-small card-3">
                <div className="card-icon">🚀</div>
                <div className="card-text">Modern</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

