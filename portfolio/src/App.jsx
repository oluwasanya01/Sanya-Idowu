import { useState } from 'react'
import './App.css'

const ContactIcon = ({ type }) => {
  switch (type) {
    case 'email':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      )
    case 'phone':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    case 'location':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    default:
      return null
  }
}

const SocialIcon = ({ type }) => {
  switch (type) {
    case 'github':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    case 'linkedin':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6 z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    case 'twitter':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2s9 5 20 0a9.5 9.5 0 0 0-9-5.6"></path>
        </svg>
      )
    case 'instagram':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37 z"></path>
          <circle cx="17.5" cy="6.5" r="1.5"></circle>
        </svg>
      )
    case 'youtube':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33 z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    default:
      return null
  }
}

function ChatModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [chatStarted, setChatStarted] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Sanya's AI assistant. Feel free to ask me about robotics, drones, autonomous systems, or my projects!",
      sender: 'bot',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleStartChat = (e) => {
    e.preventDefault()
    if (name.trim() && email.trim()) {
      setChatStarted(true)
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
    }

    setMessages([...messages, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_CLAUDE_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 1024,
          system: `You are Sanya Idowu's AI assistant. Sanya is a Robotics & AI Engineer specializing in autonomous systems, drones, computer vision, and embedded robotics.

Sanya's projects include:
- Finance Portal: A financial management platform built with React, Node.js, MongoDB, and Stripe API
- Pilot: An autonomous flight control system using C++, Python, ROS, and Computer Vision
- Tracking Software: A real-time GPS tracking system with React, WebSocket, and Google Maps API

Be helpful, friendly, and provide information about Sanya's work, expertise, and projects. Keep responses concise and professional.`,
          messages: [
            {
              role: 'user',
              content: input,
            },
          ],
        }),
      })

      const data = await response.json()

      if (data.content && data.content[0]) {
        const botMessage = {
          id: messages.length + 2,
          text: data.content[0].text,
          sender: 'bot',
        }
        setMessages((prev) => [...prev, botMessage])
      }
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage = {
        id: messages.length + 2,
        text: 'Sorry, I encountered an error. Please try again later.',
        sender: 'bot',
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="chat-modal-overlay" onClick={onClose}>
      <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
        <div className="chat-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/bot 2.jpeg" alt="AI Assistant" style={{ height: '24px', width: 'auto' }} />
            <h3 style={{ margin: 0 }}>AI Assistant</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {!chatStarted ? (
          <div className="chat-form-initial">
            <form onSubmit={handleStartChat}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
              <button type="submit" className="start-chat-btn">
                Start Chat 💬
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-message ${msg.sender}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
              {loading && (
                <div className="chat-message bot">
                  <p>Thinking...</p>
                </div>
              )}
            </div>
            <form className="chat-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me something..."
                disabled={loading}
              />
              <button type="submit" disabled={loading || !input.trim()}>
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function App() {
  const [showChat, setShowChat] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const socialLinks = [
    { type: 'github', label: 'GitHub', url: 'https://github.com/oluwasanya01' },
    { type: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/sanya-idowu-69821b203' },
    { type: 'twitter', label: 'Twitter', url: '#' },
    { type: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/thesanyaidowu?igsh=cnhmOHlid3d4cjF23' },
    { type: 'youtube', label: 'YouTube', url: '#' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Finance Portal',
      description: 'Comprehensive financial management platform with real-time analytics and reporting',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      video: '/FinancePortal-Video.mp4',
    },
    {
      id: 2,
      title: 'Pilot',
      description: 'Advanced autonomous flight control system with intelligent navigation',
      tech: ['C++', 'Python', 'ROS', 'Computer Vision'],
      video: '/PILOT Video.mp4',
    },
    {
      id: 3,
      title: 'Tracking Software',
      description: 'Real-time GPS and asset tracking system with live monitoring dashboard',
      tech: ['React', 'WebSocket', 'Google Maps API', 'Node.js'],
    },
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <a href="#" className="logo">
            <img src="/bot 2.jpeg" alt="Logo" style={{ height: '32px', width: 'auto' }} />
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <div className="nav-icons">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} className="nav-icon" title={link.label} target="_blank" rel="noopener noreferrer">
                  <SocialIcon type={link.type} />
                </a>
              ))}
            </div>
          </nav>
          <button className="cta-button" onClick={() => setShowChat(true)}>Get in Touch</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Sanya Idowu</h1>
          <h2>Robotics & AI Engineer</h2>
          <p>
            I love drones and I build them. Specializing in autonomous systems, computer
            vision, and embedded robotics for real-world applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
              View My Projects
            </a>
            <button className="btn-secondary" onClick={() => setShowChat(true)}>
              Chat with Sanya
            </button>
          </div>
          <div className="hero-socials">
            <span>Follow me:</span>
            {socialLinks.map((link, i) => (
              <a key={i} href={link.url} className="social-icon" title={link.label} target="_blank" rel="noopener noreferrer">
                <SocialIcon type={link.type} />
              </a>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <img src="/profile.png" alt="Sanya Idowu" />
          </div>
        </div>
      </section>

      <a href="#about" className="scroll-indicator">
        <p>Scroll Down</p>
        <p>↓</p>
      </a>

      {/* About Section */}
      <section id="about" className="section about">
        <h2>About Me</h2>
        <div className="professional-summary">
          <h3>Professional Summary</h3>
          <p>
            I'm Oluwasanya Idowu, popularly known as Dwight—a Nigerian Robotics/AI Engineer with an obsession for drone mastery and autonomous systems. As Co-founder & CTO at ySpace, a rocket manufacturing and logistics company with global ambitions, I lead cutting-edge aerospace innovation. I've also served as a Founding member at CurateLearn, an AI-powered company dedicated to providing learners with effective educational tools through mobile and web applications.
          </p>
          <p>
            Throughout my career, I've worked on numerous drone projects and built scalable applications for the drone industry. My expertise spans autonomous flight systems, computer vision, embedded robotics, and intelligent solutions. I'm passionate about building autonomous systems that push the boundaries of what's possible, and I've extended my technical prowess into the finance industry as well, creating comprehensive financial management platforms.
          </p>
          <p>
            My skill set encompasses embedded systems, computer vision, autonomous flight, intelligent robotics, and full-stack development. I focus on real-world applications and cutting-edge technology, having built everything from custom drones to swarm robotics systems and scalable fintech solutions.
          </p>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="section skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <span className="skill-badge">Python</span>
          <span className="skill-badge">C++</span>
          <span className="skill-badge">JavaScript</span>
          <span className="skill-badge">React</span>
          <span className="skill-badge">Node.js</span>
          <span className="skill-badge">Computer Vision</span>
          <span className="skill-badge">ROS</span>
          <span className="skill-badge">Embedded Systems</span>
          <span className="skill-badge">Autonomous Systems</span>
          <span className="skill-badge">MongoDB</span>
          <span className="skill-badge">WebSocket</span>
          <span className="skill-badge">Machine Learning</span>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <h2>Experience</h2>
        <div className="experience-items">
          <div className="experience-item">
            <h3>Autonomous Systems Engineer</h3>
            <p>Designing and deploying autonomous drones and robotics solutions</p>
          </div>
          <div className="experience-item">
            <h3>Computer Vision Specialist</h3>
            <p>Building real-time vision systems for embedded robotics</p>
          </div>
          <div className="experience-item">
            <h3>Robotics & AI Innovator</h3>
            <p>Creating intelligent systems that solve complex real-world problems</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tag, i) => (
                  <span key={i} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="project-gallery">
          <h3>Project Gallery</h3>
          <div className="gallery-slideshow">
            <button className="slideshow-btn prev-btn" onClick={prevSlide}>
              ‹
            </button>
            <div className="slideshow-container">
              <div className="slideshow-item">
                {projects[currentSlide].video ? (
                  <video className="gallery-video" controls width="100%" style={{ borderRadius: '12px', marginBottom: '1.5rem' }}>
                    <source src={projects[currentSlide].video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="gallery-image"></div>
                )}
                <p className="slide-title">{projects[currentSlide].title}</p>
                <p className="slide-description">{projects[currentSlide].description}</p>
              </div>
            </div>
            <button className="slideshow-btn next-btn" onClick={nextSlide}>
              ›
            </button>
          </div>
          <div className="slideshow-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Get In Touch</h2>
        <p className="contact-intro">Feel free to reach out for collaborations, job opportunities, or just a tech chat!</p>

        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="info-item">
              <div className="info-icon">
                <ContactIcon type="email" />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:goldfield03@gmail.com">goldfield03@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <ContactIcon type="phone" />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+2348080534720">+234 808 053 4720</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <ContactIcon type="location" />
              </div>
              <div>
                <h4>Location</h4>
                <p>Lagos, Nigeria</p>
              </div>
            </div>

            <div className="follow-section">
              <h4>Follow Me</h4>
              <div className="follow-icons">
                {socialLinks.map((link, i) => (
                  <a key={i} href={link.url} className="follow-icon" title={link.label} target="_blank" rel="noopener noreferrer">
                    <SocialIcon type={link.type} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Your message here..." rows="5" required></textarea>
              </div>

              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Chat Modal */}
      <ChatModal isOpen={showChat} onClose={() => setShowChat(false)} />

      {/* Floating Chat Button */}
      <button
        className="floating-chat-btn"
        onClick={() => setShowChat(true)}
        title="Chat with Sanya"
      >
        💬
      </button>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <img src="/bot 2.jpeg" alt="Logo" style={{ height: '40px', width: 'auto', marginBottom: '0.5rem' }} />
            <p>Robotics & AI Engineer</p>
          </div>

          <div className="footer-section footer-nav">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section footer-connect">
            <h4>Connect</h4>
            <div className="footer-socials">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} className="footer-icon" title={link.label} target="_blank" rel="noopener noreferrer">
                  <SocialIcon type={link.type} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Sanya Idowu. All rights reserved.</p>
          <button className="footer-chat-btn" onClick={() => setShowChat(true)}>
            Chat with Sanya
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
