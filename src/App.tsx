import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import {Appbar} from './components';
import { HomePage, LandingPage, LoginPage, RegisterPage } from './pages';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
