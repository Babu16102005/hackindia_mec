import React from 'react'
import '../styles/Hero.css'
import CountdownTimer from './CountdownTimer'
import Robot3D from './Robot3D'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <Robot3D />
      <div className="hero-content">
        <div className="hero-badge-wrapper">
          <div className="hero-badge">24-Hour Coding Challenge</div>
        </div>
        <h1 className="hero-title" data-text="HackIndia Hackathon 2026">
          HackIndia Hackathon <span className="year">2026</span>
        </h1>
        <p className="hero-tagline">Innovate. Build. Impact.</p>
        <p className="hero-description">
          Join us for an incredible 24-hour hackathon at Mailam Engineering College.
          <br />
          Push your limits, collaborate with brilliant minds, and create something amazing.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <span className="scanner-line"></span>
            <span style={{ position: 'relative', zIndex: 2 }}>Register Now</span>
          </a>
          <a href="/brochure.pdf" download className="btn btn-secondary">
            <span className="scanner-line"></span>
            <span style={{ position: 'relative', zIndex: 2 }}>Download Brochure</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">24</div>
            <div className="stat-label">Hours</div>
          </div>
          <div className="stat">
            <div className="stat-number">₹25K</div>
            <div className="stat-label">Prize Pool</div>
          </div>
          <div className="stat">
            <div className="stat-number">100+</div>
            <div className="stat-label">Participants</div>
          </div>
        </div>

        <CountdownTimer />
      </div>
    </section>
  )
}

export default Hero
