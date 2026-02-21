import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Sponsors from './components/Sponsors'
import Themes from './components/Themes'
import Schedule from './components/Schedule'
import WhatToBring from './components/WhatToBring'
import Prizes from './components/Prizes'
import Rules from './components/Rules'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SyntheticHero from './components/ui/synthetic-hero'
import { initScrollReveal } from './utils/scrollReveal'

function App() {
  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  return (
    <div className="app">
      <div className="global-fixed-bg">
        <SyntheticHero backgroundOnly />
      </div>
      <Navbar />
      <Hero />
      <div className="reveal"><About /></div>
      <div className="reveal"><Sponsors /></div>
      <div className="reveal"><Themes /></div>
      <div className="reveal"><Rules /></div>
      <div className="reveal"><Schedule /></div>
      <div className="reveal"><WhatToBring /></div>
      <div className="reveal"><Prizes /></div>
      <div className="reveal"><Contact /></div>
      <Footer />
    </div>
  )
}

export default App
