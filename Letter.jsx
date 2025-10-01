import React from 'react';
import './Letter.css';
import { toast, ToastContainer } from 'react-toastify';

const Letter = () => {

  const handleSubscribe = () => {
  const email = document.querySelector('input[type="email"]').value;
  if (!email || !email.includes('@')) {
    toast.error("Please Enter Valid Email");
  } else {
    toast.success("You Successfully Subscribed Our Channel");
  }
}


  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe To Our Stylish Boost Store And Stay Updated</p>
      <div>
        <input type="email" placeholder='Enter Your Email' />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Letter;
