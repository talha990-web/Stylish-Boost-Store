import React, { useContext , useEffect } from 'react'
import './Display.css'
import star_icon from '../Assets/star-three.png'
import star_dull_icon from '../Assets/star-four.png'
import { Context } from '../../Context/Context.jsx'

const Display = (props) => {

    const {product} = props ;
    const {add_to_cart} = useContext(Context) ;

    useEffect(() => {
    const left = document.querySelector('.product-display-left');
    const right = document.querySelector('.product-display-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1,
    });

    if (left) observer.observe(left);
    if (right) observer.observe(right);

    return () => {
      if (left) observer.unobserve(left);
      if (right) observer.unobserve(right);
    };
  }, []);


  return (
    <div className='product-display'>
        <div className='product-display-left'>
          <div className='product-display-img-list'>
            <img src={product.image} alt="Display" />
            <img src={product.image} alt="Display" />
            <img src={product.image} alt="Display" />
            <img src={product.image} alt="Display" />
          </div>
          <div className='product-display-img'>
            <img className='product-display-main-img' src={product.image} alt="Display" />
          </div>
        </div>

        <div className='product-display-right'>
            <h1>{product.name}</h1>
            <div className='product-display-right-star'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(150)</p>
              </div>
                <div className='product-display-right-prices'>
                    <div className='product-display-right-price-old'>$ {product.old_price}</div>
                    <div className='product-display-right-price-new'>$ {product.new_price}</div>
                </div>
                <div className="product-display-right-description">
                  Discover stylish , high-quality clothing for men , women , and kids. Shop the latest trends , enjoy fast delivery
                </div>
                <div className='product-display-right-size'>
                  <h1>Select Size</h1>
                  <div className='product-display-right-sizes'>
                     <div>S</div>
                     <div>M</div>
                     <div>L</div>
                     <div>XL</div>
                     <div>XXL</div>
                  </div>
                </div>
                <button onClick={() => {add_to_cart(product.id)}}>Add Cart</button>
                <p className='product-display-right-category'>
                  <span>Category : </span> Women , T-Shirt , Crop Top
                </p>
                <p className='product-display-right-category'>
                  <span>Tags : </span> Modern , Latest
                </p>
            </div>
        </div>
  )
}

export default Display