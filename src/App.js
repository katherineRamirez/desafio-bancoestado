import React, { Component } from 'react';
import logo from './logo.svg';
import RaisedButtonExampleSimple from './components/charge/Buttons';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <RaisedButtonExampleSimple/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
