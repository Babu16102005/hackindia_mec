import React from 'react'
import '../styles/Schedule.css'
import { FaHeartbeat } from 'react-icons/fa'

const Schedule = () => {
  const day1Events = [
    { time: '8:30 AM - 9:30 AM', event: 'Registration & Deck Submission' },
    { time: '10:00 AM', event: 'Inauguration' },
    { time: '11:00 AM', event: 'Hall Allotment' },
    { time: '12:00 PM', event: 'Hackathon Start', highlight: true },
    { time: '1:00 PM - 1:45 PM', event: 'Lunch' },
    { time: '3:00 PM', event: '1st Review', highlight: true },
    { time: '4:30 PM - 5:00 PM', event: 'Snacks' },
    { time: '8:00 PM - 8:45 PM', event: 'Dinner' },
    { time: '11:00 PM - 11:30 PM', event: 'Midnight Snacks' },
    { time: '12:00 AM', event: '2nd Review', highlight: true }
  ]

  const day2Events = [
    { time: '6:00 AM - 7:00 AM', event: 'Refreshments' },
    { time: '8:00 AM', event: 'Breakfast' },
    { time: '10:00 AM', event: 'Final Review', highlight: true },
    { time: '12:00 PM', event: 'Hackathon Ends', highlight: true },
    { time: '1:00 PM', event: 'Conclusion Program', highlight: true }
  ]

  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        <h2 className="section-title" data-text="Event Schedule">Event Schedule</h2>

        <div className="timeline-container">
          {/* Day 1 */}
          <div className="day-section">
            <div className="day-header">
              <h3>Day 1</h3>
              <span className="day-date">March 15, 2026</span>
            </div>

            <div className="timeline">
              {day1Events.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item ${item.highlight ? 'highlight' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-time">{item.time}</div>
                    <div className="timeline-event">{item.event}</div>
                    {item.note && <div className="timeline-note">{item.note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div className="day-section">
            <div className="day-header">
              <h3>Day 2</h3>
              <span className="day-date">March 16, 2026</span>
            </div>

            <div className="timeline">
              {day2Events.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item ${item.highlight ? 'highlight' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-time">{item.time}</div>
                    <div className="timeline-event">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medical Assistance Note */}
        <div className="medical-note">
          <div className="medical-icon"><FaHeartbeat /></div>
          <div className="medical-content">
            <h3 className="medical-title">Medical Assistance Available</h3>
            <p className="medical-description">
              Professional medical assistance will be provided throughout the event.
              Our medical team will be available 24/7 for any emergency support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
