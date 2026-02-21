import React from 'react'
import '../styles/Contact.css'
import { FaUniversity, FaEnvelope, FaUserTie, FaUser } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title" data-text="Contact Us">Contact Us</h2>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-header">
                <span className="contact-icon"><FaUniversity /></span>
                <h3 className="contact-title">College Address</h3>
              </div>
              <div className="contact-details">
                <p><strong>Mailam Engineering College</strong></p>
                <p>Tindivanam Taluk, Mailam</p>
                <p>Tamil Nadu 604304, India</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-header">
                <span className="contact-icon"><FaEnvelope /></span>
                <h3 className="contact-title">Get in Touch</h3>
              </div>
              <div className="contact-details">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:hackindia.mec@gmail.com" className="contact-link">
                    hackindia.mec@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a
                    href="https://www.mailamec.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    www.mailamec.edu.in
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-card staff-card">
              <div className="contact-header">
                <span className="contact-icon"><FaUserTie /></span>
                <h3 className="contact-title">Staff Coordinators</h3>
              </div>
              <div className="contact-details staff-coordinators-grid">
                <div className="staff-coordinator">
                  <p className="staff-name"><strong>Dr. S. Kalaivany (HOD)</strong></p>
                  <p className="coordinator-role">Convenor</p>
                  <p className="staff-contact">
                    <a href="tel:+919486947802" className="contact-link">
                      +91 94869 47802
                    </a>
                  </p>
                  <p className="staff-contact">
                    <a href="mailto:kalaivanyit@mailamengg.com" className="contact-link">
                      kalaivanyit@mailamengg.com
                    </a>
                  </p>
                </div>
                <div className="staff-coordinator">
                  <p className="staff-name"><strong>Mr. K. Loganathan</strong></p>
                  <p className="coordinator-role">&nbsp;</p>
                  <p className="staff-contact">
                    <a href="tel:+919994225662" className="contact-link">
                      +91 99942 25662
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="student-coordinators">
            <h3 className="coordinator-section-title">Student Coordinators</h3>
            <div className="coordinators-grid">
              <div className="coordinator-card">
                <span className="coordinator-icon"><FaUser /></span>
                <h4 className="coordinator-name">S. Jeevagan</h4>
                <a href="tel:+916382004793" className="coordinator-phone">
                  +91 63820 04793
                </a>
              </div>
              <div className="coordinator-card">
                <span className="coordinator-icon"><FaUser /></span>
                <h4 className="coordinator-name">G. Mowleeswaran</h4>
                <a href="tel:+919486747184" className="coordinator-phone">
                  +91 94867 47184
                </a>
              </div>
              <div className="coordinator-card">
                <span className="coordinator-icon"><FaUser /></span>
                <h4 className="coordinator-name">L. Ranjith</h4>
                <a href="tel:+919345808145" className="coordinator-phone">
                  +91 93458 08145
                </a>
              </div>
              <div className="coordinator-card">
                <span className="coordinator-icon"><FaUser /></span>
                <h4 className="coordinator-name">S. Kathiravan</h4>
                <a href="tel:+919994037135" className="coordinator-phone">
                  +91 99940 37135
                </a>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126661.36228450212!2d79.52264666046855!3d12.059387731190927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53444fe6d6f745%3A0x6f0bf0acc24680ae!2sMailam%20Engineering%20College!5e1!3m2!1sen!2sus!4v1771601499618!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mailam Engineering College Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
