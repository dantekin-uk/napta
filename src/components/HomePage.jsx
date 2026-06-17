import React from 'react'
import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>NAPTA - National Public Transport Alliance | Transforming Public Transport in Africa</title>
        <meta name="description" content="NAPTA is dedicated to transforming public transport in Kenya and across Africa through sustainable policies, innovation, training, and strategic partnerships." />
        <meta property="og:title" content="NAPTA - National Public Transport Alliance" />
        <meta property="og:description" content="NAPTA is dedicated to transforming public transport in Kenya and across Africa through sustainable policies, innovation, training, and strategic partnerships." />
        <meta property="og:type" content="website" />
      </Helmet>
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
