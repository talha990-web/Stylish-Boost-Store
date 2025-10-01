import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/hero-one-bg.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exslusive Offers For You</h1>
            <h2>Only On Best Sellers Products</h2>
            <p>Free shipping on all orders above $50</p>
            <p>Up to 50% OFF on selected items</p>
            <p>Surprise gifts with every purchase</p>
            <p>Buy More, Save More – Limited Time Only</p>
            <button>Check Here</button>
        </div>

        <div className='offers-right'>
            <img src={exclusive_image} alt="Exclusive Section" />
        </div>
    </div>
  )
}

export default Offers