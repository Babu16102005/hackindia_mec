import React, { useState, useEffect } from 'react'
import { Home, Calendar, Trophy, FileText, Mail, Rocket } from 'lucide-react'
import logoObj from '../assets/logo.png'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-pill">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src={logoObj} alt="HackIndia Logo" className="logo-icon-img" />
          <span className="logo-text">MAILAM ENGINEERING COLLEGE</span>
        </a>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-link" style={{ "--i": "#ff0076", "--j": "#590fb7" }} onClick={closeMenu}>
            <Home size={22} className="navbar-link-icon" />
            <span className="navbar-link-title">Home</span>
          </a>
          <a href="#schedule" className="navbar-link" style={{ "--i": "#ff0000", "--j": "#ff8a00" }} onClick={closeMenu}>
            <Calendar size={22} className="navbar-link-icon" />
            <span className="navbar-link-title">Schedule</span>
          </a>
          <a href="#prizes" className="navbar-link" style={{ "--i": "#00b0ff", "--j": "#0065ff" }} onClick={closeMenu}>
            <Trophy size={22} className="navbar-link-icon" />
            <span className="navbar-link-title">Prizes</span>
          </a>
          <a href="#rules" className="navbar-link" style={{ "--i": "#11998e", "--j": "#38ef7d" }} onClick={closeMenu}>
            <FileText size={22} className="navbar-link-icon" />
            <span className="navbar-link-title">Rules</span>
          </a>
          <a href="#contact" className="navbar-link" style={{ "--i": "#ee0979", "--j": "#ff6a00" }} onClick={closeMenu}>
            <Mail size={22} className="navbar-link-icon" />
            <span className="navbar-link-title">Contact</span>
          </a>
        </div>

        <div className="navbar-actions">
          <button className="navbar-cta-fancy" onClick={() => { closeMenu(); window.location.href = '#contact'; }}>
            <svg
              className="navbar-cta-svg"
              width="170"
              height="44"
              viewBox="0 0 170 44"
            >
              <rect
                className="navbar-cta-line navbar-cta-line--outer"
                strokeWidth="3"
                stroke="#10b981"
                strokeLinecap="round"
                fill="none"
                x="1.5"
                y="1.5"
                width="167"
                height="41"
                rx="20"
                pathLength="100"
              />
              <rect
                className="navbar-cta-line navbar-cta-line--inner"
                strokeWidth="1.5"
                stroke="#00d4ff"
                strokeLinecap="round"
                fill="none"
                x="1.5"
                y="1.5"
                width="167"
                height="41"
                rx="20"
                pathLength="100"
              />
            </svg>
            <div className="navbar-cta-content">
              <Rocket size={18} className="navbar-cta-icon" />
              <span>Register Now</span>
            </div>
          </button>

          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
