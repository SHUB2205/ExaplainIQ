import React, { useState } from 'react';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <>
      <body>
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
      </body>
    </>
  );
}

export default Login;
