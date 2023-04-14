import React, { useState } from "react";
import './App.css';
import { LoginPage } from './Login/Login';
import { SignUpPage } from './SignUp/SignUp';


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <LoginPage onFormSwitch={toggleForm} /> : <SignUpPage onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;