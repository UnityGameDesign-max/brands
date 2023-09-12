import Brands from 'pages/components/brands/Brands'
import CaseStudy from 'pages/components/cases/CaseStudy'
import Footer from 'common/components/footer/Footer'
import Header from 'common/components/header/Header'
import Hero from 'pages/components/hero/Hero'
import Offer from 'pages/components/offer/Offer'

import React from 'react'

function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Offer />
        <CaseStudy />
        <Brands />
        <Footer />
    </div>
    
  )
}

export default Home