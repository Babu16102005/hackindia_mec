import React from 'react';
import '../styles/Sponsors.css';

const Sponsors = () => {
  const titleSponsors = [
    { name: 'HackIndia', logo: '/sponsors/hackindia.png' }
  ];

  const goldSponsors = [
    { name: 'Sponsor 2', logo: '/sponsors/gold-2.png' },
    { name: 'Sponsor 3', logo: '/sponsors/gold-3.png' }
  ];

  const silverSponsors = [
    { name: 'Sponsor 4', logo: '/sponsors/silver-4.png' },
    { name: 'Sponsor 5', logo: '/sponsors/silver-5.png' },
    { name: 'Sponsor 6', logo: '/sponsors/silver-6.png' }
  ];

  return (
    <section id="sponsors" className="sponsors-section">
      <div className="sponsors-container">
        <h2 className="sponsors-title">Sponsors</h2>
        <p className="sponsors-subtitle">Powered by industry leaders who believe in innovation</p>

        <div className="sponsor-tier">
          <h3 className="tier-title">Title Sponsor</h3>
          <div className="sponsors-grid title-grid">
            {titleSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card title-sponsor">
                <img src={sponsor.logo} alt={sponsor.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-tier">
          <h3 className="tier-title">Gold Sponsors</h3>
          <div className="sponsors-grid gold-grid">
            {goldSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card gold-sponsor">
                <img src={sponsor.logo} alt={sponsor.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-tier">
          <h3 className="tier-title">Silver Sponsors</h3>
          <div className="sponsors-grid silver-grid">
            {silverSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card silver-sponsor">
                <img src={sponsor.logo} alt={sponsor.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-cta">
          <h3 className="cta-title">Interested in Sponsoring?</h3>
          <p className="cta-description">
            Partner with us to empower the next generation of innovators and get your brand in front of talented developers.
          </p>
          <a href="#contact" className="sponsor-button">Become a Sponsor</a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
