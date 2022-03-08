import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import cors_proxy from 'cors-anywhere';

import './App.css';
import { Appbar } from './components';
import { HomePage, LandingPage, LoginPage, RegisterPage } from './pages';

// Listen on a specific host via the HOST environment variable
const host:string = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port:number = Number(process.env.PORT) || 8080;

function App() {

  useEffect(() => {
      cors_proxy.createServer({
        originWhitelist: [], // Allow all origins
        requireHeader: ['origin', 'x-requested-with'],
        removeHeaders: ['cookie', 'cookie2']
    }).listen(port, host, function() {
        console.log('Running CORS Anywhere on ' + host + ':' + port);
    });
  }, []);

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
