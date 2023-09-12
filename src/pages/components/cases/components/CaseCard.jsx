import React from 'react';
import './caseCard.scss';

function CaseCard({bgImage, caseTitle, caseDescription}) {
  const backgroundImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    paddingTop: '67.67%'
  }
  return (
    <div className='case-study container'>
        <div className='case-study-img' style={backgroundImage}>
            <div className='case-study-content'>
                <h3>{caseTitle}</h3>
                <p>{caseDescription}</p>
            </div>
        </div>
    </div>
  )
}

export default CaseCard