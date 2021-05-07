import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
          <h2>I am heare.</h2>
          <button>hit me</button>
        </div>
        <p className="App-intro">
          Hello Electron!
        </p>
      </div>
    );
  }
}

export default App;
