import React, { useState, useEffect } from 'react'
import '../styles/CountdownTimer.css'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set event date (March 15, 2026)
    const eventDate = new Date('2026-03-15T10:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown-container">
      <h3 className="countdown-title">Event Starts In</h3>
      <div className="countdown-timer">
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="time-label">Days</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="time-label">Hours</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="time-label">Minutes</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="time-label">Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
