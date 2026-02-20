import React from 'react'
import '../styles/Hero.css'
import CountdownTimer from './CountdownTimer'

const Hero = () => {
  return (
    <section id="home" className="hero">

      <div className="hero-content">
        <div className="hero-badge">24-Hour Coding Challenge</div>
        <h1 className="hero-title">
          HackIndia Hackathon <span className="year">2026</span>
        </h1>
        <p className="hero-tagline">Innovate. Build. Impact.</p>
        <p className="hero-description">
          Join us for an incredible 24-hour hackathon at Mailam Engineering College.
          <br />
          Push your limits, collaborate with brilliant minds, and create something amazing.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Register Now</a>
          <a href="#schedule" className="btn btn-secondary">View Schedule</a>
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
