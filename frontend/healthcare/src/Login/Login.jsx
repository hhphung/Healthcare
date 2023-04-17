import React, { useState } from 'react';
import './Login.css';


export const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!email || !password){
      alert("Please enter your Login");
    }
    else{
    }
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
          Username:
          <input
            type="text"
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
        <button className="login">Login</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>New User</button>
      </form>
      </div>
    </div>
  );
}

export default LoginPage;