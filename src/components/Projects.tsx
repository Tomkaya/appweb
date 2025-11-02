import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Application',
      category: 'React Native',
      description: 'Full-featured e-commerce platform with user-friendly interface and secure payment system.',
      tags: ['React Native', 'TypeScript', 'Redux', 'Payment Integration']
    },
    {
      title: 'Fitness & Health',
      category: 'iOS',
      description: 'Health application offering personalized workout programs and nutrition tracking.',
      tags: ['SwiftUI', 'HealthKit', 'CoreData', 'Push Notifications']
    },
    {
      title: 'Social Media Platform',
      category: 'Android',
      description: 'Social network application with real-time messaging and content sharing features.',
      tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Real-time']
    },
    {
      title: 'Financial Management',
      category: 'Flutter',
      description: 'Financial management tool offering income-expense tracking, budget planning, and investment analysis.',
      tags: ['Flutter', 'Dart', 'Charts', 'Encryption']
    },
    {
      title: 'Education Platform',
      category: 'React Native',
      description: 'Interactive learning platform with video lessons, quiz system, and progress tracking.',
      tags: ['React Native', 'Video Streaming', 'Gamification', 'Analytics']
    },
    {
      title: 'Reservation System',
      category: 'iOS & Android',
      description: 'Comprehensive reservation management system for restaurant, hotel, and event bookings.',
      tags: ['Cross-platform', 'Booking System', 'Maps', 'Notifications']
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Casifo App Projects</h2>
          <p>Successful projects we have accomplished with Casifo App</p>
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

