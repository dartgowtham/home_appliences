// components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  './Style/Login.css'


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
    <h1 className='title'>Register</h1>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit"><Link to="/register" className='btn'>Register</Link></button>
    </form>
  );
}

export default Register;
