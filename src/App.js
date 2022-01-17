import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function App() {
  var [contador, setContador] = useState(0);
  const evento = () => {
    setContador(contador++);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span
          className="App-link"
          onClick={evento}>
          {contador}
        </span>
        <Link to="/segunda" className="App-link">Segunda</Link>
      </header>
    </div>
  );
}