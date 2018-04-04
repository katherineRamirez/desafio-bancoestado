import React, { Component } from 'react';
import Registro from './Registro.jsx';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Invitar.css';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class Invitar extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1,
      checked: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState({
      counter: 2,
    })
  }

  render() {
    return (
      <div>
        {this.state.counter === 2 ? (
          <Registro />
        ) : (
            <div>
              <h2 className='titleInvitar'>Crea tu evento</h2>
              <div className='circuloGris'></div>
              <div className='circulo'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='check'>
              <h3>Invitar amigos</h3>
              </div>
              <MuiThemeProvider>              
                <Checkbox className='box'
                  label="Roxana Rodriguez"
                  style={styles.checkbox}
                />                           
                <Checkbox className='box'
                  label="Susana Fernandez"
                  style={styles.checkbox}
                />
                <Checkbox className='box'
                  label="Vanessa Gutierrez"
                  style={styles.checkbox}
                />
              </MuiThemeProvider> 
              <button className='btnInvitar' onClick={this.onButtonClick}>
                CONTINUAR
              </button>
            </div>
          )}

      </div>

    );
  }

}

export default Invitar;
