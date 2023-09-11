import React from 'react'
import './offer.scss';
import OfferCard from './components/OfferCard/OfferCard';
import WebTrack from 'assets/icons/Web Dev Icon.svg'
import UIXTrack from 'assets/icons/UX Icon.svg';
import MobileTrack from 'assets/icons/App Dev Icon.svg';
import BlockchainTrack from 'assets/icons/Blockchain Icon.svg';

function Offer() {
  return (
    <div className='container pd-vertically-4'>
        <h3>What we do</h3>
        <h1 className='offer-message pd-vertically-2'>We offer a complete range of bespoke design and development services to help you turn your ideas into
        digital masterpieces</h1>

        <div className='offer-tracks'>
            <OfferCard 
             ImageSvg={WebTrack} 
             offerTitle={'Web development'} 
             offerDescription=
             {'We use cutting edge webdevelopment technologies to help our clients fulfill their business goals through functional, reliable solutions.'}
            />

            <OfferCard 
             ImageSvg={UIXTrack} 
             offerTitle=
             {'User experience & design'} 
             offerDescription= {'Our complete web design services will bring your ideas to life and provide you with a sleek, high performing product that elevates your business.'}
            />

           <OfferCard 
            ImageSvg={MobileTrack} 
            offerTitle={'Mobile app development'} 
            offerDescription=
            {'Our extensive mobile development experience allows us to create custom native and cross platform iOS and Android mobile solutions for our clients.'}
           />

          <OfferCard 
          ImageSvg={BlockchainTrack} 
          offerTitle={'Blockchain solutions'} 
          offerDescription=
          {'We conduct market research to determine the optimal blockchain based solutions to help you grow your company and achieve your business goals.'}
          />
        </div>
        
    </div>
  )
}

export default Offer;