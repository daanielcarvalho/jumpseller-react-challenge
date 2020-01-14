import React from 'react';
import logo from './logo-jumpseller.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jumpseller React challenge
        </p>
        <a
          className="App-link"
          href="https://github.com/daanielcarvalho/jumpseller-react-challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Challenge Specifications 
        </a>
      </header>
    </div>
  );
}

export default App;
