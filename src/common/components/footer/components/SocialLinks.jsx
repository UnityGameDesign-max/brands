import React from 'react'
import './socialLinks.scss'

function SocialLinks({socialLink1, socialLink2, socialLink3}) {
  return (
    <div className='social-links'>
        <a href='#link'>
            <p>{socialLink1}</p>    
        </a>
        <a href='#link'>
            <p>{socialLink2}</p>
        </a>
        <a href='#link'>
            <p>{socialLink3}</p>
        </a>
    </div>
  )
}

export default SocialLinks