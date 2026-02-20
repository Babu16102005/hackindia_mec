import React, { useState, useEffect } from 'react'
import { Home, Calendar, Trophy, FileText, Mail, Rocket } from 'lucide-react'
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
          <span className="logo-icon">⚡</span>
          <span className="logo-text">HackIndia</span>
        </a>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-link" onClick={closeMenu}>
            <Home size={18} className="navbar-link-icon" />
            <span>Home</span>
          </a>
          <a href="#schedule" className="navbar-link" onClick={closeMenu}>
            <Calendar size={18} className="navbar-link-icon" />
            <span>Schedule</span>
          </a>
          <a href="#prizes" className="navbar-link" onClick={closeMenu}>
            <Trophy size={18} className="navbar-link-icon" />
            <span>Prizes</span>
          </a>
          <a href="#rules" className="navbar-link" onClick={closeMenu}>
            <FileText size={18} className="navbar-link-icon" />
            <span>Rules</span>
          </a>
          <a href="#contact" className="navbar-link" onClick={closeMenu}>
            <Mail size={18} className="navbar-link-icon" />
            <span>Contact</span>
          </a>
        </div>

        <div className="navbar-actions">
          <a href="#contact" className="navbar-cta" onClick={closeMenu}>
            <Rocket size={18} className="navbar-cta-icon" />
            <span>Register Now</span>
          </a>

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
