import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import './pay.css';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class PayCommerce extends Component {

   render() {
    return (

      <div className="inputPay">
      <h2 className="title">Medio de pago</h2>
      <div className='circulo'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
              <div className='circuloGris'></div>
		  <Checkbox className='box'
          label="Cuenta Rut"
          style={styles.checkbox}
       />
       <Checkbox className='box'
          label="Cuenta Corriente"
          style={styles.checkbox}
       />
       <Checkbox className='box'
          label="Cuenta de Ahorro"
          style={styles.checkbox}
       />
			<button className='btnSelectFriend' onClick={this.onButtonClick}>
          Continuar
      </button>
      </div>
    )

  }

}
export default PayCommerce;