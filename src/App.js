import React, { useState } from 'react';
// import Modernizr from './modernizr';
import logo from './logo.svg';
import './App.css';
import {
  BrowserView,
  MobileView
} from "react-device-detect";

function App() {
  const [location, setLocation] = useState("");
  const getLocation = ()=>{
    navigator.geolocation.getCurrentPosition(position => {
      const location = JSON.stringify(position);
      console.log(location);
      setLocation(location);
    },
    error => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }; 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          This is default. {location}
        </p>
        <button onClick={getLocation}>
          Get Location
        </button>
        <BrowserView>
          <h1> This is rendered only in browser </h1>
        </BrowserView>
        <MobileView>
          <h1> This is rendered only on mobile </h1>
        </MobileView>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
