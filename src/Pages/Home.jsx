
import React, { useState } from 'react';
import axios from 'axios';

import '../Styles/home.css'

import MovingBackground from '../Components/MovingBackground';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');





  const handleLogin = async () => {

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        email: email,
        password: password 
      });

      
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);


        console.log(response.data.token)
        window.location.href = '/tools';
      } else {
        alert("Credenciales incorrectas")
      }
    } catch (error) {
      alert("Credenciales incorrectas");

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
        <button type="submit" className="login-button" onClick={handleLogin} >Login</button>
      </form>
    </div>

    </MovingBackground>
  );
}

export default Home;