import React, { Component } from 'react';
import Login from './components/login/Login.jsx'
import RaisedButtonExampleSimple from './components/charge/Buttons';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">    
       < Login />
        <MuiThemeProvider>
          <RaisedButtonExampleSimple/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
