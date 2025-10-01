import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (isLogin) {
      const matchedUser = storedUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        localStorage.setItem('currentUser', JSON.stringify(matchedUser));
        toast.success('Login Successful');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        toast.error('Invalid Email Or Password');
      }
    } else {
      const userExists = storedUsers.find((user) => user.email === email);
      if (userExists) {
        toast.error('User Already Exists Try Login');
        return;
      }

      const newUser = { name, email, password };
      localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
      toast.success('Signup Successful Redirecting Login ...');
      setTimeout(() => {
        setIsLogin(true);
        setEmail('');
        setPassword('');
        setName('');
      }, 1500);
    }
  };

  return (
    <div className='login-signup'>
      <div className='login-signup-container'>
        <h1>{isLogin ? 'Login Form' : 'Signup Form'}</h1>

        <div className='login-signup-fields'>
          {!isLogin && (
            <input
              type='text' required
              placeholder='Enter Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type='email' required
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password' required
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>{isLogin ? 'Login' : 'Signup'}</button>

        <p className='login-signup-login'>
          {isLogin ? (
            <>
              Don't Have An Account ? {' '}
              <span onClick={() => setIsLogin(false)}>Signup Here</span>
            </>
          ) : (
            <>
              Already Have An Account ? {' '}
              <span onClick={() => setIsLogin(true)}>Login Here</span>
            </>
          )}
        </p>

        <div className='login-signup-agree'>
          <input type='checkbox' required />
          <p>
            By Continuing , I Agree To The Terms Of Use And Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
