import React, { Component } from 'react';
import ModoPago from './ModoPago.jsx';
import Checkbox from 'material-ui/Checkbox';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Registro.css';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
  customWidth: {
    width: 200,
  },
};

class Registro extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1,
      checked: false,
      value: 1
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState({
      counter: 2,
    })

  }
  handleChange = (event, index, value) => this.setState({ value });
  render() {
    return (
      <div>
        {this.state.counter === 2 ? (
          <ModoPago />
        ) : (
            <div>

              <h2 className='titleModo'>Crea tu evento</h2>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circulo'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='check'>
                <h3>Monto total</h3>
              </div>
              <input className='modo'
                ref={input => { this.textInput = input; }}
                placeholder=' $ '
                type="number" />
              <MuiThemeProvider>
                <DropDownMenu className='drop' value={this.state.value} onChange={this.handleChange}>
                  <MenuItem value={1} primaryText="Cuenta Destino" />
                  <MenuItem value={2} primaryText="Cuenta Rut" />
                  <MenuItem value={3} primaryText="Cuenta Corriente" />
                  <MenuItem value={4} primaryText="Cuenta vista" />
                  <MenuItem value={5} primaryText="Chequera electrónica" />
                </DropDownMenu>
              </MuiThemeProvider> 
              <button className='btnModo' onClick={this.onButtonClick}>
                CONTINUAR
              </button>
            </div>
          )}

      </div>

    );
  }

}

export default Registro;
