import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow-two.png'
import hand_icon from '../Assets/heart-icon.png'
import hero_image from '../Assets/hero-two-bg.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals Only</h2>
          <div>
            <div className='hero-hand-icon'>
              <p>Welcome Everyone</p>
            <img src={hand_icon} alt="Hand Icon" />
            </div>
            <h5>Latest Collection For Everyone</h5>
          </div>
            <div className='hero-latest-btn'>
                <div>Explore More</div>
                <img src={arrow_icon} alt="Arrow Icon" />
            </div>
        </div>


        <div className='hero-right'>
            <img src={hero_image} alt="Mian Structure" />
        </div>
    </div>
  )
}

export default Hero