import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/bag-icon.png'
import instagram_icon from '../Assets/instagram.png'
import facebook_icon from '../Assets/facebook.png'
import whatsapp_icon from '../Assets/whatsapp-one.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="Footer Icon" />
            <p>Stylish Boost</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className='footer-icon-container'>
                <img className='instagram' src={instagram_icon} alt="" />
            </div>
            <div className='footer-icon-container'>
                <img className='facebook' src={facebook_icon} alt="" />
            </div>
        </div>
        <div className='footer-copy-right'>
            <hr />
            <p>Copyright &copy; 2025 - All Rights Reserved</p>
        </div>
    </div> 
  )
}

export default Footer