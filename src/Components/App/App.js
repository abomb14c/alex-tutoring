import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import Mission from '../Mission/Mission'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <Mission />
      </div>
    );
  }
}

export default App;
