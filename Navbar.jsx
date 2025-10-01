import React, { useContext, useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/bag-icon.png';
import cart from '../Assets/cart-icon.png';
import nav_down from '../Assets/menu-one.png';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { toast } from 'react-toastify';

function Navbar() {
  const { get_total_cart_items } = useContext(Context);
  const menu_ref = useRef();

  const drop_down_toggle = (e) => {
    menu_ref.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    toast.success('Logged out successfully!');
    setTimeout(() => {
      window.location.href = '/register';
    }, 1500);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Store Logo' />
        <p>Stylish Boost</p>
      </div>

      <img
        className='nav-drop-down'
        src={nav_down}
        onClick={drop_down_toggle}
        alt='Menu'
      />

      <ul ref={menu_ref} className='nav-menu'>
        <li><Link to='/'>Shop</Link></li>
        <li><Link to='/mens'>Men</Link></li>
        <li><Link to='/womens'>Women</Link></li>
        <li><Link to='/kids'>Kids</Link></li>
      </ul>

      <div className='nav-login-cart'>
        {localStorage.getItem('currentUser') ? (
          <button className='logout-button ' onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to='/register'>
            <button>Login</button>
          </Link>
        )}

        <Link to='/cart'>
          <img src={cart} alt='Add to Cart' />
        </Link>
        <div className='nav-cart-count'>{get_total_cart_items()}</div>
      </div>
    </div>
  );
}

export default Navbar;