import React, { useState } from "react";
import './App.css';
import { LoginPage } from './Login/Login';
import { SignUpPage } from './SignUp/SignUp';
import {DashBoardPage} from './dashboard/dashboard'

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
         currentForm === "login" ? <LoginPage onFormSwitch={toggleForm} /> : 
         currentForm === "signup" ? <SignUpPage onFormSwitch={toggleForm} /> :
         currentForm === "dashBoardPage" ? <DashBoardPage onFormSwitch={toggleForm} /> :
         <DashBoardPage onFormSwitch={toggleForm} />
      }
    </div>
  );
}



export default App;