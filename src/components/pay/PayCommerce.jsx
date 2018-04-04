import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import QrCode from './QrCode';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';



const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};



class PayCommerce extends Component {
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
          <QrCode />
        ) : (
            <div>

<h2 className="title">Medio de pago</h2>
      <div className='circulo'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
             
      <div className='boxCommerce'>
		  <Checkbox className="boxCommerce1"
          label="Cuenta Rut"
          style={styles.checkbox}
       />
       <Checkbox 
          label="Cuenta Corriente"
          style={styles.checkbox}
       />
       <Checkbox 
          label="Cuenta de Ahorro"
          style={styles.checkbox}
       />
       </div>
			<button className='btnSelectFriend' onClick={this.onButtonClick}>
          Continuar
      </button>
            </div>
          )}

      </div>

    );
  }

}

export default PayCommerce;

