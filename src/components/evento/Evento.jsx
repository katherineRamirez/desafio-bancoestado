import React, { Component } from 'react';
import Invitar from './Invitar';
import './Evento.css';


class Evento extends Component {

  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      counter: 1
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
          <Invitar />
        ) : (
            <div>
              
              <h2 className='titleEvent'>Crea tu evento</h2>
              <div className='circulo'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <input className='InputEvent1'
                ref={input => { this.textInput = input; }}
                placeholder='   Nombre del evento'
                type="text" />
              <input className='InputEvent2'
                ref={input => { this.textInput = input; }}
                placeholder='   Fecha del evento'
                type="number" />
              <button className='btnEvent' onClick={this.onButtonClick}>
                CONTINUAR
              </button>
            </div>
          )}

      </div>

    );  
  }
}
export default Evento;
