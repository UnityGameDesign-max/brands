import React from 'react'
import './footer.scss';
import SocialLinks from './components/SocialLinks';

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

            <div className='footer-links pd-vertically-2'>
                <SocialLinks socialLink1={'Terms of service'} socialLink2={'Privacy policy'} socialLink3={'Impressum'}/>
                <SocialLinks socialLink1={'Facebook'} socialLink2={'Instagram'} socialLink3={'Twitter'}/>
                <SocialLinks socialLink1={'Github'} socialLink2={'Linkedin'} socialLink3={'Teams'}/>
                <SocialLinks socialLink1={'YouTube'} socialLink2={'Behance'} socialLink3={'Dribble'}/>
                <SocialLinks socialLink1={'Explore open jobs'} socialLink2={''} socialLink3={'©2000—2023 Company Name'}/>
            </div>
        </div>
    </div>
  )
}

export default Footer