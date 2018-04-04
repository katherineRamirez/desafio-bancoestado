import React, { Component } from 'react';
import EventoFinal from './EventoFinal.jsx';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

import './ModoPago.css';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};



class ModoPago extends Component {
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
          <EventoFinal />
        ) : (
            <div>

              <h2 className='titleModo1'>Crea tu evento</h2>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circulo'></div>
              <div className='circuloGris'></div>
              <div className='checkModo'>
                <h3>Selecciona modo de pago</h3>
              </div>
              <Checkbox className='boxModo'
                label="Partes Iguales"
                style={styles.checkbox}
              />
               <Checkbox className='boxModo'
                label="Proporcional"
                style={styles.checkbox}
              />
              <button className='btnModo1' onClick={this.onButtonClick}>
                CONTINUAR
              </button>
            </div>
          )}

      </div>

    );
  }

}

export default ModoPago;
