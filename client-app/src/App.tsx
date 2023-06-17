import React from 'react';
import logo from './logo.svg';
import './App.css';
import { docks } from './demo';
import DockItem from './DockItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {docks.map(dock => (
          <DockItem  key={dock.name} dock={dock} />
        ))}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
