import React from 'react';
import { Link, Bot, Rocket } from 'lucide-react';
import '../styles/Themes.css';

const Themes = () => {
  const themes = [
    {
      icon: <Link size={48} className="text-[#8a2be2] drop-shadow-[0_0_10px_rgba(138,43,226,0.8)] stroke-[1.5]" />,
      name: 'Web3',
      description: 'Build decentralized applications, smart contracts, and blockchain solutions'
    },
    {
      icon: <Bot size={48} className="text-[#00ff7f] drop-shadow-[0_0_10px_rgba(0,255,127,0.8)] stroke-[1.5]" />,
      name: 'Artificial Intelligence',
      description: 'Create AI-powered applications, machine learning models, and intelligent systems'
    },
    {
      icon: <Rocket size={48} className="text-[#ff4500] drop-shadow-[0_0_10px_rgba(255,69,0,0.8)] stroke-[1.5]" />,
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
