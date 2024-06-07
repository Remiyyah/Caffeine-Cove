import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Coffee from './Coffee';
import Pastries from './Pastries';


function App() {
  return (
    <Router basename="/Caffeine-Cove">
      <div>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="./pastries" element={<Pastries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
