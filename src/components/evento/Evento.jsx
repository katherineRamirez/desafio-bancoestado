import React, { Component } from 'react';


class Evento extends Component {
  /*
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
  
    };
   
  }
  componentWillMount() { //Se dispara una vez se renderiza

  }

  */

  render() {
    return (
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
        <input
          ref={input => { this.textInput = input; }}
          placeholder='Lugar del evento'
          type="text" />

        <button class='btnEvent'>Crear evento</button>
      </div>
    )

  }

}
export default Evento;
