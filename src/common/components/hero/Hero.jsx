import React, { Fragment } from 'react';
import './hero.scss';

function Hero() {
  return (
    <Fragment>
        <div className='hero'>
            <div className='content container'>
                <h1>Live with Confidence</h1>
                <p>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                <button className='btn'>View project</button>
            </div>
        </div>
    </Fragment>
  )
}

export default Hero;