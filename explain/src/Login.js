import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './login.css';

function Login({ handleLogin }) {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ Name,email, password });

    navigate.push('/login-success');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-container">
          <label>Name:</label>
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}



export default Login;




