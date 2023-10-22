import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });

    navigate.push('/login-success');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
