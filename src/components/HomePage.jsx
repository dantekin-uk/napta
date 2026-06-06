import React from 'react'
import Hero from './Hero'
import StatsFloatingDock from './StatsFloatingDock'
import SystemBlocks from './SystemBlocks'
import PortfolioSection from './PortfolioSection'
import AnnualEvents from './AnnualEvents'
import News from './News'
import PartnersSection from './PartnersSection'
import NewsletterCTA from './NewsletterCTA'

function HomePage() {
  return (
    <>
      <Hero />
      <StatsFloatingDock />
      <SystemBlocks />
      <PortfolioSection />
      <AnnualEvents />
      <News />
      <PartnersSection />
      <NewsletterCTA />
    </>
  )
}

export default HomePage
