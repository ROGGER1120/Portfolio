import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from './components/Navbar.jsx';
import profileCutout from './assets/profile-cutout.png';

function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300; // Trigger threshold

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionsList = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const handleDashClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Home">
      <Navbar activeSection={activeSection} />
      
      {/* Decorative Background Elements */}
      <div className="bg-dots top-left"></div>
      <div className="bg-dots top-right"></div>
      <div className="bg-dots bottom-right"></div>
      <div className="bg-plus bottom-left">+</div>
      
      {/* Dynamic Right Side Scrollbar Indicator */}
      <div className="side-scrollbar">
        {sectionsList.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleDashClick(e, section.id)}
            className={`scroll-dash ${activeSection === section.id ? "active" : ""}`}
            title={section.label}
            aria-label={`Scroll to ${section.label}`}
          />
        ))}
      </div>

      {/* 1. Hero Section */}
      <section className="hero-section" id="home">
        {/* Large Faded Background Text */}
        <div className="large-bg-text">
          <span>FULL</span>
          <span>STACK</span>
        </div>

        {/* Center Glow Aura (moved out of cutout container for crisp layering) */}
        <div className="glow-aura"></div>

        {/* Left Side Content */}
        <div className="hero-left">
          <h2 className="sub-title">DEVELOPER</h2>
          <p className="description">
            Building modern, scalable and user-centric web applications.
          </p>
          
          <a href="#projects" onClick={(e) => handleDashClick(e, "projects")} className="cta-button">
            <span>View My Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:contact@example.com" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Center Developer Cutout */}
        <div className="developer-image-container">
          <img 
            src={profileCutout} 
            alt="Harikrishnan Senthilkumar" 
            className="developer-cutout"
          />
        </div>

        {/* Right Side Content (Tech Stack) */}
        <div className="hero-right">
          <ul className="tech-stack-list">
            <li className="tech-item">
              <span className="tech-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </span>
              <span className="tech-name">HTML</span>
            </li>
            
            <li className="tech-item">
              <span className="tech-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </span>
              <span className="tech-name">CSS</span>
            </li>

            <li className="tech-item">
              <span className="tech-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="17" x2="9" y2="8"></line>
                  <path d="M15 8h-4v4h4v4h-4"></path>
                </svg>
              </span>
              <span className="tech-name">JavaScript</span>
            </li>

            <li className="tech-item">
              <span className="tech-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"></ellipse>
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></ellipse>
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"></ellipse>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </span>
              <span className="tech-name">React</span>
            </li>

            <li className="tech-item">
              <span className="tech-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"></path>
                  <polyline points="12 22 12 12 22 7"></polyline>
                  <polyline points="12 12 2 7"></polyline>
                </svg>
              </span>
              <span className="tech-name">Node.js</span>
            </li>

            <li className="tech-item">
              <span className="tech-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C12 2 7 8.5 7 12s2.24 5 5 10c2.76-5 5-6.5 5-10S12 2 12 2z"></path>
                </svg>
              </span>
              <span className="tech-name">MongoDB</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="portfolio-section about-section" id="about">
        <div className="section-container">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="glass-card about-card">
            <p className="about-text">
              I am a passionate Full Stack Developer focused on building clean, fast, and user-centric web products. With a keen eye for modern aesthetics and detail, I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-num">12+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">1+</span>
                <span className="stat-label">Years Learning/Builds</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-label">Dedication Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Projects Section */}
      <section className="portfolio-section projects-section" id="projects">
        <div className="section-container">
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <div className="projects-grid">
            <div className="glass-card project-card">
              <div className="project-header">
                <h3>E-Commerce Webapp</h3>
                <span className="project-tech">React & Node</span>
              </div>
              <p>A beautiful shopping platform with custom filters, interactive cart flow, and premium checkout layout.</p>
            </div>
            <div className="glass-card project-card">
              <div className="project-header">
                <h3>Blogging Platform</h3>
                <span className="project-tech">MongoDB & Express</span>
              </div>
              <p>Interactive blog environment featuring Markdown editing, server-side caching, and search features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Section */}
      <section className="portfolio-section contact-section" id="contact">
        <div className="section-container">
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="glass-card contact-card">
            <p>Let's collaborate on your next modern project. Drop me a line or connect with me via social media!</p>
            <div className="contact-details">
              <a href="mailto:contact@example.com" className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>contact@example.com</span>
              </a>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Coimbatore, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;