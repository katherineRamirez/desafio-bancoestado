import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/login/Login.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">    
       < Login />
      </div>
    );
  }
}

export default App;
