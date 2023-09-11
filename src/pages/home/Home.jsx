import Brands from 'common/components/brands/Brands'
import CaseStudy from 'common/components/cases/CaseStudy'
import Footer from 'common/components/footer/Footer'
import Header from 'common/components/header/Header'
import Hero from 'common/components/hero/Hero'
import Offer from 'common/components/offer/Offer'

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