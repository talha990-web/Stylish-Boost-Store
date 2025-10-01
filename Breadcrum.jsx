import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/arrow-two.png'

const Breadcrum = (props) => {

    const {product} = props ;

  return (
    <div className='breadcrum'>
        Home <img src= {arrow_icon} alt="Home" />
        Shop <img src= {arrow_icon} alt="Shop" /> 
        {product.category} <img src= {arrow_icon} alt="Products" /> {product.name} 
    </div>
  )
}

export default Breadcrum