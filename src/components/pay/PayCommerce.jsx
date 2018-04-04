import React, { Component } from 'react';
import './pay.css';


class PayCommerce extends Component {

 
  render() {
    return (
      <div className="inputPay">
		  <input className="input" type="checkbox"/>Cuenta Rut
			<input className="input" type="checkbox"/>Cuenta Corriente
			<input className="input" type="checkbox"/>Cuenta de Ahorro
			<input className="submit" type="submit" value="Continuar"/>
      </div>
    )

  }

}
export default PayCommerce;