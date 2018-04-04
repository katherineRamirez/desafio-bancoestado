import React, { Component } from 'react';
import Registro from './Registro.jsx';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import './EventoFinal.css';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};



class EventoFinal extends Component {
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
       <div>Debe aparecer lo de la karen</div>
        ) : (
            <div>

              <h2 className='titleFinal'>Crea tu evento</h2>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circulo'></div>
              <div className='checkFinal'>
              <h3>Cobrar</h3>
              </div>
              <Checkbox className='boxFinal'
                label="Roxana Rodriguez $10000" 
                style={styles.checkbox}
              />
              <Checkbox className='boxFinal'
                label="Lexis Fernandez $10000"
                style={styles.checkbox}
              />
 

              <button className='btnFinal' onClick={this.onButtonClick}>
                GENERAR COBRO
              </button>
            </div>
          )}

      </div>

    );
  }

}

export default EventoFinal;
