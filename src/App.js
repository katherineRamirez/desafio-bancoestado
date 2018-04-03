import React, { Component } from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import logo from './logo.svg';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#F97C00',
  },
  appBar: {
    height: 50,
  },
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={muiTheme}>
          <Header />
          <Contacts/>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
