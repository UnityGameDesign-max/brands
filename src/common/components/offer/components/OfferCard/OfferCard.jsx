import React from 'react';
import './offerCard.scss';

function OfferCard({ImageSvg, offerTitle, offerDescription}) {
  return (
    <div className='offerCard'>
        <img src={ImageSvg} alt='offer-image' />
        <h3 className='pd-vertically-2'>{offerTitle}</h3>
        <p className='offer-description'>{offerDescription}</p>
    </div>
  )
}

export default OfferCard