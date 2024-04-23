
import React, { useState } from 'react';
import '../Styles/home.css'

import MovingBackground from '../Components/MovingBackground';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here, like sending a request to your server
    console.log(email, password);
  };

  return (
    <MovingBackground>
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className='login-header'>
          <h1>Login</h1>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
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
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>

    </MovingBackground>
  );
}

export default Home;