import React, { Component } from 'react';
import Invitar from './Invitar';


class Evento extends Component {

  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      contador: 1
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState({
      contador: 2,
    })
    console.log('Button Clicked !')
  }

  render() {
    return (
      <div>
        {this.state.contador === 2 ? (
          <Invitar />
        ) : (
            <div>
              <h2 class='titleEvent'>Crea Tu evento</h2>
              <input
                ref={input => { this.textInput = input; }}
                placeholder='Nombre del evento'
                type="text" />
              <input
                ref={input => { this.textInput = input; }}
                placeholder='Fecha del evento'
                type="number" />
              <button class='btnEvent' onClick={this.onButtonClick}>
                Crear evento
              </button>
            </div>
          )}

      </div>

    );
  
    }
   
  }
  

  }
export default Evento;
