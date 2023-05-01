import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from "./TeamForm";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ChatGptConclusions } from './ChatGptConclusions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit files and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
