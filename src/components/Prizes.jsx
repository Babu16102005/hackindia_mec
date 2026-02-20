import React from 'react'
import '../styles/Prizes.css'
import { FaTrophy, FaMedal, FaAward, FaStar, FaBriefcase, FaCoins } from 'react-icons/fa'

const Prizes = () => {
  const prizes = [
    { rank: '1st Prize', icon: <FaTrophy />, amount: '₹10,000', class: 'first', delay: 0 },
    { rank: '2nd Prize', icon: <FaMedal />, amount: '₹7,500', class: 'second', delay: 0.1 },
    { rank: '3rd Prize', icon: <FaAward />, amount: '₹5,000', class: 'third', delay: 0.2 },
    { rank: 'Consolation', icon: <FaStar />, amount: '₹3,000', class: '', delay: 0.3 }
  ]

  const bonusPrizes = [
    {
      icon: <FaBriefcase />,
      title: 'Internship Offers',
      description: 'Exciting internship opportunities for top performers',
      class: 'bonus-internship',
      delay: 0.4
    },
    {
      icon: <FaCoins />,
      title: '40K Sharp Crypto Tokens',
      description: 'Cryptocurrency rewards for innovative projects',
      class: 'bonus-crypto',
      delay: 0.5
    }
  ]

  return (
    <section id="prizes" className="prizes-section">
      <div className="container">
        <h2 className="section-title" data-text="Prize Pool">Prize Pool</h2>

        <div className="prizes-header">
          <div className="prize-pool-total">₹25,000</div>
          <div className="prize-pool-label">Total Prize Pool</div>
        </div>

        <div className="prizes-grid">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`prize-card ${prize.class}`}
              style={{ animationDelay: `${prize.delay}s` }}
            >
              <div className="prize-rank">{prize.rank}</div>
              <span className="prize-icon">{prize.icon}</span>
              <div className="prize-amount">{prize.amount}</div>
            </div>
          ))}
        </div>

        {/* Bonus Prizes Section */}
        <div className="bonus-prizes-section">
          <h3 className="bonus-title">Additional Rewards</h3>
          <div className="bonus-prizes-grid">
            {bonusPrizes.map((bonus, index) => (
              <div
                key={index}
                className={`bonus-prize-card ${bonus.class}`}
                style={{ animationDelay: `${bonus.delay}s` }}
              >
                <div className="bonus-icon">{bonus.icon}</div>
                <h4 className="bonus-prize-title">{bonus.title}</h4>
                <p className="bonus-prize-description">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes
