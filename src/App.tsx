import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import HomePage from './components/HomePage/HomePage';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
