import React, { useState } from 'react';
import './App.css';


export const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

 


  return (
    <div className="container">
      <div className="logo">
        <img src={require('../photo/healthcare_logo.png')} alt="Company Logo" />
      </div>
      <div className="login-form">

      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button >Login</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>New User</button>
      </form>
      </div>
    </div>
  );
}

export default LoginPage;