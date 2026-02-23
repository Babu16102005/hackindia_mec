import React from 'react';
import { Lightbulb, Ticket, Users, Zap } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const features = [
    {
      icon: <Lightbulb size={40} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] stroke-[1.5]" />,
      title: 'Build Innovation',
      description: 'Transform your ideas into reality with cutting-edge technology and creative solutions.'
    },
    {
      icon: <Ticket size={40} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] stroke-[1.5]" />,
      title: 'Entry Fee',
      description: 'Registration fee: ₹250 per person. Secure your spot and access premium resources.'
    },
    {
      icon: <Users size={40} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] stroke-[1.5]" />,
      title: 'Team Formation',
      description: 'Form teams of 2-4 members or join solo and find your perfect team onsite.'
    },
    {
      icon: <Zap size={40} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] stroke-[1.5]" />,
      title: '24-Hour Sprint',
      description: 'Non-stop coding marathon to build, test, and deploy your innovative project.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About HackIndia 2026</h2>
        <p className="about-subtitle">India's Premier Hackathon Experience</p>
        <p className="about-department">Organized by Department of Information Technology</p>

        <div className="about-features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="about-description">
          <h3 className="description-title">What is HackIndia 2026?</h3>
          <p className="description-content">
            <strong>HackIndia 2026</strong> is India's most anticipated hackathon bringing together the brightest minds,
            innovative thinkers, and passionate developers from across the nation. Over <span className="highlight">24 hours</span>,
            participants will collaborate, code, and create groundbreaking solutions to real-world challenges.
            Whether you're a seasoned developer or a first-time hacker, HackIndia provides the perfect platform to
            showcase your skills, learn from industry experts, network with like-minded innovators, and compete for
            amazing prizes. Join us for an unforgettable journey of innovation, creativity, and technological excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
