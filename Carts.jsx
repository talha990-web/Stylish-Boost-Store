import React, { useContext, useEffect, useState } from 'react';
import './Carts.css';
import { Context } from '../../Context/Context.jsx';
import remove_icon from '../Assets/remove-two.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carts = () => {
  const { all_product, cartItems, remove_from_cart, get_total_cart_amount } = useContext(Context);
  const [promoCode, setPromoCode] = useState('');

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.cart-items-format-main, .cart-items-down');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handlePromoSubmit = () => {
    if (promoCode.trim() === '') {
      toast.error('Please Enter Promo Code', {
        position: 'top-center',
        autoClose: 2000,
        style: { fontSize: '16px', fontWeight: 'bold' },
      });
    } else {
      toast.success(`Promo Code '${promoCode}' Applied Successfully`, {
        position: 'top-center',
        autoClose: 2000,
        style: { fontSize: '16px', fontWeight: 'bold' },
      });
    }
  };

  return (
    <div className='cart-items'>
      <div className='cart-items-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cart-items-format cart-items-format-main'>
                <img src={e.image} alt="" className='cart-icon-product-icon' />
                <p>{e.name}</p>
                <p> $ {e.new_price}</p>
                <button className='cart-items-quantity'>{cartItems[e.id]}</button>
                <p> $ {e.new_price * cartItems[e.id]}</p>
                <img
                  className='cart-items-remove-icon'
                  onClick={() => remove_from_cart(e.id)}
                  src={remove_icon}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className='cart-items-down'>
        <div className='cart-items-total'>
          <h1>Your Total Carts</h1>
          <div>
            <div className='cart-items-total-item'>
              <p>Sub - Total</p>
              <p>$ {get_total_cart_amount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>$ {get_total_cart_amount()}</h3>
            </div>
          </div>
          <button>Proceed To Check - Out</button>
        </div>

        <div className='cart-items-promo-code'>
          <p>If You Have a Promo Code, Enter Here</p>
          <div className='cart-items-promo-box'>
            <input
              type="text"
              placeholder='Enter Promo Code'
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handlePromoSubmit}>Submit</button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Carts;
