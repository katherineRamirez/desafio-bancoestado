import React, { Component } from 'react';
import Header from 'header';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButtonExampleSimple from './Buttons';

class Charge extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButtonExampleComplex/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Charge;