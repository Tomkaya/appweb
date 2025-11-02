import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Ticaret Uygulaması',
      category: 'React Native',
      description: 'Kullanıcı dostu arayüzü ve güvenli ödeme sistemiyle tam özellikli e-ticaret platformu.',
      tags: ['React Native', 'TypeScript', 'Redux', 'Payment Integration']
    },
    {
      title: 'Fitness & Sağlık',
      category: 'iOS',
      description: 'Kişiselleştirilmiş antrenman programları ve beslenme takibi sunan sağlık uygulaması.',
      tags: ['SwiftUI', 'HealthKit', 'CoreData', 'Push Notifications']
    },
    {
      title: 'Sosyal Medya Platformu',
      category: 'Android',
      description: 'Gerçek zamanlı mesajlaşma ve içerik paylaşımı özellikleriyle sosyal ağ uygulaması.',
      tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Real-time']
    },
    {
      title: 'Finans Yönetimi',
      category: 'Flutter',
      description: 'Gelir-gider takibi, bütçe planlama ve yatırım analizi sunan finansal yönetim aracı.',
      tags: ['Flutter', 'Dart', 'Charts', 'Encryption']
    },
    {
      title: 'Eğitim Platformu',
      category: 'React Native',
      description: 'Video dersler, quiz sistemi ve ilerleme takibi ile interaktif öğrenme platformu.',
      tags: ['React Native', 'Video Streaming', 'Gamification', 'Analytics']
    },
    {
      title: 'Rezervasyon Sistemi',
      category: 'iOS & Android',
      description: 'Restoran, otel ve etkinlik rezervasyonları için kapsamlı rezervasyon yönetim sistemi.',
      tags: ['Cross-platform', 'Booking System', 'Maps', 'Notifications']
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Casifo App Projeleri</h2>
          <p>Casifo App ile gerçekleştirdiğimiz başarılı projeler</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

