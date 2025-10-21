import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onClose={() => setShowCookieConsent(false)} />
      )}
    </div>
  )
}

export default App
