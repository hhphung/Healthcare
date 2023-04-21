import React, { useState } from 'react';
import './Login.css';

export const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    //URL 
    const url = 'http://localhost:8080/user/login';

      const data = {
        username: username,
        password: password
      };

    fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(data)})
    .then(response => response.json())
    .then(data => {
      console.log(data);
      props.onFormSwitch('dashBoardPage');
    })
    .catch(error =>{ console.error(error);
      alert("Username or Password is incorrect");
    }); 
  
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
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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