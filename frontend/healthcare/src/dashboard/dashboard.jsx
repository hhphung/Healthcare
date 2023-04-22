import React from 'react';
import './dashboard.css';
import Navbar from './navbar/Navbar.js';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports.js';
import Products from './pages/Products.js';

export const DashBoardPage = (props) => {
  return (
    <>
      <Router>
        <Navbar />
        < Routes>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Routes>
      </Router>
    </>
  );
}

export default DashBoardPage;