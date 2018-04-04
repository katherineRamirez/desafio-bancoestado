import React, { Component } from 'react';
import Login from './components/login/Login.jsx'
import HomePage from './components/start/Start.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">    
       <Login />
        <MuiThemeProvider>
          <HomePage/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
