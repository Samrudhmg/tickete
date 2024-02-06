import React from 'react'
import'./Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <img src='Logo.png' alt='nothing to show'></img>
      <p className='underline'></p>
      
      <div className='items'>
        <p className='madewithlogo'>Made with ❤️</p>
        <ul>
        <li>Privacy Policy</li>
        <li>Terms of usage</li>
        <li>Canellation policy</li>
       
        <li>Sitemap</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer