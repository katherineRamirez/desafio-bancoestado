import React, { Component } from 'react';
import Login from './components/login/Login.jsx';
import HomePage from './components/start/Start.jsx';
import Header from './components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Pay from './components/pay/Pay.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
          < Header />   
          < HomePage />
        </MuiThemeProvider>
          < Login />
      </div>
    );
  }
}

export default App;
