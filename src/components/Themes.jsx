import React from 'react';
import '../styles/Themes.css';

const Themes = () => {
  const themes = [
    {
      icon: '🔗',
      name: 'Web3',
      description: 'Build decentralized applications, smart contracts, and blockchain solutions'
    },
    {
      icon: '🤖',
      name: 'Artificial Intelligence',
      description: 'Create AI-powered applications, machine learning models, and intelligent systems'
    },
    {
      icon: '🚀',
      name: 'Emerging Technologies',
      description: 'Explore IoT, AR/VR, quantum computing, and other cutting-edge tech'
    }
  ];

  return (
    <section id="themes" className="themes-section">
      <div className="themes-container">
        <h2 className="themes-title">Themes</h2>
        <p className="themes-subtitle">Choose your track and build something amazing</p>

        <div className="themes-grid">
          {themes.map((theme, index) => (
            <div key={index} className="theme-card">
              <div className="theme-icon">{theme.icon}</div>
              <h3 className="theme-name">{theme.name}</h3>
              <p className="theme-description">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
