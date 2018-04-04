import React, { Component } from 'react';
import Registro from './Registro.jsx';


import './EventoFinal.css';




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
          <div>
            <div className='notificacion'>Tus amigos han sido notificados</div>
     
          </div>
        ) : (
            <div>

              <h2 className='titleFinal'>Crea tu evento</h2>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circulo'></div>
              <div className='checkFinal'>

              </div>
              <h4> Roxana Rodriguez $10000</h4>
              <h4> Susana Fernandez $10000</h4>

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
