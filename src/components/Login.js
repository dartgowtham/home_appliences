// components/Login.js
import React, { useState } from 'react';
import './Style/Login.css'
import { Link } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className='bdy'>
    <form onSubmit={handleSubmit}>
    <h1 className='title'>Login Page</h1>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button><Link to="/home" className='btn'>Login</Link></button>
     <button><Link to="/register" className='btn'>Create an account</Link></button>

    </form>
    </div>
  );
}

export default Login;
