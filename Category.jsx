
import React, { useContext } from 'react'
import './CSS/Category.css'
import { Context } from '../Context/Context.jsx'
import Item from '../Components/Item/Item.jsx'

const Category = (props) => {

  const {all_product} = useContext(Context)

  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="Main Banner" />
      <div className='shop-category-index-sort'>
        <p><span> Showing 1 - 12 </span> Out Of 36 Products</p>
      </div>
      <div className='shop-category-products'>
        {all_product.map((item , i) => {
          if (props.category === item.category) {
            return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
          }
          else {
            return null ;
          }
        })}
      </div>
      <div className='shop-category-load-more'>
        Explore More
      </div>
    </div>
  )
}

export default Category