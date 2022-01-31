import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import HomePage from './components/HomePage/HomePage';

import './App.css';
import Appbar from './components/Appbar/Appbar';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
