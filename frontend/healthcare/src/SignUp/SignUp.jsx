import React, { useState } from 'react';
import './SignUp.css';

export const SignUpPage = (props) => {
  //ser default state for the valiables 
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedpassword, setConfirmedPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //URL 
    const url = 'http://localhost:8080/user/';
    
    // the passwrod is not matching
    if (password !== confirmedpassword){
      alert("The password is not match");
    }

    else{
      const data = {
        username: username,
        password: password,
        email: email,
        role: "Customer"
      };

    fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(data)})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); 
  }
};

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>
          UserName:
          <input
            type="text"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <br />
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
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmedpassword}
            onChange={(event) => setConfirmedPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
        <button type="button" className="link-btn" onClick={() =>  props.onFormSwitch('login')}>Back to Login</button>
      </form>
    </div>
  );
}

