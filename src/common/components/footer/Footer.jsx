import React from 'react'
import './footer.scss';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='container footer-content'>
            <h3>Contact us</h3>

            <div className='title-address'>
                <h1 className='footer-title pd-vertically-2'>Have a project in mind? Let's make it happen</h1>
                <div className='address'>
                    <p>22 Street Name, Suburb, 8000,</p>
                    <p>Cape Town, South Africa</p>
                    <p>+27 21 431 0001</p>
                    <a href='/'>enquirie@website.co.za</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer