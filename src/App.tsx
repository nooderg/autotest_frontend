import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import './App.css';
import { Appbar } from './components';
import { HomePage, LandingPage, LoginPage, RegisterPage } from './pages';
import { NotConnectedPage } from './pages/NotConnectedPage/NotConnectedPage';

// Listen on a specific host via the HOST environment variable
const host:string = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port:number = Number(process.env.PORT) || 8080;

// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function() {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// });

//export const auth = localStorage.jwt !== undefined && localStorage.jwt !== "";

interface AppContextInterface {
  jwt: string;
  setJwt: (jwt: string) => void;
}

const defaultContextApp: AppContextInterface = {
  jwt: localStorage.jwt,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setJwt: function (_jwt: string): void {
    throw new Error('Function not implemented.');
  }
};

export const AppContext = createContext<AppContextInterface>(defaultContextApp);

const PrivateRoute = () => {
  const { jwt } = useContext(AppContext);
  return jwt ? <Outlet /> : <Navigate to="/login" />;
}

function Logout() {
  const { setJwt } = useContext(AppContext);
  setJwt("");
  return <Navigate to="/login" />;
}

function App() {
  const [jwtState, setJwtState] = useState(defaultContextApp.jwt);
  const setJwt = (jwt: string) => {
    console.log("setJwt", jwt);
    localStorage.setItem('jwt', jwt);
    setJwtState(jwt);
  }

  return (
    <div className="App">
      <AppContext.Provider value={{
        jwt: jwtState,
        setJwt
      }}>
        <Appbar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage  />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/app' element={<PrivateRoute />}>
            <Route path='/app' element={<HomePage/>}/>
          </Route>
          <Route path="*" element={<NotConnectedPage />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
