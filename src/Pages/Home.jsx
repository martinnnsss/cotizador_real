
import React, { useState } from 'react';
import axios from 'axios';

import '../Styles/home.css'

import MovingBackground from '../Components/MovingBackground';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');





  const handleLogin = async (e) => {
    e.preventDefault();
    // Log to check if function is bein

    try {

  
      const response = await axios.post('https://copscl.pythonanywhere.com/login', {
        email: email,
        password: password 
      });
  
  
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
  
        window.location.href = '/tools';
        
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {

    }
  }

  return (
    <MovingBackground>
    <div className="login-container">
      <form className="login-form" >
        <div className='login-header'>
          <h1>Login</h1>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-button" onClick={(e) => handleLogin(e)}>Login</button>

      </form>
    </div>

    </MovingBackground>
  );
}

export default Home;