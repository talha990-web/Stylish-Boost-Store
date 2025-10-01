import React from 'react'
import './Related.css'
import data_product from '../Assets/data.js'
import Item from '../Item/Item.jsx'

const Related = () => {
  return (
    <div className='related-products'>
        <h1>Related Products</h1>
        <div className='related-products-item'>
            {data_product.map((item , i) => {
                return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Related