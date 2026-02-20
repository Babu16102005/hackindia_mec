import React from 'react'
import '../styles/Rules.css'
import { FaUsers, FaLaptopCode, FaUpload, FaBalanceScale, FaBullseye, FaClipboardList, FaExclamationTriangle } from 'react-icons/fa'

const Rules = () => {
  const judgingCriteria = [
    { percentage: '30%', label: 'Innovation' },
    { percentage: '25%', label: 'Technical Implementation' },
    { percentage: '20%', label: 'Design & UX' },
    { percentage: '15%', label: 'Presentation' },
    { percentage: '10%', label: 'Impact' }
  ]

  return (
    <section id="rules" className="rules-section">
      <div className="container">
        <h2 className="section-title" data-text="Rules & Guidelines">Rules & Guidelines</h2>

        <div className="rules-container">
          <div className="rules-grid">
            {/* Team Formation */}
            <div className="rule-category" style={{ animationDelay: '0s' }}>
              <div className="rule-header">
                <span className="rule-icon"><FaUsers /></span>
                <h3 className="rule-title">Team Formation</h3>
              </div>
              <ul className="rule-list">
                <li className="rule-item">Teams must consist of 2-4 members</li>
                <li className="rule-item">All team members must be registered</li>
                <li className="rule-item">Cross-college teams are allowed</li>
                <li className="rule-item">Team formation must be completed before inauguration</li>
              </ul>
            </div>

            {/* Project Development */}
            <div className="rule-category" style={{ animationDelay: '0.1s' }}>
              <div className="rule-header">
                <span className="rule-icon"><FaLaptopCode /></span>
                <h3 className="rule-title">Project Development</h3>
              </div>
              <ul className="rule-list">
                <li className="rule-item">All code must be written during the hackathon</li>
                <li className="rule-item">Open-source libraries and frameworks are allowed</li>
                <li className="rule-item">Pre-existing projects are not permitted</li>
                <li className="rule-item">Use of AI tools is allowed but must be disclosed</li>
              </ul>
            </div>

            {/* Submission Requirements */}
            <div className="rule-category" style={{ animationDelay: '0.2s' }}>
              <div className="rule-header">
                <span className="rule-icon"><FaUpload /></span>
                <h3 className="rule-title">Submission Requirements</h3>
              </div>
              <ul className="rule-list">
                <li className="rule-item">Submit project deck between 8:30 AM - 9:30 AM on Day 1</li>
                <li className="rule-item">Working demo is mandatory</li>
                <li className="rule-item">Source code must be on GitHub/GitLab</li>
                <li className="rule-item">Include README with setup instructions</li>
              </ul>
            </div>

            {/* Judging Criteria */}
            <div className="rule-category" style={{ animationDelay: '0.3s' }}>
              <div className="rule-header">
                <span className="rule-icon"><FaBalanceScale /></span>
                <h3 className="rule-title">Judging Criteria</h3>
              </div>
              <div className="judging-criteria">
                {judgingCriteria.map((criteria, index) => (
                  <div key={index} className="criteria-item">
                    <div className="criteria-percentage">{criteria.percentage}</div>
                    <div className="criteria-label">{criteria.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Conduct */}
            <div className="rule-category" style={{ animationDelay: '0.4s' }}>
              <div className="rule-header">
                <span className="rule-icon"><FaBullseye /></span>
                <h3 className="rule-title">Event Conduct</h3>
              </div>
              <ul className="rule-list">
                <li className="rule-item">Maintain professional behavior at all times</li>
                <li className="rule-item">Respect organizers, mentors, and fellow participants</li>
                <li className="rule-item">No plagiarism or code theft</li>
                <li className="rule-item">Follow college rules and regulations</li>
              </ul>
            </div>

            {/* General Rules */}
            <div className="rule-category" style={{ animationDelay: '0.5s' }}>
              <div className="rule-header">
                <span className="rule-icon"><FaClipboardList /></span>
                <h3 className="rule-title">General Rules</h3>
              </div>
              <ul className="rule-list">
                <li className="rule-item">Participants must carry valid college ID</li>
                <li className="rule-item">Authorization letter is mandatory</li>
                <li className="rule-item">Organizers' decisions are final</li>
                <li className="rule-item">Event schedule is subject to change</li>
              </ul>
            </div>
          </div>

          {/* Important Note */}
          <div className="important-note">
            <div className="rule-header">
              <span className="rule-icon"><FaExclamationTriangle /></span>
              <h3 className="rule-title">Important Rule</h3>
            </div>
            <p>
              <strong>Minimum 2 team members must remain in the hall during night rest.</strong>
              This is mandatory for all teams. Failure to comply may result in disqualification.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rules
